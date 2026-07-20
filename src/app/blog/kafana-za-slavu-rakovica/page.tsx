import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "kafana za slavu Rakovica"
export const metadata: Metadata = {
  title: "Kafana za slavu Rakovica: slavite bez brige",
  description:
    "Kafana za slavu Rakovica — Kuća Boema sprema slavsku trpezu po dogovoru: sarma, pečenje, posna opcija. Deo sale za vaše društvo. Zakažite na vreme.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Kafana za slavu u Rakovici — slavite kao domaćin, ne kao kuvar
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Slava dolazi jednom godišnje, a posla oko nje — kao za celu godinu. Ako
        tražite kafanu za slavu u Rakovici, Kuća Boema u Hasanaginice 8a prima
        vaše društvo kao svoje. Vi dovedete goste, mi postavimo trpezu. A
        domaćin, prvi put posle mnogo godina, sedne za sto sa svojim gostima.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Otvorili smo 2024. i od tada se kod nas već slavilo, krštavalo i
        pevalo. Kafana je mlada, ali slava je slava — red se zna. Gosti su nam
        na Google-u dali ocenu 4,9 iz preko 300 recenzija, a mi se i dalje
        ponašamo kao da je svaka slava prva.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Zašto slavu proslaviti u kafani u Rakovici
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Ko je spremao slavu kod kuće, zna. Tri dana kuvanja, dan spremanja, a
        domaćica celu slavu provede u kuhinji. U kafani je drugačije. Sto je
        postavljen, jela stižu topla, tanjiri se menjaju sami od sebe. Domaćin
        drži čašu, a ne kutlaču. I posle — nema sudova. To je, priznajmo, pola
        razloga. A i pesma lakše krene kad niko ne mora da ustaje.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Slavska trpeza po dogovoru — sarma, pečenje, posna opcija
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Meni pravimo zajedno. Zimi sarma i svadbarski kupus, tu su i podvarak,
        prebranac, gulaš, punjene paprike. Od pečenja — naše praseće
        bajaderice: prase se prvo otkosti, pa peče, pa se pečenje seče bez
        kosti. Ima i jagnjećeg pečenja i teletine ispod sača. Za početak
        kajmak, pršuta i čvarci, za kraj domaće oblande, bajadere ili
        palačinke. Uz sve to domaća rakija — šljiva, dunja, medovača — i vino
        iz naše karte, Prokupac ili Tamnjanika.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Pada li vam slava u post? Posnu trpezu spremamo po dogovoru. Kažete
        datum, mi sve ostalo.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Deo sale za vaše društvo
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Za slavu vam odvojimo deo sale, samo za vaše goste. Društvo od deset
        ili od četrdeset — dogovorimo se. Slavski kolač i žito donesete svoje,
        mesto na stolu ih čeka. Leti radi i bašta, a parkinga oko kafane ima
        dovoljno, pa niko ne kruži po kraju. Padne li vam slava u petak,
        dobijate i tamburaše — živa muzika svira petkom od 20 časova. Isto važi
        za krštenja i rođendane: meni po dogovoru, vaš deo sale i domaćinski
        red.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Kako da zakažete slavu
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Pozovite 060 500 9551 ili fiksni 011/359-2765. Dogovorimo datum, broj
        gostiju i meni — mrsni ili posni. Radimo od utorka do subote od 9 do
        23, nedeljom od 10 do 20, a ponedeljkom smo zatvoreni, pa taj dan
        imajte u vidu kad birate datum.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Slavite kod kuće, a kuvanje vas mrzi? Sva jela možete poručiti za
        poneti uz poziv unapred — i pečenje na kilo. Praseće je 4.400, jagnjeće
        3.800 dinara za kilogram. Dostavu nemamo, ali pečenje vas čeka toplo i
        spakovano.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Slava se ne sprema, slava se slavi — trpezu prepustite nama, a vi samo
        dovedite goste.
      </p>
      <p className="mt-6 text-ink-soft">
        Pogledajte i{" "}
        <Link
          href="/slave/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          našu ponudu za slave
        </Link>
        ,{" "}
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
