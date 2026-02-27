"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand project scope, material and print goals.",
  },
  {
    number: "02",
    title: "Prepress Setup",
    description: "File preparation, color calibration and plate imaging.",
  },
  {
    number: "03",
    title: "Plate Production",
    description: "High-precision CTP plate output and inspection.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Secure packaging and timely dispatch.",
  },
];

export function OurMethods() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-dark max-w-[1440px] mx-auto py-28 overflow-hidden"
    >
      
      {/* Heading */}
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Method
          </span>
        </h2>

        <p className="text-white/60 mt-4">
          Structured workflow ensuring accuracy and efficiency at every stage.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="method-step p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/40 transition-all duration-500"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {step.number}
            </span>

            <h3 className="text-xl font-semibold text-white mt-4">
              {step.title}
            </h3>

            <p className="text-white/60 mt-2 text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}