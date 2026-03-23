"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type ScrollFadeInOnViewProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
  durationMs?: number;
  offsetY?: number;
};

export function ScrollFadeInOnView({
  children,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  delayMs = 0,
  durationMs = 600,
  offsetY = 24,
}: ScrollFadeInOnViewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : `translateY(${offsetY}px)`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${durationMs}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delayMs}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={elementRef} className={className} style={style}>
      {children}
    </Tag>
  );
}
