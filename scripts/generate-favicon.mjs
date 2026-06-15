import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

/** Fixed palette for .ico / raster (no media queries; sharp won’t evaluate them). */
const rasterSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path
    fill="none"
    stroke="#141414"
    stroke-width="2.35"
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21.5 8.2c0-3-2.8-5-6.8-5-4.3 0-7 2.4-7 6 0 2.6 1.8 4.5 5.4 5.5l3.2.9c4.2 1.2 6.4 3.4 6.4 7.2 0 4.2-3.6 7.2-8.8 7.2-5.4 0-9-2.9-9-7.5"
  />
  <circle fill="#141414" cx="24.5" cy="23.5" r="2.35" />
</svg>`;

async function main() {
  if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

  const svg = Buffer.from(rasterSvg);
  const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svg).resize(48, 48).png().toBuffer();
  const ico = await pngToIco([png16, png32, png48]);
  writeFileSync(join(publicDir, "favicon.ico"), ico);

  await sharp(svg).resize(180, 180).png().toFile(join(publicDir, "apple-touch-icon.png"));

  console.log("Wrote public/favicon.ico and public/apple-touch-icon.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
