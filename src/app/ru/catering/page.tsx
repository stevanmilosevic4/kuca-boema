import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import LangSwitcher from "@/components/LangSwitcher";
import SetLang from "@/components/SetLang";

// Русская страница кейтеринга — для русскоязычных компаний и гостей в Белграде.
export const metadata: Metadata = {
  title: "Кейтеринг в Белграде — сербская кухня",
  description:
    "Кейтеринг от кафаны Kuća Boema в Белграде: поросёнок на вертеле без костей на кило, гриль, домашние блюда и мезе. Для компаний и праздников. +381 60 500 9551.",
  alternates: {
    canonical: "/ru/catering/",
    languages: {
      sr: "/ketering/",
      en: "/en/catering/",
      ru: "/ru/catering/",
    },
  },
};

export default function CateringRuPage() {
  return (
    <PageShell>
      <SetLang lang="ru" />
      <LangSwitcher current="ru" />

      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
        Kuća Boema · Белград
      </p>
      <h1 className="font-display text-4xl text-wine sm:text-5xl">
        Кейтеринг в Белграде — настоящая сербская кухня
      </h1>
      <div className="rule-gold my-6 max-w-xs" />

      <p className="mb-4 text-ink-soft leading-relaxed">
        Когда компания празднует, кухня не должна быть вашей заботой. Kuća
        Boema — семейная кафана в белградском районе Раковица с оценкой 4,9 по
        более чем 300 отзывам в Google. Наш кейтеринг — та же еда, ради
        которой к нам возвращаются гости: поросёнок медленной обжарки, гриль
        на углях, домашние сербские блюда и щедрые мезе.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Что мы предлагаем
      </h2>
      <ul className="mt-3 space-y-2 text-ink-soft leading-relaxed">
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Фирменное блюдо: поросёнок без
          костей, продаётся на кило (4 400 RSD/кг); ягнёнок на вертеле (3 800
          RSD/кг)
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Гриль-платтеры: чевапи,
          плескавицы, копчёные колбаски, шашлычки — идеально для фуршета
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Домашние блюда в больших
          объёмах: гуляш, мучкалица, пребранац; зимой — сарма и квашеная
          капуста
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Мезе: каймак, пршут, кулен,
          сыры — со свежим домашним хлебом
        </li>
        <li className="flex gap-3">
          <span className="text-gold">✦</span> Салаты и домашние десерты;
          постное меню по договорённости
        </li>
      </ul>

      <h2 className="mt-10 font-display text-2xl text-wine">Для кого</h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Обеды в офис, юбилеи компаний, корпоративы и новогодние праздники, а
        также семейные торжества на вашей площадке. А если хотите к нам — зал
        и летняя терраса принимают компании любого размера.
      </p>

      <h2 className="mt-10 font-display text-2xl text-wine">
        Как это работает
      </h2>
      <p className="mt-3 text-ink-soft leading-relaxed">
        Три шага: позвоните и назовите дату, число гостей и повод → мы
        предложим меню и цену за человека или за кило → вы подтверждаете, мы
        готовим всё вовремя. Самовывоз из кафаны; логистику для крупных
        мероприятий обсуждаем отдельно. Большие заказы просим делать за
        несколько дней.
      </p>

      <div className="mt-10">
        <a
          href="tel:+381605009551"
          className="inline-block rounded-full bg-gold px-8 py-3 font-medium text-wine-dark transition-transform hover:scale-105"
        >
          Запросить предложение: +381 60 500 9551
        </a>
      </div>

      <p className="mt-8 text-ink-soft">
        Посмотрите{" "}
        <Link
          href="/jelovnik/"
          className="text-wine underline decoration-gold underline-offset-4 hover:text-gold"
        >
          полное меню
        </Link>{" "}
        (на сербском) — мы находимся по адресу Hasanaginice 8a, Раковица,
        Белград.
      </p>
    </PageShell>
  );
}
