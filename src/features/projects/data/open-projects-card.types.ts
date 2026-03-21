/** One open project row — matches filter chip values in `open-projects-nav-config`. */
export type OpenProjectCardData = {
  id: string;
  title: string;
  description: string;
  language: "en" | "vi" | "ja" | "ko";
  duration: "lt7" | "7to14" | "14to30" | "gt30";
  category: "audio" | "vision" | "nlp" | "other";
  paymentRange: "0-10" | "10-25" | "25-50" | "50+";
  experienceLevel: "entry" | "intermediate" | "advanced" | "expert";
  hiring: string;
  experts: string;
  pay: string;
  device: string;
  deadline: string;
  /** 0–100 for progress bar width */
  processPercent: number;
  expertsLeft: string;
  applyLabel: string;
};
