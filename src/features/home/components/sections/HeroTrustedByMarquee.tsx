import Image from "next/image";
import { Fragment } from "react";
import {
  heroTrustedByLogos,
  type HeroTrustedByLogo,
} from "@/features/home/data/hero-trusted-by-logos";

function TrustedByStrip({
  logos,
  copyIndex,
}: {
  logos: readonly HeroTrustedByLogo[];
  copyIndex: number;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pe-10"
      aria-hidden={copyIndex > 0}
    >
      {logos.map((logo, index) => {
        const showDividerAfter =
          (logo.dividerAfter !== false) && index < logos.length - 1;
        return (
          <Fragment key={`${copyIndex}-${index}-${logo.src}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`relative shrink-0 object-contain ${logo.className}`}
              sizes={logo.sizes ?? "180px"}
              loading={logo.loading ?? "lazy"}
            />
            {showDividerAfter ? (
              <div
                className="relative h-num-17 w-px shrink-0 bg-neutral-200"
                aria-hidden
              />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}

/** Infinite horizontal marquee (right → left); logos list lives in `hero-trusted-by-logos`. */
export function HeroTrustedByMarquee() {
  return (
    <div className="relative min-h-10 w-full min-w-0 overflow-hidden motion-reduce:overflow-x-auto">
      <div className="flex w-max animate-trusted-by-marquee motion-reduce:animate-none">
        <TrustedByStrip logos={heroTrustedByLogos} copyIndex={0} />
        <TrustedByStrip logos={heroTrustedByLogos} copyIndex={1} />
      </div>
    </div>
  );
}
