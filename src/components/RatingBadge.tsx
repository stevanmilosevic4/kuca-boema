// Mala vizuelna Google ocena: 4,9 + pet zlatnih zvezdica.
// Bez broja recenzija — samo ocena.

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-gold"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.95 6.26 6.55.57-5 4.36 1.5 6.45L12 16.9l-6 2.74 1.5-6.45-5-4.36 6.55-.57L12 2z" />
    </svg>
  );
}

export default function RatingBadge({ label }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-3" title="Google ocena 4,9">
      <span className="font-display text-3xl text-ink">4,9</span>
      <span className="flex gap-0.5" aria-label="5 zvezdica">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>
      {label && <span className="ml-1 text-sm text-ink-soft">{label}</span>}
    </div>
  );
}
