"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import {
  OpenProjectsSiteHeaderAuthActions,
  ProjectLogoHeader,
} from "@/features/projects/components/sections/open-projects-header-auth";
import { SITE_PAGE_GUTTER_CLASS } from "@/features/shared/page-gutter";
import clsx from "clsx";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const onScreenSizeChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    };
    mediaQuery.addEventListener("change", onScreenSizeChange);
    return () => mediaQuery.removeEventListener("change", onScreenSizeChange);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [mobileMenuOpen]);

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
        className={clsx(
          `fixed inset-x-0 top-0 z-999 text-left text-[28.6px] text-neutral-600 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-out font-helvetica-now-display`,
          shell,
          className
        )}
      >
        <div
          className={clsx(
            `flex w-full items-center gap-4 py-4 xl:py-8`,
            SITE_PAGE_GUTTER_CLASS,
            !centerSlot && "lg:justify-between",
          )}
        >
          <div className="shrink-0">
            <ProjectLogoHeader />
          </div>

          {centerSlot ? (
            <>
              <div className="hidden min-w-0 flex-1 justify-center px-2 lg:flex">
                {centerSlot}
              </div>
              <div className="hidden shrink-0 lg:block">
                <OpenProjectsSiteHeaderAuthActions />
              </div>
            </>
          ) : (
            <div className="hidden shrink-0 flex-wrap items-center gap-2 lg:flex">
              <OpenProjectsSiteHeaderAuthActions />
            </div>
          )}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="site-mobile-menu"
            className="ml-auto inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white/80 lg:hidden"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            <Image
              src="/hamburger-button.svg"
              alt=""
              width={24}
              height={24}
              className={clsx(
                "transition-transform duration-200",
                mobileMenuOpen ? "rotate-90" : "rotate-0"
              )}
            />
          </button>
        </div>
      </header>
      <div
        className={clsx(
          "fixed inset-0 z-[1000] transition-opacity duration-300 lg:hidden",
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileMenuOpen(false)}
        />
        <aside
          id="site-mobile-menu"
          role="dialog"
          aria-modal="true"
          className={clsx(
            "absolute right-0 top-0 h-full w-[min(86vw,360px)] border-l border-black/10 bg-white p-6 shadow-2xl transition-transform duration-300 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-full flex-col gap-6 overflow-y-auto pt-12">
            {centerSlot ? (
              <div className="flex min-w-0 flex-col items-stretch gap-3 [&>*]:w-full [&>*]:flex-col [&>*]:items-stretch">
                {centerSlot}
              </div>
            ) : null}
            <OpenProjectsSiteHeaderAuthActions className="grid grid-cols-2 shrink-0 flex-wrap items-center gap-2" />
          </div>
        </aside>
      </div>
      <div
        aria-hidden
        className="shrink-0"
        style={{ height: spacerHeight }}
      />
    </>
  );
}
