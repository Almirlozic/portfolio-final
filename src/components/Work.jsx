const projects = [
  {
    id: 1,
    title: "VOID INDEX",
    category: "E-COMMERCE / NEXT.JS",
    offset: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYRNGaY0wpLUmsyV0yWcsRt8sDhv2tGo-0uNESEJxUIA8mDIyqC60ghz8vB0h2NI8wmnkZ7s4zgaDJKco0uuON5qq_5hPVA_ZH5hOysp_72U49HfootL_a07U9PogjXIQDJKu0XLzNGufRfpqYA6blBsRSZt3xzKllmg3zCa7zPQ9u8O_frxJ9xA4r_GTokt4grdO3WJRpvlwfFA-CpeLGTbogpBhoRtGvcNdrzu39bCotxiq4KY9YiGjc0LoLSlbnYp2rqWeebqM",
    imgClass: "grayscale filter brightness-90 group-hover:scale-110 group-hover:brightness-100",
  },
  {
    id: 2,
    title: "SYNTH ARCHIVE",
    category: "CREATIVE CODING / THREE.JS",
    offset: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArOH1BQRAw4x3wwuZZCXXTIBsNjoQ8kbN1It7ayZgFMijMODET8Z2qSoJX5AD-n9grEqqZfZE7jGmhC5hKZpfSnipXr9uP9zLzO_vcQAFxIYqaM27bvBIVzi7yD3MmZaXYGIscQsJfJFZL_lgT4cPcqWvvqp9ophaQ-auw6Rpk42Q5NKh2VndwIWwpKFHZxv4mXzGO9y2QD7THgzWd9jyasPN5yrlbjmx22sFKMWpAPVNyqERkW77aZCB7m67tdiYBLzDqV9EXvSg",
    imgClass: "grayscale group-hover:invert group-hover:scale-110",
  },
  {
    id: 3,
    title: "KINETIC UI",
    category: "DESIGN SYSTEM / REACT",
    offset: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjskoLYDoZflThXMaip0cKii14I2QFZ9sMixG0JA7JFVNLaw-HsnPKACxAebcCaPw_VDpGKHr7aiaN8ihYIGBByAs-th3B3sobqi6Csn1A8FlKEOAbiPBqsfN0B6tm8KM9-LI8PsSOuLJKkHAr4pjRaCR1Sa1FoOZYf3BpS3S5lfc0CErZziV3uhq5iILV2YiBnNTjKKejedyb37gAyGeYO6Pp-poIimqhJsP5v2YWd3LdQABTCcGkhmEve13EnO1oAEI-2SLzLYY",
    imgClass: "grayscale group-hover:grayscale-0 group-hover:scale-110",
  },
  {
    id: 4,
    title: "EDITOR GEN",
    category: "WEB APP / TYPESCRIPT",
    offset: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKo21v39_jWlJX2CQAKsfdTFzxFw7MfGv0C21KsmBy-uZSpmXQGcAQ12DTUMkwNRR9_wtEu54xv_cGFBAZ6YrltTeuchwupy57RBm8lFBpmVMFLIGcoisgWEVekH4i9Lo-p7oCVDAUSwAkMx4Zr3s2rMelYBkWMMDyJKBmZ3GAbu2Z54FCr5DiUus6kzCdBwgNN6-E9f783KD-TiTZWefZeNu8_O1C7dLRl2mBAfZwemNkBviQ8f7I9xhHEk8jQ5Q9fCXhltuO-fQ",
    imgClass: "grayscale group-hover:brightness-125 group-hover:scale-110",
  },
];

const Work = () => {
  return (
    <>
      <section
        id="work"
        className="px-margin-mobile md:px-margin-page py-stack-xl border-t border-primary"
      >
        <div className="flex justify-between items-baseline mb-stack-md reveal-on-scroll">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase leading-none">
            SELECTED
            <br />
            WORKS
          </h2>
          <span className="font-label-mono text-label-mono uppercase">( 04 TOTAL )</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`reveal-on-scroll group border border-primary p-4 transition-all duration-500 hover:bg-primary hover:text-on-primary cursor-crosshair${
                project.offset ? " md:mt-24" : ""
              }`}
            >
              <div className="aspect-4/3 overflow-hidden mb-6 relative">
                <img
                  className={`w-full h-full object-cover transition-all duration-700 ${project.imgClass}`}
                  src={project.img}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-3xl md:text-4xl uppercase mb-2">
                    {project.title}
                  </h3>
                  <p className="font-label-mono text-label-mono uppercase opacity-70">
                    ( {project.category} )
                  </p>
                </div>
                <span className="text-4xl leading-none transform group-hover:rotate-45 transition-transform duration-500">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*       <section
        id="contact"
        className="px-margin-mobile md:px-margin-page py-stack-xl bg-primary text-on-primary overflow-hidden"
      >
        <div className="max-w-4xl reveal-on-scroll">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-8 leading-tight">
            LET&apos;S
            <br />
            BUILD.
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-end">
            <div className="grow w-full group">
              <label className="font-label-mono text-label-mono uppercase mb-2 block transition-transform group-focus-within:-translate-y-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="HELLO@YOURDOMAIN.COM"
                className="w-full bg-transparent border-b border-on-primary py-4 font-label-mono uppercase placeholder:text-secondary-fixed-dim focus:outline-none transition-all rounded-none px-0"
              />
            </div>
            <button className="w-full md:w-auto border border-on-primary px-12 py-4 font-label-mono uppercase hover:bg-on-primary hover:text-primary transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">SEND</span>
              <div className="absolute inset-0 bg-on-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Work;
