"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import "./animated-text-reveal.css";

type AnimatedTextRevealProps = {
  text: string;
  className?: string;
  ariaHidden?: boolean;
  threshold?: number;
  rootMargin?: string;
  staggerMs?: number;
  durationMs?: number;
};

export function AnimatedTextReveal({
  text,
  className = "",
  ariaHidden = false,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  staggerMs = 55,
  durationMs = 620,
}: AnimatedTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  const words = useMemo(() => text.trim().split(/\s+/).filter(Boolean), [text]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimatedRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const style = {
    ["--reveal-stagger" as string]: `${staggerMs}ms`,
    ["--reveal-duration" as string]: `${durationMs}ms`,
  } as CSSProperties;

  return (
    <span
      ref={elementRef}
      className={`animated-text-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
      aria-hidden={ariaHidden}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="word" style={{ ["--word-index" as string]: index }}>
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
