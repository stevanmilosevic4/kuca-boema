import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

// Primarna ključna reč: "kafana za proslave Beograd"
export const metadata: Metadata = {
  title: "Kafana za proslave Beograd",
  description:
    "Kafana za proslave u Beogradu — rođendani, krštenja i porodična slavlja u kafani Kuća Boema u Rakovici. Domaća kuhinja i živa muzika. 060 500 9551.",
};

export default function ProslavePage() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · Rakovica
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Kafana za proslave u Beogradu
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Tražite kafanu za proslavu u Beogradu? Kuća Boema u Rakovici je pravo
        mesto za okupljanja koja se pamte — topla boemska atmosfera, domaća
        kuhinja i naše čuveno praseće pečenje bez kostiju na stolu.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Kafana za rođendan, krštenje i porodičnu slavu
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Organizujemo rođendane, krštenja, slave i sva porodična okupljanja.
        Meni pravimo po dogovoru — od predjela i čorbi do pečenja i domaćih
        dezerata, po principu „kao kod kuće, samo bez posla u kuhinji“.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Živa muzika za vaše veče
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Uz tamburaše i starogradske pesme, svaka proslava u našoj kafani dobije
        onaj pravi boemski štimung zbog kojeg se gosti vraćaju.
      </p>

      <div className="mt-10">
        <a
          href="tel:+381605009551"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Pozovite i zakažite: 060 500 9551
        </a>
      </div>

      <p className="mt-8 text-ink-soft">
        Za manja društva —{" "}
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
