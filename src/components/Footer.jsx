import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-background text-primary font-label-mono text-label-mono uppercase border-t border-primary w-full"
    >
      {/* Contact section */}
      <div className="px-margin-mobile md:px-margin-page py-stack-xl border-b border-primary">
        <p className="text-secondary mb-6 reveal-on-scroll">/ GET IN TOUCH</p>

        <h2 className="font-headline-lg-mobile md:font-headline-lg text-[40px] md:text-[64px] leading-none font-bold tracking-tight mb-12 reveal-on-scroll">
          LET&apos;S CONNECT
        </h2>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-gutter border-t border-primary pt-8 reveal-on-scroll">
          <div className="flex flex-col gap-2">
            <span className="text-secondary text-[10px] tracking-widest mb-2">CONTACT</span>
            <a
              href="mailto:almirlozic5@gmail.com"
              className="text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-1 normal-case"
            >
              almirlozic5@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-secondary text-[10px] tracking-widest mb-2">SOCIALS</span>
            <div className="flex flex-row gap-6">
              {[
                { label: "INSTAGRAM", href: "https://www.instagram.com/almirlozic/" },
                { label: "LINKEDIN", href: "https://www.linkedin.com/in/almir-lozic-6ab989321/" },
                { label: "GITHUB", href: "https://github.com/Almirlozic" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors underline underline-offset-4 decoration-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-secondary text-[10px] tracking-widest mb-2">BASED IN</span>
              <span className="text-secondary">COPENHAGEN, DK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-margin-mobile md:px-margin-page py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="font-label-mono-bold text-label-mono-bold">©2026 ARCHIVE</div>
        <div className="text-secondary text-[10px] tracking-tighter opacity-50">
          BUILT WITH NEXT &amp; TAILWIND
        </div>
      </div>
    </footer>
  );
};

export default Footer;
