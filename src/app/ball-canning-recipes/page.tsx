import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ball Canning Recipes — Water Bath & Pressure | CanningLog',
  description:
    'Ball canning recipes for jams, pickles, tomatoes, salsa, and vegetables. Water bath and pressure canning methods with USDA-approved processing times.',
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

const RECIPES = [
  {
    name: 'Classic strawberry jam',
    method: 'Water bath',
    jarSize: '8 oz half-pint',
    processTime: '10 min',
    yield: '8 half-pints',
    ingredients: 'Fresh strawberries, sugar, lemon juice, pectin (optional).',
    overview:
      'Crush berries and mix with sugar. Cook until the mixture reaches gel stage. Ladle into hot, sterilized jars with 1/4 inch headspace. Process in a boiling water bath.',
  },
  {
    name: 'Bread and butter pickles',
    method: 'Water bath',
    jarSize: 'Pint',
    processTime: '10 min',
    yield: '7 pints',
    ingredients: 'Sliced cucumbers, onions, sugar, cider vinegar (5% acidity), canning salt, mustard seed, celery seed, turmeric.',
    overview:
      'Brine cucumber slices overnight with salt and ice. Rinse well. Combine vinegar, sugar, and spices and bring to a boil. Add cucumbers and onions. Pack hot into jars and process.',
  },
  {
    name: 'Diced tomatoes',
    method: 'Water bath or pressure',
    jarSize: 'Quart',
    processTime: '45 min WB / 10 min @ 10 lb',
    yield: '7 quarts',
    ingredients: 'Ripe tomatoes, lemon juice or citric acid, canning salt (optional).',
    overview:
      'Peel, core, and dice tomatoes. Add 2 tablespoons bottled lemon juice (or 1/2 teaspoon citric acid) per quart jar. This acid addition is not optional. Pack hot into jars with 1/2 inch headspace.',
  },
  {
    name: 'Tomato salsa',
    method: 'Water bath',
    jarSize: 'Pint',
    processTime: '15 min',
    yield: '6 pints',
    ingredients: 'Tomatoes, jalapenos, onion, garlic, cilantro, bottled lime juice, canning salt.',
    overview:
      'Use only a USDA-tested salsa recipe. Do not reduce the vinegar or lime juice. Do not add extra onion or peppers beyond what the recipe calls for. Those ratios control acidity and make the product safe.',
  },
  {
    name: 'Dill pickles',
    method: 'Water bath',
    jarSize: 'Quart',
    processTime: '10 min',
    yield: '7 quarts',
    ingredients: 'Pickling cucumbers, dill weed or seed, garlic, cider vinegar (5%), canning salt.',
    overview:
      'Pack cucumbers tightly into hot jars with dill and garlic. Pour hot brine over cucumbers, leaving 1/2 inch headspace. Remove air bubbles. Wipe rims and process in a boiling water bath.',
  },
];

const ALTITUDE = [
  ['0 to 1,000 ft', 'No adjustment'],
  ['1,001 to 3,000 ft', 'Add 5 minutes'],
  ['3,001 to 6,000 ft', 'Add 10 minutes'],
  ['6,001 to 8,000 ft', 'Add 15 minutes'],
  ['8,001 to 10,000 ft', 'Add 20 minutes'],
];

const CHECKLIST = [
  'Using a tested Ball or USDA recipe — not an untested family recipe.',
  'Using Ball, Kerr, or Jarden lids. No reused lids from previous seasons.',
  'Using bottled lemon juice (not fresh) when adding acid to tomatoes.',
  'Not changing vinegar, lemon juice, or citric acid amounts.',
  'Checking jar size matches the recipe (pint vs. quart changes processing time).',
  'Looking up altitude adjustment for your zip code before you start.',
];

export default function BallCanningRecipesPage() {
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
              Ball Blue Book classics · USDA-tested
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              Ball canning recipes.
            </h1>
            <p
              className="font-body text-lg leading-relaxed max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              Ball and Kerr are the most trusted brands in home canning. Their recipes follow USDA-tested processing times and work with standard wide-mouth and regular-mouth jars. Every recipe below uses approved times from USDA research.
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
              Safety notice
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
              Always use tested recipes with exact ingredients and measurements. Do not change vinegar amounts, lemon juice amounts, or sugar ratios in acid-dependent recipes. Botulism has no smell or taste. Proper processing is the only protection.
            </p>
          </div>
        </section>

        {/* Recipe table-rows */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Five recipes
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Recipe · Jar size · Process time
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Sea-level processing times. Adjust for altitude if you live above 1,000 feet.
              </p>
            </div>

            {/* Table header */}
            <div
              className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1.4fr] gap-6 pb-3 mb-0"
              style={{ borderBottom: `1px solid ${TOKEN.border}` }}
            >
              <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Recipe</p>
              <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Method</p>
              <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Jar size</p>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-right" style={{ color: TOKEN.muted }}>Process time</p>
            </div>

            <div>
              {RECIPES.map((r, i) => (
                <div
                  key={r.name}
                  className="py-8"
                  style={{
                    borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}`,
                    borderBottom: i === RECIPES.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <div className="grid md:grid-cols-[2fr_1fr_1fr_1.4fr] gap-3 md:gap-6 items-baseline mb-4">
                    <h3 className="font-display text-xl" style={{ color: TOKEN.fg }}>{r.name}</h3>
                    <p className="font-body text-sm" style={{ color: TOKEN.body }}>{r.method}</p>
                    <p className="font-body text-sm" style={{ color: TOKEN.body }}>{r.jarSize}</p>
                    <p className="font-display text-lg tabular-nums md:text-right" style={{ color: TOKEN.primary }}>
                      {r.processTime}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-6">
                    <p className="font-body text-sm" style={{ color: TOKEN.muted }}>
                      Yield: <span style={{ color: TOKEN.fg }}>{r.yield}</span>
                    </p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: TOKEN.body }}>
                      <span className="font-medium" style={{ color: TOKEN.fg }}>Ingredients. </span>
                      {r.ingredients}
                    </p>
                  </div>
                  <p className="font-body text-sm leading-relaxed mt-3 md:ml-[calc(33%+1.5rem)] md:max-w-3xl" style={{ color: TOKEN.body }}>
                    {r.overview}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-body text-xs mt-8" style={{ color: TOKEN.muted }}>
              Source: USDA National Center for Home Food Preservation and Ball Blue Book. All times are sea-level values.
            </p>
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
                Water boils at lower temperatures at higher elevations. Add minutes accordingly.
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
          </div>
        </section>

        {/* Safety checklist */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Before you can
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Quick safety check.
              </h2>
            </div>

            <div>
              {CHECKLIST.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[60px_1fr] gap-4 py-5 items-baseline"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === CHECKLIST.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <span className="font-display text-xl tabular-nums" style={{ color: TOKEN.primary }}>0{i + 1}</span>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{item}</p>
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
              Log your Ball canning batches.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              CanningLog stores your recipe, date, jar count, processing time, and seal results for every batch. No more trying to remember what you made last August.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">Google Play</a>
            </div>
            <p className="font-body text-sm mt-6">
              <Link href="/free-download" className="underline" style={{ color: TOKEN.primary }}>
                Download the free canning batch log sheet instead
              </Link>
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
