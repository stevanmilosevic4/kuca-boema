import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { menu } from "@/data/menu";

// Primarna ključna reč: "restoran domaće kuhinje Beograd"
export const metadata: Metadata = {
  title: "Jelovnik — restoran domaće kuhinje",
  description:
    "Jelovnik kafane Kuća Boema u Rakovici — restoran domaće kuhinje u Beogradu: praseće pečenje bez kosti, roštilj, gotova jela, salate i domaći dezerti.",
};

export default function JelovnikPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-wine-dark py-16 text-cream">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-soft">
              Restoran domaće kuhinje · Rakovica
            </p>
            <h1 className="font-display text-4xl text-cream sm:text-5xl">
              Jelovnik
            </h1>
            <div className="mx-auto my-6 h-px w-40 bg-gold/60" />
            <p className="mx-auto max-w-xl text-cream/70">
              Sve cene su izražene u dinarima (RSD), sa uračunatim PDV-om.
              Vruće praseće bajadere — svakim danom u 15h.
            </p>
          </div>

          {/* brzi skok po kategorijama */}
          <nav className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {menu.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-gold/40 px-3 py-1 text-sm text-cream/80 transition-colors hover:bg-gold hover:text-wine-dark"
              >
                {c.title}
              </a>
            ))}
          </nav>

          <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {menu.map((category) => (
              <div key={category.id} id={category.id}>
                <h2 className="font-display text-2xl text-gold-soft">
                  {category.title}
                </h2>
                <div className="mt-2 mb-5 h-px w-full bg-gold/25" />
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3">
                      <div className="min-w-0">
                        <p className="text-cream">{item.name}</p>
                        {item.description && (
                          <p className="text-sm text-cream/55">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="mx-1 flex-1 border-b border-dotted border-gold/30" />
                      <span className="whitespace-nowrap font-medium text-gold-soft">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="tel:+381605009551"
              className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
            >
              Rezervacije: 060 500 9551
            </a>
            <p className="mt-6">
              <Link
                href="/"
                className="text-cream/70 underline decoration-gold/50 underline-offset-4 hover:text-gold-soft"
              >
                ← Nazad na početnu
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
