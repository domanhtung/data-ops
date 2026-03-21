import fs from "node:fs";

const s = fs.readFileSync(
  "src/features/projects/components/open-projects-view.tsx",
  "utf8",
);
const parts = s.split(/<section className="absolute top-\[0px\] left-\[/g).slice(1);
const withOverlay = [];
parts.forEach((p, i) => {
  if (p.includes("bg-bg-soft-200")) withOverlay.push(i);
});
console.log("indices with overlay", withOverlay);
console.log("total sections", parts.length);
