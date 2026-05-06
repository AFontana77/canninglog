import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CanningLog — USDA Canning Recipes + Batch Log App",
  description: "CanningLog has 150+ USDA-tested canning recipes with processing times, pressure levels, and headspace requirements. Log every batch, track your pantry, and can with confidence. Free on iPhone and Android.",
};

const REFERENCE_ROWS = [
  { recipe: 'Strawberry jam', jar: 'half-pint', time: '10 min', method: 'boiling water bath' },
  { recipe: 'Tomato sauce', jar: 'quart', time: '40 min', method: 'boiling water bath' },
  { recipe: 'Pickles (dill)', jar: 'quart', time: '15 min', method: 'boiling water bath' },
  { recipe: 'Salsa', jar: 'pint', time: '15 min', method: 'boiling water bath' },
  { recipe: 'Apple butter', jar: 'half-pint', time: '10 min', method: 'boiling water bath' },
];

const FEATURES = [
  {
    label: 'Recipe database',
    body: 'Every recipe in CanningLog comes from the USDA Complete Guide to Home Canning or Ball Blue Book sources. Processing time, pressure, headspace, and jar size are listed for each entry. No adapted family recipes, no guesswork.',
  },
  {
    label: 'Batch log',
    body: 'Log each canning run in 30 seconds. Recipe, jar count, batch date, seal results. The log builds a permanent record of what went into your pantry and when, so you can trace any jar back to its session.',
  },
  {
    label: 'Altitude calculator',
    body: 'Water boils cooler at higher elevation, which changes safe processing time. Enter your altitude once. CanningLog adjusts every recipe going forward, with the corrected time shown in the recipe view.',
  },
  {
    label: 'Doneness checks',
    body: 'Headspace, hot pack vs raw pack, jar seal status, and one-year best-by reminders. The app flags jars that need to be used soon and walks you through seal verification after each session.',
  },
];

