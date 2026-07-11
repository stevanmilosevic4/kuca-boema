/*
  Reservations / contact.

  Static site — no server. Guests reserve by phone (the `tel:` links open the
  dialer pre-filled) or via Instagram. If you ever want an on-site reservation
  form, sign up at https://formspree.io (free) and drop in a <form> that posts
  to your Formspree endpoint — it works on static hosting.
*/

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
          Za rezervacije i veće proslave pozovite nas — odgovaramo u najkraćem
          roku. Preporučujemo rezervaciju vikendom.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href="tel:+381605009551"
            className="rounded-sm border border-gold/30 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
          >
            <p className="text-sm uppercase tracking-widest text-gold-soft">
              Rezervacije
            </p>
            <p className="mt-2 text-cream">060 500 9551</p>
          </a>
          <a
            href="tel:+381113592765"
            className="rounded-sm border border-gold/30 bg-cream/5 p-6 transition-colors hover:bg-cream/10"
          >
            <p className="text-sm uppercase tracking-widest text-gold-soft">
              Fiksni
            </p>
            <p className="mt-2 text-cream">011 / 359 2765</p>
          </a>
          <a
            href="https://www.instagram.com/kucaboema/"
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
          href="tel:+381605009551"
          className="mt-10 inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Pozovite za rezervaciju
        </a>
      </div>
    </section>
  );
}
