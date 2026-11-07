import type { NextConfig } from "next";

// GitHub Pages serves this as a project page (username.github.io/repo-name),
// so it needs a basePath. Once the site moves to Cloudflare Pages with its
// own domain, GITHUB_PAGES won't be set and basePath goes back to "/".
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/pspe-construction-solutions";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? repoBasePath : "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
