import Image from "next/image";
import { HomeHeaderNavCluster } from "@/features/home/components/sections/HomeHeaderNavCluster";
import { HeroTrustedByMarquee } from "@/features/home/components/sections/HeroTrustedByMarquee";
import { SiteMarketingHeader } from "@/features/projects/components/sections/site-marketing-header";
import { AnimatedTextReveal } from "@/features/shared/animated-text-reveal";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";

export function HeroHeaderSection() {
  return (
    <section className="w-full max-w-num-1920 box-border flex flex-col items-center justify-center gap-12 px-num-0 pb-num-86 text-center text-[16px] text-text-sub-500 font-helvetica-now-display">
      <SiteMarketingHeader centerSlot={<HomeHeaderNavCluster />} />

      <div className="w-full max-w-num-1920 box-border flex flex-col items-center justify-center gap-[86px] px-num-180 py-[68px]">
        <div className="flex flex-col items-center gap-8 self-stretch px-num-0 py-[68px]">
          <div className="flex items-center gap-3">
            <Image
              className="h-5 w-5 object-contain"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/uipro-assets/Arrow-Pixel.svg"
            />
            <div className="relative font-medium leading-6 tracking-num-0_06 uppercase">
              Instant Access to Human Intelligence
            </div>
            <Image
              className="h-5 w-5"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/uipro-assets/Arrow-Pixel1.svg"
            />
          </div>
          <div className="flex flex-col items-center gap-5 self-stretch text-[64px] text-text-main-900">
            <h1 className="relative m-0 flex w-[1044px] max-w-full items-center justify-center text-[length:inherit] font-medium font-[inherit] leading-[72px] tracking-num--0_01">
              <AnimatedTextReveal text="Ship Production - Ready AI with Verified Domain Experts" />
            </h1>
            <div className="relative self-stretch whitespace-pre-wrap text-num-18 leading-6 text-text-sub-500">
              <AnimatedTextReveal text="Work with verified experts worldwide to label, evaluate, and improve your AI systems quickly and reliably." />
            </div>
          </div>
          <div className="flex w-[274px] max-w-full items-center justify-center gap-4">
            <UiproPillButton
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

        <div className="flex max-w-full flex-col gap-4 self-stretch text-[14px] text-neutral-600 sm:flex-row sm:items-center sm:gap-8 md:gap-12">
          <div className="flex shrink-0 items-center gap-2">
            <div className="relative font-medium leading-num-20 tracking-num-0_06 uppercase">
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
