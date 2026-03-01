"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const BorderDrawCursor = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SPEED = 0.4;
    const EASE = "power3.out";

    let activeTarget: HTMLElement | null = null;

    const showBorder = (target: HTMLElement) => {
      const rect = target.getBoundingClientRect();
      activeTarget = target;

      gsap.set(overlayRef.current, {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        opacity: 1,
        pointerEvents: "none",
      });

      const perimeter = 2 * (rect.width + rect.height);

      gsap.set(overlayRef.current, {
        borderWidth: 2,
      });

      // Simulated draw animation using clipPath
      gsap.fromTo(
        overlayRef.current,
        {
          clipPath: "inset(0 100% 100% 0)",
        },
        {
          clipPath: "inset(0 0% 0% 0)",
          duration: SPEED,
          ease: EASE,
        }
      );
    };

    const hideBorder = () => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: SPEED * 0.6,
        ease: EASE,
      });

      activeTarget = null;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        '[data-cursor="outline"]'
      ) as HTMLElement | null;

      if (target) {
        showBorder(target);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        '[data-cursor="outline"]'
      );

      if (target) {
        hideBorder();
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <div
        ref={overlayRef}
        className="absolute border border-accent opacity-0"
      />
    </div>
  );
};

export default BorderDrawCursor;