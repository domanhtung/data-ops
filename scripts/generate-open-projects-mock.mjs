import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "../src/features/projects/data/open-projects-mock.json");

const langs = ["en", "vi", "ja", "ko"];
const durs = ["lt7", "7to14", "14to30", "gt30"];
const cats = ["audio", "vision", "nlp", "other"];
const pays = ["0-10", "10-25", "25-50", "50+"];
const exps = ["entry", "intermediate", "advanced", "expert"];

const titleBases = [
  "Voice Recording Dataset",
  "Image Bounding Box QA",
  "Legal Document NLP",
  "Medical Image Segmentation",
  "Conversation Transcription",
  "Product Review Sentiment",
  "Satellite Crop Detection",
  "Wake Word Collection",
  "Code Pair Ranking",
  "Video Action Labels",
  "Speech Emotion Tags",
  "OCR Table Extraction",
  "Lidar Object Labels",
  "Chatbot Safety Review",
  "Multilingual ASR",
];

const devices = ["Smartphone", "Desktop", "Tablet", "Any device"];

function pick(arr, i) {
  return arr[i % arr.length];
}

const rows = [];
const COUNT = 120;

for (let i = 0; i < COUNT; i += 1) {
  const lang = pick(langs, i);
  const cat = pick(cats, i * 3);
  const base = pick(titleBases, i);
  const title = i < titleBases.length ? `${base}` : `${base} #${i + 1}`;
  const searchTags = [base.toLowerCase().split(" ")[0], cat, lang].join(" ");
  rows.push({
    id: `op-${String(i + 1).padStart(4, "0")}`,
    title,
    description: `Help improve ${cat} workflows. ${searchTags}. Flexible schedule, clear guidelines.`,
    language: lang,
    duration: pick(durs, i * 7),
    category: cat,
    paymentRange: pick(pays, i * 5),
    experienceLevel: pick(exps, i * 11),
    hiring: "Hiring",
    experts: `${10 + (i % 40)} experts`,
    pay: `$${5 + (i % 10) * 3}`,
    device: pick(devices, i),
    deadline: `${1 + (i % 18)} days left`,
    processPercent: 15 + (i % 75),
    expertsLeft: `${5 + (i % 28)} experts left`,
    applyLabel: "Apply Now",
  });
}

writeFileSync(out, `${JSON.stringify(rows, null, 2)}\n`, "utf8");
console.log(`Wrote ${rows.length} rows to ${out}`);
