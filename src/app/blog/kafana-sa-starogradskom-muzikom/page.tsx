import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "kafana sa starogradskom muzikom"
export const metadata: Metadata = {
  title: "Kafana sa starogradskom muzikom",
  description:
    "Kafana sa starogradskom muzikom u Beogradu — pesme koje ne stare, petkom od 20h u Kući Boema u Rakovici. Uz pečenje, rakiju i domaćinski red.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Kafana sa starogradskom muzikom — pesme koje ne stare
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Starogradska pesma je srce svake prave kafane. To su melodije koje su
        pevali naši stari — i koje i danas, čim krenu, podignu ceo sto. Ako
        tražite kafanu sa starogradskom muzikom u Beogradu, u Kući Boema u
        Rakovici čeka vas baš takvo veče: petkom od 20h, uživo, od stola do
        stola.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Zašto starogradska muzika i dalje puni kafane
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Zato što je svako zna, a niko je se nije zasitio. Starogradske pesme ne
        traže savršen glas — traže društvo. Deda ih pamti iz mladosti, unuk ih
        nauči do deserta, i negde oko ponoći svi pevaju iste stihove. Malo koja
        muzika ume tako da sastavi generacije za jednim stolom.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Kod nas se ne svira sa zvučnika. Tamburaši prolaze kroz kafanu, staju
        uz sto, primaju želje. Prvo se sluša, pa se pevuši, pa se peva — taj
        red se nikad ne menja.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Šta ide uz pesmu: pečenje, rakija i strpljenje
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Uz šampanjac se slavi, ali uz starogradsku se živi: teleća čorba za
        početak, pa naše praseće bajaderice — pečenje bez kosti koje svakim
        danom u 15h izlazi vruće — ili nešto sa žara, od ćevapa na kajmaku do
        gurmanske pljeskavice. Uz to čašica domaće šljive ili dunje, a za sam
        kraj palačinke ili oblande uz domaću kafu.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Kad doći i kako sačuvati sto
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Muzika svira petkom od 20h, a najlepše mesto ima onaj ko dođe ranije —
        da na miru poruči meze i dočeka prvu pesmu za postavljenim stolom.
        Petak se popuni brzo, pa pozovite 060 500 9551 ili 011/359-2765 i
        recite koliko vas stiže. Parkinga oko kafane ima dovoljno, a leti se
        pesma najlepše čuje iz bašte.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Ponesite dobro raspoloženje — pesmarica vam kod nas neće trebati,
        stihovi se sami vrate.
      </p>
      <p className="mt-6 text-ink-soft">
        Pogledajte{" "}
        <Link
          href="/jelovnik/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          kompletan jelovnik
        </Link>{" "}
        ili{" "}
        <Link
          href="/rezervacije/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          rezervišite sto
        </Link>
        .
      </p>
    </PageShell>
  );
}
