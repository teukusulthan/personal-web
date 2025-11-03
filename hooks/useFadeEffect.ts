"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

type ObserveMode = "mount" | "intersect";

export function useFadeEffect({
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  observe = "intersect",
}: {
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  observe?: ObserveMode;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // gunakan ReturnType agar aman di browser/Node
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (observe === "mount") {
      timer = setTimeout(() => setInView(true), delay);
      return () => {
        if (timer) clearTimeout(timer); // <-- cleanup pasti void
      };
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.unobserve(el);
          timer = setTimeout(() => setInView(true), delay);
        }
      },
      { threshold }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [observe, threshold, delay]);

  const style: CSSProperties = {
    opacity: inView ? 1 : initialOpacity,
    transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
    filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
  };

  return { ref, style, inView };
}
