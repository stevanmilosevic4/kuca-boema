// Placeholder gallery. Replace each tile's gradient with a real photo:
// put files in /public (e.g. /public/galerija/basta.jpg) and use a
// backgroundImage. With basePath set, reference them via the `basePath`
// helper or an <Image> from next/image.

const tiles = [
  { label: "Bašta", tall: true, hue: "linear-gradient(160deg,#6b2028,#3d1016)" },
  { label: "Roštilj", tall: false, hue: "linear-gradient(160deg,#7a3b16,#3d1016)" },
  { label: "Tamburaši", tall: false, hue: "linear-gradient(160deg,#4a3420,#2a0b0f)" },
  { label: "Sala", tall: false, hue: "linear-gradient(160deg,#5a1a22,#2a0b0f)" },
  { label: "Vinoteka", tall: true, hue: "linear-gradient(160deg,#3d1016,#1c0608)" },
  { label: "Specijaliteti", tall: false, hue: "linear-gradient(160deg,#7a3b16,#4a2410)" },
];

export default function Gallery() {
  return (
    <section id="galerija" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Galerija
          </p>
          <h2 className="font-display text-4xl text-wine sm:text-5xl">
            Atmosfera
          </h2>
          <div className="mx-auto my-6 h-px w-40 bg-gold/60" />
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3">
          {tiles.map((t) => (
            <div
              key={t.label}
              className={`group relative overflow-hidden rounded-sm shadow-md ${
                t.tall ? "row-span-2" : ""
              }`}
              style={{ background: t.hue }}
            >
              <div className="absolute inset-3 rounded-sm border border-gold/30" />
              <span className="absolute bottom-3 left-4 font-display text-lg text-gold-soft">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
