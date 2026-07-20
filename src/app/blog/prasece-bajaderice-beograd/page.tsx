import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "praseće bajaderice"
export const metadata: Metadata = {
  title: "Praseće bajaderice — pečenje bez kosti",
  description:
    "Praseće bajaderice u Kući Boema: prase se prvo otkosti, pa peče. Vruće svakog dana u 15h u Rakovici. Za poneti na kilo uz poziv unapred.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Praseće bajaderice — pečenje bez kosti koje izlazi vruće u 15h
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Svaka kafana ima jelo po kome se pamti. Kod nas su to praseće
        bajaderice — praseće pečenje bez ijedne kosti. Prase se prvo strpljivo
        otkosti, pa tek onda ide na pečenje. Na sto stiže čisto, sočno meso pod
        hrskavom koricom. Bez kosti, bez rasipanja, bez rvanja s nožem.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        U Kući Boema u Rakovici to nije samo stavka na jelovniku. To je ritual.
        Svakog dana u 15h bajaderice izlaze vruće iz peći, a miris pečenja se
        oseti pre nego što uđete u baštu.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Šta su praseće bajaderice i zašto baš bez kosti
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Postupak je jednostavan da se ispriča, a zahtevan da se uradi. Prase se
        najpre celo otkosti — polako, ručno, bez žurbe. Tek tada ide na
        pečenje, da se meso peče ravnomerno, a korica uhvati onu boju zbog koje
        se glave okreću za poslužavnikom.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Zašto bez kosti? Zato što je svaki zalogaj — zalogaj. Nema traženja
        mesa oko kosti, nema polomljenih komada na tanjiru. Pečenje se seče na
        uredne, pune komade, kao bajadere na kocke — lepo za oko, lako za ruku.
        Kad služite goste, ta razlika se vidi na trpezi i pamti se posle.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Svakog dana u 15h — vruće iz peći
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Kod nas se zna red. Bajaderice izlaze vruće svakog dana u 15h —
        ponedeljkom odmaramo i mi i peć. Stalni gosti to znaju, pa dođu koji
        minut ranije, naruče domaću rakiju, šljivu ili dunju, uzmu malo kajmaka
        i pršute za početak. A onda stigne ono glavno.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Najbolje su dok su tople: korica još puca, a meso se ne seče nego
        razdvaja. Uz to topla lepinja ili pogača, kašika kajmaka i sveža salata
        — i ne treba vam više ništa, osim vremena da se sedi. Petkom uveče uz
        sve to zasviraju i tamburaši, pa se od pečenja lako stigne do pesme.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Za poneti na kilo — za slavu, rođendan i punu trpezu
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Dostavu nemamo. Ali sve iz naše kuhinje možete poneti sa sobom — samo
        je važno da pozovete unapred. Praseće bajaderice idu i na kilo, po
        4.400 dinara za kilogram, pa mnogi kod nas naručuju pečenje za slavu,
        krštenje ili rođendan kod kuće.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        A ako slavlje pravite kod nas, meni dogovaramo zajedno — od predjela do
        domaćih oblandi i bajadera za kraj. Za slave po dogovoru spremamo i
        posnu trpezu. Bašta i sala primaju i veće društvo, a parkinga oko
        kafane ima dovoljno, pa niko ne mora da kruži.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Bajaderice izlaze u tri — dođite u Hasanaginice 8a u Rakovici, a sto
        najlakše sačuvate pozivom na 060 500 9551.
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
