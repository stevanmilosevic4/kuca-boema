/*
  Reservations / contact.

  This is a static site (GitHub Pages), so there is no server to receive a form
  submission. Two options:

  1) Direct contact (used below) — `tel:` and `mailto:` links open the guest's
     phone / email app pre-filled. No backend required.

  2) A real form — sign up at https://formspree.io (free tier), then replace the
     block below with:

       <form action="https://formspree.io/f/XXXXXXX" method="POST" ...>
         <input name="ime" ... /> <input name="datum" ... /> ...
       </form>

     Formspree emails you each submission and works on static hosting.
*/

const reservationMail =
  "mailto:rezervacije@kucaboema.rs" +
  "?subject=" +
  encodeURIComponent("Rezervacija stola — Kuća Boema") +
  "&body=" +
  encodeURIComponent(
    "Poštovani,\n\nŽeleo/la bih da rezervišem sto.\n\nDatum:\nVreme:\nBroj osoba:\nIme i prezime:\nKontakt telefon:\n\nHvala!"
  );

export default function Contact() {
  return (
    <section id="kontakt" className="bg-wine-dark py-24 text-cream">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-soft">
          Kontakt
        </p>
        <h2 className="font-display text-4xl text-cream sm:text-5xl">
          Rezervišite svoj sto
        </h2>
        <div className="mx-auto my-6 h-px w-40 bg-gold/60" />
        <p className="mx-auto max-w-xl text-cream/75">
          Za rezervacije i veće proslave pozovite nas ili pišite — odgovaramo u
          najkraćem roku. Preporučujemo rezervaciju vikendom.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href="tel:+381111234567"
            className="rounded-sm border border-gold/30 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
          >
            <p className="text-sm uppercase tracking-widest text-gold-soft">
              Telefon
            </p>
            <p className="mt-2 text-cream">+381 11 123 4567</p>
          </a>
          <a
            href={reservationMail}
            className="rounded-sm border border-gold/30 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
          >
            <p className="text-sm uppercase tracking-widest text-gold-soft">
              Email
            </p>
            <p className="mt-2 break-all text-cream">rezervacije@kucaboema.rs</p>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-gold/30 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
          >
            <p className="text-sm uppercase tracking-widest text-gold-soft">
              Instagram
            </p>
            <p className="mt-2 text-cream">@kucaboema</p>
          </a>
        </div>

        <a
          href={reservationMail}
          className="mt-10 inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Pošaljite zahtev za rezervaciju
        </a>
      </div>
    </section>
  );
}
