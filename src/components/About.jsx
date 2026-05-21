const About = () => {
  return (
    <section
      id="about"
      className="px-margin-mobile md:px-margin-page py-stack-xl grid grid-cols-1 md:grid-cols-12 gap-gutter border-t border-primary reveal-on-scroll"
    >
      <div className="md:col-span-4">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-stack-md leading-none">
          THE
          <br />
          MAKER
        </h2>
        <div className="asymmetric-border">
          <p className="font-label-mono-bold text-label-mono-bold uppercase mb-4">
            Status: Final Year
          </p>
          <p className="font-label-mono text-label-mono uppercase mb-8">@ Multimedia Design Uni</p>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-6">
        <div className="space-y-stack-md">
          <p className="font-body-regular text-xl md:text-2xl leading-relaxed">
            I build and engineer digital interfaces through code-based design systems rooted in{" "}
            <span className="font-label-mono italic uppercase inline-block hover:bg-primary hover:text-on-primary px-1 transition-colors">
              Brutalism
            </span>{" "}
            and functional{" "}
            <span className="font-label-mono italic uppercase inline-block hover:bg-primary hover:text-on-primary px-1 transition-colors">
              UI architecture
            </span>
            . My work focuses on scalable layouts, typographic systems, and precise implementation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="reveal-on-scroll">
              <h3 className="font-label-mono-bold text-label-mono-bold uppercase mb-4">
                Core Stack
              </h3>
              <ul className="font-label-mono text-label-mono space-y-2 uppercase">
                {[
                  "HTML / CSS",
                  "React / Next.js",
                  "Tailwind CSS",
                  "Framer Motion",
                  "JavaScript",
                ].map((item) => (
                  <li key={item} className="hover:pl-2 transition-all duration-300">
                    &gt; {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-on-scroll">
              <h3 className="font-label-mono-bold text-label-mono-bold uppercase mb-4">
                Design Tools
              </h3>
              <ul className="font-label-mono text-label-mono space-y-2 uppercase">
                {["Figma", "After Effects", "Adobe"].map((item) => (
                  <li key={item} className="hover:pl-2 transition-all duration-300">
                    &gt; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
