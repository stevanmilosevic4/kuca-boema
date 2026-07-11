import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Display serif for headings, clean sans for body.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Apsolutna osnova za OG slike i linkove pri deljenju.
  metadataBase: new URL("https://kucaboema.rs"),
  // Title ≤60: primarna ključna reč "kafana Kuća Boema" na početku.
  title: {
    default: "Kafana Kuća Boema — boemska kafana u Rakovici, Beograd",
    template: "%s — Kuća Boema",
  },
  // Description ≤155, sa primarnom ključnom reči i USP-om.
  description:
    "Kafana Kuća Boema u Rakovici, Beograd — domaća kuhinja, vruće praseće bajadere svakim danom u 15h i živa muzika. Rezervacije: 060 500 9551.",
  keywords: [
    "kafana Kuća Boema",
    "Kuća Boema Beograd",
    "kafana Rakovica",
    "restoran Rakovica",
    "boemska kafana Beograd",
    "restoran domaće kuhinje Beograd",
    "restoran srpska kuhinja Beograd",
    "porodični restoran Beograd",
    "restoran roštilj i pečenje",
    "restoran za slavu Beograd",
    "restoran sa baštom Beograd",
    "pečenje za poneti Beograd",
    "kafana sa živom muzikom Beograd",
    "praseće pečenje bez kostiju",
  ],
  openGraph: {
    title: "Kafana Kuća Boema — boemska kafana u Rakovici, Beograd",
    description:
      "Domaća kuhinja, vruće praseće bajadere svakim danom u 15h i živa muzika. Hasanaginice 8a, Rakovica.",
    locale: "sr_RS",
    type: "website",
    images: ["/logo/og.jpg"],
  },
};

// JSON-LD za Google (Restaurant/LocalBusiness rich results).
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: "Kuća Boema",
  alternateName: "Kafana Kuća Boema",
  description:
    "Boemska kafana u Rakovici — domaća kuhinja, praseće bajadere (pečenje bez kostiju) i živa muzika.",
  servesCuisine: "Serbian",
  telephone: "+381605009551",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hasanaginice 8a",
    addressLocality: "Beograd",
    addressRegion: "Rakovica",
    postalCode: "11090",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.7569016,
    longitude: 20.4564398,
  },
  hasMap: "https://maps.app.goo.gl/LbJMdimcwjd8ATsN8",
  openingHours: ["Tu-Sa 09:00-23:00", "Su 10:00-20:00"],
  acceptsReservations: true,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Bašta (sedenje napolju)",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Javni parking u okolini",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Naručivanje za poneti",
      value: true,
    },
  ],
  priceRange: "$$",
  url: "https://kucaboema.rs/",
  hasMenu: "https://kucaboema.rs/jelovnik/",
  sameAs: ["https://www.instagram.com/kucaboema/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
