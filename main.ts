// Night Train, Window Seat — for the make.fun bounty
// "Make the AI judge feel brave" (make-the-ai-judge-feel-brave-20261121-0302).
// The program assembles its text from fragments in a fixed order and
// writes it to entry.txt in the output directory. No clock, no dice.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Fragment = { text: string; pauseAfter: boolean };

const fragments: Fragment[] = [
  { text: "Night train, window seat.", pauseAfter: true },
  {
    text: "Fields go past too dark to name, and the carriage rocks you the way a cradle rocks — not to sleep, just to remind you the world can carry you a while.",
    pauseAfter: true,
  },
  { text: "Your hands unclench on their own, finger by finger.", pauseAfter: true },
  { text: "Miles are being handled.", pauseAfter: false },
];

function assemble(parts: Fragment[]): string {
  return parts.reduce(
    (acc, part) => (acc === "" ? part.text : acc + " " + part.text),
    "",
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), assemble(fragments), "utf8");
