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
    <section className="w-full max-w-num-1920 flex flex-col items-center justify-center py-[120px] px-num-180 box-border gap-[68px] z-[9]">
      <section className="w-full border-neutral-300 border-solid border-t-[1px] border-b-[1px] box-border overflow-hidden flex items-center py-num-22 px-num-0 shrink-0 text-left text-num-18 text-text-sub-500 font-helvetica-now-display">
        <TrustMarqueeStrip labels={trustMarqueeRowA} />
      </section>

      <section className="w-full max-w-num-1024 flex flex-col items-center gap-12 shrink-0 text-left text-[24px] text-bg-weak-100 font-helvetica-now-display">
        <Content
          arrowPixel="/uipro-assets/Arrow-Pixel2.svg"
          aLLINONEPLATFORM="GET STARTED"
          arrowPixel1="/uipro-assets/Arrow-Pixel3.svg"
          onePlatformToFindHireAndMan="Start your next project with the right expertise."
          sourceVettedProfessionalsCollab="A platform where companies connect with trusted specialists. Collaborate, contribute, and deliver better outcomes together."
        />
        <div className="w-full max-w-num-1024 flex items-start gap-8">
          <ScrollFadeInOnView
            as="div"
            className="flex-1 rounded-num-24 bg-neutral-900 overflow-hidden flex flex-col items-start justify-center p-6 relative isolate gap-8"
          >
            <div className="self-stretch flex flex-col items-start gap-4 z-[0] shrink-0">
              <h3 className="m-0 self-stretch relative text-[length:inherit] leading-num-32 font-medium font-[inherit]">
                Join as an expert
              </h3>
              <div className="self-stretch relative text-num-18 leading-6 text-text-soft-400">
                Share your expertise and work with companies worldwide.
                <br />
                Access meaningful projects that value your skills.
              </div>
            </div>
            <Image
              className="w-12 h-12 absolute !m-0 top-[0.1px] left-[424px] z-[1] shrink-0"
              loading="lazy"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/uipro-assets/Badges1.svg"
            />
            <UiproPillButton
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
            className="flex-1 rounded-num-24 bg-neutral-900 overflow-hidden flex flex-col items-start justify-center p-6 relative isolate gap-8"
            delayMs={140}
          >
            <div className="self-stretch flex flex-col items-start gap-4 z-[0] shrink-0">
              <h3 className="m-0 self-stretch relative text-[length:inherit] leading-num-32 font-medium font-[inherit]">
                Post a project
              </h3>
              <div className="self-stretch relative text-num-18 leading-6 text-text-soft-400">
                Describe what you need and the expertise required.
                <br />
                Get matched with qualified specialists from our network.
              </div>
            </div>
            <Image
              className="w-12 h-12 absolute !m-0 top-[0.1px] left-[424px] z-[1] shrink-0"
              loading="lazy"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/uipro-assets/Badges.svg"
            />
            <UiproPillButton
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

      <section className="flex w-full shrink-0 items-center gap-10 overflow-hidden border-neutral-300 border-solid border-t-[1px] border-b-[1px] box-border py-num-22 px-num-0 text-left text-num-18 text-text-sub-500 font-helvetica-now-display">
        <TrustMarqueeStrip labels={trustMarqueeRowB} />
        <div className="h-num-17 w-px shrink-0 bg-neutral-300" />
        <div className="h-num-17 w-px shrink-0 bg-neutral-300" />
      </section>
    </section>
  );
}
