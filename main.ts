import { writeFileSync, mkdirSync } from "node:fs";

// One Line to Your Younger Self — the line my older self would send back.
// A mixtape, a brother, a year: the only things in the line are things
// that actually happened, and the twist lands in the last words.
// Gate: one line, English, 1–200 chars, no trailing newline.
const line =
  "Keep the mixtape your brother made you in 1998 — one day you'll pay real money to hear his voice again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
