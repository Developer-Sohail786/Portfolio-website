import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative border-t border-white/20 px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1470px]">
        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          {/* Identity */}
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Portfolio / 2026
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
              Sohail<span className="text-blue-200">.</span>
            </h3>

            <p className="mt-3 max-w-sm font-mono text-xs leading-6 text-white/45">
              Full-Stack Developer focused on modern web applications, backend
              engineering, and AI-powered products.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Email
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sanu30963@gmail.com"
              target="_blank"
              className="group mt-3 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-blue-200"
            >
              sanu30963@gmail.com
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Social links */}
          <div className="md:col-span-3 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Elsewhere
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5 md:justify-end">
              {/* GitHub */}
              <a
                href="https://github.com/Developer-Sohail786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/60 transition-all hover:scale-110 hover:text-white"
              >
                <FaGithub size={25} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sohailkhan-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 transition-all hover:scale-110 hover:text-white"
              >
                <FaLinkedin size={25} />
              </a>

              {/* X */}
              <a
                href="https://x.com/DevSohail786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-white/60 transition-all hover:scale-110 hover:text-white"
              >
                <FaXTwitter size={24} />
              </a>

              {/* Phone */}
              <a
                href="tel:+919531023320"
                aria-label="Phone"
                className="text-white/60 transition-all hover:scale-110 hover:text-white"
              >
                <FaPhone size={22} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919531023320"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/60 transition-all hover:scale-110 hover:text-white"
              >
                <FaWhatsapp size={25} />
              </a>

              <a
                href="/resume/Sohail_Khan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Resume"
                className="inline-flex items-center justify-center border border-white/50 bg-white/[0.04] px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#174ea6]"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Sohail. All rights reserved.</span>

          <span>Built with Next.js · TypeScript</span>

          <a href="#" className="transition-colors hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
