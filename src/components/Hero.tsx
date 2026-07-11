export default function Hero() {
  return (
    <section
      id="vrh"
      className="relative flex min-h-[calc(100vh-3.75rem)] items-center justify-center overflow-hidden text-cream"
    >
      {/* Background: layered warm gradients evoking candlelit kafana walls.
          Replace with a photo by setting a background-image on this div. */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 0%, #6b2028 0%, #3d1016 45%, #260a0e 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(198,151,73,0.18) 0 2px, transparent 2px 26px)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold-soft">
          Od 2024 · Hasanaginice 8a
        </p>
        <h1 className="font-display text-5xl leading-tight text-cream sm:text-7xl">
          Kafana <span className="whitespace-nowrap">Kuća Boema</span>
        </h1>
        <div className="mx-auto my-6 h-px w-40 bg-gold/70" />
        <p className="mx-auto max-w-xl text-lg text-cream/85 sm:text-xl">
          Tradicionalna beogradska kafana u Rakovici — domaća kuhinja, čuveno
          pečenje i živa muzika uz pravi boemski duh.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#meni"
            className="rounded-full bg-gold px-7 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
          >
            Pogledajte jelovnik
          </a>
          <a
            href="#kontakt"
            className="rounded-full border border-gold-soft/60 px-7 py-3 font-medium text-cream transition-colors hover:bg-cream/10"
          >
            Rezervišite sto
          </a>
        </div>
      </div>
    </section>
  );
}
