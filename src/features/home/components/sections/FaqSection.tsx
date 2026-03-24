import Image from "next/image";
import { FaqAccordionItem } from "@/features/home/components/ui/faq-accordion-item";
import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { faqItems } from "@/features/home/data/home-content";
import { ArrowEyebrow } from "@/features/shared/arrow-eyebrow";

export function FaqSection() {
  return (
    <section className="z-[10] box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-8 px-4 py-16 text-left font-helvetica-now-display text-base text-text-main-900 sm:px-6 sm:py-20 md:gap-10 md:px-8 md:py-24 lg:text-num-18 xl:gap-12 xl:px-16 xl:py-[120px] 2xl:px-num-180">
      <section className="self-stretch text-center font-helvetica-now-display text-[15px] text-text-sub-500 md:text-[16px]">
        <ArrowEyebrow
          label="FAQ"
          className="justify-center md:gap-[11.5px]"
          iconClassName="md:h-5 md:w-5"
        />
        <div className="mt-4 self-stretch text-[30px] text-text-main-900 md:mt-5 md:text-[34px] lg:text-[36px] xl:text-[38px] 2xl:text-num-40">
          <h2 className="m-0 self-stretch text-[length:inherit] font-medium font-[inherit] leading-[1.16] tracking-[-0.01em] 2xl:leading-num-48">
            <AnimatedTextReveal text="Everything You Need to Know" />
          </h2>
        </div>
      </section>

      <div className="w-full max-w-num-1024">
        <div className="flex w-full flex-col items-start gap-4 self-stretch">
          {faqItems.map((item, index) => (
            <ScrollFadeInOnView key={index} delayMs={Math.min(index * 50, 220)}>
              <FaqAccordionItem item={item} />
            </ScrollFadeInOnView>
          ))}
        </div>
      </div>

      <ScrollFadeInOnView
        as="section"
        className="box-border flex w-full max-w-num-1024 flex-col items-start justify-center gap-5 overflow-hidden rounded-[10px] bg-neutral-900 p-4 text-left font-helvetica-now-display text-[24px] text-stroke-white-0 sm:rounded-[11px] sm:p-5 md:text-[26px] lg:flex-row lg:items-end lg:gap-6 lg:rounded-num-12 lg:p-6 xl:text-[30px] 2xl:text-[32px]"
      >
        <div className="flex flex-1 flex-col items-start gap-4">
          <h2 className="m-0 self-stretch text-[length:inherit] font-medium font-[inherit] leading-[1.2] lg:leading-10">
            Still have questions?
          </h2>
          <div className="self-stretch text-sm leading-6 text-text-soft-400 md:text-base lg:text-num-18">
            Contact our team and we’ll be happy to help.
          </div>
        </div>
        <UiproPillButton
          className="!w-full sm:!w-auto"
          onlyIcon="Off"
          size="Medium 40"
          state="Default"
          style="Filled"
          type="Neutral"
          editText="Contact Us"
          arrowLeftSLineFlex="unset"
          arrowLeftSLineAlignSelf="unset"
        />
      </ScrollFadeInOnView>
    </section>
  );
}
