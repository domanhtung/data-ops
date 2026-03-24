import Image from "next/image";
import Content from "@/features/home/components/ui/content";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import {
  trustMarqueeRowA,
  trustMarqueeRowB,
} from "@/features/home/data/home-content";
import { TrustMarqueeStrip } from "@/features/home/components/sections/TrustMarqueeStrip";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";

export function GetStartedBandSection() {
  return (
    <section className="z-[9] box-border flex w-full flex-col items-center justify-center gap-10 py-16 sm:py-20 md:gap-12 md:py-24 lg:gap-14 xl:gap-[68px] xl:py-[112px] 2xl:py-[120px]">
      <section className="box-border flex w-full shrink-0 items-center overflow-hidden border-y border-solid border-neutral-300 px-0 py-4 text-left font-helvetica-now-display text-base text-text-sub-500 md:py-5 lg:text-num-18 lg:py-num-22">
        <TrustMarqueeStrip labels={trustMarqueeRowA} />
      </section>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-num-180">
        <section className="w-full max-w-num-1024 shrink-0 text-left font-helvetica-now-display text-[20px] text-bg-weak-100 md:text-[22px] xl:text-[24px]">
          <Content
            className="gap-4 text-center md:gap-5 lg:gap-6 [&_.h-5]:h-4 [&_.h-5]:w-4 md:[&_.h-5]:h-[18px] md:[&_.h-5]:w-[18px] lg:[&_.h-5]:h-5 lg:[&_.h-5]:w-5 [&_h2]:text-[30px] [&_h2]:leading-[1.16] md:[&_h2]:text-[34px] lg:[&_h2]:text-[36px] xl:[&_h2]:text-[38px] 2xl:[&_h2]:text-num-40 [&_h2]:tracking-[-0.01em] 2xl:[&_h2]:leading-num-48 [&_p]:text-sm md:[&_p]:text-base lg:[&_p]:text-[17px] xl:[&_p]:text-num-18 [&_p]:leading-6"
            arrowPixel="/uipro-assets/Arrow-Pixel2.svg"
            aLLINONEPLATFORM="GET STARTED"
            arrowPixel1="/uipro-assets/Arrow-Pixel3.svg"
            onePlatformToFindHireAndMan="Start your next project with the right expertise."
            sourceVettedProfessionalsCollab="A platform where companies connect with trusted specialists. Collaborate, contribute, and deliver better outcomes together."
          />
          <div className="mt-8 flex w-full max-w-num-1024 flex-col items-start gap-4 md:mt-10 md:gap-5 lg:flex-row lg:gap-6 xl:gap-8">
            <ScrollFadeInOnView
              as="div"
              className="relative isolate flex w-full flex-1 flex-col items-start justify-center gap-6 overflow-hidden rounded-[20px] bg-neutral-900 p-4 sm:rounded-[22px] sm:p-5 md:p-6 lg:rounded-num-24 lg:gap-8"
            >
              <div className="z-[0] flex shrink-0 flex-col items-start gap-4 self-stretch">
                <h3 className="m-0 self-stretch text-[length:inherit] font-medium font-[inherit] leading-[1.28] tracking-[-0.01em] lg:leading-num-32">
                  Join as an expert
                </h3>
                <div className="self-stretch text-sm leading-6 text-text-soft-400 md:text-base lg:text-num-18">
                  Share your expertise and work with companies worldwide.
                  <br />
                  Access meaningful projects that value your skills.
                </div>
              </div>
              <Image
                className="absolute right-4 top-4 z-[1] h-9 w-9 shrink-0 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12"
                loading="lazy"
                width={48}
                height={48}
                sizes="100vw"
                alt=""
                src="/uipro-assets/Badges1.svg"
              />
              <UiproPillButton
                className="!w-full sm:!w-auto"
                onlyIcon="Off"
                size="Medium 40"
                state="Default"
                style="Filled"
                type="Neutral"
                editText="Join the network"
                arrowLeftSLineFlex="unset"
                arrowLeftSLineAlignSelf="unset"
              />
            </ScrollFadeInOnView>
            <ScrollFadeInOnView
              as="div"
              className="relative isolate flex w-full flex-1 flex-col items-start justify-center gap-6 overflow-hidden rounded-[20px] bg-neutral-900 p-4 sm:rounded-[22px] sm:p-5 md:p-6 lg:rounded-num-24 lg:gap-8"
              delayMs={140}
            >
              <div className="z-[0] flex shrink-0 flex-col items-start gap-4 self-stretch">
                <h3 className="m-0 self-stretch text-[length:inherit] font-medium font-[inherit] leading-[1.28] tracking-[-0.01em] lg:leading-num-32">
                  Post a project
                </h3>
                <div className="self-stretch text-sm leading-6 text-text-soft-400 md:text-base lg:text-num-18">
                  Describe what you need and the expertise required.
                  <br />
                  Get matched with qualified specialists from our network.
                </div>
              </div>
              <Image
                className="absolute right-4 top-4 z-[1] h-9 w-9 shrink-0 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12"
                loading="lazy"
                width={48}
                height={48}
                sizes="100vw"
                alt=""
                src="/uipro-assets/Badges.svg"
              />
              <UiproPillButton
                className="!w-full sm:!w-auto"
                onlyIcon="Off"
                size="Medium 40"
                state="Default"
                style="Filled"
                type="Neutral"
                editText="Hire Experts"
                arrowLeftSLineFlex="unset"
                arrowLeftSLineAlignSelf="unset"
              />
            </ScrollFadeInOnView>
          </div>
        </section>
      </div>

      <section className="box-border flex w-full shrink-0 items-center gap-6 overflow-hidden border-y border-solid border-neutral-300 px-0 py-4 text-left font-helvetica-now-display text-base text-text-sub-500 md:gap-8 md:py-5 lg:gap-10 lg:text-num-18 lg:py-num-22">
        <TrustMarqueeStrip labels={trustMarqueeRowB} />
      </section>
    </section>
  );
}
