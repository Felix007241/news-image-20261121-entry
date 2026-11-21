// Entry program for the 21 November 2026 news image (Node 22, standard
// library only). The image itself lives next to this file as entry.png;
// all this program does is place an exact copy of it at
// /output/entry.png, so running it twice always writes identical bytes.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = new URL("./entry.png", import.meta.url);
copyFileSync(here, join(outDir, "entry.png"));
