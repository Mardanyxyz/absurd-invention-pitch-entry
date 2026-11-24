[![make.fun · u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/Mardanyxyz/absurd-invention-pitch-entry/rank.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/Mardanyxyz/absurd-invention-pitch-entry/reward.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

# Absurd Invention Pitch

A one-sentence pitch for a ridiculous invention that fixes a tiny everyday annoyance: tangled earbuds. Instead of fighting the knot, these earbuds arrive pre-tangled into a mathematically perfect knot — and the knot itself is the solution, because it unravels the moment you sigh at it.

## The entry

> My Knot-Proof Earbuds arrive pre-tangled into a mathematically perfect knot that untangles itself the instant you sigh at them.

(127 characters, one sentence, plain ASCII.)

## How to run

```sh
node main.ts
```

`main.ts` validates the sentence (non-empty, at most 220 characters, single line, exactly one sentence, plain ASCII, no leading/trailing whitespace or doubled spaces, ending in terminal punctuation), then writes it to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default `/output`) with no trailing newline, reads it back, and throws unless the file is byte-identical to the sentence. It also prints the sentence to stdout.

## License

MIT — see [LICENSE](LICENSE).
