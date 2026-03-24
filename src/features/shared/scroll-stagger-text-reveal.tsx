"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ScrollStaggerTextRevealProps = {
  text: string;
  className?: string;
  startViewportRatio?: number;
  endViewportRatio?: number;
  /** Multiplies scroll distance needed for full reveal (>1 = slower). Default 1.2. */
  scrollStretch?: number;
  maxBlurPx?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollStaggerTextReveal({
  text,
  className = "",
  startViewportRatio = 0.9,
  endViewportRatio = 0.25,
  scrollStretch = 1.2,
  maxBlurPx = 6,
}: ScrollStaggerTextRevealProps) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  const lines = useMemo(() => text.split("\n"), [text]);
  const wordsByLine = useMemo(() => lines.map((line) => line.trim().split(/\s+/).filter(Boolean)), [lines]);
  const totalWords = useMemo(() => wordsByLine.reduce((sum, words) => sum + words.length, 0), [wordsByLine]);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * startViewportRatio;
      const end = viewportHeight * endViewportRatio;
      const span = Math.max((start - end) * scrollStretch, 1);
      const nextProgress = clamp((start - rect.top) / span, 0, 1);
      setProgress(nextProgress);
    };

    const onScrollOrResize = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [startViewportRatio, endViewportRatio, scrollStretch]);

  // Precompute stable global indices per word (no mutation during render).
  const globalWordIndexByLine = useMemo(() => {
    let idx = 0;
    return wordsByLine.map((words) => words.map(() => idx++));
  }, [wordsByLine]);

  return (
    <span ref={ref} className={className}>
      {wordsByLine.map((words, lineIdx) => (
        <span key={`line-${lineIdx}`}>
          {words.map((word, wordIdx) => {
            const globalWordIndex = globalWordIndexByLine[lineIdx][wordIdx];
            const revealStart = totalWords === 0 ? 0 : globalWordIndex / totalWords;
            const revealEnd = totalWords === 0 ? 1 : (globalWordIndex + 1) / totalWords;
            const wordProgress = clamp((progress - revealStart) / (revealEnd - revealStart), 0, 1);
            const blurPx = (1 - wordProgress) * maxBlurPx;
            const isRevealed = wordProgress >= 0.5;

            return (
              <span
                key={`${lineIdx}-${wordIdx}`}
                className={`inline-block transition-[opacity,filter,transform,color] duration-300 ease-out ${isRevealed ? "text-text-main-900" : "text-text-sub-500"}`}
                style={{
                  opacity: 0.28 + wordProgress * 0.72,
                  filter: `blur(${blurPx}px)`,
                  transform: `translateY(${(1 - wordProgress) * 6}px)`,
                }}
              >
                {word}
                {wordIdx < words.length - 1 ? "\u00A0" : ""}
              </span>
            );
          })}
          {lineIdx < wordsByLine.length - 1 ? <br /> : null}
        </span>
      ))}
    </span>
  );
}
