import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "kafana sa tamburašima"
export const metadata: Metadata = {
  title: "Kafana sa tamburašima u Beogradu",
  description:
    "Kafana sa tamburašima u Beogradu — veče uz tamburu, domaću kuhinju i boemski štimung u kafani Kuća Boema u Rakovici.",
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
        Malo šta zvuči kao Beograd koliko kafana sa tamburašima. Kad tambura
        krene, stolovi se primaknu, pesma se prihvati i veče dobije dušu. U
        Kući Boema u Rakovici negujemo baš taj običaj — muziku koja se sluša
        izbliza, uz dobru kapljicu i pun sto.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Najlepše je doći uveče, kada uz vruće pečenje i domaću rakiju tamburaši
        obiđu svaki sto. Vikendom preporučujemo rezervaciju.
      </p>

      <p className="mt-8 text-ink-soft">
        <Link
          href="/rezervacije/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          Rezervišite sto
        </Link>{" "}
        za sledeće veče uz tamburu.
      </p>
    </PageShell>
  );
}
