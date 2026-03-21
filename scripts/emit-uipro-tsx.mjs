import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(root, "uipro-export.json"), "utf8"));
const ASSET = "/uipro-assets";

const nameMap = {
  HomeDemo: "GeneratedScreen.tsx",
  ArrowLeftSLine: "arrow-left-s-line.tsx",
  FrameComponent: "frame-component.tsx",
  Content: "content.tsx",
  CardExperts: "card-experts.tsx",
  Content1: "content1.tsx",
  Card: "integration-card.tsx",
  CardExperts1: "card-experts1.tsx",
};

function fixPaths(code) {
  return code
    .replace(/!!m-\[0 important\]/g, "!m-0")
    .replace(/h-num-auto/g, "h-auto")
    .replace(/\bsrc="\/(?!uipro-assets\/)([^"]+)"/g, `src="${ASSET}/$1"`)
    .replace(/image21: "\//g, `image21: "${ASSET}/`)
    .replace(/rectangle13: "\//g, `rectangle13: "${ASSET}/`);
}

function stripNextPage(content, exportName) {
  let c = content
    .replace(/import type \{ NextPage \} from ['"]next['"];\s*\n/g, "")
    .replace(new RegExp(`const ${exportName}: NextPage<([^>]+)>`, "g"), `function ${exportName}($1: $1`)
    .replace(/NextPage<([^>]+)>/g, "$1");

  c = c.replace(
    new RegExp(`const ${exportName}: NextPage = \\(\\{`, "g"),
    `function ${exportName}({`,
  );
  c = c.replace(
    new RegExp(`const ${exportName}: NextPage<([^>]+)> = \\(\\{`, "g"),
    `function ${exportName}({`,
  );
  c = c.replace(/\}: ([A-Za-z0-9]+)Type\) => \{/g, "}: $1Type) {");
  c = c.replace(/\}\) => \{/g, "}) {");
  c = c.replace(new RegExp(`export default ${exportName} ;`, "g"), "");
  return c;
}

const outDir = path.join(root, "src/components/uipro");
fs.mkdirSync(outDir, { recursive: true });

