// components/Badge.tsx
"use client";

import React from "react";

type BadgeProps = {
  text: string;
  color?: "primary" | "secondary" | "accent" | "gradient";
  className?: string;
};

const colorMap: Record<string, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-bg-dark",
  accent: "bg-accent text-bg-dark",
  gradient: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
};

const Badge: React.FC<BadgeProps> = ({ text, color = "primary", className }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-label font-semibold  ${colorMap[color]} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;