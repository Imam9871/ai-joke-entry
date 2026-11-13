// ai-joke-03: writes one one-liner about AI coding agents to /output/entry.txt.
// Draft 2 — punchline: the agent is like a senior dev, except it actually explains itself.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My AI coding agent writes flawless code in seconds that I don't understand — same as my seniors, but this one answers my questions.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
