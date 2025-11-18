"use client";

import React, { useEffect, useRef, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  // If true, trigger the reveal immediately on mount instead of using IntersectionObserver
  triggerOnMount?: boolean;
  // Optional delay (ms) before revealing when triggerOnMount is true
  delay?: number;
};

export default function FadeIn({ children, className = "", triggerOnMount = false, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden with transition classes
    el.classList.add("opacity-0", "translate-y-6");
    el.classList.add("transition-all", "duration-700", "ease-out");

    if (triggerOnMount) {
      const t = setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
        el.classList.remove("opacity-0", "translate-y-6");
      }, delay);

      return () => clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [triggerOnMount, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
