import Image from "next/image";
import Content from "@/features/home/components/ui/content";
import Content1 from "@/features/home/components/ui/content1";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import { workflowSteps } from "@/features/home/data/home-content";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";

export function HowItWorksSection() {
  return (
    <section className="z-[6] box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-14 md:gap-10 md:px-8 md:py-16 lg:gap-11 lg:px-12 lg:py-20 xl:gap-12 xl:px-16 xl:py-24 2xl:px-num-180 2xl:py-num-86">
      <Content
        className="gap-4 md:gap-5 lg:gap-6 [&_.h-5]:h-4 [&_.h-5]:w-4 md:[&_.h-5]:h-[18px] md:[&_.h-5]:w-[18px] lg:[&_.h-5]:h-5 lg:[&_.h-5]:w-5 [&_h2]:text-[30px] [&_h2]:leading-[1.16] md:[&_h2]:text-[34px] lg:[&_h2]:text-[36px] xl:[&_h2]:text-[38px] 2xl:[&_h2]:text-num-40 [&_h2]:tracking-[-0.01em] 2xl:[&_h2]:leading-num-48 [&_p]:text-sm md:[&_p]:text-base lg:[&_p]:text-[17px] xl:[&_p]:text-num-18 [&_p]:leading-6"
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="How It Works"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="From job post to production, simplified."
        sourceVettedProfessionalsCollab="Create a job, connect with the right experts, and run your workflow in one place - fast, structured, and scalable."
      />
      <section className="flex w-full max-w-num-1024 flex-col items-start gap-4 rounded-[14px] bg-bg-weak-100 p-3 text-left font-helvetica-now-display text-[18px] text-bg-weak-100 sm:gap-5 sm:rounded-[15px] sm:p-4 md:rounded-num-16 md:p-5 md:text-[19px] lg:flex-row lg:items-start lg:gap-6 lg:bg-transparent lg:p-0 lg:text-[20px]">
        <div className="box-border flex w-full flex-col items-start justify-center gap-5 rounded-[14px] bg-bg-weak-100 p-4 sm:gap-6 sm:p-5 md:gap-7 md:p-6 lg:w-[58%] lg:gap-8 lg:rounded-num-16 lg:p-8 xl:w-[62%]">
          {workflowSteps.map((item, index) => (
            <Content1
              key={index}
              {...item}
              className="gap-5 text-base md:gap-6 md:text-[17px] lg:gap-8 lg:text-num-18"
            />
          ))}
        </div>
        <ScrollFadeInOnView
          as="div"
          className="relative isolate flex w-full flex-col items-start justify-center gap-6 self-stretch overflow-hidden rounded-[20px] bg-bg-surface-700 p-4 sm:rounded-[22px] sm:p-5 md:p-6 lg:flex-1 lg:rounded-num-24 lg:gap-8"
        >
          <div className="z-[0] flex shrink-0 flex-1 flex-col items-start gap-3 self-stretch md:gap-4">
            <h3 className="m-0 self-stretch text-[length:inherit] font-medium font-[inherit] leading-[1.3] tracking-[-0.01em] md:leading-7">
              Post Your AI Data Job
            </h3>
            <div className="self-stretch text-sm leading-6 text-text-disable-200 md:text-base lg:text-num-18">
              Create an account, post your role, and get a curated shortlist
              from 100,000+ experts to hire fast in your tools.
            </div>
          </div>
          <Image
            className="absolute right-4 top-4 z-[1] h-9 w-9 shrink-0 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12"
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
            type="Primary"
            editText="Hire Experts"
            arrowLeftSLineFlex="unset"
            arrowLeftSLineAlignSelf="stretch"
          />
        </ScrollFadeInOnView>
      </section>
    </section>
  );
}
