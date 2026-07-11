const hours = [
  { day: "Ponedeljak", time: "Neradno" },
  { day: "Utorak – Subota", time: "09:00 – 23:00" },
  { day: "Nedelja", time: "10:00 – 20:00" },
];

export default function Visit() {
  return (
    <section id="poseta" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Posetite nas
          </p>
          <h2 className="font-display text-4xl text-wine sm:text-5xl">
            Radno vreme i lokacija
          </h2>
          <div className="mx-auto my-6 h-px w-40 bg-gold/60" />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Hours + address */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl text-wine">Radno vreme</h3>
            <ul className="mt-4 divide-y divide-gold/20">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-ink-soft">{h.day}</span>
                  <span className="font-medium text-wine">{h.time}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 inline-flex items-center gap-2 rounded-sm border border-gold/60 bg-gold/10 px-4 py-2 font-medium text-wine">
              <span aria-hidden="true">🎻</span> Petkom od 20h — živa muzika
            </p>

            <h3 className="mt-10 font-display text-2xl text-wine">Adresa</h3>
            <address className="mt-3 not-italic text-ink-soft leading-relaxed">
              Hasanaginice 8a
              <br />
              Rakovica, Beograd
            </address>
            <a
              href="https://maps.app.goo.gl/LbJMdimcwjd8ATsN8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-wine underline decoration-gold underline-offset-4 hover:text-gold"
            >
              Otvori u Google Mapama →
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-sm border border-gold/30 shadow-md">
            <iframe
              title="Lokacija — Hasanaginice 8a, Rakovica, Beograd"
              src="https://maps.google.com/maps?q=44.7569016,20.4564398&z=17&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
