import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "gde na boemsko veče u Beogradu"
export const metadata: Metadata = {
  title: "Gde na boemsko veče u Beogradu?",
  description:
    "Gde na boemsko veče u Beogradu? U Kući Boema u Rakovici: domaća rakija, praseće bajaderice i tamburaši petkom od 20h. Rezervišite sto na vreme.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Gde na boemsko veče u Beogradu?
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Ako se pitate gde na boemsko veče u Beogradu, a ne mili vam se gužva u
        centru, imamo predlog. Kuća Boema u Rakovici, u Hasanaginice 8a,
        otvorena je 2024. i već nosi ocenu 4,9 na Google-u od preko tri stotine
        gostiju. Petkom od 20h sviraju tamburaši, rakija je domaća, a pečenje
        se vadi iz peći svakog dana u 15h.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Boemsko veče nije spisak tačaka, ali ima svoj red: prvo rakija, pa
        meze, pa pečenje, pa pesma. Evo kako to izgleda kod nas, od prve čašice
        do onog čuvenog „još malo pa idemo“.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Prvo rakija, pa meze
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Veče ne počinje jelovnikom, nego pitanjem: šljiva, kajsija, dunja ili
        medovača? Dok se odlučite, na sto stižu kajmak, pršuta i čvarci. Ko je
        za vino, tu su Prokupac i Tamnjanika, a ima i točenog piva. Nigde se ne
        žuri. Meze i jeste smišljeno da traje: zalogaj, gutljaj, priča. Pa opet
        iz početka.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Praseće bajaderice — glavni čin večeri
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Naš specijalitet su praseće bajaderice. Prase se prvo otkosti, pa tek
        onda peče, i na sto stiže pečenje bez ijedne kosti — samo meso i
        hrskava korica. Vruće je svakog dana od 15h, a kilogram je 4.400
        dinara, taman za društvo koje je došlo da sedi.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Ko nije za prasetinu, ima kud: jagnjeće pečenje, teletina ispod sača,
        pa ceo roštilj — od ćevapa na kajmaku do boemskog ražnjića i gurmanske
        pljeskavice. Uz to salate, a kasnije oblande, bajadere ili palačinke uz
        tursku kafu.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Petkom tambura, pa „još malo pa idemo“
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Petkom od 20h u kafanu ulaze tamburaši. Starogradska pesma se prvo
        sluša, pa pevuši, pa se na kraju peva iz glasa. Negde između stigne još
        jedna tura rakije, poruči se dezert, i neko za stolom kaže ono naše:
        „još malo pa idemo“. Po pravilu, to malo potraje. Radimo do 23h, taman
        da se veče zaokruži kako valja.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Boemsko veče u Beogradu — a mir Rakovice
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Ne mora svako boemsko veče da se traži u centru grada. U Rakovici nema
        gužve ni kruženja u potrazi za mestom — javnog parkinga oko kafane ima
        dovoljno. Za tople večeri tu je bašta.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Ako dolazite s društvom, rezervišite sto na vreme, petak se brzo
        popuni. Zovite 060 500 9551 ili 011/359-2765. Ponedeljkom smo
        zatvoreni, od utorka do subote radimo od 9 do 23h, nedeljom od 10 do
        20h.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Vidimo se u petak — tamburaši kreću u 20h, rakija je hladna, a sto vas
        čeka ako ga na vreme rezervišete.
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
