"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="min-h-[80vh] px-margin-mobile md:px-margin-page py-stack-md flex flex-col justify-end relative">
        <div className="absolute top-margin-page right-margin-page text-right md:w-1/3 reveal-on-scroll">
          <p className="font-label-mono text-label-mono uppercase mb-2">/ 2026</p>
          <p className="font-label-mono text-label-mono uppercase">
            [MULTIMEDIA DESIGNER &amp; FRONT-END DEVELOPER]
          </p>
        </div>

        <div className="relative">
          <div className="text-mask">
            <span
              className="font-label-mono text-label-mono uppercase block mb-4"
              style={{ animation: "var(--animate-reveal-delayed)", opacity: 0 }}
            >
              (AL)
            </span>
          </div>
          <div className="text-mask">
            <h1
              className="font-headline-xxl text-[64px] md:text-headline-xxl leading-none uppercase -ml-2 md:-ml-2"
              style={{ animation: "var(--animate-reveal)", opacity: 0 }}
            >
              PORTFOLIO
            </h1>
          </div>
        </div>

        <div className="mt-stack-md flex justify-between items-end reveal-on-scroll">
          <div className="max-w-xs">
            <p className="font-body-regular text-secondary">
              Experimental interfaces. Visual narratives. Functional code.
            </p>
          </div>
          <button
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <span className="font-label-mono text-label-mono uppercase mb-4 transition-transform group-hover:-translate-y-1">
              Scroll
            </span>
            <div className="w-px h-12 bg-primary origin-top transition-transform group-hover:scale-y-150" />
          </button>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-page py-stack-xl overflow-x-auto no-scrollbar reveal-on-scroll">
        <div className="flex flex-nowrap md:grid md:grid-cols-12 gap-4 md:gap-8 items-center min-w-max md:min-w-full">
          <motion.div
            className="flex-none w-48 h-64 md:w-full md:col-span-2 border border-primary overflow-hidden hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAvj5u6wmlDzqA-7CDfYJzwRZF0eq0PrmnQvjoqQJpNDoTcZsSGIT30JUF3rMjypSeynFbXhPFf_zPrbPn-sxYgW-jTsU7DRLzJsLdUW0jm9TMPpjPk9E3keTXjZ_9RSYnjdZWypa5Yc3wHOfBxyX5G5kkD4xzlZbDU7j86EVVJYfAyxCIjeGis0tgosbcJxEOAslDDzmscjAqlHaIvSoprQ5SNQcLWP23TJ30z2RhMbkidh8KizA3simiPTA8GYczGvjfbKl9oxw"
              alt="Brutalist architectural detail"
            />
          </motion.div>
          <motion.div
            className="flex-none w-[320px] h-100 md:w-full md:h-125 md:col-span-4 border border-primary relative group overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2dBiAydtL_FXamBgdWLL7HdIplfjl53M-rgq5bp38ES_jK6RLJ_ZFlZOwLY87y0Sq5fDfvEkxZL6a3ZQNCDnBEYlTVmPIDY0c5pxH92vC-EWBYdWPdkur2XbtmXbHBwHsEWgc_eYEtIRlVGWy4K3dVKk2xhaFO5CM781wn23kctL6Y-nJfKYda8Nw6BujRSkjzcm182ZYdAXukJTJ9927FYI-Kj1aiwBXaUrda0CFMcif20b_ueeqc88IsfVXNl5FBQj7tT-Zujo"
              alt="Abstract fluid shapes"
            />
            <div className="absolute top-4 left-4 font-label-mono text-label-mono bg-background px-2 py-1 border border-primary z-10">
              (01) ARCHIVE_STUDIO
            </div>
          </motion.div>
          <motion.div
            className="flex-none w-64 h-80 md:w-full md:col-span-3 border border-primary grayscale overflow-hidden hover:grayscale-0 transition-all duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJUGMKt0aSXqnPrsMKT3fEBkz8XGSGs9tuN5Y5dcnu8jk3b_RVJV41FXgus2-xVzCl4qZZ0UcERox55wo-sW_yDP1emgJyiXwkcnL0KICplXoOwcU9xsFpH5DcxEiWxEu0lEjW11E1pSA4ewY3HfKr4xzDumEKojhqIVddS02f5yar6tgudOAM6ahTa43SjZEkdeVYDNVwfFy2CZ7YYTlFLemoYYok5769ZQNKJaeiQsmrhr7WcEQVj-f5foY8t4YWA-TjeckOicg"
              alt="Minimalist studio portrait"
            />
          </motion.div>
          <div className="flex-none w-48 h-48 md:w-full md:col-span-2 border border-primary p-4 flex flex-col justify-between hover:bg-primary hover:text-on-primary transition-colors cursor-pointer group">
            <span className="font-label-mono text-label-mono uppercase group-hover:translate-x-2 transition-transform">
              ( EXPLORE )
            </span>
            <span className="font-label-mono text-label-mono uppercase text-right">FF24</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
