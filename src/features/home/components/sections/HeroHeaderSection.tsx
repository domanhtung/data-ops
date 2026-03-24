import Image from "next/image";
import { HomeHeaderNavCluster } from "@/features/home/components/sections/HomeHeaderNavCluster";
import { HeroTrustedByMarquee } from "@/features/home/components/sections/HeroTrustedByMarquee";
import { SiteMarketingHeader } from "@/features/projects/components/sections/site-marketing-header";
import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { ArrowEyebrow } from "@/features/shared/arrow-eyebrow";

export function HeroHeaderSection() {
  return (
    <section className="box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-8 px-0 pb-14 text-center font-helvetica-now-display text-[15px] text-text-sub-500 md:gap-10 md:pb-16 md:text-[16px] lg:gap-11 lg:pb-20 xl:gap-12 xl:pb-num-86">
      <SiteMarketingHeader centerSlot={<HomeHeaderNavCluster />} />

      <div className="box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-12 px-4 py-8 sm:px-6 sm:py-10 md:gap-14 md:px-8 md:py-12 lg:gap-16 lg:px-12 lg:py-14 xl:gap-[72px] xl:px-24 xl:py-16 2xl:gap-[86px] 2xl:px-num-180 2xl:py-[68px]">
        <div className="flex self-stretch flex-col items-center gap-6 py-4 md:gap-7 md:py-10 lg:gap-8 lg:py-12 xl:py-[68px]">
          <ArrowEyebrow label="Instant Access to Human Intelligence" />
          <div className="flex self-stretch flex-col items-center gap-4 text-[36px] text-text-main-900 md:gap-5 md:text-[46px] lg:text-[54px] xl:text-[60px] 2xl:text-[64px]">
            <h1 className="relative m-0 flex w-full max-w-[1044px] items-center justify-center text-[length:inherit] font-medium font-[inherit] leading-[1.12] tracking-[-0.01em] md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.14]">
              <AnimatedTextReveal text="Ship Production - Ready AI with Verified Domain Experts" />
            </h1>
            <div className="relative w-full max-w-[860px] whitespace-pre-wrap text-sm leading-6 tracking-[-0.002em] text-text-sub-500 md:text-base md:leading-7 lg:text-[17px] xl:text-num-18">
              <AnimatedTextReveal text="Work with verified experts worldwide to label, evaluate, and improve your AI systems quickly and reliably." />
            </div>
          </div>
          <div className="flex w-full max-w-[360px] flex-col items-center justify-center gap-3 sm:max-w-[420px] sm:flex-row sm:gap-4">
            <UiproPillButton
              className="!w-full"
              onlyIcon="Off"
              size="Medium 40"
              state="Default"
              style="Filled"
              type="Primary"
              editText="Post a Job"
              arrowLeftSLineFlex="1"
              arrowLeftSLineAlignSelf="unset"
            />
            <UiproPillButton
              className="!w-full"
              onlyIcon="Off"
              size="Medium 40"
              state="Default"
              style="Stroke"
              type="Primary"
              editText="Join as Expert"
              arrowLeftSLineFlex="1"
              arrowLeftSLineAlignSelf="unset"
            />
          </div>
        </div>

        <div className="flex max-w-full flex-col gap-3 self-stretch text-[13px] text-neutral-600 sm:flex-row sm:items-center sm:gap-6 md:gap-8 md:text-[14px] lg:gap-10 xl:gap-12">
          <div className="flex shrink-0 items-center gap-2">
            <div className="relative text-[11px] font-medium uppercase leading-5 tracking-[0.05em] md:text-xs md:leading-6 md:tracking-num-0_06">
              Trusted by
            </div>
            <div className="relative h-num-17 w-px bg-neutral-500" />
          </div>
          <div className="min-h-10 min-w-0 flex-1">
            <HeroTrustedByMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}
