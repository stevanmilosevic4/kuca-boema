import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "kafana sa starogradskom muzikom"
export const metadata: Metadata = {
  title: "Kafana sa starogradskom muzikom",
  description:
    "Kafana sa starogradskom muzikom u Beogradu — pesme koje ne stare, domaća kuhinja i boemska atmosfera u Kući Boema u Rakovici.",
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
        Rakovici čeka vas baš takvo veče.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Uz šampanjac se slavi, ali uz starogradsku se živi: dobra čorba,
        pečenje koje se topi i pesma do fajronta.
      </p>

      <p className="mt-8 text-ink-soft">
        <Link
          href="/rezervacije/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          Rezervišite sto
        </Link>{" "}
        i ponesite dobro raspoloženje.
      </p>
    </PageShell>
  );
}
