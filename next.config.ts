import type { NextConfig } from "next";

/**
 * Static-export config — custom domain kucaboema.rs.
 *
 * The site is served from the domain root (public/CNAME + GitHub Pages custom
 * domain), so no basePath/assetPrefix is needed. If the site ever moves back
 * to https://<user>.github.io/<repo>, reintroduce basePath/assetPrefix "/<repo>".
 */
const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  images: { unoptimized: true }, // no image-optimization server on GH Pages
  trailingSlash: true, // GH Pages serves /jelovnik/ -> /jelovnik/index.html
};

export default nextConfig;
