"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}

export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  });
  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
