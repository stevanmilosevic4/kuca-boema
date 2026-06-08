const hours = [
  { day: "Ponedeljak – Četvrtak", time: "11:00 – 00:00" },
  { day: "Petak – Subota", time: "11:00 – 02:00" },
  { day: "Nedelja", time: "12:00 – 00:00" },
];

export default function Visit() {
  return (
    <section id="poseta" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Poseta
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

            <h3 className="mt-10 font-display text-2xl text-wine">Adresa</h3>
            <address className="mt-3 not-italic text-ink-soft leading-relaxed">
              Skadarska 29
              <br />
              11000 Beograd, Srbija
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Skadarska+29+Beograd"
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
              title="Lokacija — Skadarska 29, Beograd"
              src="https://www.openstreetmap.org/export/embed.html?bbox=20.4585%2C44.8185%2C20.4685%2C44.8235&layer=mapnik&marker=44.821%2C20.463"
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
