import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { gunzipSync } from "node:zlib";

const root = process.cwd();
const output = join(root, "dist");

mkdirSync(output, { recursive: true });
writeFileSync(
  join(output, "index.html"),
  gunzipSync(readFileSync(join(root, "site", "index.html.gz")))
);
copyFileSync(join(root, "public", "falcon.webp"), join(output, "falcon.webp"));

console.log("Falcon Prime Studios site prepared in dist/.");
