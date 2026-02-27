"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { recentWorks } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export function RecentWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;


  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-dark py-28 overflow-hidden max-w-[1440px] mx-auto"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Recent Work
            </span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            A selection of high-quality print and packaging projects delivered
            with precision.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentWorks.map((item) => (
            <Link
              href={`/portfolio/${item.slug}`}
              key={item.slug}
              data-cursor="print"
              className="work-card group relative overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 block"
            >
              <div className="relative h-64">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-center px-4">
                <div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-2 capitalize">
                    {item.category.replaceAll("-", " ")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}