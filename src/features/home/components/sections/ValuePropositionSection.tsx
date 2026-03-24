import Image from "next/image";
import { ScrollStaggerTextReveal } from "@/features/shared/scroll-stagger-text-reveal";
import { ArrowEyebrow } from "@/features/shared/arrow-eyebrow";

export function ValuePropositionSection() {
  return (
    <section className="z-[2] box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-8 px-4 py-12 text-center font-helvetica-now-display text-[15px] text-text-sub-500 sm:px-5 sm:py-14 md:gap-10 md:px-8 md:py-16 md:text-[16px] lg:gap-11 lg:px-10 lg:py-20 xl:gap-12 xl:px-12 xl:py-24 2xl:py-num-86">
      <ArrowEyebrow label="Data Operations - from raw data to real AI" />
      <div className="flex w-full items-start justify-between text-center text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[48px]">
        <div className="mx-auto flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <h1 className="relative my-0 mx-auto flex w-full max-w-[1200px] items-center justify-center text-[length:inherit] font-medium font-[inherit] leading-[1.2] tracking-[-0.01em] md:leading-[1.18] lg:leading-[1.16] xl:leading-[56px]">
            <ScrollStaggerTextReveal
              maxBlurPx={0}
              scrollStretch={1.5}
              text={`AI teams don’t just need models. They need 
                accurate data, expert evaluation, and reliable 
                feedback. Without the right experts, AI systems 
                struggle to perform in the real world.
                
                We connect AI teams with verified domain experts 
                worldwide. Label better data. Evaluate models. 
                Improve outputs. 
                Human intelligence - at scale`}
            />
          </h1>
        </div>
      </div>
    </section>
  );
}
