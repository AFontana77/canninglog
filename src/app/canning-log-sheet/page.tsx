import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Canning Log Sheet — Track Every Batch | CanningLog',
  description:
    'Free canning log sheet to track your batches — recipe name, date, jar size, quantity, processing time, and notes. Or use the CanningLog app on your phone.',
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

const LOG_COLUMNS = [
  ['Recipe name', 'Which specific recipe you followed. Include the source (Ball Blue Book page number, USDA guide section, etc.).'],
  ['Date canned', 'When you processed the batch. Helps you track age and rotate your pantry.'],
  ['Jar size', 'Half-pint, pint, or quart. Processing times differ by jar size, so this matters for your records.'],
  ['Quantity', 'How many jars you processed. Helps you track what is in storage and plan future batches.'],
  ['Canning method', 'Water bath or pressure canning. For pressure: record the pressure used and canner type (dial or weighted gauge).'],
  ['Processing time', 'Exact minutes at full boil or full pressure. If something ever looks wrong with a jar, this tells you whether the batch was properly processed.'],
  ['Seal check', 'How many jars sealed vs. how many did not. Unsealed jars go in the fridge immediately.'],
  ['Storage location', 'Which shelf, basement section, or cabinet. Helps you find jars without tearing the pantry apart.'],
  ['Use-by estimate', 'Most home-canned goods are best within 1 to 2 years for quality. They remain safe longer if the seal holds, but flavor and texture decline.'],
  ['Notes', 'What worked, what to change next time, variations you tried. This turns into your personal recipe book over time.'],
];

const WHY_TRACK = [
  {
    title: 'FIFO inventory',
    body: 'Use the oldest jars first. Without dates on your log, you end up with mystery jars you are afraid to open.',
  },
  {
    title: 'Expiry tracking',
    body: 'Home-canned food is best quality within 1 to 2 years. It stays safe longer if the seal holds and storage conditions are good. Logging the date tells you where each jar stands.',
  },
  {
    title: 'Know your inventory',
    body: 'You canned 14 quarts of tomato sauce last August. How many do you have left? A log tells you without counting every shelf.',
  },
  {
    title: 'Reproduce what worked',
    body: 'Your strawberry jam turned out perfectly. Your notes say you used 4 lb of berries, 3 cups of sugar, and Ball low-sugar pectin. Next year you can repeat it exactly.',
  },
  {
    title: 'Safety records',
    body: 'If a jar ever looks wrong, your log tells you the exact batch, processing time, and method. That information matters if you need to decide whether other jars from the same batch are safe.',
  },
];

const SAMPLE_ROWS = [
  { recipe: 'Strawberry jam (Ball)', date: '06/14/2025', size: 'Half-pint', qty: '8', method: 'Water bath', time: '10 min', seals: '8/8' },
  { recipe: 'Dill pickles (NCHFP)', date: '07/22/2025', size: 'Quart', qty: '7', method: 'Water bath', time: '10 min', seals: '7/7' },
  { recipe: 'Green beans (USDA)', date: '08/05/2025', size: 'Pint', qty: '12', method: 'Pressure 10 lb', time: '20 min', seals: '11/12' },
];

const SHELF_LIFE = [
  ['Jams and jellies', '1 year', '2 to 3 years'],
  ['Fruits and tomatoes', '1 to 2 years', '3 to 5 years'],
  ['Pickles', '1 to 2 years', '2 to 3 years'],
  ['Vegetables (pressure)', '2 to 3 years', '4 to 5 years'],
  ['Meats and poultry (pressure)', '1 to 2 years', '3 to 5 years'],
];

const PAPER = [
  'Free to print and use',
  'Works without a phone or power',
  'Good for simple tracking',
  'Easy to lose or damage in the kitchen',
  'No search or filter',
  'Hard to total your inventory',
];

const APP = [
  'All batches stored in one place',
  'Search by recipe, date, or food type',
  'Total inventory at a glance',
  'Reminders when jars approach use-by',
  'Works on iPhone and Android',
  '$6.99 one-time unlock for the full log',
];

