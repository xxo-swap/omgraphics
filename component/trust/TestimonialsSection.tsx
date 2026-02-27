"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rahul Mehta",
    company: "Packaging Corp",
    text: "Exceptional quality and reliable turnaround for all our CTP plate needs.",
  },
  {
    name: "Anita Sharma",
    company: "EventWorks",
    text: "Accurate color reproduction and outstanding service support.",
  },
];

const clients = [
  { name: "Packaging Corp" },
  { name: "EventWorks" },
  { name: "Elite Print House" },
  { name: "Global Offset Ltd." },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto relative bg-bg-dark py-28 overflow-hidden"
    >

      {/* Heading */}
      <div className="relative  px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What Our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
      </div>

      {/* Testimonials */}
      <div className="relative grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial  p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:border-primary/40 transition-all duration-300"
          >
            <p className="text-white/70 mb-6 leading-relaxed">
              {t.text}
            </p>

            <h4 className="text-white font-semibold">
              {t.name}
            </h4>

            <span className="text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.company}
            </span>
          </div>
        ))}
      </div>

      {/* Clients Grid */}
      <div className="relative mt-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="client-name py-6 border border-white/10 rounded-xl text-white/50 hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text transition-all duration-300"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}