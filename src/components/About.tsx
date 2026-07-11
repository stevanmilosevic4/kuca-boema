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

        {/* Logo tabla kafane u zlatnom ramu, citat kao potpis ispod */}
        <div>
          <div className="relative">
            <div className="absolute inset-0 rotate-2 rounded-sm border border-gold/40" />
            <div className="relative -rotate-1 overflow-hidden rounded-sm shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/kuca-boema-logo.jpg"
                alt="Logo kafane Kuća Boema — drvena kućica, est. 2024, restoran"
                className="w-full"
              />
            </div>
          </div>
          <p className="mt-8 text-center font-display text-2xl text-wine">
            „Pij, pevaj, i ostani malo duže.”
          </p>
          <p className="mt-2 text-center text-sm text-ink-soft">
            — natpis iznad šanka
          </p>
        </div>
      </div>
    </section>
  );
}
