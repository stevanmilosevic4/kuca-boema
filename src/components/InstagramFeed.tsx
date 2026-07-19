"use client";

import { useEffect, useRef, useState } from "react";

/*
  Zvanični Instagram embed izabranih postova.

  KAKO PROMENITI POSTOVE: izmenite listu POSTS (redosled = redosled prikaza).

  PERFORMANSE: Instagramova skripta je teška (~2MB), pa se embed-ovi ne
  učitavaju odmah — tek kada posetilac doskroluje blizu sekcije
  (IntersectionObserver). Do tada je sekcija lagan, prazan okvir.
*/
const POSTS: string[] = [
  "https://www.instagram.com/reel/DMxLDOFs3Tf/",
  "https://www.instagram.com/reel/DL20N2_MVhr/",
  "https://www.instagram.com/reel/DaLSMPMswhO/",
  "https://www.instagram.com/reel/DZ5kwuwsFt2/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Aktiviraj embed-ove tek kad je sekcija na ~600px od ekrana
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Kad su embed-ovi u DOM-u, učitaj/pozovi Instagramovu skriptu
  useEffect(() => {
    if (!inView) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [inView]);

  if (POSTS.length === 0) return null;

  return (
    <section id="instagram" ref={sectionRef} className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Instagram
          </p>
          <h2 className="font-display text-4xl text-wine sm:text-5xl">
            @kucaboema
          </h2>
          <div className="mx-auto my-6 h-px w-40 bg-gold/60" />
          <p className="mx-auto max-w-xl text-ink-soft">
            Pratite nas za dnevne specijalitete i atmosferu iz kafane.
          </p>
        </div>

        <div className="mt-12 flex min-h-[300px] flex-wrap items-start justify-center gap-6">
          {inView &&
            POSTS.map((url) => (
              <blockquote
                key={url}
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ maxWidth: 380, minWidth: 300, width: "100%", margin: 0 }}
              >
                <a href={url}>Pogledajte objavu na Instagramu</a>
              </blockquote>
            ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.instagram.com/kucaboema/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-gold px-8 py-3 font-medium text-wine transition-colors hover:bg-gold hover:text-wine-dark"
          >
            Zapratite @kucaboema
          </a>
        </div>
      </div>
    </section>
  );
}
