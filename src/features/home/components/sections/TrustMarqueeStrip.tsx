import { Fragment } from "react";

type TrustMarqueeStripProps = {
  labels: readonly string[];
};

function LabelStrip({
  labels,
  copyIndex,
}: {
  labels: readonly string[];
  copyIndex: number;
}) {
  return (
    <div
      className="flex h-10 shrink-0 items-center gap-10 pe-10"
      aria-hidden={copyIndex > 0}
    >
      {labels.map((label, i) => (
        <Fragment key={`${copyIndex}-${label}-${i}`}>
          <div className="relative shrink-0 font-medium tracking-num--0_01 leading-6">
            {label}
          </div>
          {i < labels.length - 1 ? (
            <div
              className="relative h-num-17 w-px shrink-0 bg-neutral-300"
              aria-hidden
            />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}

/** Infinite horizontal text marquee (right → left), seamless loop. */
export function TrustMarqueeStrip({ labels }: TrustMarqueeStripProps) {
  if (labels.length === 0) return null;

  return (
    <div className="relative min-h-10 min-w-0 flex-1 overflow-hidden motion-reduce:overflow-x-auto">
      <div className="flex w-max animate-trusted-by-marquee motion-reduce:animate-none">
        <LabelStrip labels={labels} copyIndex={0} />
        <LabelStrip labels={labels} copyIndex={1} />
      </div>
    </div>
  );
}
