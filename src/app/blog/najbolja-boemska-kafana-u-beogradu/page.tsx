import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "najbolja boemska kafana u Beogradu"
export const metadata: Metadata = {
  title: "Najbolja boemska kafana u Beogradu",
  description:
    "Šta čini najbolju boemsku kafanu u Beogradu? Domaća kuhinja, tambura i domaćinski red — otkrijte zašto gosti daju Kući Boema ocenu 4,9.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Najbolja boemska kafana u Beogradu — šta je čini pravom?
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Kad neko pita gde je najbolja boemska kafana u Beogradu, odgovor se ne
        meri zvezdicama, već osećajem: da li vas dočekaju kao svog, da li
        miriše pečenje, i da li se pesma zapeva sama od sebe. Upravo takvu
        kafanu smo izgradili u Rakovici — a da li smo uspeli, najbolje govore
        gosti: na Google-u nam stoji ocena 4,9 iz 303 recenzije.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Tri stvari po kojima se prava boemska kafana poznaje
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Prva je trpeza: domaća, poštena, bez mudrovanja. Kajmak koji se maže
        preko cele pogače, čorba koja krčka od jutra, pečenje koje se topi.
        Druga je muzika — ne zvučnik u ćošku, nego tambura koja priđe stolu.
        Treća, najvažnija: domaćinski red. Gost se ne požuruje, konobar se ne
        traži pogledom, a račun nikad ne pokvari veče.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        U Kući Boema sto se ne žuri, rakija je domaća — šljiva, kajsija, dunja,
        medovača — a vinska karta ume da iznenadi: od Prokupca do Tamnjanike.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Ritual koji nas izdvaja: bajaderice u 15h
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Svaka kafana ima nešto svoje. Naše je pečenje bez kosti — praseće
        bajaderice, koje svakim danom u 15h izlaze vruće iz peći. Prase se
        prvo otkosti, pa peče, pa se seče na uredne komade koji se jedu bez
        ikakve borbe. Stalni gosti već znaju: ko dođe u tri, jede najbolje.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Petkom od 20h stižu i tamburaši sa starogradskim pesmama, pa se od
        kasnog ručka lako stigne do večeri koja se pamti.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Boemska kafana — ali pre svega restoran za celu porodicu
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Boemi jesu u imenu, ali kod nas se pre svega jede: porodični ručkovi
        nedeljom, slave i krštenja u delu sale samo za vaše društvo, bašta kad
        je lepo vreme. Parkinga oko kafane ima dovoljno. Radimo od utorka do
        subote 09–23h, nedeljom 10–20h; ponedeljkom smo zatvoreni.
      </p>

      <p className="mt-8 text-ink-soft leading-relaxed">
        Uverite se sami zašto gosti kažu da smo najbolja boemska kafana u
        Beogradu — Hasanaginice 8a, Rakovica.
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
