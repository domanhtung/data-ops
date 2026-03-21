import fs from "node:fs";
import path from "node:path";

const src = process.argv[2];
if (!src) {
  console.error("Usage: node scripts/extract-uipro-json.mjs <path-to-mcp-output.txt>");
  process.exit(1);
}
const text = fs.readFileSync(src, "utf8");
const lines = text.split("\n");
const jsonLine = lines.find((L) => L.startsWith('{"pages"'));
if (!jsonLine) {
  console.error("JSON line not found");
  process.exit(1);
}
const data = JSON.parse(jsonLine);
const out = path.join(process.cwd(), "tmp-uipro-extract");
fs.mkdirSync(out, { recursive: true });
for (const pg of data.pages || []) {
  if (!pg?.fileName || !pg?.content) continue;
  fs.writeFileSync(path.join(out, pg.fileName), pg.content);
  console.log("page", pg.fileName);
}
for (const c of data.components || []) {
  if (!c?.fileName || !c?.content) continue;
  fs.writeFileSync(path.join(out, c.fileName), c.content);
  console.log("component", c.fileName);
}
