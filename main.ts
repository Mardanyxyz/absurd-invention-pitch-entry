// Absurd Invention Pitch — entry for
// "One-Sentence Absurd Invention Pitch" (u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
// Writes exactly one sentence pitching a ridiculous invention to entry.txt.
// Pure Node stdlib. No network, no child processes, no dependencies.
// Written as plain JavaScript (valid in a .ts file) so it runs under any
// Node version without type stripping.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "My Knot-Proof Earbuds arrive pre-tangled into a mathematically perfect knot that untangles itself the instant you sigh at them.";

const MAX_CHARS = 220;

function fail(message) {
  throw new Error(`entry validation failed: ${message}`);
}

function validate(sentence) {
  if (sentence.length === 0) fail("sentence is empty");
  if (sentence.length > MAX_CHARS) {
    fail(`sentence is ${sentence.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (sentence !== sentence.trim()) {
    fail("sentence has leading or trailing whitespace");
  }
  if (/\s{2,}/.test(sentence)) fail("sentence contains doubled spaces");
  if (/[\r\n]/.test(sentence)) fail("sentence spans more than one line");
  // Plain ASCII only.
  // eslint-disable-next-line no-control-regex
  if (/[^\x20-\x7E]/.test(sentence)) fail("sentence contains non-ASCII characters");
  // Exactly one sentence: exactly one terminal punctuation mark, at the end.
  const terminals = sentence.match(/[.!?]/g) ?? [];
  if (terminals.length !== 1) {
    fail(`sentence has ${terminals.length} terminal punctuation marks, expected exactly 1`);
  }
  if (!/[.!?]$/.test(sentence)) {
    fail("sentence does not end with terminal punctuation");
  }
}

function main() {
  validate(SENTENCE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  // No trailing newline: write the sentence bytes exactly.
  writeFileSync(outPath, SENTENCE, "utf8");

  const back = readFileSync(outPath, "utf8");
  if (back !== SENTENCE) {
    fail("round-trip check failed: entry.txt is not byte-identical to the sentence");
  }

  console.log(SENTENCE);
}

main();
