import type { MetadataRoute } from "next";

// Obavezno uz output: "export" — generiše se statički u build-u.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kucaboema.rs/sitemap.xml",
  };
}
