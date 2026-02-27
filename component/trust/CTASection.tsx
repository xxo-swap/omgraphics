"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-[1440px] mx-auto py-32 overflow-hidden bg-bg-dark"
    >
      <div className="cta-content relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          Ready to Elevate Your{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Print Quality?
          </span>
        </h2>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
          Partner with a trusted CTP plate specialist delivering precision,
          consistency, and fast turnaround for every project.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          
          {/* Primary Button */}
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-black font-semibold rounded-md hover:opacity-90 transition-opacity duration-300"
          >
            Request a Quote
          </Link>

          {/* Secondary Button */}
          <Link
          data-cursor="print"
            href="/services"
            className="px-8 py-4 text-white border border-secondary  hover:text-white transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}