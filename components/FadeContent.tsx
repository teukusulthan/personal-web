"use client";
import { ReactNode } from "react";
import { useFadeEffect } from "@/hooks/useFadeEffect";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const { ref, style } = useFadeEffect({
    blur,
    duration,
    easing,
    delay,
    threshold,
    initialOpacity,
    observe: "intersect",
  });

  return (
    <div ref={ref as any} className={className} style={style}>
      {children}
    </div>
  );
};

export default FadeContent;
