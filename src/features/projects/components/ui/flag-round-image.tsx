"use client";

import Image from "next/image";

/** w80 gives enough pixels for ~20px display on 2x–3x screens (w40 looked soft). */
const FLAG_CDN_BASE = "https://flagcdn.com/w80";

export type FlagRoundImageProps = {
  /** ISO 3166-1 alpha-2 (e.g. `vn`, `us`, `gb`) */
  isoCode: string;
  /** Accessible name */
  label: string;
  className?: string;
};

/** Circular flag from flagcdn — correct colors vs. hand-stacked SVGs. */
export default function FlagRoundImage({ isoCode, label, className = "" }: FlagRoundImageProps) {
  const code = isoCode.trim().toLowerCase();
  const src = `${FLAG_CDN_BASE}/${code}.png`;

  return (
    <div
      className={`relative size-5 shrink-0 overflow-hidden rounded-full bg-neutral-200 ring-1 ring-black/10 ${className}`}
      title={label}
    >
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover"
        sizes="20px"
        quality={92}
      />
    </div>
  );
}
