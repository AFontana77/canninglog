import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Canning for Beginners — Start Here | CanningLog',
  description:
    'Home canning guide for beginners. Start with water bath canning, learn what equipment you need, and discover which recipes are safest to start with.',
};

const TOKEN = {
  bg: 'oklch(0.97 0.012 105)',
  surface: 'oklch(0.94 0.018 105)',
  fg: 'oklch(0.18 0.025 130)',
  body: 'oklch(0.32 0.022 130)',
  muted: 'oklch(0.46 0.018 130)',
  border: 'oklch(0.84 0.018 105)',
  primary: 'oklch(0.40 0.12 145)',
};

const EQUIPMENT = [
  { item: 'Water bath canner kit', price: '~$30', note: 'Comes with a pot, rack, and sometimes a jar lifter. Granite ware is common and affordable.' },
  { item: 'Ball Mason jars', price: '~$12 / dozen', note: 'Start with pint jars. They work for most beginner recipes and are easy to fill.' },
  { item: 'New lids and rings', price: 'Included with jars', note: 'Never reuse lids from a previous season. Rings can be reused if they show no rust.' },
  { item: 'Jar lifter', price: '~$8', note: 'You cannot safely pull hot jars from boiling water without one. Do not skip this.' },
  { item: 'Canning funnel', price: '~$5', note: 'Keeps food off the jar rims. Dirty rims cause seal failures.' },
  { item: 'Bubble remover or thin spatula', price: '~$4', note: 'Slides around the inside of the jar to release trapped air pockets.' },
];

const BEGINNER_RECIPES = [
  {
    name: 'Strawberry jam',
    method: 'Water bath',
    difficulty: 'Easy',
    why: 'High in natural acid. Short processing time (10 minutes). Forgiving if you get the headspace slightly off. A great first batch.',
  },
  {
    name: 'Dill pickles',
    method: 'Water bath',
    difficulty: 'Easy',
    why: 'Vinegar brine controls the acidity, so safety is straightforward. No cooking required for the cucumbers. Results are ready to eat in 2 weeks.',
  },
  {
    name: 'Tomato sauce',
    method: 'Water bath',
    difficulty: 'Moderate',
    why: 'Requires added lemon juice or citric acid (do not skip this step). Widely used and great for clearing a garden harvest. Follow a USDA recipe exactly.',
  },
];

const WHY = [
  {
    title: 'Use what you grow',
    body: 'Garden tomatoes, cucumbers, and berries come in all at once. Canning lets you preserve the surplus instead of watching it go to waste.',
  },
  {
    title: 'Save money',
    body: 'A flat of strawberries in June costs a fraction of what jam costs at the store. You get more jars for less money, and you control what goes in.',
  },
  {
    title: 'Build a pantry',
    body: 'Properly canned food lasts 1 to 5 years. Knowing you have a full shelf of tomato sauce, pickles, and jam feels good.',
  },
];

const SAFETY_RULES = [
  'Use only tested recipes from USDA, Ball Blue Book, or National Center for Home Food Preservation.',
  'Do not reduce vinegar, lemon juice, or acid amounts in any recipe. These control safety, not just flavor.',
  'Never water bath can vegetables, meats, beans, or anything low-acid. Use a pressure canner for those.',
  'Check seals after 12 to 24 hours of cooling. Press the center of the lid. It should not flex.',
  'Discard any jar that spurts liquid, smells off, or has a bulging lid. Do not taste it first.',
  'Label every jar with the recipe name and date canned.',
];

