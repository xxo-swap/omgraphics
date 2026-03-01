"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const vLine = useRef<HTMLDivElement>(null);
  const hLine = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ===============================
    // MASTER MOTION CONTROL
    // ===============================
    const SPEED = 0.1;

    const FOLLOW_EASE = "power3.out";
    const SNAP_EASE = "expo.out";

    // Smooth follow
    const xTo = gsap.quickTo(
      [vLine.current, pointerRef.current, coordsRef.current],
      "x",
      { duration: SPEED, ease: FOLLOW_EASE }
    );

    const yTo = gsap.quickTo(
      [hLine.current, pointerRef.current, coordsRef.current],
      "y",
      { duration: SPEED, ease: FOLLOW_EASE }
    );

    const updatePosition = (clientX: number, clientY: number) => {
      xTo(clientX);
      yTo(clientY);

      if (coordsRef.current) {
        coordsRef.current.innerText = `X: ${Math.round(
          clientX
        )} Y: ${Math.round(clientY)}`;
      }

      const isHovering = document.querySelector(
        '[data-is-hovering="true"]'
      );

      if (!isHovering) {
        gsap.set(".cursor-corner", { x: clientX, y: clientY });
      }
    };

    // -------------------------------
    // Mouse Move
    // -------------------------------
    const moveCursor = (e: MouseEvent) =>
      updatePosition(e.clientX, e.clientY);

    // -------------------------------
    // Touch Support
    // -------------------------------
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];

        gsap.to(containerRef.current, {
          opacity: 1,
          duration: SPEED * 0.5,
        });

        updatePosition(touch.clientX, touch.clientY);
      }
    };

    const handleTouchEnd = () => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: SPEED * 0.75,
      });
    };

    // -------------------------------
    // Hover Effect
    // -------------------------------
    const handleMouseOver = (e: MouseEvent | TouchEvent) => {
      const targetPoint = "touches" in e ? e.touches[0] : e;
      const targetElement = document.elementFromPoint(
        targetPoint.clientX,
        targetPoint.clientY
      );

      const target = (targetElement as HTMLElement)?.closest(
        '[data-cursor="print"]'
      );

      if (target) {
        target.setAttribute("data-is-hovering", "true");

        const rect = target.getBoundingClientRect();
        const armLength = 2;

        gsap.set(containerRef.current, {
          mixBlendMode: "normal",
        });

        // Pointer shrink
        gsap.to(pointerRef.current, {
          scale: 1.5,
          opacity: 0,
          duration: SPEED * 0.75,
        });

        // Show corners
        gsap.to(".cursor-corner", {
          opacity: 1,
          duration: SPEED * 0.5,
        });

        // Animate corners to box
        gsap.to(".corner-tl", {
          x: rect.left,
          y: rect.top,
          duration: SPEED,
          ease: SNAP_EASE,
        });

        gsap.to(".corner-tr", {
          x: rect.right - armLength,
          y: rect.top,
          duration: SPEED,
          ease: SNAP_EASE,
        });

        gsap.to(".corner-bl", {
          x: rect.left,
          y: rect.bottom - armLength,
          duration: SPEED,
          ease: SNAP_EASE,
        });

        gsap.to(".corner-br", {
          x: rect.right - armLength,
          y: rect.bottom - armLength,
          duration: SPEED,
          ease: SNAP_EASE,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        '[data-cursor="print"]'
      );

      if (target) {
        target.removeAttribute("data-is-hovering");

        gsap.set(containerRef.current, {
          mixBlendMode: "normal",
        });

        gsap.to(".cursor-corner", {
          opacity: 0,
          duration: SPEED * 0.75,
        });

        gsap.to(pointerRef.current, {
          scale: 1,
          opacity: 1,
          duration: SPEED * 0.75,
        });
      }
    };

    // -------------------------------
    // Event Listeners
    // -------------------------------
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    window.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    window.addEventListener("touchstart", handleTouchMove, {
      passive: false,
    });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden sm:opacity-100 opacity-0"
    >
      <div
        ref={coordsRef}
        className="absolute mt-4 ml-4 text-[8px] font-mono tracking-tighter opacity-40 whitespace-nowrap uppercase"
      >
        X: 0 Y: 0
      </div>

      <div
        ref={pointerRef}
        className="absolute -mt-1 -ml-1 w-2.5 h-2.5 border border-primary flex items-center justify-center"
      >
        <div className="w-[1px] h-[1px]" />
      </div>

      <div
        ref={vLine}
        className="absolute top-0 bottom-0 w-[1px] bg-primary/60"
      />
      <div
        ref={hLine}
        className="absolute left-0 right-0 h-[1px] bg-primary/60"
      />

      <div className="cursor-corner corner-tl absolute w-[2px] h-[2px] border-t-[4px] border-l-[4px] border-accent opacity-0 box-border" />
      <div className="cursor-corner corner-tr absolute w-[2px] h-[2px] border-t-[4px] border-r-[4px] border-accent opacity-0 box-border" />
      <div className="cursor-corner corner-bl absolute w-[2px] h-[2px] border-b-[4px] border-l-[4px] border-accent opacity-0 box-border" />
      <div className="cursor-corner corner-br absolute w-[2px] h-[2px] border-b-[4px] border-r-[4px] border-accent opacity-0 box-border" />
    </div>
  );
};

export default CustomCursor;

