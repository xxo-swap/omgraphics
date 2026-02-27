"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const PARTICLE_COUNT = 8;   // ← control number of circles
const FOLLOW_SPEED = 0.08;  // ← control smoothness (0.05 slow, 0.2 fast)

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = gsap.utils.toArray<HTMLDivElement>(".particle");

    // Track mouse relative to footer
    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      mouse.current.x =
        e.clientX - rect.left - rect.width / 2;

      mouse.current.y =
        e.clientY - rect.top - rect.height / 2;
    };

    window.addEventListener("mousemove", handleMove);

    // GSAP render loop
    const ticker = () => {
      // Smooth follow (lerp)
      pos.current.x += (mouse.current.x - pos.current.x) * FOLLOW_SPEED;
      pos.current.y += (mouse.current.y - pos.current.y) * FOLLOW_SPEED;

      // Move main glow
      gsap.set(coreRef.current, {
        x: pos.current.x,
        y: pos.current.y,
      });

      // Move particles around core
      particles.forEach((el, i) => {
        const spread = 90;
        const time = gsap.ticker.time;

        const offsetX = Math.sin(time + i) * spread;
        const offsetY = Math.cos(time + i) * spread;

        gsap.set(el, {
          x: pos.current.x + offsetX,
          y: pos.current.y + offsetY,
        });
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Main Core Circle */}
      <div
        ref={coreRef}
        className="absolute w-[500px] h-[500px] rounded-full bg-secondary blur-[140px] opacity-40"
      />

      {/* Orbiting Particles */}
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <div
          key={i}
          className="particle absolute w-[250px] h-[250px] rounded-full bg-secondary blur-[120px] opacity-30"
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;