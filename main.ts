// The Funniest Excuse for Skipping a Meeting
// u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163
//
// Writes one razor-sharp excuse line (<= 200 chars) to /output/entry.txt.
// Node.js stdlib only. Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Sorry — I can't make it. I've read the agenda, and my absence is the most productive thing I'll contribute today.";

const out = process.env.OUTPUT_DIR
  ? `${process.env.OUTPUT_DIR}/entry.txt`
  : "/output/entry.txt";

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
