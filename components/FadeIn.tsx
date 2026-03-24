"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;        // ms before animation starts
  duration?: number;     // ms for the animation
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;     // px to travel
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  distance = 28,
  className = "",
  style,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial: Record<string, string> = {
    up:    `translateY(${distance}px)`,
    down:  `translateY(-${distance}px)`,
    left:  `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none:  "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity:   visible ? 1 : 0,
        transform: visible ? "none" : initial[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms,
                     transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
