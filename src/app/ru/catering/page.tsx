import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LangSwitcher from "@/components/LangSwitcher";
import SetLang from "@/components/SetLang";
import RatingBadge from "@/components/RatingBadge";
import WhatsAppButton from "@/components/WhatsAppButton";

/*
  СКРЫТАЯ B2B-страница — офисный кейтеринг (русский).
  Не связана ссылками, не в sitemap, noindex — владелец делится
  ссылкой с компаниями напрямую.
*/
export const metadata: Metadata = {
  title: "Офисный кейтеринг — предложение для компаний",
  description:
    "Завтрак и обед для вашей команды каждый рабочий день. Офисный кейтеринг от кафаны Kuća Boema, Белград.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/ru/catering/",
    languages: {
      sr: "/ketering/",
      en: "/en/catering/",
      ru: "/ru/catering/",
    },
  },
};

const packages = [
  {
    name: "Завтрак + обед",
    price: "2 000 RSD",
    unit: "на человека / день",
    desc: "Полный день: завтрак на выбор из недельного меню + обед (горячее с супом или салатом из дневного предложения).",
  },
  {
    name: "Только обед",
    price: "1 200 RSD",
    unit: "на человека / день",
    desc: "Горячее на выбор из недельного меню, с супом или салатом из дневного предложения.",
  },
];

export default function CateringRuPage() {
  return (
    <PageShell>
      <SetLang lang="ru" />
      <LangSwitcher current="ru" />

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · для компаний
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Офисный кейтеринг — завтрак и обед для вашей команды
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Kuća Boema каждый рабочий день готовит и привозит свежие обеды в офисы
        Белграда — из той же кухни, что каждый день кормит полную кафану.
        Каждый сотрудник выбирает своё блюдо из недельного меню, а в офис
        приезжает одна аккуратная доставка в день.
      </p>
      <div className="mb-4">
        <RatingBadge label="Оценка в Google" />
      </div>

      <h2 className="mt-10 font-display text-2xl text-wine">Пакеты и цены</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {packages.map((p) => (
          <div
            key={p.name}
            className="rounded-sm border border-gold/40 bg-cream p-6"
          >
            <p className="font-display text-xl text-wine">{p.name}</p>
            <p className="mt-2 text-3xl font-medium text-gold">
              {p.price}
              <span className="ml-2 text-sm font-normal text-ink-soft">
                {p.unit}
              </span>
            </p>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        Точный состав пакета и график подстраиваем под вашу команду.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Как это устроено
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Каждую неделю вы получаете меню на следующую неделю — простую
        таблицу, где каждый сотрудник отмечает, что хочет в какой день. Мы готовим ровно
        столько, и еда приезжает в офис каждый рабочий день. Без лишнего, без
        угадываний, без «что сегодня на обед».
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Из недельного меню — завтрак
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Герцеговинские уштипцы (солёные с каймаком, сыром и айваром — или
        сладкие с джемом и Eurocrem), омлеты и яичница-глазунья, качамак,
        домашние пироги (сыр, сыр с зеленью, картофель, грибы), врапы
        («Цезарь», тунец, омлет, томлёная свинина), круассаны (капрезе,
        мортаделла, копчёный лосось, прошутто), протеиновая и овсяная каша,
        гранола с греческим йогуртом, сэндвичи.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Из недельного меню — обед
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Супы:</strong> телячий суп, куриный
        бульон с лапшой, куриная чорба.
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Горячее:</strong> говяжий гуляш,
        фаршированные перцы, фасоль с копчёными рёбрышками, куриный паприкаш,
        запечённая свинина без костей с картофелем по-пекарски, чевапы с
        каймаком, гурманская плескавица, куриный шницель по-венски, куриное
        филе в грибном соусе, курица или индейка гриль с бурым рисом, ньокки
        (с индейкой или четыре сыра), ризотто (овощное или курица-карри),
        разные пасты, салат «Цезарь».
      </p>
      <p className="mt-3 text-ink-soft leading-relaxed">
        <strong className="text-wine">Салаты:</strong> сербский, шопский,
        греческий, моравский, таратор, весенний, «Башта», капустный,
        огуречный, помидоры с сыром.
      </p>
      <p className="mt-3 text-sm text-ink-soft">
        Меню меняется каждую неделю; регулярно добавляем новые блюда.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Почему компании остаются с нами
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Настоящая кухня, а не кейтеринг-фабрика: всё готовится утром того же
        дня, в кафане, которая живёт своей репутацией. Каждый сотрудник
        выбирает своё блюдо — никаких наборов «бери что дают». Цена
        фиксированная на человека — бюджет известен заранее.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="tel:+381616056076"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Позвонить: +381 61 60 56 076
        </a>
        <WhatsAppButton
          label="Написать в WhatsApp"
          message="Здравствуйте, Стеван! Нас интересует офисный кейтеринг."
        />
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Стеван · +381 61 60 56 076 · Kuća Boema · Hasanaginice 8a, Раковица,
        Белград
      </p>
    </PageShell>
  );
}
