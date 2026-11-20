import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { gunzipSync } from "node:zlib";

const root = process.cwd();
const output = join(root, "dist");
const editableSource = join(root, "index.html");
const compressedFallback = join(root, "site", "index.html.gz");

mkdirSync(output, { recursive: true });

const html = existsSync(editableSource)
  ? readFileSync(editableSource, "utf8")
  : gunzipSync(readFileSync(compressedFallback), "utf8");

writeFileSync(join(output, "index.html"), html);
copyFileSync(join(root, "public", "falcon.webp"), join(output, "falcon.webp"));

console.log("Falcon Prime Studios site prepared in dist/.");
