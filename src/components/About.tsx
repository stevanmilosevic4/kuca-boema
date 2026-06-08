export default function About() {
  return (
    <section id="o-nama" className="bg-paper py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            O nama
          </p>
          <h2 className="font-display text-4xl text-wine sm:text-5xl">
            Duh stare Skadarlije
          </h2>
          <div className="rule-gold my-6 max-w-xs" />
          <p className="mb-4 text-ink-soft leading-relaxed">
            Već gotovo jedan vek, Kuća Boema okuplja goste oko dugih stolova
            zastrtih belim stolnjacima. Kroz našu baštu prošli su pesnici,
            glumci i putnici namernici — svako je poneo priču, a ostavio pesmu.
          </p>
          <p className="mb-4 text-ink-soft leading-relaxed">
            Kuvamo onako kako se kuvalo nekada: sporo, sa pažnjom i od
            najboljih domaćih namirnica. Roštilj na žaru, sarma koja krčka
            satima i rakija iz naše kace — to je naša svakodnevica.
          </p>
          <p className="text-ink-soft leading-relaxed">
            Uveče, kada zasviraju tamburaši, kafana oživi onako kako samo
            beogradska boemija ume.
          </p>
        </div>

        {/* Decorative panel — swap for a photo of the interior. */}
        <div className="relative">
          <div
            className="aspect-[4/5] w-full rounded-sm shadow-xl"
            style={{
              background:
                "linear-gradient(160deg, #5a1a22 0%, #3d1016 60%, #2a0b0f 100%)",
            }}
          />
          <div className="absolute inset-4 rounded-sm border border-gold/40" />
          <div className="absolute bottom-8 left-8 right-8 text-cream">
            <p className="font-display text-2xl text-gold-soft">„Pij, pevaj,
              i ostani malo duže.”</p>
            <p className="mt-2 text-sm text-cream/70">— natpis iznad šanka</p>
          </div>
        </div>
      </div>
    </section>
  );
}
