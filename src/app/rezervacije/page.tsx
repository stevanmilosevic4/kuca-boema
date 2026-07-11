import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "kafana rezervacije"
export const metadata: Metadata = {
  title: "Kafana rezervacije — sto u Rakovici",
  description:
    "Kafana rezervacije u Beogradu — rezervišite sto u kafani Kuća Boema u Rakovici. Pozovite 060 500 9551. Utorak–subota 09–23h, nedelja 10–20h.",
};

export default function RezervacijePage() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · Rakovica
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Kafana rezervacije — rezervišite svoj sto
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Rezervacija stola u restoranu Kuća Boema traje minut — pozovite nas i
        recite za koliko osoba i kada dolazite. Vikendom i za veče uz živu
        muziku preporučujemo rezervaciju bar dan ranije.
      </p>

      <div className="my-8 grid gap-4 sm:grid-cols-2">
        <a
          href="tel:+381605009551"
          className="rounded-sm border border-gold/40 bg-cream p-6 transition-colors hover:bg-gold/10"
        >
          <p className="text-sm uppercase tracking-widest text-gold">
            Rezervacije
          </p>
          <p className="mt-2 text-xl font-medium text-wine">060 500 9551</p>
        </a>
        <a
          href="tel:+381113592765"
          className="rounded-sm border border-gold/40 bg-cream p-6 transition-colors hover:bg-gold/10"
        >
          <p className="text-sm uppercase tracking-widest text-gold">Fiksni</p>
          <p className="mt-2 text-xl font-medium text-wine">011 / 359 2765</p>
        </a>
      </div>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Radno vreme i adresa
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Utorak–subota 09–23h, nedelja 10–20h (ponedeljak neradan).
        <br />
        Hasanaginice 8a, Rakovica, Beograd.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Naručivanje za poneti
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Dostavu nemamo, ali sva jela — uključujući pečenje na kilo — možete
        naručiti telefonom i pokupiti spremno u dogovoreno vreme.
      </p>

      <p className="mt-8 text-ink-soft">
        Planirate veće društvo?{" "}
        <Link
          href="/proslave/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          Pogledajte našu ponudu za proslave
        </Link>{" "}
        ili se vratite na{" "}
        <Link
          href="/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          početnu stranu
        </Link>
        .
      </p>
    </PageShell>
  );
}
