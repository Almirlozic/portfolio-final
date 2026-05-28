"use client";

import { useEffect, useRef, useState } from "react";

const IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=80",
    alt: "Geometric concrete architecture with dramatic shadows",
    caption: "GEOMETRY",
    index: "01",
    label: "/ VISUAL ARCHIVE",
    headline: ["SELECTED", "FRAMES"],
    accentWord: "FRAMES",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc scelerisque cras et integer enim amet ut nisi feugiat.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1545259742-56e6f7fbc4a2?w=900&auto=format&fit=crop&q=80",
    alt: "Abstract architectural facade with repeating grid",
    caption: "REPETITION",
    index: "02",
    label: "/ PATTERN STUDY",
    headline: ["ORDER IN", "CHAOS"],
    accentWord: "CHAOS",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&auto=format&fit=crop&q=80",
    alt: "Minimalist building with clean horizontal lines",
    caption: "STRUCTURE",
    index: "03",
    label: "/ BUILT FORM",
    headline: ["LESS IS", "MORE"],
    accentWord: "MORE",
    bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&auto=format&fit=crop&q=80",
    alt: "Urban light study through glass and steel",
    caption: "MATERIAL",
    index: "04",
    label: "/ SURFACE & LIGHT",
    headline: ["RAW", "MATTER"],
    accentWord: "MATTER",
    bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900&auto=format&fit=crop&q=80",
    alt: "Abstract form study in monochrome",
    caption: "FORM",
    index: "05",
    label: "/ PURE FORM",
    headline: ["SHAPE", "LANGUAGE"],
    accentWord: "LANGUAGE",
    bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

const EXIT_MS = 220;

const GallerySection = () => {
  const galleryRef = useRef(null);
  const itemRefs = useRef([]);

  // activeIndex = which slide is in view; visibleIndex = what text is rendered
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Swap left-column text with exit → enter animation
  useEffect(() => {
    if (activeIndex === visibleIndex) return;

    setExiting(true);
    const t = setTimeout(() => {
      setVisibleIndex(activeIndex);
      setExiting(false);
    }, EXIT_MS);

    return () => clearTimeout(t);
  }, [activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // IntersectionObserver: detect which gallery item is centred
  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.indexOf(entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: galleryRef.current, threshold: 0.5 },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = IMAGES[visibleIndex];

  const textStyle = {
    transition: `opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease`,
    opacity: exiting ? 0 : 1,
    transform: exiting ? "translateY(14px)" : "translateY(0)",
  };

  return (
    <section id="gallery" className="border-t border-primary overflow-hidden" aria-label="Portfolio gallery">
      <div className="flex flex-col md:flex-row md:h-screen">

        {/* ── Left: text that swaps per image ── */}
        <aside
          className="
            md:w-1/2 shrink-0
            flex flex-col justify-center
            px-margin-mobile md:px-margin-page
            py-16 md:py-0
            border-b md:border-b-0 md:border-r border-primary
          "
          aria-label="Gallery introduction"
          aria-live="polite"
        >
          {/* Label */}
          <p
            className="font-label-mono text-label-mono uppercase text-secondary mb-6"
            style={textStyle}
          >
            {current.label}
          </p>

          {/* Headline */}
          <h2
            className="
              font-headline-lg text-headline-lg-mobile md:text-[56px] leading-none
              uppercase font-bold tracking-tight mb-8
              [text-shadow:1px_2px_0_rgba(0,0,0,0.06)]
            "
            style={textStyle}
          >
            {current.headline[0]}
            <br />
            <span>{current.headline[1]}</span>
          </h2>

          {/* Bio */}
          <p
            className="font-body-regular text-body-regular text-secondary normal-case max-w-[38ch] mb-10 leading-relaxed"
            style={textStyle}
          >
            {current.bio}
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-4" style={textStyle}>
            <a
              href="#work"
              className="
                inline-flex items-center gap-3 w-fit
                border border-primary px-8 py-4
                font-label-mono-bold text-[11px] tracking-widest uppercase
                transition-all duration-300
                hover:bg-primary hover:text-on-primary hover:scale-[1.03]
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline
                cursor-pointer
              "
              aria-label="View all projects"
            >
              VIEW PROJECTS
              <ArrowIcon />
            </a>

            {/* Dot progress */}
            <div className="flex items-center gap-2 mt-1" aria-hidden="true">
              {IMAGES.map((_, i) => (
                <span
                  key={i}
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "20px" : "6px",
                    height: "6px",
                    background: i === activeIndex ? "#000000" : "#5d5f5f",
                    opacity: i === activeIndex ? 1 : 0.3,
                  }}
                />
              ))}
              <span className="font-label-mono text-[10px] tracking-widest text-secondary opacity-60 ml-2">
                {IMAGES[activeIndex].index}&nbsp;/&nbsp;{String(IMAGES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </aside>

        {/* ── Right: independent scroll gallery ── */}
        <div
          ref={galleryRef}
          className="
            md:w-1/2
            h-[72vh] md:h-full
            overflow-y-auto overflow-x-hidden
            snap-y snap-mandatory
            no-scrollbar
          "
          role="region"
          aria-label="Scrollable image gallery"
          tabIndex={0}
          style={{ scrollBehavior: "smooth" }}
        >
          {IMAGES.map((img, i) => (
            <article
              key={img.id}
              ref={(el) => (itemRefs.current[i] = el)}
              className="h-full snap-start flex items-center justify-center px-8 py-10"
              aria-label={`Image ${img.index}: ${img.caption}`}
            >
              <div className="relative w-full max-w-sm group">
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={900}
                    height={1125}
                    className="
                      w-full aspect-4/5 object-cover
                      grayscale group-hover:grayscale-0
                      transition-[filter] duration-300
                      cursor-pointer
                    "
                  />

                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0, 0, 0, 0.08)" }}
                  />

                  <button
                    className="
                      absolute top-3 right-3
                      w-11 h-11 flex items-center justify-center
                      bg-background/90 border border-primary
                      opacity-0 group-hover:opacity-100
                      translate-y-2 group-hover:translate-y-0
                      transition-all duration-300
                      hover:bg-primary hover:text-on-primary
                      cursor-pointer
                    "
                    aria-label={`Share ${img.caption} image`}
                  >
                    <ShareIcon />
                  </button>
                </div>

                <div className="flex justify-between items-center mt-4 font-label-mono text-label-mono uppercase">
                  <span className="text-secondary tracking-widest">{img.caption}</span>
                  <span className="text-secondary opacity-40">
                    {img.index}&nbsp;/&nbsp;{String(IMAGES.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
