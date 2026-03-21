import type { UiproPillButtonProps } from "@/features/shared/uipro-pill-button";

export type OpenProjectsFilterOption = {
  readonly value: string;
  readonly label: string;
};

export type OpenProjectsNavPillConfig = Pick<
  UiproPillButtonProps,
  | "onlyIcon"
  | "size"
  | "state"
  | "style"
  | "type"
  | "editText"
  | "arrowLeftSLineTop"
  | "arrowLeftSLineLeft"
  | "arrowLeftSLineWidth"
  | "arrowLeftSLineHeight"
>;

export const openProjectsTopNavChips: OpenProjectsNavPillConfig[] = [
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Why us?",
    arrowLeftSLineTop: "8px",
    arrowLeftSLineLeft: "188px",
    arrowLeftSLineWidth: "80px",
    arrowLeftSLineHeight: "",
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Our Vision",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "",
    arrowLeftSLineHeight: "",
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Supported Tools",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "",
    arrowLeftSLineHeight: "",
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Our Solutions",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "",
    arrowLeftSLineHeight: "",
  },
];

export type OpenProjectsFilterChipConfig = Pick<
  UiproPillButtonProps,
  | "onlyIcon"
  | "size"
  | "state"
  | "style"
  | "type"
  | "editText"
  | "arrowLeftSLineTop"
  | "arrowLeftSLineLeft"
  | "arrowLeftSLineWidth"
  | "arrowLeftSLineHeight"
> & {
  name: string;
  selectOptions: readonly OpenProjectsFilterOption[];
};

export const openProjectsFilterChips: OpenProjectsFilterChipConfig[] = [
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Lighter",
    type: "Neutral",
    editText: "Language",
    name: "language",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "114px",
    arrowLeftSLineHeight: "",
    selectOptions: [
      { value: "", label: "Language" },
      { value: "en", label: "English" },
      { value: "vi", label: "Vietnamese" },
      { value: "ja", label: "Japanese" },
      { value: "ko", label: "Korean" },
    ],
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Lighter",
    type: "Neutral",
    editText: "Duration",
    name: "duration",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "",
    arrowLeftSLineHeight: "",
    selectOptions: [
      { value: "", label: "Duration" },
      { value: "lt7", label: "Under 7 days" },
      { value: "7to14", label: "7–14 days" },
      { value: "14to30", label: "14–30 days" },
      { value: "gt30", label: "Over 30 days" },
    ],
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Lighter",
    type: "Neutral",
    editText: "Category",
    name: "category",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "",
    arrowLeftSLineHeight: "",
    selectOptions: [
      { value: "", label: "Category" },
      { value: "audio", label: "Audio & voice" },
      { value: "vision", label: "Computer vision" },
      { value: "nlp", label: "NLP & text" },
      { value: "other", label: "Other" },
    ],
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Lighter",
    type: "Neutral",
    editText: "Payment Range",
    name: "paymentRange",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "",
    arrowLeftSLineHeight: "",
    selectOptions: [
      { value: "", label: "Payment Range" },
      { value: "0-10", label: "$0 – $10" },
      { value: "10-25", label: "$10 – $25" },
      { value: "25-50", label: "$25 – $50" },
      { value: "50+", label: "$50+" },
    ],
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Lighter",
    type: "Neutral",
    editText: "Experience Level",
    name: "experienceLevel",
    arrowLeftSLineTop: "",
    arrowLeftSLineLeft: "",
    arrowLeftSLineWidth: "",
    arrowLeftSLineHeight: "",
    selectOptions: [
      { value: "", label: "Experience Level" },
      { value: "entry", label: "Entry" },
      { value: "intermediate", label: "Intermediate" },
      { value: "advanced", label: "Advanced" },
      { value: "expert", label: "Expert" },
    ],
  },
];
