import Link from "next/link";

export default function Signature() {
  return (
    <section
      id="specijalitet"
      className="relative overflow-hidden bg-ink py-20 text-cream"
    >
      {/* warm glow behind the dish */}
      <div
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(80% 90% at 75% 50%, #5a1a22 0%, #2a0b0f 55%, #170607 100%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        {/* Text */}
        <div>
          <p className="inline-block rounded-full border border-gold/50 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gold-soft">
            Specijalitet kuće
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-cream sm:text-5xl">
            Praseće bajadere
            <span className="block text-gold-soft">— pečenje bez kostiju</span>
          </h2>
          <div className="rule-gold my-6 max-w-sm" />
          <p className="max-w-md text-cream/80 leading-relaxed">
            Naš ponos i ono po čemu nas pamte. Mlado prase najpre pažljivo
            otkoštimo, pa ga polako pečemo do zlatne, hrskave kore i složimo u
            sočne „bajadere“ — meso koje se topi, korica koja hrska i miris koji
            vraća u stara vremena. Bez kostiju, bez žurbe, samo savršen zalogaj.
          </p>

          <ul className="mt-6 space-y-2 text-cream/75">
            <li className="flex items-center gap-3">
              <span className="text-gold">✦</span> Pečeno na tradicionalan način
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">✦</span> Potpuno otkošteno — lako za
              jelo
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">✦</span> Sočno meso i hrskava korica u
              svakom zalogaju
            </li>
          </ul>

          <p className="mt-6 inline-flex items-center gap-2 rounded-sm border border-gold/60 bg-gold/10 px-4 py-2 font-medium text-gold-soft">
            <span aria-hidden="true">🔥</span> Vruće praseće bajadere — svakim
            danom u 15h
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-gold px-7 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
            >
              Rezervišite Vaš Sto
            </a>
            <Link
              href="/jelovnik/"
              className="rounded-full border border-gold-soft/60 px-7 py-3 font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Ceo jelovnik
            </Link>
          </div>
        </div>

        {/* Dish showcase — replace this block's background with a real photo:
            put e.g. /public/specijaliteti/prasece-bajadere.jpg and set it as
            backgroundImage on the inner div. */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rotate-3 rounded-sm border border-gold/30" />
          <div
            className="absolute inset-0 -rotate-2 rounded-sm shadow-2xl"
            style={{
              background:
                "linear-gradient(150deg, #7a3b16 0%, #5a1a22 50%, #2a0b0f 100%)",
            }}
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="font-display text-2xl text-gold-soft">
                Vaša fotografija
              </span>
              <span className="mt-1 text-sm text-cream/60">
                praseće bajadere
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
