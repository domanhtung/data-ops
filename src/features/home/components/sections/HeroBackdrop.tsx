/**
 * Full-viewport-width hero texture video with natural height and
 * `mix-blend-overlay` against `bg-neutral-200` so mid-tones tint the base color.
 */
export function HeroBackdrop() {
  return (
    <section
      className="pointer-events-none absolute left-0 right-0 top-0 z-0 w-full bg-neutral-200"
      aria-hidden
    >
      {/* Fill parent width to avoid 100vw overflow on pages with vertical scrollbar. */}
      <div className="relative">
        <video
          className="block h-auto w-full mix-blend-overlay"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Anchor bottom only — `inset-0` sets top+bottom and stretches full height. */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-white pointer-events-none user-select-none" />
      </div>
    </section>
  );
}
