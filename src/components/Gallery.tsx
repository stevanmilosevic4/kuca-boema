// Pokretna galerija (auto-scroll marquee) sa pravim fotografijama.
//
// KAKO DODATI NOVU SLIKU:
// 1. Ubacite optimizovan JPG u public/galerija/ (SEO ime, malim slovima, bez č/ć/š).
// 2. Dodajte { src, alt } u listu ispod — alt je nevidljiv posetiocima,
//    ali ga Google čita (opis jela + ključne reči, prirodno sročeno).

type Photo = {
  src: string; // fajl u /public/galerija/
  alt: string; // SEO opis — ne prikazuje se na stranici
};

const photos: Photo[] = [
  {
    src: "pecenje-na-raznju-priprema.jpg",
    alt: "Priprema prasećeg pečenja na ražnju u kafani Kuća Boema, Rakovica",
  },
  {
    src: "prasece-pecenje-razanj.jpg",
    alt: "Praseće pečenje na ražnju — specijalitet kafane Kuća Boema u Rakovici",
  },
  {
    src: "konobar-cevapi-vesalica.jpg",
    alt: "Ćevapi sa kajmakom i vešalica u sosu — jela sa roštilja",
  },
  {
    src: "biftek-sa-povrcem.jpg",
    alt: "Biftek sa grilovanim povrćem — restoran Kuća Boema Beograd",
  },
  {
    src: "gulas-sa-pireom-odozgo.jpg",
    alt: "Juneći gulaš sa pireom u zemljanoj činiji — gotova jela",
  },
  {
    src: "prasece-bajaderice-tanjir.jpg",
    alt: "Praseće bajaderice, pečenje bez kostiju — Kuća Boema Beograd",
  },
  {
    src: "gurmanska-pljeskavica-pomfrit.jpg",
    alt: "Gurmanska pljeskavica sa pomfritom i lukom — roštilj u kafani",
  },
  {
    src: "muckalica-zemljana-cinija.jpg",
    alt: "Mućkalica sa pireom u zemljanoj činiji — domaća kuhinja",
  },
  {
    src: "boemska-trpeza-vece.jpg",
    alt: "Boemska trpeza uveče uz rakiju — atmosfera kafane u Beogradu",
  },
  {
    src: "prasece-bajaderice-izbliza.jpg",
    alt: "Hrskava korica praseće bajaderice izbliza",
  },
  {
    src: "postavljen-sto-rostilj.jpg",
    alt: "Postavljen sto sa jelima sa roštilja — kafana za proslave",
  },
  {
    src: "paradajz-salata-pecena-paprika.jpg",
    alt: "Paradajz salata sa pečenom paprikom — sveže salate",
  },
  {
    src: "domaca-trpeza-odozgo.jpg",
    alt: "Domaća trpeza — pita, pečenje i predjela, restoran domaće kuhinje Beograd",
  },
  {
    src: "prasece-bajaderice-porcija.jpg",
    alt: "Porcija prasećih bajaderica — vruće svakim danom u 15h",
  },
  {
    src: "gulas-rakija-salata.jpg",
    alt: "Gulaš uz domaću rakiju i šopsku salatu",
  },
  {
    src: "hladna-predjela-plata.jpg",
    alt: "Plata hladnih predjela — pršuta, kulen i sir",
  },
  {
    src: "prasece-bajaderice-odozgo.jpg",
    alt: "Praseće bajaderice odozgo — kafana Kuća Boema Rakovica",
  },
];

// Sajt se služi sa korena domena (kucaboema.rs) — bez prefiksa.
const base = "";

function Tile({ photo }: { photo: Photo }) {
  return (
    <div className="relative h-56 w-72 shrink-0 overflow-hidden rounded-sm shadow-md sm:h-64 sm:w-80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}/galerija/sm/${photo.src}`}
        alt={photo.alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-2 rounded-sm border border-gold/30" />
    </div>
  );
}

export default function Gallery() {
  // Dupliramo listu da se marquee besprekorno vrti u krug (-50% translate).
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

      {/* full-bleed marquee sa izbleđenim ivicama */}
      <div className="marquee relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />

        <div className="marquee-track gap-5 px-2">
          {loop.map((photo, i) => (
            <Tile key={`${photo.src}-${i}`} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
