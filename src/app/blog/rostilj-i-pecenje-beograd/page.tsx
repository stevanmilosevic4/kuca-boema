import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "restoran roštilj i pečenje"
export const metadata: Metadata = {
  title: "Restoran za roštilj i pečenje u Beogradu",
  description:
    "Tražite restoran za roštilj i pečenje u Beogradu? U Kući Boema u Rakovici pečenje se vrti na ražnju, a roštilj cvrči na žaru — svaki dan.",
};

export default function Post() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Boemske priče
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Restoran za roštilj i pečenje — gde meso ima ukus kao nekad
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Dobar restoran za roštilj i pečenje poznaje se po mirisu pre nego što
        uđete. U Kući Boema u Rakovici pečenje se polako vrti na ražnju, a
        roštilj cvrči na pravom žaru — bez prečica i bez žurbe.
      </p>
      <p className="mb-4 text-ink-soft leading-relaxed">
        Iz naše kuhinje izlaze praseće bajaderice (pečenje bez kostiju, vruće
        svakim danom u 15h), jagnjeće pečenje, teletina ispod sača, ćevapi,
        gurmanska pljeskavica i mešano meso za celo društvo. Uz to — domaći
        hleb, kajmak i salate sa pijace.
      </p>

      <p className="mt-8 text-ink-soft">
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
