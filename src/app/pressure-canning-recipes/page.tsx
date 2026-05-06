import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Canning Recipes — Safe Times & Pressures | CanningLog',
  description:
    'Pressure canning recipes for vegetables, beans, meats, and soups. USDA-tested processing times and pressures for safe home canning.',
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
    name: 'Green beans',
    category: 'Vegetable',
    pressure: '10 lb weighted / 11 lb dial',
    pints: '20 min',
    quarts: '25 min',
    pack: 'Hot or raw pack',
    notes: 'Green beans are the most commonly home-canned vegetable. Raw pack: pack tightly into jars and cover with boiling water. Hot pack: boil 5 minutes, pack loosely. Leave 1 inch headspace either way.',
  },
  {
    name: 'Corn (whole kernel)',
    category: 'Vegetable',
    pressure: '10 lb weighted / 11 lb dial',
    pints: '55 min',
    quarts: '85 min',
    pack: 'Hot or raw pack',
    notes: 'Corn is low-acid and dense. The long processing times reflect that density. Do not reduce processing time. Use only tested recipes with the exact ratios of water to corn.',
  },
  {
    name: 'Chicken pieces',
    category: 'Meat',
    pressure: '10 lb weighted / 11 lb dial',
    pints: '75 min',
    quarts: '90 min',
    pack: 'Raw or hot pack',
    notes: 'Raw pack chicken often produces better texture. Remove skin to prevent fat from interfering with the seal. Do not add water for raw pack. Chicken releases its own liquid during processing.',
  },
  {
    name: 'Ground beef',
    category: 'Meat',
    pressure: '10 lb weighted / 11 lb dial',
    pints: '75 min',
    quarts: '90 min',
    pack: 'Hot pack (browned)',
    notes: 'Brown ground beef and drain fat before packing. Fat remaining in the jar can prevent a proper seal. Pack loosely into jars with boiling broth or water. Leave 1 inch headspace.',
  },
  {
    name: 'Bean soup (mixed)',
    category: 'Soup',
    pressure: '10 lb weighted / 11 lb dial',
    pints: '75 min',
    quarts: '90 min',
    pack: 'Hot pack',
    notes: 'Bean soup must be pressure canned because it contains low-acid ingredients. Fill jars only half full of solids. Top with liquid, leaving 1 inch headspace. Do not thicken soup before canning.',
  },
];

const SETUP_STEPS = [
  'Add 2 to 3 inches of hot water to the pressure canner before loading jars.',
  'Load filled jars on the rack using a jar lifter.',
  'Lock the lid and heat on medium-high with the vent open.',
  'Let steam vent steadily for 10 full minutes before closing the vent or adding the weight.',
  'Bring to the required pressure. Start your timer when the correct pressure is reached.',
  'Maintain steady pressure for the full processing time. Adjust heat as needed.',
  'When time is up, turn off heat. Let the canner depressurize naturally. Do not rush it.',
  'Wait 10 minutes after pressure drops to zero. Open the lid away from your face.',
  'Remove jars and let cool undisturbed for 12 to 24 hours.',
];

const CHECKLIST = [
  'Gasket and sealing ring are in good condition. Replace every 2 to 3 years or when cracked.',
  'Vent and safety valves are clear of debris.',
  'Dial gauge has been tested within the last year (county extension offices test these for free).',
  'Using a tested recipe with the exact headspace, pack method, and processing time specified.',
  'Not opening the canner until pressure has fully dropped to zero on its own.',
  'Letting jars cool undisturbed for 12 to 24 hours before checking seals.',
];

const WEIGHTED = [
  ['0 to 1,000 ft', '10 lb'],
  ['Above 1,000 ft', '15 lb'],
];

const DIAL = [
  ['0 to 2,000 ft', '11 lb'],
  ['2,001 to 4,000 ft', '12 lb'],
  ['4,001 to 6,000 ft', '13 lb'],
  ['6,001 to 8,000 ft', '14 lb'],
];

