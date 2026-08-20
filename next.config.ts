import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

const repo = "portfolio_ysy";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

const envPath = path.join(process.cwd(), "src/styles/abstracts/_env.scss");
const envContents = `$base-path: ${JSON.stringify(basePath)};\n`;
let envCurrent = "";
try {
  envCurrent = readFileSync(envPath, "utf8");
} catch {
  envCurrent = "";
}
if (envCurrent !== envContents) {
  writeFileSync(envPath, envContents);
}

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