const STATS = [
  { value: '158', label: 'USDA-tested recipes' },
  { value: '100%', label: 'USDA-verified sources' },
  { value: '$0', label: 'to start' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CanningLog",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "iOS, Android",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "USDA-tested canning recipes with processing times, pressure levels, and a built-in batch log.",
            "url": "https://www.canninglog.com"
          })
        }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Section 1: Hero, left aligned, two columns */}
        <section
          className="px-6 sm:px-10 py-20 lg:py-28"
          style={{ backgroundColor: 'oklch(0.94 0.018 105)' }}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-8"
                style={{ color: 'oklch(0.40 0.12 145)' }}
              >
                USDA-verified processing times · Free reference
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-7"
                style={{ color: 'oklch(0.18 0.025 130)' }}
              >
                Can with confidence.<br />
                Log every batch.
              </h1>
              <p
                className="font-body text-lg leading-relaxed mb-10 max-w-xl"
                style={{ color: 'oklch(0.32 0.022 130)' }}
              >
                CanningLog gives you 158 USDA-tested canning recipes with processing times, pressure settings, headspace, and altitude adjustments built in. Log every batch, track your pantry, and keep a real record of everything you put up. Free on iPhone and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/library" className="btn-primary">
                  Browse the recipe library
                </Link>
                <Link href="/free-download" className="btn-ghost">
                  Free processing time chart
                </Link>
              </div>
            </div>

            {/* Reference card */}
            <div
              className="border p-6 sm:p-8"
              style={{
                backgroundColor: 'oklch(0.97 0.012 105)',
                borderColor: 'oklch(0.84 0.018 105)',
              }}
            >
              <div className="flex items-baseline justify-between mb-6 pb-4 border-b" style={{ borderColor: 'oklch(0.84 0.018 105)' }}>
                <p className="font-display text-base" style={{ color: 'oklch(0.40 0.12 145)' }}>
                  Recipe · Jar size · Process time
                </p>
                <p className="font-body text-xs uppercase tracking-wider" style={{ color: 'oklch(0.46 0.018 130)' }}>
                  Reference
                </p>
              </div>

              <ul>
                {REFERENCE_ROWS.map((row, i) => (
                  <li
                    key={row.recipe}
                    className="grid grid-cols-[1.6fr_1fr_auto] gap-4 items-baseline py-4"
                    style={{
                      borderTop: i === 0 ? 'none' : '1px solid oklch(0.88 0.014 105)',
                    }}
                  >
                    <span className="font-body text-sm font-medium" style={{ color: 'oklch(0.18 0.025 130)' }}>
                      {row.recipe}
                    </span>
                    <span className="font-body text-sm" style={{ color: 'oklch(0.46 0.018 130)' }}>
                      {row.jar}
                    </span>
                    <span
                      className="font-display text-lg tabular-nums text-right"
                      style={{ color: 'oklch(0.40 0.12 145)' }}
                    >
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className="font-body text-xs mt-6 pt-4 border-t"
                style={{
                  color: 'oklch(0.46 0.018 130)',
                  borderColor: 'oklch(0.84 0.018 105)',
                }}
              >
                Times are sea-level. Adjust for altitude.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Stat strip on green */}
        <section
          className="px-6 sm:px-10 py-14 lg:py-16"
          style={{ backgroundColor: 'oklch(0.40 0.12 145)' }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div
                  className="font-display text-5xl sm:text-6xl mb-2 tabular-nums"
                  style={{ color: 'oklch(0.99 0.005 105)' }}
                >
                  {value}
                </div>
                <div
                  className="font-body text-xs uppercase tracking-[0.18em]"
                  style={{ color: 'oklch(0.88 0.025 105)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Editorial value section with hairline rule features */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: 'oklch(0.40 0.12 145)' }}
              >
                Why CanningLog
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6"
                style={{ color: 'oklch(0.18 0.025 130)' }}
              >
                Most canning apps skip the safety part.
              </h2>
              <p
                className="font-body text-lg leading-relaxed"
                style={{ color: 'oklch(0.32 0.022 130)' }}
              >
                Botulism is odorless, tasteless, and serious. The USDA tested these recipes in a lab so you do not have to guess. CanningLog puts that tested data in your pocket: searchable, altitude-adjusted, and cross-referenced to your batch history.
              </p>
            </div>

            <div>
              {FEATURES.map((f, i) => (
                <div
                  key={f.label}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-12 py-8 lg:py-10"
                  style={{
                    borderTop: '1px solid oklch(0.84 0.018 105)',
                    borderBottom: i === FEATURES.length - 1 ? '1px solid oklch(0.84 0.018 105)' : 'none',
                  }}
                >
                  <div>
                    <p
                      className="font-body text-xs uppercase tracking-[0.18em] mb-2"
                      style={{ color: 'oklch(0.46 0.018 130)' }}
                    >
                      0{i + 1}
                    </p>
                    <h3
                      className="font-display text-2xl"
                      style={{ color: 'oklch(0.40 0.12 145)' }}
                    >
                      {f.label}
                    </h3>
                  </div>
                  <p
                    className="font-body text-base leading-relaxed"
                    style={{ color: 'oklch(0.32 0.022 130)' }}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: CTA panel, peach surface */}
        <section
          className="px-6 sm:px-10 py-20 lg:py-24"
          style={{
            backgroundColor: 'oklch(0.96 0.020 60)',
            borderTop: '1px solid oklch(0.84 0.018 105)',
          }}
        >
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: 'oklch(0.50 0.14 60)' }}
            >
              Free to start
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6"
              style={{ color: 'oklch(0.18 0.025 130)' }}
            >
              Get the canning chart first.
            </h2>
            <p
              className="font-body text-lg leading-relaxed mb-10 max-w-2xl"
              style={{ color: 'oklch(0.32 0.022 130)' }}
            >
              Download the printable processing time reference. Twenty common recipes with water bath times, pressure settings, and headspace, all on one page. No email required, no credit card.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-download" className="btn-primary">
                Get the free chart
              </Link>
              <Link href="/library" className="btn-ghost">
                Browse the library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
