// One Letter: Coffee or Tea — entry program (program/v1, Node 22).
// Revision note: single-letter answer, revised once for clarity only;
// the output byte is unchanged.
//
// The gate requires /output/entry.txt to be exactly 1 UTF-8 character,
// nothing else: no word, no explanation, no punctuation, no newline.
// We answer "A": coffee.
//
// Why coffee: the judge weighs vividness first, then humour, then truth.
// Coffee is the vivid choice — dark, bitter, jolting, aromatic, the drink
// that switches a morning on — while tea is gentle and calm. A single "A"
// lands as the fuller, more alive answer for the drink it names, and the
// bolder, funnier stance in the coffee-against-tea argument. The choice is
// fixed and deterministic: every run writes the same single byte.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "A"; // A = coffee, B = tea

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
