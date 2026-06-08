# Kuća Boema 🍷

Web-sajt za tradicionalnu beogradsku kafanu **Kuća Boema**. Statički sajt
(Next.js + Tailwind), hostovan besplatno na **GitHub Pages**.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvorite http://localhost:3000.

## Build (statički export)

```bash
npm run build
```

Generiše `out/` folder sa gotovim HTML/CSS/JS fajlovima.

## Struktura

```
src/
  app/
    layout.tsx     # fontovi, <html lang="sr">, meta podaci (SEO)
    page.tsx       # spaja sve sekcije
    globals.css    # boje (paleta) i osnovni stilovi
  components/
    Navbar.tsx     # navigacija + meni za mobilni
    Hero.tsx       # naslovna sekcija
    About.tsx      # "O nama"
    Menu.tsx       # jelovnik (čita iz src/data/menu.ts)
    Gallery.tsx    # galerija
    Visit.tsx      # radno vreme + mapa
    Contact.tsx    # rezervacije (telefon / email)
    Footer.tsx
  data/
    menu.ts        # <- OVDE menjate jela i cene
```

## Šta da izmenite (pravi podaci)

- **Telefon** — `+381 11 123 4567` (Navbar.tsx, Contact.tsx)
- **Email** — `rezervacije@kucaboema.rs` (Contact.tsx)
- **Adresa** — `Skadarska 29` (Visit.tsx, Footer.tsx) i koordinate mape (Visit.tsx)
- **Instagram** — link (Contact.tsx)
- **Jelovnik** — `src/data/menu.ts`
- **Slike** — stavite fajlove u `public/` i zamenite gradijent-pločice u
  `Hero.tsx`, `About.tsx`, `Gallery.tsx`

## Objavljivanje na GitHub Pages

1. Napravite repo na GitHub-u pod imenom **`kuca-boema`** i push-ujte kod.
2. U repo-u: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Svaki `git push` na granu `main` automatski build-uje i objavljuje sajt
   (vidi `.github/workflows/deploy.yml`).

Sajt će biti dostupan na: `https://<vaš-username>.github.io/kuca-boema/`

> Ime repo-a (`kuca-boema`) mora da se poklapa sa `basePath` u
> `next.config.ts`. Ako koristite drugo ime ili sopstveni domen, izmenite tamo.
