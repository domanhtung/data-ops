import type { UiproPillButtonProps } from "@/features/shared/uipro-pill-button";

const A = "/uipro-assets";

export type HomeNavChipItem = Pick<
  UiproPillButtonProps,
  "onlyIcon" | "size" | "state" | "style" | "type" | "editText"
> &
  Partial<Pick<UiproPillButtonProps, "arrowLeftSLineFlex" | "arrowLeftSLineAlignSelf">>;

/** Nav chip buttons (center cluster) */
export const navChipItems: HomeNavChipItem[] = [
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Why us?",
    arrowLeftSLineFlex: "",
    arrowLeftSLineAlignSelf: "",
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Our Solutions",
    arrowLeftSLineFlex: "",
    arrowLeftSLineAlignSelf: "",
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Supported Tools",
    arrowLeftSLineFlex: "",
    arrowLeftSLineAlignSelf: "",
  },
  {
    onlyIcon: "Off",
    size: "Medium 40",
    state: "Default",
    style: "Ghost",
    type: "Primary",
    editText: "Our Vision",
    arrowLeftSLineFlex: "",
    arrowLeftSLineAlignSelf: "",
  },
];

export type CardExpertItem = {
  postOnceGetMatchedWithTheRig: string;
  shareYourRequirementsAndReceive: string;
  image21: string;
  cardExpertsPadding: string;
  image21IconMixBlendMode: string;
};

export const cardExpertsItems: CardExpertItem[] = [
  {
    postOnceGetMatchedWithTheRig:
      "Post once. Get matched with the right experts.",
    shareYourRequirementsAndReceive:
      "Share your requirements and receive a curated shortlist of qualified specialists. We screen profiles, evaluate skills, and ensure you only connect with experts who can deliver.",
    image21: `${A}/image-21@2x.png`,
    cardExpertsPadding: "22px 23px",
    image21IconMixBlendMode: "",
  },
  {
    postOnceGetMatchedWithTheRig: "Works with your tools",
    shareYourRequirementsAndReceive:
      "Keep your current workflow. Invite experts into your existing tools or manage everything directly on the platform - with full flexibility and control.",
    image21: `${A}/image-29@2x.png`,
    cardExpertsPadding: "30px 31px",
    image21IconMixBlendMode: "luminosity",
  },
  {
    postOnceGetMatchedWithTheRig: "Communication and project workspace",
    shareYourRequirementsAndReceive:
      "Keep everything in one place - chat, updates, and project instructions. Collaborate with your team and experts seamlessly while keeping work organized and aligned.",
    image21: `${A}/image-26@2x.png`,
    cardExpertsPadding: "30px 31px",
    image21IconMixBlendMode: "",
  },
  {
    postOnceGetMatchedWithTheRig: "Simple, transparent payments",
    shareYourRequirementsAndReceive:
      "Manage payments directly on the platform with clear, predictable pricing. No hidden fees - just a straightforward way to pay and scale with confidence.",
    image21: `${A}/image-24@2x.png`,
    cardExpertsPadding: "30px 31px",
    image21IconMixBlendMode: "",
  },
];

/** Platform section tabs — index must match `cardExpertsItems`. */
export const platformAllInOneTabLabels = [
  "/01. Expert Sourcing",
  "/02. Flexible Workflows",
  "/03. Project Workspace",
  "/04. Payments & Billing",
] as const;

export type WorkflowStepItem = {
  postAJobGetQualifiedMat: string;
  defineYourNeedsAndRequirements: string;
};

export const workflowSteps: WorkflowStepItem[] = [
  {
    postAJobGetQualifiedMat: "/01. Post a Job & Get Qualified Matches",
    defineYourNeedsAndRequirements:
      "Define your needs and requirements. We match you with relevant, pre-vetted experts so you can focus on reviewing the right candidates - not filtering noise.",
  },
  {
    postAJobGetQualifiedMat: "/02. Hire & Plug Into Your Workflow",
    defineYourNeedsAndRequirements:
      "Bring experts into your existing tools or run projects directly on the platform. Flexible setup, full control - no disruption to how your team works.",
  },
  {
    postAJobGetQualifiedMat: "/03. Collaborate, Manage & Pay Seamlessly",
    defineYourNeedsAndRequirements:
      "Run everything in one workspace - communication, tasks, and payments. Stay aligned, move faster, and scale without operational overhead.",
  },
];

export type IntegrationLogoItem = {
  rectangle13: string;
  aWSSageMaker: string;
  multimodal: string;
};

