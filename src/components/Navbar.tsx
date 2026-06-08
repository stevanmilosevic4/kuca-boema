"use client";

import { useState } from "react";

const links = [
  { href: "#specijalitet", label: "Specijalitet" },
  { href: "#o-nama", label: "O nama" },
  { href: "#meni", label: "Meni" },
  { href: "#galerija", label: "Galerija" },
  { href: "#poseta", label: "Poseta" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-wine-dark/95 text-cream backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#vrh" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide text-gold-soft">
            Kuća Boema
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/70">
            Skadarlija · Beograd
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-cream/90 transition-colors hover:text-gold-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+381111234567"
              className="rounded-full border border-gold px-4 py-1.5 text-sm font-medium text-gold-soft transition-colors hover:bg-gold hover:text-wine-dark"
            >
              Rezervacije
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Meni"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-cream" />
            <span className="block h-0.5 w-6 bg-cream" />
            <span className="block h-0.5 w-6 bg-cream" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="space-y-1 border-t border-gold/20 px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-cream/90 transition-colors hover:text-gold-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+381111234567"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-full border border-gold px-4 py-2 text-sm font-medium text-gold-soft"
            >
              Rezervacije · +381 11 123 4567
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