export default function PressureCanningRecipesPage() {
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
              Pressure method · Low-acid foods
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              Pressure canning recipes.
            </h1>
            <p
              className="font-body text-lg leading-relaxed max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              Low-acid foods require pressure canning. A boiling water bath cannot reach the temperature needed to destroy Clostridium botulinum spores. Pressure canning reaches 240 degrees F, which does the job. Every recipe below uses USDA-tested processing times.
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
            <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.primary }}>Botulism</p>
            <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
              Clostridium botulinum spores survive boiling water. They thrive in sealed jars with low acid. Only pressure canning reaches 240 degrees F, which is required to destroy the spores in low-acid foods. This is why water bath canning vegetables is not safe.
            </p>
          </div>
        </section>

        {/* Recipe rows */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                USDA processing times
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Recipe · Pints · Quarts.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Times are sea level (0 to 1,000 ft). Above 1,000 ft, use 15 lb pressure with a weighted gauge or consult the dial-gauge table below.
              </p>
            </div>

            {/* Header */}
            <div
              className="hidden md:grid md:grid-cols-[2fr_1fr_0.7fr_0.7fr] gap-6 pb-3"
              style={{ borderBottom: `1px solid ${TOKEN.border}` }}
            >
              <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Recipe</p>
              <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Pressure</p>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-right" style={{ color: TOKEN.muted }}>Pints</p>
              <p className="font-body text-xs uppercase tracking-[0.18em] text-right" style={{ color: TOKEN.muted }}>Quarts</p>
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
                  <div className="grid md:grid-cols-[2fr_1fr_0.7fr_0.7fr] gap-3 md:gap-6 items-baseline mb-3">
                    <div>
                      <h3 className="font-display text-xl" style={{ color: TOKEN.fg }}>{r.name}</h3>
                      <p className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: TOKEN.muted }}>
                        {r.category}
                      </p>
                    </div>
                    <p className="font-body text-sm" style={{ color: TOKEN.body }}>{r.pressure}</p>
                    <p className="font-display text-lg tabular-nums md:text-right" style={{ color: TOKEN.primary }}>
                      {r.pints}
                    </p>
                    <p className="font-display text-lg tabular-nums md:text-right" style={{ color: TOKEN.primary }}>
                      {r.quarts}
                    </p>
                  </div>
                  <p className="font-body text-sm mb-2" style={{ color: TOKEN.muted }}>
                    Pack method: <span style={{ color: TOKEN.fg }}>{r.pack}</span>
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: TOKEN.body }}>{r.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Altitude tables */}
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
                Above 1,000 ft, raise pressure.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Water boils at a lower temperature at higher elevation. Increase pressure to compensate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                style={{
                  backgroundColor: TOKEN.bg,
                  border: `1px solid ${TOKEN.border}`,
                }}
              >
                <div className="px-6 py-4" style={{ borderBottom: `1px solid ${TOKEN.border}` }}>
                  <p className="font-display text-base" style={{ color: TOKEN.primary }}>Weighted gauge</p>
                </div>
                {WEIGHTED.map(([alt, p], i) => (
                  <div
                    key={alt}
                    className="grid grid-cols-2 gap-4 px-6 py-4 items-baseline"
                    style={{ borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}` }}
                  >
                    <p className="font-body text-sm" style={{ color: TOKEN.body }}>{alt}</p>
                    <p className="font-display text-base tabular-nums text-right" style={{ color: TOKEN.primary }}>{p}</p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: TOKEN.bg,
                  border: `1px solid ${TOKEN.border}`,
                }}
              >
                <div className="px-6 py-4" style={{ borderBottom: `1px solid ${TOKEN.border}` }}>
                  <p className="font-display text-base" style={{ color: TOKEN.primary }}>Dial gauge</p>
                </div>
                {DIAL.map(([alt, p], i) => (
                  <div
                    key={alt}
                    className="grid grid-cols-2 gap-4 px-6 py-4 items-baseline"
                    style={{ borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}` }}
                  >
                    <p className="font-body text-sm" style={{ color: TOKEN.body }}>{alt}</p>
                    <p className="font-display text-base tabular-nums text-right" style={{ color: TOKEN.primary }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-body text-xs mt-4" style={{ color: TOKEN.muted }}>
              Source: USDA National Center for Home Food Preservation. Have dial gauge canners tested for accuracy annually.
            </p>
          </div>
        </section>

        {/* How to */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                How to use the canner
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Nine steps. Do not skip the vent.
              </h2>
            </div>

            <div>
              {SETUP_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[60px_1fr] gap-4 py-5 items-baseline"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === SETUP_STEPS.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <span className="font-display text-xl tabular-nums" style={{ color: TOKEN.primary }}>0{i + 1}</span>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety checklist */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Safety checklist
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Six checks before you start.
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
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Get the app
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6" style={{ color: TOKEN.fg }}>
              Log your pressure batches.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              CanningLog records pressure, time, jar count, and seal results for every batch. Knowing your exact records matters most for pressure-canned foods.
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
