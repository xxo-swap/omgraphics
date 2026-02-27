"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", { y: 60, opacity: 0, duration: 1 })
        .from(".hero-description", { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-buttons", { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-image", { x: 100, opacity: 0, duration: 1 }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative max-w-[1440px] mx-auto min-h-screen overflow-hidden bg-bg-dark"
    >
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="bg-bg-dark flex flex-col justify-between p-12 md:p-20 text-white">
          
          <div>
            <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight text-[#cfc3dc]">
              20+ Years of Industrial Printing Experience.
            </h1>

            <p className="hero-description mt-6 max-w-lg text-[#bfb6c9]">
              From packaging and labels to commercial marketing materials,
              we deliver consistent quality, bulk capacity, and on-time production.
            </p>

            <div className="hero-buttons mt-8">
              <Link
                data-cursor="print"
                href="/contact"
                className="px-6 py-3 border border-secondary text-sm font-semibold"
              >
                See Our Recent Work
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#cfc3dc]">
              5000+ Completed Projects and Counting
            </h2>

            <div className="mt-6">
              <Link
                href="/projects"
                className="px-6 py-3 bg-secondary text-black text-sm font-semibold rounded-sm"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image relative">
          <Image
            src="/images/ctp/4.png"   // place your real printer image here
            alt="Industrial Printer"
            fill
            className="object-cover object-[25%_50%] scale-x-[-1]"
            priority
          />
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="absolute bottom-0 left-0 w-full bg-bg-dark py-6 overflow-hidden">
        <div className="flex gap-8 px-10">
          <Image
            src="/images/ctp/1.png"
            alt=""
            width={300}
            height={120}
            className="object-cover"
          />
          <Image
            src="/images/ctp/2.png"
            alt=""
            width={300}
            height={120}
            className="object-cover"
          />
          <Image
            src="/images/ctp/3.png"
            alt=""
            width={300}
            height={120}
            className="object-cover"
          />
          <Image
            src="/images/ctp/4.png"
            alt=""
            width={300}
            height={120}
            className="object-cover"
          />
          <Image
            src="/images/ctp/5.png"
            alt=""
            width={300}
            height={120}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;