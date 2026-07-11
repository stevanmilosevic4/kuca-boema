export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg text-gold-soft">Kuća Boema</p>
          <p className="text-sm">Hasanaginice 8a · Rakovica · Beograd</p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href="https://www.instagram.com/kucaboema/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold-soft transition-colors hover:text-cream"
          >
            Instagram · @kucaboema
          </a>
          <p className="text-sm">
            © {new Date().getFullYear()} Kuća Boema. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
