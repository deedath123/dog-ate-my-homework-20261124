// The Dog Ate My Homework: Funniest Excuse — dog's-eye excuse, one line.
// The entry is a single line with no trailing newline, so the file is
// written exactly as-is; do not append a newline or extra whitespace.
const fs = require('node:fs');
const path = require('node:path');



const line = "My teacher said the homework was 'for the dogs', so I ate all 14 pages, like she asked. Then I sat by the door waiting for my grade. Where is my treat?";

// Guard the gate: the entry must stay one line, 1-200 chars, no newline.
if (line.includes('\n') || line.length < 1 || line.length > 200) {
  throw new Error('entry line must be a single line of 1-200 characters');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outPath = path.join(outDir, 'entry.txt');

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, line, 'utf8');
