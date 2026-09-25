import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactConfirmationEmailProps {
  name: string;
  message: string;
}

export default function ContactConfirmationEmail({
  name,
  message,
}: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>
        Thanks for reaching out to Sohail — your message has been received.
      </Preview>

      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                blueprint: "#174ea6",
              },
            },
          },
        }}
      >
        <Body className="m-0 bg-[#174ea6] p-0 font-mono">
          <Container
            className="mx-auto my-8 max-w-[680px] overflow-hidden border border-white/60 bg-[#174ea6]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          >
            {/*
                Header metadata*/}
            <Section className="px-7 py-6 sm:px-10">
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td>
                      <Text className="m-0 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                        SOHAIL
                      </Text>

                      <Text className="m-0 mt-1 text-[9px] uppercase tracking-[0.16em] text-blue-200">
                        FULL STACK DEVELOPER
                      </Text>
                    </td>

                    <td align="right">
                      <Text className="m-0 text-[9px] uppercase tracking-[0.18em] text-white/70">
                        PORTFOLIO / 2026
                      </Text>

                      <Text className="m-0 mt-1 text-[9px] uppercase tracking-[0.18em] text-white/50">
                        MESSAGE RECEIVED
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/*  Main header*/}
            <Section className="border-y border-white/20 px-7 py-12 text-center sm:px-10 sm:py-14">
              <Text className="m-0 text-[10px] uppercase tracking-[0.3em] text-blue-200">
                — MESSAGE RECEIVED —
              </Text>

              <Text className="m-0 mt-5 text-[52px] font-semibold leading-none tracking-[-0.05em] text-white sm:text-[64px]">
                Thank you!
              </Text>

              <Text className="m-0 mt-4 text-[11px] uppercase tracking-[0.24em] text-blue-100">
                FOR GETTING IN TOUCH
              </Text>

              {/* Blueprint illustration */}
              <Section className="mt-10">
                <div
                  className="mx-auto max-w-[500px]"
                  style={{ height: "90px" }}
                >
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ height: "90px" }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            height: "90px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.65)",
                            borderTop:
                              "1px solid rgba(255,255,255,0.25)",
                          }}
                        />
                      </tr>
                    </tbody>
                  </table>

                  <Text className="m-0 mt-2 text-[8px] uppercase tracking-[0.2em] text-white/40">
                    COMMUNICATION CHANNEL / 01
                  </Text>
                </div>
              </Section>
            </Section>

            {/* Message content */}
            <Section className="px-7 py-10 sm:px-12 sm:py-12">
              {/* Greeting */}
              <Text className="m-0 text-[18px] text-blue-100">
                Hi {name},
              </Text>

              {/* Greeting / confirmation */}
              <Text className="m-0 mt-6 text-[13px] leading-7 text-white">
                Thanks for reaching out through my portfolio.
              </Text>

              <Text className="m-0 mt-3 text-[13px] leading-7 text-white/85">
                I&apos;ve successfully received your message and will get back
                to you as soon as possible.
              </Text>

              <Text className="m-0 mt-3 text-[13px] leading-7 text-white/85">
                I appreciate you taking the time to connect.
              </Text>

              {/* Sender's message*/}
              <Section className="mt-8 border border-white/50 bg-white/[0.04]">
                {/* Message header */}
                <Section className="border-b border-white/25 px-5 py-3">
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <Text className="m-0 text-[9px] uppercase tracking-[0.2em] text-blue-200">
                            YOUR MESSAGE
                          </Text>
                        </td>

                        <td align="right">
                          <Text className="m-0 text-[9px] uppercase tracking-[0.2em] text-white/50">
                            01
                          </Text>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Section>

                {/* Actual message */}
                <Section className="px-6 py-6">
                  <Text className="m-0 break-words text-[13px] leading-7 text-white/90">
                    <span className="text-[26px] text-blue-200">
                      &ldquo;
                    </span>{" "}
                    {message}{" "}
                    <span className="text-[26px] text-blue-200">
                      &rdquo;
                    </span>
                  </Text>
                </Section>
              </Section>
            </Section>

            {/*Footer*/}
            <Section className="border-t border-white/25">
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="px-5 py-5 sm:px-8">
                      <Text className="m-0 text-[8px] uppercase tracking-[0.16em] text-white/70">
                        <span className="text-green-300">●</span> OPEN TO
                        COLLABORATION
                      </Text>
                    </td>

                    <td align="right" className="px-5 py-5 sm:px-8">
                      <Text className="m-0 text-[8px] uppercase tracking-[0.16em] text-white/60">
                        SOHAIL / 2026
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}