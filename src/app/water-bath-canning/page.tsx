import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Bath Canning Guide — How to Can at Home | CanningLog',
  description:
    'Water bath canning guide for beginners. Learn what foods are safe to water bath can, the step-by-step process, and processing times.',
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

const STEPS = [
  {
    title: 'Wash and inspect jars',
    body: 'Wash jars in hot soapy water. Look for cracks or chips on the rim. Even a small nick can prevent a seal. Discard any damaged jars.',
  },
  {
    title: 'Keep jars hot',
    body: 'Place clean jars in the canner filled with simmering water. Keep them hot until you are ready to fill. This prevents thermal shock when you add hot food.',
  },
  {
    title: 'Prepare your recipe',
    body: 'Follow a tested recipe exactly. Have all ingredients measured and ready before you start filling jars. Do not make substitutions.',
  },
  {
    title: 'Fill jars with correct headspace',
    body: 'Use a canning funnel. Leave 1/4 inch headspace for jams and jellies. Leave 1/2 inch headspace for most other products (fruits, pickles, tomatoes). Headspace affects the seal.',
  },
  {
    title: 'Remove air bubbles',
    body: 'Slide a thin plastic spatula or bubble remover around the inside edge of the jar. Bubbles can prevent a complete seal. Adjust headspace again if needed after removing bubbles.',
  },
  {
    title: 'Wipe rims and apply lids',
    body: 'Wipe the jar rim with a clean, damp cloth. Any food on the rim can prevent sealing. Apply a new lid and a clean ring. Tighten to fingertip tight, not cranked down hard.',
  },
  {
    title: 'Process in boiling water',
    body: 'Lower jars onto the rack in the canner. Water must cover jars by at least 1 inch. Bring to a full rolling boil. Start your timer only after the water returns to a boil.',
  },
  {
    title: 'Cool and check seals',
    body: 'Remove jars with a jar lifter. Place on a towel with space between each jar. Do not tilt or tip. Let cool 12 to 24 hours. Press the center of each lid. It should not flex. Refrigerate any unsealed jars and use within days.',
  },
];

const SAFE_FOODS = [
  'Jams and jellies',
  'Fruit (slices, halves, whole)',
  'Applesauce and apple butter',
  'Pickles (cucumber, beet, peppers)',
  'Relishes',
  'Tomatoes (with added lemon juice or citric acid)',
  'Tomato-based salsa (USDA-tested recipes only)',
  'Fruit juices',
];

const UNSAFE_FOODS = [
  'Green beans, corn, carrots, peas',
  'Potatoes and sweet potatoes',
  'Any meat, poultry, or fish',
  'Mixed soups or stews',
  'Butter and dairy products',
  'Eggs',
  'Pasta or rice dishes',
];

const ALTITUDE = [
  ['0 to 1,000 ft', 'No adjustment'],
  ['1,001 to 3,000 ft', 'Add 5 minutes'],
  ['3,001 to 6,000 ft', 'Add 10 minutes'],
  ['6,001 to 8,000 ft', 'Add 15 minutes'],
  ['8,001 to 10,000 ft', 'Add 20 minutes'],
];

const EQUIPMENT = [
  { item: 'Large pot (water bath canner)', note: 'Must be at least 2 inches taller than your tallest jar. Many canners come with a rack.' },
  { item: 'Jar rack', note: 'Keeps jars off the bottom of the pot and lets water circulate underneath.' },
  { item: 'Mason jars with new lids', note: 'Ball, Kerr, or equivalent. Never reuse lids from a previous season.' },
  { item: 'Jar lifter', note: 'Non-negotiable. You cannot safely lift hot jars from boiling water without one.' },
  { item: 'Canning funnel', note: 'Wide-mouth funnel that fits inside the jar opening. Keeps rims clean.' },
  { item: 'Bubble remover or thin spatula', note: 'Removes air pockets before you apply the lid.' },
  { item: 'Lid wand or small magnet', note: 'Pulls lids out of hot water without contaminating the sealing compound.' },
  { item: 'Timer', note: 'Start timing only after the water returns to a full boil with jars in the canner.' },
];

