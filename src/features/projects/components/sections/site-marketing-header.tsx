"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  OpenProjectsSiteHeaderAuthActions,
  ProjectLogoHeader,
} from "@/features/projects/components/sections/open-projects-header-auth";
import { SITE_PAGE_GUTTER_CLASS } from "@/features/shared/page-gutter";

export type SiteMarketingHeaderProps = {
  /** Home-only cluster (Open Projects + nav chips); omit on /projects. */
  centerSlot?: ReactNode;
  className?: string;
};

/**
 * Shared marketing header: logo, optional center slot, auth.
 * Fixed to viewport top; transparent until scroll, then frosted blur.
 * Renders a spacer below so following content is not covered.
 */
export function SiteMarketingHeader({
  centerSlot,
  className = "",
}: SiteMarketingHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(96);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => {
      setSpacerHeight(Math.ceil(el.getBoundingClientRect().height));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [centerSlot]);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shell = scrolled
    ? "border-b border-black/[0.06] bg-white/70 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-md supports-[backdrop-filter]:bg-white/55"
    : "bg-transparent";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-999 text-left text-[28.6px] text-neutral-600 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out font-helvetica-now-display ${shell} ${className}`}
      >
        <div
          className={`${SITE_PAGE_GUTTER_CLASS} flex w-full items-center gap-4 py-6 lg:py-8 ${!centerSlot ? "justify-between" : ""}`}
        >
          <div className="shrink-0">
            <ProjectLogoHeader />
          </div>
          {centerSlot ? (
            <>
              <div className="flex min-w-0 flex-1 justify-center px-2">
                {centerSlot}
              </div>
              <div className="shrink-0">
                <OpenProjectsSiteHeaderAuthActions />
              </div>
            </>
          ) : (
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <OpenProjectsSiteHeaderAuthActions />
            </div>
          )}
        </div>
      </header>
      <div
        aria-hidden
        className="shrink-0"
        style={{ height: spacerHeight }}
      />
    </>
  );
}
