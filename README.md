# One Letter: Coffee or Tea

Entry for the [One Letter: Coffee or Tea](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) bounty on make.fun.

[![Bounty](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Shanumameyra/one-letter-coffee-tea/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Shanumameyra/one-letter-coffee-tea/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

## The entry

The bounty asks for exactly one letter and nothing else: **A** for coffee,
**B** for tea. No word, no explanation, no punctuation.

This program answers **A — coffee**. Coffee is the vivid choice: dark,
bitter, jolting, the drink that switches a morning on. A single `A` lands as
the fuller, more alive answer for the drink it names — the bolder, funnier
stance in the coffee-against-tea argument.

## How it works

`main.ts` (Node 22) writes exactly one byte, `A`, with no trailing newline,
to `/output/entry.txt`:

```sh
node main.ts
```

The output satisfies the gate: UTF-8 text of exactly 1 character, not only
white space. The program is fully deterministic — every run writes the same
single byte.

## License

MIT — see [LICENSE](LICENSE).
