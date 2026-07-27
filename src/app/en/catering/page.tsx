import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import LangSwitcher from "@/components/LangSwitcher";
import SetLang from "@/components/SetLang";

// English catering page for companies and expats in Belgrade.
export const metadata: Metadata = {
  title: "Catering in Belgrade — Serbian food for events",
  description:
    "Corporate and event catering from Kuća Boema, a family-run kafana in Belgrade: spit-roasted pork by the kilo, grill platters, home-style dishes. +381 60 500 9551.",
  alternates: {
    canonical: "/en/catering/",
    languages: {
      sr: "/ketering/",
      en: "/en/catering/",
      ru: "/ru/catering/",
    },
  },
};

export default function CateringPage() {
  return (
    <PageShell>
      <SetLang lang="en" />
      <LangSwitcher current="en" />

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · Belgrade
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Catering in Belgrade — real Serbian food for your event
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        When your company celebrates, the kitchen shouldn&apos;t be your
        problem. Kuća Boema is a family-run kafana in Belgrade&apos;s Rakovica
        district, rated 4.9 from 300+ Google reviews — and our catering is the
        same food our guests come back for: slow-roasted pork, charcoal grill,
        home-style Serbian dishes and generous meze platters.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">What we offer</h2>
      <ul className="mt-3 space-y-2 text-ink-soft leading-relaxed">
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Our signature: boneless
          spit-roasted suckling pig, sold by the kilo (4,400 RSD/kg); roast
          lamb (3,800 RSD/kg)
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Grill platters: ćevapi, stuffed
          burgers, smoked sausages and skewers — ideal for standing receptions
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Home-style mains in bulk:
          goulash, mućkalica, baked beans; sarma and sauerkraut in winter
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Meze boards: kajmak, prosciutto,
          kulen, cheeses — with fresh homemade bread
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Salads and homemade desserts;
          Lenten (fasting) menu on request
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Who it&apos;s for
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Office lunches, company anniversaries, team events and New Year
        parties — as well as private family celebrations at your venue. If
        you&apos;d rather come to us, our dining room and garden host groups of
        any size.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">How it works</h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Three steps: call us with the date, headcount and occasion → we propose
        a menu and a price per person or per kilo → you confirm, we have
        everything ready on time. Pickup is at the kafana; logistics for larger
        events are arranged individually. For bigger orders, please give us a
        few days&apos; notice.
      </p>

      <div className="mt-10">
        <a
          href="tel:+381605009551"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Get a quote: +381 60 500 9551
        </a>
      </div>

      <p className="mt-8 text-ink-soft">
        See our{" "}
        <Link
          href="/jelovnik/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          full menu
        </Link>{" "}
        (in Serbian) or find us at Hasanaginice 8a, Rakovica, Belgrade.
      </p>
    </PageShell>
  );
}
