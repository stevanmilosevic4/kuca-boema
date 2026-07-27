import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LangSwitcher from "@/components/LangSwitcher";
import SetLang from "@/components/SetLang";
import RatingBadge from "@/components/RatingBadge";
import WhatsAppButton from "@/components/WhatsAppButton";

/*
  HIDDEN B2B page — office catering (English).
  Not linked anywhere, not in the sitemap, noindex — shared directly
  with companies by the owner.
*/
export const metadata: Metadata = {
  title: "Office catering — offer for companies",
  description:
    "Breakfast and lunch for your team, every workday. Office catering by Kuća Boema, Belgrade.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/catering/",
    languages: {
      sr: "/ketering/",
      en: "/en/catering/",
      ru: "/ru/catering/",
    },
  },
};

const packages = [
  {
    name: "Breakfast + lunch",
    price: "2,000 RSD",
    unit: "per person / day",
    desc: "The full day covered: breakfast of choice from the weekly menu + lunch (main course with soup or salad from the daily offer).",
  },
  {
    name: "Lunch only",
    price: "1,200 RSD",
    unit: "per person / day",
    desc: "Main course of choice from the weekly menu, with soup or salad from the daily offer.",
  },
];

export default function CateringPage() {
  return (
    <PageShell>
      <SetLang lang="en" />
      <LangSwitcher current="en" />

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · for companies
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Office catering — breakfast and lunch for your team
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Kuća Boema cooks and delivers fresh meals to Belgrade offices every
        workday — from the same kitchen that feeds a full kafana every day.
        Every employee picks their own dish from a weekly menu, and your
        office receives one tidy daily delivery.
      </p>
      <div className="mb-4">
        <RatingBadge label="Google rating" />
      </div>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Packages &amp; pricing
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {packages.map((p) => (
          <div
            key={p.name}
            className="rounded-sm border border-gold/40 bg-cream p-6"
          >
            <p className="font-display text-xl text-wine">{p.name}</p>
            <p className="mt-2 text-3xl font-medium text-gold">
              {p.price}
              <span className="ml-2 text-sm font-normal text-ink-soft">
                {p.unit}
              </span>
            </p>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        Exact package contents and schedule are tailored to your team.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">How it works</h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Each week you receive next week&apos;s menu — a simple sheet where
        every employee marks what they want for each day. We cook exactly that, and meals arrive at your
        office every workday. No waste, no guesswork, no &quot;what&apos;s for
        lunch&quot; debates.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        From the weekly menu — breakfast
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Herzegovinian uštipci (savoury with kajmak, cheese and ajvar — or sweet
        with jam and Eurocrem), omelettes and fried eggs, kačamak (polenta with
        cheese and kajmak), homemade pies (cheese, cheese &amp; chard, potato,
        mushroom), wraps (Caesar, tuna, scrambled egg, pulled pork), croissants
        (caprese, mortadella, smoked salmon, prosciutto), protein and oat
        porridge, granola with Greek yoghurt, sandwiches.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        From the weekly menu — lunch
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Soups:</strong> veal soup, clear chicken
        soup, chicken stew-soup.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Mains:</strong> beef goulash, stuffed
        peppers, beans with smoked pork ribs, chicken paprikash, boneless
        roast pork with baker&apos;s potatoes, ćevapi with kajmak, gourmet
        pljeskavica, chicken schnitzel, chicken fillet in mushroom sauce,
        grilled chicken or turkey with brown rice, gnocchi (turkey or
        four-cheese), risotto (vegetable or chicken-curry), a variety of pasta
        dishes, Caesar salad.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Salads:</strong> Serbian, šopska, Greek,
        Moravian, tarator, spring salad, garden salad, cabbage, cucumber,
        tomato with cheese.
      </p>
      <p className="mt-3 text-sm text-ink-soft">
        The menu rotates weekly, with new dishes added regularly.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Why companies stay with us
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        A real kitchen, not a catering factory: everything is cooked that
        morning, in a kafana that lives on its reputation. Every employee
        chooses their own meal — no take-it-or-leave-it set menus. And the
        price is fixed per person, so you know your budget upfront.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="tel:+381616056076"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Call: +381 61 60 56 076
        </a>
        <WhatsAppButton
          label="Chat on WhatsApp"
          message="Hi Stevan! We're interested in your office catering offer."
        />
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Stevan · +381 61 60 56 076 · Kuća Boema · Hasanaginice 8a, Rakovica,
        Belgrade
      </p>
    </PageShell>
  );
}
