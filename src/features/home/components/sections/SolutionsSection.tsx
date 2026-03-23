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
    <section className="w-full max-w-num-1920 flex flex-col items-center justify-center py-num-86 px-num-180 box-border gap-12 z-[7]">
      <Content
        arrowPixel="/uipro-assets/Arrow-Pixel.svg"
        aLLINONEPLATFORM="Solutions"
        arrowPixel1="/uipro-assets/Arrow-Pixel1.svg"
        onePlatformToFindHireAndMan="Find the right talent for any data workflow"
        sourceVettedProfessionalsCollab="From model training to data operations, work with specialists who fit your exact needs - fast, flexible, and reliable."
      />
      <div className="w-full max-w-num-1024 flex items-start gap-8">
        <ScrollFadeInOnView
          as="section"
          className="self-stretch flex-[0.9032] rounded-num-24 border-stroke-sub-300 border-solid border-[1px] overflow-hidden flex flex-col items-center justify-center py-num-22 px-num-23 gap-6 text-left text-[16px] text-text-main-900 font-helvetica-now-display"
        >
          <div className="self-stretch flex flex-col items-start gap-4">
            <div className="self-stretch relative tracking-num-0_06 leading-6 uppercase font-medium">
              Models & Intelligent Systems
            </div>
            <div className="self-stretch relative text-num-18 leading-6 text-text-sub-500">
              Work with domain experts to train, evaluate, and improve model
              performance - from early experiments to production systems.
            </div>
          </div>
          <div className="self-stretch flex-1 flex items-start flex-wrap content-start gap-2">
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

        <section className="self-stretch flex-1 flex flex-col items-start justify-center gap-8 text-left text-[16px] text-text-main-900 font-helvetica-now-display">
          <ScrollFadeInOnView
            as="div"
            className="self-stretch rounded-num-24 border-stroke-sub-300 border-solid border-[1px] overflow-hidden flex flex-col items-center justify-center py-num-22 px-num-23 gap-6"
            delayMs={120}
          >
            <div className="self-stretch flex flex-col items-start gap-4">
              <div className="self-stretch relative tracking-num-0_06 leading-6 uppercase font-medium">
                Models & Intelligent Systems
              </div>
              <div className="self-stretch relative text-num-18 leading-6 text-text-sub-500">
                Work with domain experts to train, evaluate, and improve model
                performance - from early experiments to production systems.
              </div>
            </div>
            <div className="self-stretch flex items-start flex-wrap content-start gap-2">
              {annotationTags.map((label) => (
                <SolutionTag key={label}>{label}</SolutionTag>
              ))}
            </div>
            <UiproPillButton
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
            className="self-stretch rounded-num-24 border-stroke-sub-300 border-solid border-[1px] overflow-hidden flex flex-col items-center justify-center py-num-22 px-num-23 gap-6"
            delayMs={180}
          >
            <div className="self-stretch flex flex-col items-start gap-4">
              <div className="self-stretch relative tracking-num-0_06 leading-6 uppercase font-medium">
                DATA COLLECTION
              </div>
              <div className="self-stretch relative text-num-18 leading-6 text-text-sub-500">
                Collect high-quality, real-world data tailored to your use case
                - across industries and environments.
              </div>
            </div>
            <div className="self-stretch flex items-start flex-wrap content-start gap-2">
              {dataCollectionTags.map((label) => (
                <SolutionTag key={label}>{label}</SolutionTag>
              ))}
            </div>
            <UiproPillButton
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
