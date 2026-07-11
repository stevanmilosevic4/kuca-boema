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
    "boemska kafana Beograd",
    "restoran domaće kuhinje Beograd",
    "kafana sa živom muzikom Beograd",
    "praseće pečenje bez kostiju",
  ],
  openGraph: {
    title: "Kafana Kuća Boema — boemska kafana u Rakovici, Beograd",
    description:
      "Domaća kuhinja, vruće praseće bajadere svakim danom u 15h i živa muzika. Hasanaginice 8a, Rakovica.",
    locale: "sr_RS",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
