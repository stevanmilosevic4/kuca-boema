import Link from "next/link";

const LANGS = [
  { code: "sr", label: "SR", href: "/ketering/" },
  { code: "en", label: "EN", href: "/en/catering/" },
  { code: "ru", label: "RU", href: "/ru/catering/" },
];

// Prebacivač jezika za ketering stranice.
export default function LangSwitcher({ current }: { current: string }) {
  return (
    <nav aria-label="Language" className="mb-8 flex gap-2">
      {LANGS.map((l) =>
        l.code === current ? (
          <span
            key={l.code}
            className="rounded-full bg-gold px-4 py-1 text-sm font-medium text-wine-dark"
          >
            {l.label}
          </span>
        ) : (
          <Link
            key={l.code}
            href={l.href}
            className="rounded-full border border-gold/50 px-4 py-1 text-sm text-wine transition-colors hover:bg-gold/10"
          >
            {l.label}
          </Link>
        )
      )}
    </nav>
  );
}
