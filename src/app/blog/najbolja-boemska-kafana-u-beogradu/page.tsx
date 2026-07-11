import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "najbolja boemska kafana u Beogradu"
export const metadata: Metadata = {
  title: "Najbolja boemska kafana u Beogradu",
  description:
    "Šta čini najbolju boemsku kafanu u Beogradu? Domaća kuhinja, živa muzika i duša — otkrijte zašto gosti biraju Kuću Boema u Rakovici.",
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
        meri zvezdicama, već osećajem: da li vas dočekaju kao svog, da li miriše
        pečenje, i da li se pesma zapeva sama od sebe. Upravo takvu kafanu
        gradimo u Rakovici.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        U Kući Boema sto se ne žuri, rakija je domaća, a naše praseće bajadere
        — pečenje bez kostiju — svakim danom u 15h izlaze vruće iz peći. Uz
        tamburaše i starogradsku pesmu, veče prođe kao tren.
      </p>

      <p className="mt-8 text-ink-soft">
        Uverite se sami —{" "}
        <Link
          href="/rezervacije/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          rezervišite sto
        </Link>{" "}
        ili pogledajte{" "}
        <Link
          href="/jelovnik/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          jelovnik
        </Link>
        .
      </p>
    </PageShell>
  );
}
