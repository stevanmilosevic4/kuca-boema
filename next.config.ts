import type { NextConfig } from "next";

/**
 * Static-export config for GitHub Pages.
 *
 * GitHub Pages serves a project site from a sub-path
 * (https://<user>.github.io/<repo>), so in production we prefix every route and
 * asset with `/<repo>`. Locally (`npm run dev`) the prefix is empty so the site
 * works at http://localhost:3000.
 *
 * If you later switch to a custom domain or a `<user>.github.io` repo, set
 * `basePath`/`assetPrefix` back to "".
 */
const repo = "kuca-boema";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  images: { unoptimized: true }, // no image-optimization server on GH Pages
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true, // GH Pages serves /meni/ -> /meni/index.html
};

export default nextConfig;
