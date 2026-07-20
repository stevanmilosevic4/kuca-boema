import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "kafana sa tamburašima"
export const metadata: Metadata = {
  title: "Kafana sa tamburašima u Beogradu",
  description:
    "Kafana sa tamburašima u Beogradu — Kuća Boema u Rakovici. Živa muzika petkom od 20h, starogradske pesme, pečenje i domaća rakija. Rezervišite sto.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Kafana sa tamburašima — veče uz tamburu u Beogradu
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Kafana sa tamburašima danas se traži kao nekad dobar majstor — svi
        znaju da negde postoji, ali malo ko zna gde da je nađe. Mi u Kući
        Boema, u Hasanaginice 8a u Rakovici, imamo jednostavan odgovor: dođite
        petkom. Od 20 časova kod nas sviraju tamburaši, starogradska pesma
        kreće od stola do stola, i negde oko treće pesme cela kafana peva.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Nismo mi to izmislili. Samo smo 2024. godine otvorili vrata i pustili
        pesmu da radi ono što najbolje ume — da spoji punu trpezu, čašicu
        rakije i društvo koje ne gleda na sat.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Kako izgleda veče u kafani sa tamburašima
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Petkom oko osam uveče kafana promeni ritam. Tamburaši uđu tiho, gotovo
        neprimetno, i krenu od stola do stola. Prvo neka lagana starogradska,
        tek da se probije led. Onda neko iz ugla naruči svoju pesmu — i gotovo,
        tihih stolova više nema.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Pevaju se starogradske i boemske pesme. One koje svi znamo napamet i
        one za koje smo mislili da smo ih zaboravili. Tambura ima tu moć: priđe
        stolu, pogleda vas i izvuče iz vas pesmu koju niste ni znali da nosite.
        Do kraja večeri peva se u glas.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Šta se jede i pije uz tamburu
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Uz tamburu ide ozbiljna trpeza. Za početak meze: kajmak, pršuta,
        čvarci. Onda naše praseće bajaderice — pečenje bez kosti koje se seče
        bez muke, vruće svakog dana od 15 časova, pa ga petkom uveče slobodno
        tražite. Ko je za roštilj, tu su ćevapi na kajmaku, boemski ražnjić i
        gurmanska pljeskavica.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Piće birajte po pesmi. Uz lagane starogradske ide domaća šljiva ili
        dunja, uz večeru Prokupac ili Tamnjanika, a medovača dođe kao slatka
        tačka na kraju. Ima i točenog piva, za one koji najlepše nazdravljaju
        kriglom.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Savet domaćina: petkom rezervišite sto
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Petkom je kafana puna, a leti i bašta. Zato da kažemo otvoreno: bez
        rezervacije rizikujete da veče uz tamburaše slušate s ulice. Pozovite
        nas na 060 500 9551 ili na fiksni 011/359-2765, recite koliko vas
        dolazi i sto vas čeka.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Parkinga oko kafane ima dovoljno, pa ni to nije briga. Petkom radimo od
        9 ujutru do 23 časa, ali za muziku važi jedno pravilo — dođite pre
        osam, smestite se, poručite meze i sačekajte prvu pesmu na miru. Ostalo
        prepustite tamburašima.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Ako ste dugo tražili pravu kafanu sa tamburašima, petak uveče u Kući
        Boema je vaš odgovor.
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
