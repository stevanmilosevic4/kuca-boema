export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg text-gold-soft">Kuća Boema</p>
          <p className="text-sm">Skadarska 29 · 11000 Beograd · Srbija</p>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Kuća Boema. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
