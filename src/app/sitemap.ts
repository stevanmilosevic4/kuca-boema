import type { MetadataRoute } from "next";

// Obavezno uz output: "export" — generiše se statički u build-u.
export const dynamic = "force-static";

const BASE = "https://kucaboema.rs";

// Sve javne strane sajta (bez /menu — to je samo preusmerenje za QR kodove).
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/jelovnik/", priority: 0.9 },
  { path: "/rezervacije/", priority: 0.8 },
  { path: "/proslave/", priority: 0.8 },
  { path: "/slave/", priority: 0.8 },
  { path: "/blog/", priority: 0.5 },
  { path: "/blog/prasece-bajaderice-beograd/", priority: 0.6 },
  { path: "/blog/gde-jesti-pecenje-u-beogradu/", priority: 0.6 },
  { path: "/blog/kafana-za-slavu-rakovica/", priority: 0.6 },
  { path: "/blog/rostilj-i-pecenje-beograd/", priority: 0.5 },
  { path: "/blog/najbolja-boemska-kafana-u-beogradu/", priority: 0.5 },
  { path: "/blog/kafana-sa-tamburasima/", priority: 0.5 },
  { path: "/blog/kafana-sa-starogradskom-muzikom/", priority: 0.5 },
  { path: "/blog/boemsko-vece-u-beogradu/", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