export const integrationLogos: IntegrationLogoItem[] = [
  { rectangle13: `${A}/Rectangle-13@2x.png`, aWSSageMaker: "AWS SageMaker", multimodal: "Multimodal" },
  { rectangle13: `${A}/Rectangle-131@2x.png`, aWSSageMaker: "Label Studio", multimodal: "Multimodal" },
  { rectangle13: `${A}/Rectangle-132@2x.png`, aWSSageMaker: "Datasaur", multimodal: "Text" },
  { rectangle13: `${A}/Rectangle-133@2x.png`, aWSSageMaker: "SuperAnnotate", multimodal: "Multimodal" },
  { rectangle13: `${A}/Rectangle-134@2x.png`, aWSSageMaker: "Kili Technology", multimodal: "Multimodal" },
  { rectangle13: `${A}/Rectangle-135@2x.png`, aWSSageMaker: "Argilla", multimodal: "Text" },
  { rectangle13: `${A}/Rectangle-136@2x.png`, aWSSageMaker: "Datature", multimodal: "Vision" },
  { rectangle13: `${A}/Rectangle-137@2x.png`, aWSSageMaker: "CVAT", multimodal: "Vision" },
  { rectangle13: `${A}/Rectangle-138@2x.png`, aWSSageMaker: "V7 Darwin", multimodal: "Vision" },
  { rectangle13: `${A}/Rectangle-139@2x.png`, aWSSageMaker: "Supervisely", multimodal: "Vision" },
  { rectangle13: `${A}/Rectangle-1310@2x.png`, aWSSageMaker: "Prodigy", multimodal: "Programmatic" },
  { rectangle13: `${A}/Rectangle-1311@2x.png`, aWSSageMaker: "Snorkel AI", multimodal: "Programmatic" },
  { rectangle13: `${A}/Rectangle-1312@2x.png`, aWSSageMaker: "Roboflow", multimodal: "Vision" },
  { rectangle13: `${A}/Rectangle-1313@2x.png`, aWSSageMaker: "Scale Studio", multimodal: "Multimodal" },
  { rectangle13: `${A}/Rectangle-1314@2x.png`, aWSSageMaker: "Encord", multimodal: "Vision" },
  { rectangle13: `${A}/Rectangle-1315@2x.png`, aWSSageMaker: "Dataloop", multimodal: "Multimodal" },
];

export type FaqCardItem = {
  howDoCompaniesFindExperts: string;
  companiesSimplyPostAProject: string;
};

export const faqItems: FaqCardItem[] = [
  {
    howDoCompaniesFindExperts: "What is this platform?",
    companiesSimplyPostAProject:
      "A single place where companies find vetted experts and experts find serious projects. Post work, collaborate in a shared workspace, and handle payments with clear pricing—built for AI, data, and research workflows.",
  },
  {
    howDoCompaniesFindExperts: "How do companies find experts?",
    companiesSimplyPostAProject:
      "Companies simply post a project describing the expertise they need. We help connect them with relevant specialists from our network so they can start collaborating quickly.",
  },
  {
    howDoCompaniesFindExperts: "Who can join as an expert?",
    companiesSimplyPostAProject:
      "Professionals with proven experience in their field are welcome to apply. We review each profile to ensure our network maintains a high standard of expertise.",
  },
  {
    howDoCompaniesFindExperts: "What types of projects are available?",
    companiesSimplyPostAProject:
      "Projects vary across industries and skill sets. They can range from short-term tasks to longer collaborations depending on the needs of the team.",
  },
  {
    howDoCompaniesFindExperts: "Is there a cost to join the platform?",
    companiesSimplyPostAProject:
      "Experts can apply and join the network at no cost. Companies only pay when they start working with experts on a project.",
  },
];

export const trustMarqueeRowA = [
  "Expert-led collaboration",
  "Specialists, not generalists",
  "Global experts, real impact",
  "Flexible and reliable",
  "Built for meaningful work",
  "Trusted by teams worldwide",
  "Quick matching, smooth collaboration",
] as const;

export const trustMarqueeRowB = [
  "Global experts, real impact",
  "Expert-led collaboration",
  "Specialists, not generalists",
  "Built for meaningful work",
  "Trusted by teams worldwide",
  "Quick matching, smooth collaboration",
  "Flexible and reliable",
] as const;

export const footerLinkLabels = [
  "How It Works",
  "Pricing",
  "Become a Experts",
  "Create Account",
] as const;

export const footerColumns: { title: string }[] = [
  { title: "Platform" },
  { title: "Solutions" },
  { title: "Integrations" },
  { title: "Contact" },
];

export const modelCapabilityTags = [
  "Model Evaluation",
  "Red Teaming",
  "Supervised Fine-Tuning",
  "Hallucination Audits",
  "Code Generation Review",
  "RLHF & Preference Data",
  "Function Calling",
  "Computer Use Agent Training",
  "Reasoning Step Verification",
  "Multilingual AI Training",
  "Reasoning Problem Creation",
  "Agent Simulations",
  "RL Environment Design",
] as const;

export const annotationTags = [
  "Document Annotation",
  "Image Annotation",
  "Segmentation",
  "Video Annotation",
  "Satellite Imagery Annotation",
  "Text Annotation",
  "Speech and Audio Labeling",
  "Time Series Annotation",
  "Point Cloud Annotation",
  "Medical Imaging Annotation",
] as const;

export const dataCollectionTags = [
  "Image Data Collection",
  "Video Data Collection",
  "Audio Data Collection",
  "Location & Sensor Data",
  "Autonomous Driving Data",
  "Healthcare Data Collection",
  "Robotics & Simulation Data",
  "Field Data Collection",
] as const;