for (const page of data.pages) {
  if (!page.content) continue;
  const fileName = nameMap[page.compName];
  if (!fileName) continue;

  let content = page.content.trim();

  if (page.compName === "HomeDemo") {
    content = content
      .replace(/^'use client';\s*\n/, "")
      .replace(/import \{ useState \} from 'react';\s*\n/, "")
      .replace(
        /import ArrowLeftSLine from "\.\.\/components\/arrow-left-s-line";/,
        'import ArrowLeftSLine from "@/src/components/uipro/arrow-left-s-line";',
      )
      .replace(
        /import FrameComponent from "\.\.\/components\/frame-component";/,
        'import FrameComponent from "@/src/components/uipro/frame-component";',
      )
      .replace(
        /import Content from "\.\.\/components\/content";/,
        'import Content from "@/src/components/uipro/content";',
      )
      .replace(
        /import CardExperts from "\.\.\/components\/card-experts";/,
        'import CardExperts from "@/src/components/uipro/card-experts";',
      )
      .replace(
        /import Content1 from "\.\.\/components\/content1";/,
        'import Content1 from "@/src/components/uipro/content1";',
      )
      .replace(
        /import Card from "\.\.\/components\/card";/,
        'import IntegrationCard from "@/src/components/uipro/integration-card";',
      )
      .replace(
        /import CardExperts1 from "\.\.\/components\/card-experts1";/,
        'import CardExperts1 from "@/src/components/uipro/card-experts1";',
      );

    content = content.replace(/const \[arrowLeftSLineItems\] = useState\(/, "const arrowLeftSLineItems = ");
    content = content.replace(/const \[cardExpertsItems\] = useState\(/, "const cardExpertsItems = ");
    content = content.replace(/const \[content1Items\] = useState\(/, "const content1Items = ");
    content = content.replace(/const \[cardItems\] = useState\(/, "const cardItems = ");
    content = content.replace(/const \[cardExperts1Items\] = useState\(/, "const cardExperts1Items = ");
    content = content.replace(/\]\);/g, "];");

    content = content.replace(
      /const HomeDemo: NextPage = \(\) => \{/,
      "export default function GeneratedScreen() {",
    );
    content = content.replace(/export default HomeDemo ;/g, "");
    content = content.replace(/<Card\b/g, "<IntegrationCard");
    content = content.replace(/<\/Card>/g, "</IntegrationCard>");
    content = content.replace(/import type \{ NextPage \} from 'next';\s*\n/, "");
  }

  if (page.compName === "ArrowLeftSLine") {
    content = content
      .replace(/onlyIcon\?: CSSProperties\['onlyIcon'\];/g, "onlyIcon?: string;")
      .replace(/size\?: CSSProperties\['size'\];/g, "size?: string;")
      .replace(/state\?: CSSProperties\['state'\];/g, "state?: string;")
      .replace(
        /style\?: CSSProperties\['style'\];/g,
        'style?: "Filled" | "Ghost" | "Stroke";',
      )
      .replace(/type\?: CSSProperties\['type'\];/g, 'type?: "Primary" | "Neutral";');
    content = content.replace(
      /const ArrowLeftSLine: NextPage<ArrowLeftSLineType> = \(\{/,
      "function ArrowLeftSLine({",
    );
    content = content.replace(
      /arrowLeftSLineAlignSelf \}\) => \{/,
      "arrowLeftSLineAlignSelf }: ArrowLeftSLineType) {",
    );
    content = content.replace(/export default ArrowLeftSLine ;/g, "export default ArrowLeftSLine;");
    content = `'use client';\n\n${content}`;
  }

  if (page.compName === "FrameComponent") {
    content = stripNextPage(content, "FrameComponent");
    content = content.replace(
      /const FrameComponent: NextPage<FrameComponentType> = \(\{/,
      "export default function FrameComponent({",
    );
    content = content.replace(/\}: FrameComponentType\) => \{/g, "}: FrameComponentType) {");
    content = content.replace(/export default FrameComponent ;/g, "");
    content = `import Image from "next/image";\n\n${content}\n`;
  }

  if (page.compName === "Content") {
    content = content.replace(
      /const Content: NextPage<ContentType> = \(\{/,
      "export default function Content({",
    );
    content = content.replace(/\}: ContentType\) => \{/g, "}: ContentType) {");
    content = content.replace(/export default Content ;/g, "");
    content = `import Image from "next/image";\n\n${content}\n`;
  }

  if (page.compName === "CardExperts") {
    content = content.replace(
      /const CardExperts: NextPage<CardExpertsType> = \(\{/,
      "export default function CardExperts({",
    );
    content = content.replace(/\}: CardExpertsType\) => \{/g, "}: CardExpertsType) {");
    content = content.replace(/export default CardExperts ;/g, "");
    content = `'use client';\n\n${content}`;
  }

  if (page.compName === "Content1") {
    content = content.replace(
      /const Content1: NextPage<Content1Type> = \(\{/,
      "export default function Content1({",
    );
    content = content.replace(/\}: Content1Type\) => \{/g, "}: Content1Type) {");
    content = content.replace(/export default Content1 ;/g, "");
    content = `import Image from "next/image";\n\n${content}\n`;
  }

  if (page.compName === "Card") {
    content = content.replace(/const Card: NextPage<CardType> = \(\{/,
      "export default function IntegrationCard({");
    content = content.replace(/\}: CardType\) => \{/g, "}: CardType) {");
    content = content.replace(/export default Card ;/g, "");
    content = content.replace(/CardType/g, "IntegrationCardType");
    content = content.replace(
      /export type CardType/g,
      "export type IntegrationCardType",
    );
    content = `import Image from "next/image";\n\n${content}\n`;
  }

  if (page.compName === "CardExperts1") {
    content = content.replace(
      /const CardExperts1: NextPage<CardExperts1Type> = \(\{/,
      "export default function CardExperts1({",
    );
    content = content.replace(/\}: CardExperts1Type\) => \{/g, "}: CardExperts1Type) {");
    content = content.replace(/export default CardExperts1 ;/g, "");
    content = `import Image from "next/image";\n\n${content}\n`;
  }

  content = fixPaths(content);

  if (page.compName === "FrameComponent") {
    content = content.replace(/import type \{ NextPage \} from 'next';\s*\n/g, "");
  }
  if (page.compName === "Content") {
    content = content.replace(/import type \{ NextPage \} from 'next';\s*\n/g, "");
  }
  if (page.compName === "Content1") {
    content = content.replace(/import type \{ NextPage \} from 'next';\s*\n/g, "");
  }
  if (page.compName === "CardExperts") {
    content = content.replace(/import type \{ NextPage \} from 'next';\s*\n/g, "");
  }

  fs.writeFileSync(path.join(outDir, fileName), content, "utf8");
  console.log("wrote", fileName);
}

console.log("GeneratedScreen.tsx emitted from HomeDemo");