export default function CanningLogSheetPage() {
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
              Free PDF · Or use the app
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              The canning log sheet.
            </h1>
            <p
              className="font-body text-lg leading-relaxed mb-10 max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              Track every batch: recipe, date canned, jar size, quantity, processing time, seal check, and storage location. Download the free PDF log sheet or use the CanningLog app to track everything on your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-download" className="btn-primary">Download free log sheet</Link>
              <Link href="/library" className="btn-ghost">Browse the library</Link>
            </div>
          </div>
        </section>

        {/* Why track */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Why log?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Five reasons to start logging from batch one.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Experienced canners say the same thing: log from your very first batch.
              </p>
            </div>

            <div>
              {WHY_TRACK.map((w, i) => (
                <div
                  key={w.title}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-12 py-8"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === WHY_TRACK.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
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

        {/* What to track */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                The columns
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                What to record in each batch.
              </h2>
            </div>

            <div>
              {LOG_COLUMNS.map(([col, why], i) => (
                <div
                  key={col}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-12 py-6"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === LOG_COLUMNS.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <p className="font-display text-base" style={{ color: TOKEN.fg }}>{col}</p>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample log */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Sample log
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                What a filled-in entry looks like.
              </h2>
            </div>

            <div className="overflow-x-auto" style={{ border: `1px solid ${TOKEN.border}` }}>
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${TOKEN.border}` }}>
                    {['Recipe', 'Date', 'Size', 'Qty', 'Method', 'Time', 'Seals'].map((h) => (
                      <th key={h} className="text-left px-4 py-4 font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_ROWS.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}`,
                      }}
                    >
                      <td className="px-4 py-4 font-body text-sm" style={{ color: TOKEN.fg }}>{row.recipe}</td>
                      <td className="px-4 py-4 font-body text-sm tabular-nums whitespace-nowrap" style={{ color: TOKEN.body }}>{row.date}</td>
                      <td className="px-4 py-4 font-body text-sm" style={{ color: TOKEN.body }}>{row.size}</td>
                      <td className="px-4 py-4 font-display text-base tabular-nums" style={{ color: TOKEN.primary }}>{row.qty}</td>
                      <td className="px-4 py-4 font-body text-sm" style={{ color: TOKEN.body }}>{row.method}</td>
                      <td className="px-4 py-4 font-display text-base tabular-nums" style={{ color: TOKEN.primary }}>{row.time}</td>
                      <td className="px-4 py-4 font-display text-base tabular-nums" style={{ color: TOKEN.primary }}>{row.seals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs mt-4" style={{ color: TOKEN.muted }}>
              Sample data for illustration. Always use real USDA-tested processing times for your actual batches.
            </p>
          </div>
        </section>

        {/* Shelf life */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Shelf life
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Home-canned food shelf life.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Properly sealed jars are safe beyond these timeframes, but quality (texture, color, flavor) declines.
              </p>
            </div>

            <div
              style={{
                backgroundColor: TOKEN.bg,
                border: `1px solid ${TOKEN.border}`,
              }}
            >
              <div
                className="grid grid-cols-3 gap-4 px-6 py-4"
                style={{ borderBottom: `1px solid ${TOKEN.border}` }}
              >
                <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Food type</p>
                <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>Best quality</p>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-right" style={{ color: TOKEN.muted }}>Still safe</p>
              </div>
              {SHELF_LIFE.map(([type, best, safe], i) => (
                <div
                  key={type}
                  className="grid grid-cols-3 gap-4 px-6 py-4 items-baseline"
                  style={{ borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}` }}
                >
                  <p className="font-body text-sm" style={{ color: TOKEN.fg }}>{type}</p>
                  <p className="font-body text-sm" style={{ color: TOKEN.body }}>{best}</p>
                  <p className="font-display text-base tabular-nums text-right" style={{ color: TOKEN.primary }}>{safe}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-xs mt-4" style={{ color: TOKEN.muted }}>
              Store in a cool, dark, dry location. Discard any jar with a broken seal, unusual odor, or signs of spoilage regardless of date.
            </p>
          </div>
        </section>

        {/* Paper vs app */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Paper vs. app
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Both work. The app does more.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              <div
                className="p-8"
                style={{
                  backgroundColor: TOKEN.bg,
                  border: `1px solid ${TOKEN.border}`,
                }}
              >
                <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.muted }}>
                  Paper log sheet
                </p>
                <h3 className="font-display text-xl mb-5" style={{ color: TOKEN.fg }}>Print and pin to the wall</h3>
                <ul>
                  {PAPER.map((item, i) => (
                    <li
                      key={item}
                      className="font-body text-sm py-3"
                      style={{
                        color: TOKEN.body,
                        borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}`,
                      }}
                    >
                      {item}
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
                <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.primary }}>
                  CanningLog app
                </p>
                <h3 className="font-display text-xl mb-5" style={{ color: TOKEN.fg }}>Free on iPhone and Android</h3>
                <ul>
                  {APP.map((item, i) => (
                    <li
                      key={item}
                      className="font-body text-sm py-3"
                      style={{
                        color: TOKEN.body,
                        borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}`,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
              Get the log
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6" style={{ color: TOKEN.fg }}>
              Get the free log sheet now.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              Download the free PDF canning log sheet or download CanningLog on your phone to track batches digitally. Both are free to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/free-download" className="btn-primary">Free PDF log sheet</Link>
            </div>
            <p className="font-body text-sm mb-3" style={{ color: TOKEN.muted }}>
              Or get the app:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">Google Play</a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
