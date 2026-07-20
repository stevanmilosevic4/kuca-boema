import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "gde jesti pečenje u Beogradu"
export const metadata: Metadata = {
  title: "Gde jesti pečenje u Beogradu — vodič iz kafane",
  description:
    "Gde jesti pečenje u Beogradu? U Kući Boema u Rakovici bajaderice bez kosti izlaze vruće svakog dana u 15h. Jagnjetina, teletina ispod sača, za poneti.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Gde jesti pečenje u Beogradu — iskren odgovor iz Rakovice
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Pitanje gde jesti pečenje u Beogradu deli goste na dva tabora. Jedni
        jure poznate adrese u centru, drugi znaju da se najbolje prase peče
        tamo gde se ne žuri. Mi u Kući Boema, u Hasanaginice 8a u Rakovici,
        spadamo u ove druge. Kod nas pečenje nije jedna stavka na meniju — ono
        je razlog što se svakog dana u 15h zna dokle miriše naša ulica.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Otvorili smo se 2024. i od prvog dana držimo jedno pravilo: pečenje se
        ne pravi na brzinu. Prase mora biti mlado, vatra strpljiva, a majstor
        još strpljiviji. Sve ostalo je detalj.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Šta odvaja dobro pečenje od osrednjeg
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Dobro pečenje se pozna pre nego što ga probate. Koža puca pod nožem,
        meso se ne vuče, miris stigne do stola pre tanjira. Za to su potrebne
        tri stvari. Mlado prase, jer staro meso ne prašta. Strpljenje, jer se
        pečenje ne požuruje — bilo na ražnju ili pod sačem, vatra mora da radi
        polako, satima. I ruka koja zna tačno kada je gotovo. Ko te tri stvari
        nema, nadoknađuje ih začinima i pričom. Mi radije ćutimo i pečemo.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Praseće bajaderice: pečenje bez kosti, vruće u 15h
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Naš specijalitet je jednostavan na papiru, a redak u praksi. Prase se
        prvo celo otkosti, pa tek onda peče. Tako nastaju praseće bajaderice —
        pečenje bez ijedne kosti, koje se seče kao kolač i jede bez borbe.
        Vruće izlaze svakog dana u 15h, a kilogram je 4.400 dinara.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Ako ste više za jagnjetinu, jagnjeće pečenje je 3.800 dinara po
        kilogramu. Tu je i teletina ispod sača — porcija od 300 grama, meka
        toliko da je viljuška dovoljna, za 1.750 dinara.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Pečenje u Beogradu za poneti? Može, na kilo
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Dostavu nemamo, i to namerno — pečenje ne trpi čekanje u kutiji po
        gradu. Ali sve što se kod nas jede može i za poneti, pa i pečenje na
        kilo. Dovoljno je da pozovete unapred na 060 500 9551, kažete koliko i
        za kada, i sačekaće vas spakovano. Za slavu, rođendan ili nedeljni
        ručak kod kuće — prase stigne do vaše trpeze, samo što po njega
        dolazite vi.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Zašto baš Rakovica
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Zato što se do nas lako stiže, a parkinga oko kafane ima dovoljno — bez
        kruženja i nervoze. Kad je lepo vreme, sedi se u bašti. Petkom od 20h
        sviraju tamburaši i starogradska muzika, pa se ručak ume pretvoriti u
        veče. Radimo od utorka do subote od 9 do 23h, nedeljom od 10 do 20h, a
        ponedeljkom se odmaramo. Gosti su nam na Google-u dali ocenu 4,9 iz 303
        recenzije. Ne hvalimo se, samo kažemo.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Sledeći put kad se zapitate gde jesti pečenje u Beogradu, znajte da vas
        u Hasanaginice 8a čeka odgovor koji se oseti već s vrata — sto
        rezervišite na 060 500 9551 ili 011/359-2765.
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
