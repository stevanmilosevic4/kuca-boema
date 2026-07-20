import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "restoran roštilj i pečenje"
export const metadata: Metadata = {
  title: "Restoran za roštilj i pečenje u Beogradu",
  description:
    "Tražite restoran za roštilj i pečenje u Beogradu? U Kući Boema u Rakovici pečenje se vrti na ražnju, a roštilj cvrči na žaru — svaki dan osim ponedeljka.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Restoran za roštilj i pečenje — gde meso ima ukus kao nekad
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Dobar restoran za roštilj i pečenje poznaje se po mirisu pre nego što
        uđete. U Kući Boema u Rakovici pečenje se polako vrti na ražnju, a
        roštilj cvrči na pravom žaru — bez prečica i bez žurbe. Vatra, meso i
        strpljenje: to je ceo recept, a upravo zato ga je tako teško naći.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Kod nas se žar loži svakog jutra, a peć ne staje do večeri. Ponedeljkom
        odmaramo — i mi, i peć, i ražanj.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Šta izlazi sa našeg žara
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Roštilj je kod nas ozbiljna disciplina: ćevapi i ćevapi na kajmaku,
        pljeskavica i gurmanska pljeskavica, boemski ražnjić, dimljene
        kobasice, rolovana vešalica, pa mešano meso za celo društvo. Sve na
        žaru, sve u trenutku kad naručite. Uz to lepinja ili domaći hleb,
        kajmak i salate — od šopske do kiselog kupusa zimi.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        A pečenje je priča za sebe. Praseće bajaderice — prase koje se prvo
        otkosti, pa peče — izlaze vruće svakog dana u 15h, po 4.400 dinara za
        kilogram. Tu su i jagnjeće pečenje i teletina ispod sača, mekana da se
        seče viljuškom.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Za porodični ručak i za veliko društvo
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Roštilj i pečenje su jela koja se dele — zato su nam stolovi široki, a
        porcije domaćinske. Nedeljom se kod nas smenjuju porodični ručkovi, a
        za rođendane, slave i proslave odvojimo deo sale i složimo meni po
        dogovoru. Kad je lepo vreme, sedi se u bašti; parkinga oko kafane ima
        dovoljno, pa gosti dolaze bez brige.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Roštilj i pečenje za poneti
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Dostavu nemamo, ali sve sa žara i iz peći možete naručiti za poneti —
        pozovite unapred na 060 500 9551 i sačekaće vas spakovano, toplo i na
        vreme. Pečenje ide i na kilo, pa mnogi kod nas poručuju trpezu za
        slavlja kod kuće.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Radimo od utorka do subote 09–23h i nedeljom 10–20h — dođite u
        Hasanaginice 8a i uverite se zašto se za dobrim roštiljem i pečenjem ne
        ide u centar, nego u Rakovicu.
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
