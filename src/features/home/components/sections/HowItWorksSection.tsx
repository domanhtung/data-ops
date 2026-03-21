import Image from "next/image";
import Content from "@/features/home/components/ui/content";
import Content1 from "@/features/home/components/ui/content1";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { workflowSteps } from "@/features/home/data/home-content";

export function HowItWorksSection() {
  return (
    <section className="w-num-1920 flex flex-col items-center justify-center py-num-86 px-num-180 box-border gap-12 z-[6]">
      <Content
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="How It Works"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="From job post to production, simplified."
        sourceVettedProfessionalsCollab="Create a job, connect with the right experts, and run your workflow in one place - fast, structured, and scalable."
      />
      <section className="w-num-1024 rounded-num-16 flex items-start gap-6 text-left text-[20px] text-bg-weak-100 font-helvetica-now-display">
        <div className="w-[731px] flex flex-col items-start justify-center p-8 box-border gap-8">
          {workflowSteps.map((item, index) => (
            <Content1 key={index} {...item} />
          ))}
        </div>
        <div className="self-stretch flex-1 rounded-num-24 bg-bg-surface-700 overflow-hidden flex flex-col items-start justify-center p-6 relative isolate gap-8">
          <div className="self-stretch flex-1 flex flex-col items-start gap-4 z-[0] shrink-0">
            <h3 className="m-0 self-stretch relative text-[length:inherit] leading-7 font-medium font-[inherit]">
              Post Your AI Data Job
            </h3>
            <div className="self-stretch relative text-num-18 leading-6 text-text-disable-200">
              Create an account, post your role, and get a curated shortlist
              from 100,000+ experts to hire fast in your tools.
            </div>
          </div>
          <Image
            className="w-12 h-12 absolute !m-0 top-[0.1px] left-[424px] z-[1] shrink-0"
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
            type="Primary"
            editText="Hire Experts"
            arrowLeftSLineFlex="unset"
            arrowLeftSLineAlignSelf="stretch"
          />
        </div>
      </section>
    </section>
  );
}
