import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { gunzipSync } from "node:zlib";

const root = process.cwd();
const output = join(root, "dist");
mkdirSync(output, { recursive: true });

const compressedHtml = readFileSync(join(root, "site", "index.html.gz"));
const html = gunzipSync(compressedHtml);
writeFileSync(join(output, "index.html"), html);
copyFileSync(join(root, "public", "falcon.webp"), join(output, "falcon.webp"));

console.log("Falcon Prime Studios site prepared in dist/.");
