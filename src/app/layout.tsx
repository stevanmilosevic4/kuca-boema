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
  title: "Kuća Boema — Tradicionalna kafana u Beogradu",
  description:
    "Kuća Boema je tradicionalna beogradska kafana u srcu Skadarlije. Domaća kuhinja, roštilj, vrhunska vina i živa muzika u boemskoj atmosferi.",
  keywords: [
    "kafana Beograd",
    "Skadarlija",
    "restoran Beograd",
    "domaća kuhinja",
    "roštilj",
    "Kuća Boema",
  ],
  openGraph: {
    title: "Kuća Boema — Tradicionalna kafana u Beogradu",
    description:
      "Domaća kuhinja, roštilj, vrhunska vina i živa muzika u srcu Skadarlije.",
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
