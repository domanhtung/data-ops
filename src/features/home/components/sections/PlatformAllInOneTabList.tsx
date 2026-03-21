"use client";

import Image from "next/image";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const ARROW_SRC = "/uipro-assets/Arrow-Pixel1.svg";
const ARROW_PX = 20;

export type PlatformAllInOneTabListProps = {
  labels: readonly string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  panelId: string;
};

/**
 * Vertical tab list with one arrow that slides vertically from the previous tab to the newly selected tab.
 */
export function PlatformAllInOneTabList({
  labels,
  selectedIndex,
  onSelect,
  panelId,
}: PlatformAllInOneTabListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [arrowOffsetY, setArrowOffsetY] = useState(0);

  const measureArrow = useCallback(() => {
    const list = listRef.current;
    const tab = tabRefs.current[selectedIndex];
    if (!list || !tab) return;
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const centerY = tabRect.top - listRect.top + tabRect.height / 2;
    setArrowOffsetY(centerY - ARROW_PX / 2);
  }, [selectedIndex]);

  useLayoutEffect(() => {
    measureArrow();
  }, [measureArrow]);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const ro = new ResizeObserver(() => measureArrow());
    ro.observe(list);
    return () => ro.disconnect();
  }, [measureArrow]);

  const setTabRef = useCallback((index: number, el: HTMLButtonElement | null) => {
    tabRefs.current[index] = el;
  }, []);

  return (
    <div
      ref={listRef}
      className="relative inline-flex w-max max-w-full flex-col items-start justify-center gap-6"
      role="tablist"
      aria-label="Platform capabilities"
    >
      {labels.map((label, index) => {
        const selected = index === selectedIndex;
        return (
          <button
            key={label}
            ref={(el) => setTabRef(index, el)}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panelId}
            id={`platform-tab-${index}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(index)}
            className={`w-max border-0 bg-transparent p-0 text-left font-helvetica-now-display transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-main-900 ${
              selected
                ? "text-text-main-900"
                : "text-text-sub-500 hover:text-text-main-900"
            }`}
          >
            <span className="relative block font-medium tracking-num--0_01 leading-6">
              {label}
            </span>
          </button>
        );
      })}

      <div
        className="pointer-events-none absolute left-full top-0 ms-2 h-5 w-5 transition-transform duration-300 ease-out motion-reduce:duration-0"
        style={{ transform: `translateY(${arrowOffsetY}px)` }}
        aria-hidden
      >
        <Image
          className="h-5 w-5 object-contain"
          src={ARROW_SRC}
          width={ARROW_PX}
          height={ARROW_PX}
          sizes="20px"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}
