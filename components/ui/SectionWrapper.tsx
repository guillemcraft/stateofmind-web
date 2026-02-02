"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "secondary" | "card";
}

export function SectionWrapper({
  id,
  children,
  className = "",
  background = "default",
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const backgroundStyles = {
    default: "bg-[#0a0a0a]",
    secondary: "bg-[#111111]",
    card: "bg-[#1a1a1a]",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-32 px-4 md:px-8 ${backgroundStyles[background]} ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
