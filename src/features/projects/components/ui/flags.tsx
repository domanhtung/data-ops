import FlagRoundImage from "@/features/projects/components/ui/flag-round-image";

export type FlagsType = {
  className?: string;
  country?: string;
  radius?: string;
  style?: string;
};

/** Maps design labels to ISO codes for flagcdn. Extend when adding countries. */
const COUNTRY_TO_ISO: Record<string, string> = {
  "Viet Nam": "vn",
  Vietnam: "vn",
};

/**
 * @deprecated Prefer `FlagRoundImage` with `isoCode` in new code.
 * Rounded flag image from flagcdn (same pipeline as project card strip).
 */
export default function Flags({
  className = "",
  country = "Viet Nam",
}: FlagsType) {
  const isoCode = COUNTRY_TO_ISO[country] ?? "vn";
  return (
    <FlagRoundImage
      isoCode={isoCode}
      label={country}
      className={className}
    />
  );
}
