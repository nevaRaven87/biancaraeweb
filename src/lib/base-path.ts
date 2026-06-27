import { GITHUB_REPO } from "../../github-pages.config";

function resolveBasePath(): string {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  if (process.env.GITHUB_PAGES === "true") {
    return `/${GITHUB_REPO}`;
  }

  return "";
}

export const basePath = resolveBasePath();

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
