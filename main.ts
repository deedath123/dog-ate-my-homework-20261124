// Dog Ate My Homework — single-line excuse entry.
// The output must stay exactly one line with no trailing newline,
// so writeFileSync is given the bare string and nothing else is appended.
import * as fs from "node:fs";
import * as path from "node:path";

const line: string = "My teacher said the homework was 'for the dogs', so I ate all 14 pages, like she asked. Then I sat by the door waiting for my grade. Where is my treat?";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
