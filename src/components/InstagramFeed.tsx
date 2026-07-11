"use client";

import { useEffect, useState } from "react";

/*
  Zvanični Instagram embed pojedinačnih postova.

  KAKO DODATI/IZBACITI POST:
  - Samo dodajte ili obrišite link u listi POSTS (redosled = redosled prikaza).
  - Prikazuje se prvih 6, ostali na dugme „Prikaži još" (radi brzine sajta).
*/
const POSTS: string[] = [
  "https://www.instagram.com/reel/DMxLDOFs3Tf/",
  "https://www.instagram.com/reel/DL20N2_MVhr/",
  "https://www.instagram.com/reel/DaLSMPMswhO/",
  "https://www.instagram.com/reel/DZ5kwuwsFt2/",
  "https://www.instagram.com/p/DXPO2j5DJL7/",
  "https://www.instagram.com/reel/DTAgxZIDJ7k/",
  "https://www.instagram.com/p/DSNlQodjP6t/",
  "https://www.instagram.com/p/DSDlbv_DB0Q/",
  "https://www.instagram.com/p/DR4x3HvDCSb/",
  "https://www.instagram.com/p/DR18C2oDHUp/",
  "https://www.instagram.com/p/DRuSz4yjEFj/",
  "https://www.instagram.com/p/DRpF9UpjPon/",
  "https://www.instagram.com/p/DRmZuLDDL8O/",
  "https://www.instagram.com/p/DRhRvhtjFZR/",
  "https://www.instagram.com/p/DReiefTjCiW/",
  "https://www.instagram.com/p/DQoL6-ZjOAn/",
  "https://www.instagram.com/p/DQljp8mDHo9/",
  "https://www.instagram.com/p/DMIW663oSkN/",
  "https://www.instagram.com/p/DMnTSsDoSNK/",
  "https://www.instagram.com/reel/DLu07OqoJ6I/",
  "https://www.instagram.com/reel/DK1-JwGoM6C/",
  "https://www.instagram.com/reel/DJ6vsGIsTak/",
];

const BATCH = 6;

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed() {
  const [visible, setVisible] = useState(BATCH);

  useEffect(() => {
    // Instagramova skripta pretvara blockquote u pravi embed;
    // pozivamo je ponovo pri svakom proširenju liste.
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [visible]);

  if (POSTS.length === 0) return null;

  return (
    <section id="instagram" className="bg-cream py-24">
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

        <div className="mt-12 flex flex-wrap items-start justify-center gap-6">
          {POSTS.slice(0, visible).map((url) => (
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
          {visible < POSTS.length && (
            <button
              type="button"
              onClick={() => setVisible((v) => v + BATCH)}
              className="rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
            >
              Prikaži još
            </button>
          )}
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
