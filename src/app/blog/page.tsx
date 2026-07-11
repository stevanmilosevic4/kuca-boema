import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Boemske priče — blog kafane",
  description:
    "Priče iz kafane Kuća Boema u Rakovici — o boemskim večerima, tamburašima, starogradskoj muzici i najboljim zalogajima Beograda.",
};

const posts = [
  {
    slug: "rostilj-i-pecenje-beograd",
    title: "Restoran za roštilj i pečenje — gde meso ima ukus kao nekad",
  },
  {
    slug: "najbolja-boemska-kafana-u-beogradu",
    title: "Najbolja boemska kafana u Beogradu — šta je čini pravom?",
  },
  {
    slug: "kafana-sa-tamburasima",
    title: "Kafana sa tamburašima — veče uz tamburu u Beogradu",
  },
  {
    slug: "kafana-sa-starogradskom-muzikom",
    title: "Kafana sa starogradskom muzikom — pesme koje ne stare",
  },
  {
    slug: "boemsko-vece-u-beogradu",
    title: "Gde na boemsko veče u Beogradu?",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · Blog
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Boemske priče
      </h1>
      <div className="rule-gold my-6 max-w-xs" />
      <ul className="mt-8 space-y-5">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}/`}
              className="font-display text-xl text-wine underline decoration-gold underline-offset-4 hover:text-gold"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
