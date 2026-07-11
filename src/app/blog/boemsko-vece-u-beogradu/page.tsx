import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "gde na boemsko veče u Beogradu"
export const metadata: Metadata = {
  title: "Gde na boemsko veče u Beogradu?",
  description:
    "Gde na boemsko veče u Beogradu? Živa muzika, domaća kuhinja i kafanski štimung — provedite boemsko veče u Kući Boema u Rakovici.",
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
        Ako se pitate gde na boemsko veče u Beogradu, a da ne bude gužva i
        žurba — odgovor je u Rakovici. Kuća Boema je kafana u kojoj se veče ne
        planira po satu: sedne se, naruči, zapeva i ostane „još malo“.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Preporuka kuće za pravo boemsko veče: dođite petkom, kada od 20h svira
        živa muzika — krenite od domaće rakije i kajmaka, nastavite uz praseće
        bajadere, a kraj prepustite tamburašima.
      </p>

      <p className="mt-8 text-ink-soft">
        Vidimo se u Hasanaginice 8a —{" "}
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
