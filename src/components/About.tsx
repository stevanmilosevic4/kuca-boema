export default function About() {
  return (
    <section id="o-nama" className="bg-paper py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            O nama
          </p>
          <h2 className="font-display text-4xl text-wine sm:text-5xl">
            Boemska kafana u srcu Rakovice
          </h2>
          <div className="rule-gold my-6 max-w-xs" />
          <p className="mb-4 text-ink-soft leading-relaxed">
            Kuća Boema je tradicionalna kafana u Rakovici, otvorena 2024. godine
            sa jednom idejom — da vrati toplinu prave beogradske kafane, daleko
            od gradske gužve, tamo gde se gost oseća kao kod svoje kuće.
          </p>
          <p className="mb-4 text-ink-soft leading-relaxed">
            Pre svega smo porodični restoran srpske kuhinje: kuvamo onako kako
            se kuvalo nekada — sporo, sa pažnjom i od najboljih domaćih
            namirnica. Naše čuveno pečenje, roštilj na žaru i domaća rakija
            razlog su zbog kojeg nam se gosti vraćaju na ručak, slavu i svako
            veće okupljanje.
          </p>
          <p className="text-ink-soft leading-relaxed">
            Uveče, kada zasviraju tamburaši, kafana oživi onako kako samo prava
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