export default function CanningForBeginnersPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="px-6 sm:px-10 py-20 lg:py-28" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Start here · No experience needed
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              Home canning,<br />for the first time.
            </h1>
            <p
              className="font-body text-lg leading-relaxed max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              Canning lets you preserve seasonal food and build a pantry that lasts through winter. If you are new to canning, start here. This guide covers both methods, what equipment you need, and which recipes to try first.
            </p>
          </div>
        </section>

        {/* Safety strip */}
        <section
          className="px-6 sm:px-10 py-10"
          style={{
            backgroundColor: TOKEN.bg,
            borderTop: `1px solid ${TOKEN.border}`,
            borderBottom: `1px solid ${TOKEN.border}`,
          }}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-[200px_1fr] gap-6 items-start">
            <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.primary }}>
              New to canning?
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
              Always follow a tested recipe from USDA, Ball, or the National Center for Home Food Preservation. Home canning is safe when done correctly. The most common cause of problems is modifying recipes or using the wrong method for the food type.
            </p>
          </div>
        </section>

        {/* Why */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Why people can
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Three reasons.
              </h2>
            </div>

            <div>
              {WHY.map((w, i) => (
                <div
                  key={w.title}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-12 py-8"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === WHY.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.muted }}>
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl" style={{ color: TOKEN.primary }}>{w.title}</h3>
                  </div>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two methods */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Two methods
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Water bath or pressure.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                The method depends on what you are canning. This is not a preference. It is a food safety requirement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="p-8"
                style={{
                  backgroundColor: TOKEN.bg,
                  border: `1px solid ${TOKEN.border}`,
                }}
              >
                <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.primary }}>
                  Start here
                </p>
                <h3 className="font-display text-2xl mb-3" style={{ color: TOKEN.fg }}>Water bath canning</h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: TOKEN.body }}>
                  Uses a large pot of boiling water. Works for high-acid foods only: jams, jellies, pickles, fruits, and tomatoes with added acid. Easier and cheaper than pressure canning.
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: TOKEN.body }}>
                  Equipment costs about $30 to $50. You can be canning your first batch within an hour of starting.
                </p>
              </div>
              <div
                className="p-8"
                style={{
                  backgroundColor: TOKEN.bg,
                  border: `1px solid ${TOKEN.border}`,
                  borderLeft: 'none',
                }}
              >
                <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.muted }}>
                  After basics
                </p>
                <h3 className="font-display text-2xl mb-3" style={{ color: TOKEN.fg }}>Pressure canning</h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: TOKEN.body }}>
                  Uses a pressure canner to reach 240 degrees F. Required for low-acid foods: vegetables, meats, beans, soups, and stews. Without pressure canning, these foods are not safe to store at room temperature.
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: TOKEN.body }}>
                  A quality pressure canner costs $80 to $150. Learn water bath canning first before adding this method.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Beginner equipment
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Six items, around $60 total.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                You do not need much to get started. This is everything for water bath canning.
              </p>
            </div>

            {/* Header */}
            <div
              className="hidden md:grid md:grid-cols-[2fr_140px_3fr] gap-6 pb-3"
              style={{ borderBottom: `1px solid ${TOKEN.border}` }}
            >
              <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Item</p>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-right" style={{ color: TOKEN.muted }}>Price</p>
              <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Note</p>
            </div>
            <div>
              {EQUIPMENT.map((eq, i) => (
                <div
                  key={eq.item}
                  className="grid md:grid-cols-[2fr_140px_3fr] gap-3 md:gap-6 py-5 items-baseline"
                  style={{
                    borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}`,
                    borderBottom: i === EQUIPMENT.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <p className="font-display text-base" style={{ color: TOKEN.fg }}>{eq.item}</p>
                  <p className="font-display text-base tabular-nums md:text-right" style={{ color: TOKEN.primary }}>{eq.price}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: TOKEN.body }}>{eq.note}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-sm mt-4" style={{ color: TOKEN.muted }}>
              Ball canning kits at Walmart, Target, and Amazon usually include the pot, rack, and jar lifter together.
            </p>
          </div>
        </section>

        {/* Best beginner recipes */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Start with these
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Three beginner-friendly recipes.
              </h2>
            </div>

            <div>
              {BEGINNER_RECIPES.map((r, i) => (
                <div
                  key={r.name}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-12 py-8"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === BEGINNER_RECIPES.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <div>
                    <h3 className="font-display text-2xl mb-2" style={{ color: TOKEN.primary }}>{r.name}</h3>
                    <p className="font-body text-xs uppercase tracking-wider" style={{ color: TOKEN.muted }}>
                      {r.method} · {r.difficulty}
                    </p>
                  </div>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{r.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety rules */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Beginner safety rules
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Six rules. Memorize them.
              </h2>
            </div>

            <div>
              {SAFETY_RULES.map((rule, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[60px_1fr] gap-4 py-5 items-baseline"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === SAFETY_RULES.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <span className="font-display text-xl tabular-nums" style={{ color: TOKEN.primary }}>0{i + 1}</span>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Get the app
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6" style={{ color: TOKEN.fg }}>
              Log your first batch in CanningLog.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              CanningLog records each batch: recipe, date, jar count, processing time, and seal results. Keep a record from day one. Free to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">Google Play</a>
            </div>
            <p className="font-body text-sm mt-6">
              <Link href="/free-download" className="underline" style={{ color: TOKEN.primary }}>
                Download the free canning batch log sheet first
              </Link>
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
