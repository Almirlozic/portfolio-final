"use client";

import { useEffect } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="w-full">
        <Hero />
        <About />
        <Work />
      </main>
    </>
  );
}
