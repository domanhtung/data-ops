/**
 * Full-viewport-width hero texture (`hero-bg.png`) with natural height and
 * `mix-blend-overlay` against `bg-neutral-200` so mid-tones tint the base color.
 */
export function HeroBackdrop() {
  return (
    <section
      className="pointer-events-none absolute left-0 right-0 top-0 z-0 w-full bg-neutral-200"
      aria-hidden
    >
      {/* Fill parent width to avoid 100vw overflow on pages with vertical scrollbar. */}
      <img
        src="/uipro-assets/hero-bg.png"
        alt=""
        className="block h-auto w-full mix-blend-overlay"
        decoding="async"
        fetchPriority="high"
      />
    </section>
  );
}