export default function WaterBathCanningPage() {
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
              Water bath method · High-acid foods
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              Water bath canning,<br />done right.
            </h1>
            <p
              className="font-body text-lg leading-relaxed max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              Water bath canning uses boiling water to process high-acid foods. It is the easiest canning method and requires minimal equipment. This guide covers what you can safely water bath can, the full process, and altitude adjustments.
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
            <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.primary }}>Important</p>
            <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
              Water bath canning is only safe for high-acid foods. Low-acid foods like vegetables, meats, and beans must be pressure canned. A boiling water bath does not get hot enough to kill botulism spores in low-acid foods.
            </p>
          </div>
        </section>

        {/* Safe / unsafe split */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                What you can can
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                High-acid foods only.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Foods with pH below 4.6 are safe for water bath processing. Low-acid foods are not.
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
                <p className="font-body text-xs uppercase tracking-[0.18em] mb-3" style={{ color: TOKEN.primary }}>
                  Safe to water bath
                </p>
                <ul>
                  {SAFE_FOODS.map((food, i) => (
                    <li
                      key={food}
                      className="font-body text-sm py-3"
                      style={{
                        color: TOKEN.body,
                        borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}`,
                      }}
                    >
                      {food}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="p-8"
                style={{
                  backgroundColor: TOKEN.surface,
                  border: `1px solid ${TOKEN.border}`,
                  borderLeft: 'none',
                }}
              >
                <p className="font-body text-xs uppercase tracking-[0.18em] mb-3" style={{ color: TOKEN.muted }}>
                  Must be pressure canned
                </p>
                <ul>
                  {UNSAFE_FOODS.map((food, i) => (
                    <li
                      key={food}
                      className="font-body text-sm py-3"
                      style={{
                        color: TOKEN.body,
                        borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}`,
                      }}
                    >
                      {food}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs mt-4 leading-relaxed" style={{ color: TOKEN.muted }}>
                  Water bath canning these foods is not safe. The USDA does not publish water-bath times for low-acid foods because the method cannot reach a safe temperature for them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Equipment
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                $30 to $50 to start.
              </h2>
            </div>
            <div>
              {EQUIPMENT.map((eq, i) => (
                <div
                  key={eq.item}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-12 py-5"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === EQUIPMENT.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <p className="font-display text-base" style={{ color: TOKEN.primary }}>{eq.item}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: TOKEN.body }}>{eq.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by Step */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                The process
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Eight steps, in order.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Skipping steps is how seal failures happen.
              </p>
            </div>

            <div>
              {STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[60px_1fr] sm:grid-cols-[90px_1fr_2fr] gap-4 sm:gap-8 py-6 items-baseline"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === STEPS.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <span className="font-display text-2xl tabular-nums" style={{ color: TOKEN.primary }}>0{i + 1}</span>
                  <h3 className="font-display text-lg" style={{ color: TOKEN.fg }}>{step.title}</h3>
                  <p className="font-body text-base leading-relaxed sm:col-start-3" style={{ color: TOKEN.body }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Altitude */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Altitude adjustments
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Above 1,000 ft, add time.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Water boils at lower temperatures as elevation increases. Process longer to reach safe temperatures.
              </p>
            </div>

            <div
              style={{
                backgroundColor: TOKEN.bg,
                border: `1px solid ${TOKEN.border}`,
              }}
            >
              <div
                className="grid grid-cols-2 gap-4 px-6 py-4"
                style={{ borderBottom: `1px solid ${TOKEN.border}` }}
              >
                <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Altitude</p>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-right" style={{ color: TOKEN.muted }}>Add to processing time</p>
              </div>
              {ALTITUDE.map(([alt, adj], i) => (
                <div
                  key={alt}
                  className="grid grid-cols-2 gap-4 px-6 py-4 items-baseline"
                  style={{ borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}` }}
                >
                  <p className="font-body text-sm" style={{ color: TOKEN.body }}>{alt}</p>
                  <p className="font-display text-base tabular-nums text-right" style={{ color: TOKEN.primary }}>{adj}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-xs mt-4" style={{ color: TOKEN.muted }}>
              Source: USDA National Center for Home Food Preservation
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Get the app
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6" style={{ color: TOKEN.fg }}>
              Track every batch in CanningLog.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              CanningLog records your recipe, processing time, jar count, and seal results. Your entire canning history in one place. Free to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">Google Play</a>
            </div>
            <p className="font-body text-sm mt-6">
              <Link href="/free-download" className="underline" style={{ color: TOKEN.primary }}>
                Download the free canning batch log sheet
              </Link>
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
