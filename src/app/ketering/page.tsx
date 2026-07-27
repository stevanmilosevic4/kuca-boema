import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import LangSwitcher from "@/components/LangSwitcher";

// Primarna ključna reč: "ketering Beograd" / "ketering za firme"
export const metadata: Metadata = {
  title: "Ketering za firme i proslave — Beograd",
  description:
    "Ketering iz kafane Kuća Boema u Rakovici: praseće pečenje na kilo, roštilj, gotova jela i meze plate za firme, događaje i slavlja. 060 500 9551.",
  alternates: {
    canonical: "/ketering/",
    languages: {
      sr: "/ketering/",
      en: "/en/catering/",
      ru: "/ru/catering/",
    },
  },
};

export default function KeteringPage() {
  return (
    <PageShell>
      <LangSwitcher current="sr" />

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · Rakovica
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Ketering za firme i proslave u Beogradu
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Kada firma slavi, kuhinja ne sme da bude briga. Kuća Boema sprema
        ketering iz sopstvene kuhinje — istu hranu zbog koje nam gosti daju
        ocenu 4,9 na Google-u: pečenje, roštilj, gotova jela i domaće meze
        plate. Vi kažete broj ljudi i priliku, mi složimo ponudu.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">Šta nudimo</h2>
      <ul className="mt-3 space-y-2 text-ink-soft leading-relaxed">
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Praseće bajaderice — pečenje bez
          kosti, na kilo (4.400 din/kg); jagnjeće pečenje (3.800 din/kg)
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Roštilj plate: ćevapi,
          pljeskavice, kobasice, ražnjići — za posluženje sa nogu
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Gotova jela u većim količinama:
          gulaš, mućkalica, prebranac; zimi sarma i svadbarski kupus
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Meze i plate: kajmak, pršuta,
          kulen, sirevi, čvarci — uz domaći hleb i pogače
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Salate i domaći dezerti
          (oblande, bajadere, palačinke); posna ponuda po dogovoru
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Za koga radimo ketering
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Poslovni ručkovi i kancelarijska posluženja, otvaranja i godišnjice
        firmi, novogodišnje i timske proslave, kao i privatna slavlja — slave,
        krštenja, rođendani u vašem prostoru. Ako je događaj kod nas, tu su
        sala i bašta; ako je kod vas, hrana putuje spakovana i topla.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Kako funkcioniše
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Jednostavno, u tri koraka: pozovete nas i kažete datum, broj gostiju i
        priliku → predložimo meni i cenu po osobi ili po kilu → potvrdite, a mi
        spremimo sve na vreme. Preuzimanje je u kafani, a logistiku za veće
        događaje dogovaramo prema potrebi. Za veće porudžbine molimo najavu
        nekoliko dana ranije.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Zašto Kuća Boema
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Zato što sve izlazi iz jedne kuhinje koja svaki dan hrani punu kafanu —
        ništa se ne naručuje sa strane. Pečenje se otkošćuje ručno, roštilj ide
        sa pravog žara, a količine i cene dogovaramo domaćinski: pošteno i bez
        sitnih slova.
      </p>

      <div className="mt-10">
        <a
          href="tel:+381605009551"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Zatražite ponudu: 060 500 9551
        </a>
      </div>

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
          href="/proslave/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          ponudu za proslave u kafani
        </Link>
        .
      </p>
    </PageShell>
  );
}
