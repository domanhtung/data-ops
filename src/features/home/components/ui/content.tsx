import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { ArrowEyebrow } from "@/features/shared/arrow-eyebrow";

export type ContentType = {
  className?: string;
  arrowPixel: string;
  aLLINONEPLATFORM?: string;
  arrowPixel1: string;
  onePlatformToFindHireAndMan?: string;
  sourceVettedProfessionalsCollab?: string;
};

export default function Content({
  className = "",
  arrowPixel,
  aLLINONEPLATFORM,
  arrowPixel1,
  onePlatformToFindHireAndMan,
  sourceVettedProfessionalsCollab,
}: ContentType) {
  return (
    <section className={`self-stretch flex flex-col items-center gap-6 text-center text-[16px] text-text-sub-500 font-helvetica-now-display ${className}`}>
      <ArrowEyebrow
        label={aLLINONEPLATFORM ?? ""}
        leftIconSrc={arrowPixel}
        rightIconSrc={arrowPixel1}
        iconClassName="h-5 w-5 object-contain"
        textClassName="tracking-num-0_06 leading-6"
      />
      <div className="self-stretch flex flex-col items-start gap-4 text-num-40 text-text-main-900">
        <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-num--0_01 leading-num-48 font-medium font-[inherit]">
          <AnimatedTextReveal text={onePlatformToFindHireAndMan ?? ""} />
        </h2>
        <div className="self-stretch relative text-num-18 leading-6 text-text-sub-500">
          <AnimatedTextReveal text={sourceVettedProfessionalsCollab ?? ""} />
        </div>
      </div>
    </section>
  );
}

