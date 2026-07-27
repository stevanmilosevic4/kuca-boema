import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LangSwitcher from "@/components/LangSwitcher";
import RatingBadge from "@/components/RatingBadge";
import WhatsAppButton from "@/components/WhatsAppButton";

/*
  SKRIVENA B2B stranica — kancelarijski ketering.
  Nije linkovana nigde na sajtu, nije u sitemap-u i nosi noindex:
  do nje se dolazi samo direktnim linkom koji vlasnik šalje firmama.
*/
export const metadata: Metadata = {
  title: "Kancelarijski ketering — ponuda za firme",
  description:
    "Doručak i ručak za vaš tim, svakog radnog dana. Ponuda kafane Kuća Boema za firme u Beogradu.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/ketering/",
    languages: {
      sr: "/ketering/",
      en: "/en/catering/",
      ru: "/ru/catering/",
    },
  },
};

const paketi = [
  {
    naziv: "Doručak + ručak",
    cena: "2.000 RSD",
    jedinica: "po osobi dnevno",
    opis: "Kompletan dan: doručak po izboru iz nedeljnog menija + ručak (glavno jelo uz supu/čorbu ili salatu iz dnevne ponude).",
  },
  {
    naziv: "Samo ručak",
    cena: "1.200 RSD",
    jedinica: "po osobi dnevno",
    opis: "Glavno jelo po izboru iz nedeljnog menija, uz supu/čorbu ili salatu iz dnevne ponude.",
  },
];

export default function KeteringPage() {
  return (
    <PageShell>
      <LangSwitcher current="sr" />

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · ponuda za firme
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Kancelarijski ketering — doručak i ručak za vaš tim
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Kuća Boema svakog radnog dana sprema i donosi obroke timovima u
        Beogradu — sveže, iz sopstvene kuhinje koja istovremeno hrani punu
        kafanu. Svaki zaposleni bira svoje jelo iz nedeljnog menija, a vama
        stiže jedna uredna isporuka u kancelariju.
      </p>
      <div className="mb-4">
        <RatingBadge label="Google ocena" />
      </div>

      <h2 className="mt-10 font-display text-2xl text-wine">Paketi i cene</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {paketi.map((p) => (
          <div
            key={p.naziv}
            className="rounded-sm border border-gold/40 bg-cream p-6"
          >
            <p className="font-display text-xl text-wine">{p.naziv}</p>
            <p className="mt-2 text-3xl font-medium text-gold">
              {p.cena}
              <span className="ml-2 text-sm font-normal text-ink-soft">
                {p.jedinica}
              </span>
            </p>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {p.opis}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        Tačan sastav paketa i dinamiku prilagođavamo vašem timu pri dogovoru.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Kako funkcioniše
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Svake nedelje dobijate meni za narednu sedmicu — jednostavnu tabelu u
        koju svaki zaposleni upiše šta želi za koji dan. Mi spremimo tačno toliko, i obroci stižu u vaše prostorije
        svakog radnog dana. Bez viška, bez bacanja, bez „šta ćemo danas".
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Iz nedeljnog menija — doručak
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Hercegovački uštipci (slani sa kajmakom, sirom i ajvarom ili slatki sa
        džemom i eurokremom), omleti i jaja na oko, kačamak, domaće pite (sir,
        sir i zelje, krompir, pečurke), wrapovi (Cezar, tuna, kajgana, cepkana
        prasetina), kroasani (caprese, mortadela, dimljeni losos, pršuta),
        proteinska i ovsena kaša, granola sa grčkim jogurtom, sendviči.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Iz nedeljnog menija — ručak
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Supe i čorbe:</strong> teleća čorba,
        pileća supa, pileća čorba.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Glavna jela:</strong> juneći gulaš,
        punjene paprike, pasulj sa suvim rebrima, pileći paprikaš, praseće
        pečenje bez kostiju sa pekarskim krompirom, ćevapi sa kajmakom,
        gurmanska pljeskavica, pileća bečka šnicla, pileći file u sosu od
        pečuraka, grilovana piletina ili ćuretina sa integralnim pirinčem,
        njoke (sa ćuretinom ili 4 vrste sira), rižoto (povrće ili
        piletina-kari), različite paste, Cezar salata.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Salate:</strong> srpska, šopska, grčka,
        moravska, tarator, prolećna, bašta, kupus, krastavac, paradajz sa
        sirom.
      </p>
      <p className="mt-3 text-sm text-ink-soft">
        Ovo je naš standardni meni — i samo polazna tačka. Recite nam šta vaš
        tim voli, i skrojićemo ga po vašoj meri.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Zašto firme ostaju kod nas
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Prava kuhinja, ne ketering-fabrika: sve se sprema tog jutra, u kafani
        koja živi od svog imena. Svaki zaposleni bira svoje jelo — nema
        „uzmi ili ostavi" menija. A cena je fiksna po osobi, pa budžet znate
        unapred.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="tel:+381616056076"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Pozovite: +381 61 60 56 076
        </a>
        <WhatsAppButton
          label="Pišite na WhatsApp"
          message="Zdravo Stevane! Zanima nas ponuda kancelarijskog keteringa."
        />
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Stevan · +381 61 60 56 076 · Kuća Boema · Hasanaginice 8a, Rakovica,
        Beograd
      </p>
    </PageShell>
  );
}
