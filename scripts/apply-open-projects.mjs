import fs from "node:fs";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const srcPath = path.join(root, "tmp-uipro-extract/open-projects.tsx");
if (!fs.existsSync(srcPath)) {
  console.error("Missing", srcPath);
  process.exit(1);
}
const src = fs.readFileSync(srcPath, "utf8");

const PREFIX = "/uipro-projects-assets";

function prefixAssets(html) {
  return html.replace(/src="\/(?!uipro-projects-assets\/)([^"]+)"/g, `src="${PREFIX}/$1"`);
}

function fixLanguagesWrappers(html) {
  const open =
    /<Image className="absolute top-\[8px\] left-\[0px\] w-num-86_7 h-5 object-cover"(?: loading="lazy")? width=\{86\.7\} height=\{20\} sizes="100vw" alt="" src="\/uipro-projects-assets\/Languages@2x\.png">/g;
  return html
    .replace(open, '<div className="absolute top-[8px] left-[0px] w-num-86_7 h-5">')
    .replace(
      /                  <\/Image><ArrowLeftSLine onlyIcon="Off" size="Small 36"/g,
      '                  </div><ArrowLeftSLine onlyIcon="Off" size="Small 36"',
    );
}

function fixPaginationButtons(html) {
  return html
    .replace(
      /<Image className="absolute top-\[0px\] left-\[454px\] rounded-num-8 w-9 h-9" width=\{36\} height=\{36\} sizes="100vw" alt="" src="\/uipro-projects-assets\/Buttons\.svg">\s*<Image className="h-5 w-full relative" width=\{20\} height=\{20\} sizes="100vw" alt="" src="\/uipro-projects-assets\/arrow-left-s-line\.svg" \/>\s*<\/Image>/g,
      `<div className="absolute top-[0px] left-[454px] rounded-num-8 w-9 h-9 flex items-center justify-center">
                <Image className="h-5 w-5" width={20} height={20} sizes="100vw" alt="" src="${PREFIX}/arrow-left-s-line.svg" />
              </div>`,
    )
    .replace(
      /<Image className="absolute top-\[0px\] left-\[806px\] rounded-num-8 w-9 h-9" width=\{36\} height=\{36\} sizes="100vw" alt="" src="\/uipro-projects-assets\/Buttons1\.svg">\s*<Image className="h-5 w-full relative" width=\{20\} height=\{20\} sizes="100vw" alt="" src="\/uipro-projects-assets\/arrow-right-s-line\.svg" \/>\s*<\/Image>/g,
      `<div className="absolute top-[0px] left-[806px] rounded-num-8 w-9 h-9 flex items-center justify-center">
                <Image className="h-5 w-5" width={20} height={20} sizes="100vw" alt="" src="${PREFIX}/arrow-right-s-line.svg" />
              </div>`,
    );
}

function fixSliderImages(html) {
  return html.replace(
    /                    <Image className="absolute top-\[32px\] left-\[0px\] w-num-316 h-2 object-cover" width=\{316\} height=\{8\} sizes="100vw" alt="" src="\/uipro-projects-assets\/Slider@2x\.png">\s*<div className="absolute w-full top-\[0px\] right-\[0px\] left-\[0px\] rounded-num-8 bg-bg-soft-200 h-2" \/>\s*<div className="absolute top-\[0px\] left-\[190px\] rounded-num-8 bg-bg-strong-900 w-num-189_5 h-2 \[transform:_rotate\(180deg\)\] \[transform-origin:0_0\]" \/>\s*<\/Image>/g,
    `                    <div className="absolute top-[32px] left-[0px] w-num-316 h-2">
                      <Image className="absolute top-[0px] left-[0px] w-num-316 h-2 object-cover" width={316} height={8} sizes="100vw" alt="" src="${PREFIX}/Slider@2x.png" />
                      <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-num-8 bg-bg-soft-200 h-2" />
                      <div className="absolute top-[0px] left-[190px] rounded-num-8 bg-bg-strong-900 w-num-189_5 h-2 [transform:_rotate(180deg)] [transform-origin:0_0]" />
                    </div>`,
  );
}

function fixLocofyClassTokens(html) {
  return html
    .replace(/rounded-border-radius-xl/g, "rounded-xl")
    .replace(/text-color-brand-brand-primary/g, "text-transparent")
    .replace(
      /leading-typography-base-sizes-small-line-height font-typography-font-family-font-sans text-color-display-muted-foreground/g,
      "leading-num-20 font-inter text-text-sub-500",
    );
}

let body = prefixAssets(src);
body = fixLanguagesWrappers(body);
body = fixPaginationButtons(body);
body = fixSliderImages(body);
body = fixLocofyClassTokens(body);

body = body
  .replace(/^'use client';[\s\S]*?import Image from "next\/image";/m, '"use client";\n\nimport Image from "next/image";')
  .replace(/import ArrowLeftSLine from "\.\.\/components\/arrow-left-s-line";/, 'import ArrowLeftSLine from "@/features/projects/components/ui/arrow-left-s-line";')
  .replace(/import Flags from "\.\.\/components\/flags";/, 'import Flags from "@/features/projects/components/ui/flags";')
  .replace(/const \[arrowLeftSLineItems\] = useState\(/, "const arrowLeftSLineItems = ")
  .replace(/const \[arrowLeftSLineItems1\] = useState\(/, "const arrowLeftSLineItems1 = ")
  .replace(/const \[arrowLeftSLineItems2\] = useState\(/, "const arrowLeftSLineItems2 = ")
  .replace(/import { useState } from 'react';\n/, "")
  .replace(/import type { NextPage } from 'next';\n/, "");

body = body.replace(
  /(const arrowLeftSLineItems = \[[\s\S]*?)\]\);\s*const arrowLeftSLineItems1/m,
  "$1];\nconst arrowLeftSLineItems1",
);
body = body.replace(
  /(const arrowLeftSLineItems1 = \[[\s\S]*?)\]\);\s*const arrowLeftSLineItems2/m,
  "$1];\nconst arrowLeftSLineItems2",
);
body = body.replace(
  /(const arrowLeftSLineItems2 = \[[\s\S]*?)\]\);\s*return \(/m,
  "$1];\n\nexport default function OpenProjectsView() {\n  return (",
);

body = body.replace(/const OpenProjects: NextPage = \(\) => {/, "");
body = body.replace(/export default OpenProjects ;/, "}");

body = body.replace(/\}\);\s*$/m, "}\n");

const outDir = path.join(root, "src/features/projects/components");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "open-projects-view.tsx"), body, "utf8");
console.log("Wrote open-projects-view.tsx");
