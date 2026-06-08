import { menu } from "@/data/menu";

export default function Menu() {
  return (
    <section id="meni" className="bg-wine-dark py-24 text-cream">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-soft">
            Jelovnik
          </p>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            Naš meni
          </h2>
          <div className="mx-auto my-6 h-px w-40 bg-gold/60" />
          <p className="mx-auto max-w-xl text-cream/70">
            Sve cene su izražene u dinarima (RSD). Jelovnik se menja prema
            sezoni i ponudi pijace.
          </p>
        </div>

        <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
          {menu.map((category) => (
            <div key={category.id}>
              <h3 className="font-display text-2xl text-gold-soft">
                {category.title}
              </h3>
              <div className="mt-2 mb-5 h-px w-full bg-gold/25" />
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-3">
                    <div className="min-w-0">
                      <p className="text-cream">{item.name}</p>
                      {item.description && (
                        <p className="text-sm text-cream/55">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="mx-1 flex-1 border-b border-dotted border-gold/30" />
                    <span className="whitespace-nowrap font-medium text-gold-soft">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
