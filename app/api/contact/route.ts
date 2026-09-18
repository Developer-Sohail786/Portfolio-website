import { NextResponse } from "next/server";
import { Resend } from "resend";

// import ContactConfirmationEmail from "@/components/emails/contact-confirmation";
import { contactRateLimit } from "@/lib/ratelimit";
import { contactSchema } from "@/lib/validations/contact";
import ContactConfirmationEmail from "@/components/email/contact-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    /* --------------------------------
       Environment validation
    -------------------------------- */

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        { status: 500 },
      );
    }

    if (
      !process.env.UPSTASH_REDIS_REST_URL ||
      !process.env.UPSTASH_REDIS_REST_TOKEN
    ) {
      console.error("Upstash Redis is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Rate limiting service is not configured.",
        },
        { status: 500 },
      );
    }

    /* --------------------------------
       Rate limiting
    -------------------------------- */

    const ip = getClientIp(request);

    const { success, remaining, reset } =
      await contactRateLimit.limit(ip);

    if (!success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((reset - Date.now()) / 1000),
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Too many messages. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": retryAfter.toString(),
          },
        },
      );
    }

    /* --------------------------------
       Parse request
    -------------------------------- */

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body.",
        },
        { status: 400 },
      );
    }

    /* --------------------------------
       Validate request
    -------------------------------- */

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (typeof field === "string" && !errors[field]) {
          errors[field] = issue.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Please fix the validation errors.",
          errors,
        },
        { status: 400 },
      );
    }

    const { name, email, message } = result.data;

    /* --------------------------------
       Send notification to Sohail
    -------------------------------- */

    const notification = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `
New message received through your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (notification.error) {
      console.error(
        "Notification email error:",
        notification.error,
      );

      return NextResponse.json(
        {
          success: false,
          message: "Failed to deliver your message.",
        },
        { status: 500 },
      );
    }

    /* --------------------------------
       Send confirmation to sender
    -------------------------------- */

    const confirmation = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for reaching out",
      react: ContactConfirmationEmail({
        name,
        message,
      }),
    });

    /*
      The message has already reached Sohail.
      Therefore a confirmation failure shouldn't
      make the entire submission look like a failure.
    */

    if (confirmation.error) {
      console.error(
        "Confirmation email error:",
        confirmation.error,
      );
    }

    /* --------------------------------
       Success
    -------------------------------- */

  return NextResponse.json(
  {
    success: true,
    message: "Message sent successfully.",
  },
  { status: 200 },
);
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}