import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for a friend who has never coded: let an AI agent on
// make.fun build their first app idea.
const entry =
  "You don't need to learn to code — just describe the app idea you've always wanted in plain words, and an AI agent on make.fun builds a real, working version for you to try, free, while you stay in charge.";

// The bounty allows one sentence of 1–240 characters. Count Unicode code
// points so multi-byte characters count once, and fail loudly instead of
// writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);
