"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Settings,
  Printer,
  Layers,
  Gauge,
  Wrench,
  Palette,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "CTP Plate Processing",
    description:
      "High-precision computer-to-plate imaging with advanced calibration systems.",
    icon: Printer,
  },
  {
    title: "Prepress & Color Calibration",
    description:
      "Controlled color workflows ensuring consistent reproduction accuracy.",
    icon: Palette,
  },
  {
    title: "Custom Plate Sizes",
    description:
      "Flexible formats engineered to match diverse press configurations.",
    icon: Layers,
  },
  {
    title: "High-Speed Output",
    description:
      "Optimized imaging systems delivering rapid production turnaround.",
    icon: Gauge,
  },
  {
    title: "Technical Support",
    description:
      "Dedicated workflow consultation and troubleshooting assistance.",
    icon: Wrench,
  },
  {
    title: "Design Consultation",
    description:
      "Professional imposition planning and layout engineering support.",
    icon: Settings,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-bg-dark max-w-[1440px] mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Enterprise{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Printing Solutions
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Precision-driven CTP and prepress services engineered for
            industrial-grade performance and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card relative p-10 rounded-2xl overflow-hidden bg-[#1f1f1f] border border-white/5 hover:border-primary/50 transition-all duration-300 will-change-transform"
              >
                {/* Accent Strip */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-primary to-secondary" />

                <div className="ml-6">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-white mb-8">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}