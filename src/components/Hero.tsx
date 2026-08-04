export default function Hero() {
  return (
    <section
      id="vrh"
      className="relative flex min-h-[calc(100vh-3.75rem)] items-center justify-center overflow-hidden text-cream"
    >
      {/* Fotografija bašte sa tamnim slojevima za čitljiv tekst. */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/basta-kuca-boema.jpg')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(61,16,22,0.34)_0%,rgba(25,7,9,0.2)_50%,rgba(10,4,5,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-wine-dark/80 to-transparent" />

      <div className="mx-auto max-w-3xl px-6 py-24 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
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
