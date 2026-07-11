// Moving photo carousel (auto-scrolling marquee).
//
// HOW TO ADD REAL PHOTOS:
// 1. Put your food photos in `public/galerija/` (e.g. prasece.jpg, cevapi.jpg…).
// 2. In `photos` below, set `src` to the file name and keep a short `label`.
// 3. The tile will render the photo automatically (the gradient is just a
//    fallback for tiles that don't have a `src` yet).
//
// The strip scrolls on its own and pauses when a visitor hovers over it.

type Photo = {
  label: string;
  src?: string; // file in /public/galerija/ — e.g. "prasece-bajadere.jpg"
  hue: string; // fallback color while there is no photo
};

const photos: Photo[] = [
  { label: "Praseće bajadere", hue: "linear-gradient(160deg,#7a3b16,#3d1016)" },
  { label: "Pečenje bez kostiju", hue: "linear-gradient(160deg,#8a4a1a,#4a1410)" },
  { label: "Roštilj", hue: "linear-gradient(160deg,#6b2028,#2a0b0f)" },
  { label: "Karađorđeva", hue: "linear-gradient(160deg,#7a3b16,#3d1016)" },
  { label: "Sarma", hue: "linear-gradient(160deg,#5a1a22,#2a0b0f)" },
  { label: "Kajmak i pogača", hue: "linear-gradient(160deg,#8a6a2a,#4a3420)" },
  { label: "Domaća rakija", hue: "linear-gradient(160deg,#4a3420,#2a0b0f)" },
  { label: "Bašta uveče", hue: "linear-gradient(160deg,#3d1016,#1c0608)" },
];

// basePath prefix for images in production (GitHub Pages serves under /kuca-boema)
const base = process.env.NODE_ENV === "production" ? "/kuca-boema" : "";

function Tile({ photo }: { photo: Photo }) {
  return (
    <div
      className="relative h-56 w-72 shrink-0 overflow-hidden rounded-sm shadow-md sm:h-64 sm:w-80"
      style={photo.src ? undefined : { background: photo.hue }}
    >
      {photo.src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${base}/galerija/${photo.src}`}
          alt={`${photo.label} — boemska kafana Kuća Boema, Rakovica`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="absolute inset-2 rounded-sm border border-gold/30" />
      <span className="absolute bottom-3 left-4 font-display text-lg text-gold-soft drop-shadow">
        {photo.label}
      </span>
    </div>
  );
}

export default function Gallery() {
  // Duplicate the list so the marquee can loop seamlessly (-50% translate).
  const loop = [...photos, ...photos];

  return (
    <section id="galerija" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Galerija
          </p>
          <h2 className="font-display text-4xl text-wine sm:text-5xl">
            Iz naše kuhinje
          </h2>
          <div className="mx-auto my-6 h-px w-40 bg-gold/60" />
          <p className="mx-auto max-w-xl text-ink-soft">
            Zalogaji koji govore više od reči. Pređite mišem preko fotografije
            da zaustavite kretanje.
          </p>
        </div>
      </div>

      {/* full-bleed marquee with fading edges */}
      <div className="marquee relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />

        <div className="marquee-track gap-5 px-2">
          {loop.map((photo, i) => (
            <Tile key={`${photo.label}-${i}`} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
