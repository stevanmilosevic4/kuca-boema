import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "restoran za slavu Beograd"
export const metadata: Metadata = {
  title: "Restoran za slavu Beograd",
  description:
    "Restoran za slavu u Beogradu — Kuća Boema u Rakovici. Sarma, pečenje i posna trpeza po dogovoru, za celu porodicu. Rezervacije: 060 500 9551.",
};

export default function SlavePage() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · Rakovica
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Restoran za slavu u Beogradu
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Slava je najlepši dan u godini — a najveći posao u kući. Prepustite
        trpezu nama: Kuća Boema u Rakovici je restoran za slavu u kojem se
        gosti osećaju kao za domaćim stolom, a domaćin stigne da sedne i
        nazdravi.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Slavska trpeza po dogovoru
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Meni slažemo zajedno sa vama: sarma, praseće i jagnjeće pečenje,
        domaće čorbe, pite i salate — a po potrebi spremamo i posnu trpezu.
        Naš specijalitet, praseće pečenje bez kostiju, na slavama je uvek
        prvi prazan tanjir.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Restoran za krštenje i porodična okupljanja
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Pored slava, ugostili smo mnoga krštenja, rođendane i porodične
        ručkove. Za veće društvo organizujemo deo sale samo za vas — recite
        nam broj gostiju i datum, mi sređujemo ostalo.
      </p>

      <div className="mt-10">
        <a
          href="tel:+381605009551"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Zakažite slavu: 060 500 9551
        </a>
      </div>

      <p className="mt-8 text-ink-soft">
        Pogledajte i{" "}
        <Link
          href="/proslave/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          ponudu za proslave
        </Link>{" "}
        ili{" "}
        <Link
          href="/jelovnik/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          kompletan jelovnik
        </Link>
        .
      </p>
    </PageShell>
  );
}
