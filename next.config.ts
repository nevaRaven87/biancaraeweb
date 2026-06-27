import type { NextConfig } from "next";
import { GITHUB_REPO } from "./github-pages.config";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${GITHUB_REPO}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath && {
    basePath,
    assetPrefix: `${basePath}/`,
  }),
};

export default nextConfig;
