import Content from "@/features/home/components/ui/content";
import { UiproPillButton } from "@/features/shared/uipro-pill-button";
import {
  annotationTags,
  dataCollectionTags,
  modelCapabilityTags,
} from "@/features/home/data/home-content";
import { SolutionTag } from "@/features/home/components/sections/SolutionTag";
import { ScrollFadeInOnView } from "@/features/shared/scroll-fade-in-on-view";

export function SolutionsSection() {
  return (
    <section className="z-[7] box-border flex w-full max-w-num-1920 flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 sm:py-14 md:gap-10 md:px-8 md:py-16 lg:gap-11 lg:px-12 lg:py-20 xl:gap-12 xl:px-16 xl:py-24 2xl:px-num-180 2xl:py-num-86">
      <Content
        className="gap-4 md:gap-5 lg:gap-6 [&_.h-5]:h-4 [&_.h-5]:w-4 md:[&_.h-5]:h-[18px] md:[&_.h-5]:w-[18px] lg:[&_.h-5]:h-5 lg:[&_.h-5]:w-5 [&_h2]:text-[30px] [&_h2]:leading-[1.16] md:[&_h2]:text-[34px] lg:[&_h2]:text-[36px] xl:[&_h2]:text-[38px] 2xl:[&_h2]:text-num-40 [&_h2]:tracking-[-0.01em] 2xl:[&_h2]:leading-num-48 [&_p]:text-sm md:[&_p]:text-base lg:[&_p]:text-[17px] xl:[&_p]:text-num-18 [&_p]:leading-6"
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="Solutions"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="Find the right talent for any data workflow"
        sourceVettedProfessionalsCollab="From model training to data operations, work with specialists who fit your exact needs - fast, flexible, and reliable."
      />
      <div className="flex w-full max-w-num-1024 flex-col items-start gap-4 md:gap-5 lg:flex-row lg:gap-6 xl:gap-8">
        <ScrollFadeInOnView
          as="section"
          className="self-stretch flex flex-1 flex-col overflow-hidden rounded-[20px] border border-solid border-stroke-sub-300 px-4 py-4 text-left font-helvetica-now-display text-[15px] text-text-main-900 sm:rounded-[22px] sm:px-5 sm:py-5 md:text-[16px] lg:flex-[0.9032] lg:rounded-num-24 lg:px-6 lg:py-6 xl:px-num-23 xl:py-num-22"
        >
          <div className="self-stretch flex flex-col items-start gap-4">
            <div className="self-stretch text-[11px] font-medium uppercase leading-5 tracking-[0.04em] md:text-xs md:tracking-[0.05em] lg:text-sm lg:leading-6 lg:tracking-num-0_06">
              Models & Intelligent Systems
            </div>
            <div className="self-stretch text-sm leading-6 text-text-sub-500 md:text-base lg:text-[17px] xl:text-num-18">
              Work with domain experts to train, evaluate, and improve model
              performance - from early experiments to production systems.
            </div>
          </div>
          <div className="mt-4 self-stretch flex flex-1 items-start flex-wrap content-start gap-2 lg:mt-6">
            {modelCapabilityTags.map((label) =>
              label === "Multilingual AI Training" ? (
                <SolutionTag key={label} gapClass="gap-1">
                  {label}
                </SolutionTag>
              ) : (
                <SolutionTag key={label}>{label}</SolutionTag>
              ),
            )}
          </div>
          <UiproPillButton
            className="!w-full sm:!w-auto mt-4 lg:mt-6"
            onlyIcon="Off"
            size="Medium 40"
            state="Default"
            style="Filled"
            type="Primary"
            editText="Explore Model Solutions"
            arrowLeftSLineFlex="unset"
            arrowLeftSLineAlignSelf="stretch"
          />
        </ScrollFadeInOnView>

        <section className="self-stretch flex flex-1 flex-col items-start justify-center gap-4 text-left font-helvetica-now-display text-[15px] text-text-main-900 md:gap-5 md:text-[16px] lg:gap-6 xl:gap-8">
          <ScrollFadeInOnView
            as="div"
            className="self-stretch flex flex-col overflow-hidden rounded-[20px] border border-solid border-stroke-sub-300 px-4 py-4 sm:rounded-[22px] sm:px-5 sm:py-5 lg:rounded-num-24 lg:px-6 lg:py-6 xl:px-num-23 xl:py-num-22"
            delayMs={120}
          >
            <div className="self-stretch flex flex-col items-start gap-4">
              <div className="self-stretch text-[11px] font-medium uppercase leading-5 tracking-[0.04em] md:text-xs md:tracking-[0.05em] lg:text-sm lg:leading-6 lg:tracking-num-0_06">
                Models & Intelligent Systems
              </div>
              <div className="self-stretch text-sm leading-6 text-text-sub-500 md:text-base lg:text-[17px] xl:text-num-18">
                Work with domain experts to train, evaluate, and improve model
                performance - from early experiments to production systems.
              </div>
            </div>
            <div className="mt-4 self-stretch flex flex-1 items-start flex-wrap content-start gap-2 lg:mt-6">
              {annotationTags.map((label) => (
                <SolutionTag key={label}>{label}</SolutionTag>
              ))}
            </div>
            <UiproPillButton
              className="!w-full sm:!w-auto mt-4 lg:mt-6"
              onlyIcon="Off"
              size="Medium 40"
              state="Default"
              style="Filled"
              type="Primary"
              editText="Explore Data Solutions"
              arrowLeftSLineFlex="unset"
              arrowLeftSLineAlignSelf="stretch"
            />
          </ScrollFadeInOnView>

          <ScrollFadeInOnView
            as="div"
            className="self-stretch flex flex-col overflow-hidden rounded-[20px] border border-solid border-stroke-sub-300 px-4 py-4 sm:rounded-[22px] sm:px-5 sm:py-5 lg:rounded-num-24 lg:px-6 lg:py-6 xl:px-num-23 xl:py-num-22"
            delayMs={180}
          >
            <div className="self-stretch flex flex-col items-start gap-4">
              <div className="self-stretch text-[11px] font-medium uppercase leading-5 tracking-[0.04em] md:text-xs md:tracking-[0.05em] lg:text-sm lg:leading-6 lg:tracking-num-0_06">
                DATA COLLECTION
              </div>
              <div className="self-stretch text-sm leading-6 text-text-sub-500 md:text-base lg:text-[17px] xl:text-num-18">
                Collect high-quality, real-world data tailored to your use case
                - across industries and environments.
              </div>
            </div>
            <div className="mt-4 self-stretch flex flex-1 items-start flex-wrap content-start gap-2 lg:mt-6">
              {dataCollectionTags.map((label) => (
                <SolutionTag key={label}>{label}</SolutionTag>
              ))}
            </div>
            <UiproPillButton
              className="!w-full sm:!w-auto mt-4 lg:mt-6"
              onlyIcon="Off"
              size="Medium 40"
              state="Default"
              style="Filled"
              type="Primary"
              editText="Explore Data Collection"
              arrowLeftSLineFlex="unset"
              arrowLeftSLineAlignSelf="stretch"
            />
          </ScrollFadeInOnView>
        </section>
      </div>
    </section>
  );
}
