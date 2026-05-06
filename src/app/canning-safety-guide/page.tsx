import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Canning Safety Guide — USDA Rules + Botulism Prevention | CanningLog',
  description:
    'Home canning safety guide. What causes foodborne illness in canned goods, how to prevent it, and how to tell if a jar is safe to eat.',
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

const BOTULISM_FACTS = [
  ['What it is', 'Clostridium botulinum, a bacterium that produces a deadly toxin.'],
  ['Where it lives', 'Low-acid, low-oxygen environments at room temperature. A sealed jar of improperly canned food.'],
  ['How to detect it', 'You cannot. Botulism toxin is odorless and tasteless. A contaminated jar may look and smell normal.'],
  ['Only safety check', 'Proper processing technique. Tested recipe, correct method, exact times.'],
];

const PREVENTION = [
  {
    title: 'Use tested recipes',
    body: 'Every processing time in a USDA-tested recipe was calculated for a specific food density, pH, and jar size. Changing any of those factors changes the safety math.',
  },
  {
    title: 'Pressure can low-acid foods',
    body: 'Vegetables, meats, beans, and soups must be pressure canned. Water bath canning cannot reach 240 degrees F. At that temperature, botulinum spores are destroyed.',
  },
  {
    title: 'Do not alter acid ratios',
    body: 'In recipes where vinegar, lemon juice, or citric acid controls safety, changing those amounts changes the pH of the food. Even small reductions can create conditions where botulinum thrives.',
  },
];

const SPOILAGE_SIGNS = [
  ['Spurting liquid when opening', 'Pressure has built inside the jar. This is a sign of microbial activity. Do not taste. Discard.'],
  ['Off odor', 'Any unusual smell means discard. Botulism toxin itself is odorless. An off smell means a different problem, but the jar is still unsafe.'],
  ['Visible mold', 'Discard without opening if possible. Do not smell mold inside a jar. Wear gloves when handling.'],
  ['Bulging lid', 'Pressure inside the jar has pushed the lid up. Discard without opening.'],
  ['Lid that did not seal', 'If the center of the lid flexes when pressed, the jar did not seal. Refrigerate and use within days, or discard.'],
  ['Cloudy liquid in pickles', 'Some cloudiness is normal in fermented pickles. In water bath or pressure-canned pickles, cloudiness can mean spoilage. When in doubt, throw it out.'],
];

const BAD_METHODS = [
  ['Open kettle canning', 'Ladle hot food into jars and seal without processing. Lids may seal from the heat, but the food inside is not processed to a safe temperature. This method was common decades ago and is not safe.'],
  ['Oven canning', 'Dry heat in an oven does not transfer heat into the center of a dense, liquid-filled jar the same way boiling water does. Processing times tested for water baths do not apply to ovens.'],
  ['Dishwasher canning', 'Dishwashers do not reach or hold temperatures needed for safe processing. This method does not produce consistently safe food.'],
  ['Inversion sealing', 'Sometimes used for jams. The hot food may create a temporary seal, but it is not sufficient to prevent spoilage. Use water bath processing instead.'],
  ['Water bath for low-acid', 'Boiling water reaches 212 degrees F. That is not hot enough to kill Clostridium botulinum spores in low-acid foods. Only pressure canning reaches 240 degrees F.'],
];

const EQUIPMENT_RULES = [
  'Use only Ball, Kerr, or Jarden brand lids. Do not use off-brand lids with unverified sealing compound.',
  'Never reuse lids from a previous canning season. Rings can be reused if rust-free and undamaged.',
  'Discard any jar with a chip or crack on the rim. Even a small defect prevents a complete seal.',
  'Have dial-gauge pressure canners tested for accuracy annually. Many county extension offices do this free.',
  'Replace gaskets and overpressure plugs on pressure canners every 2 to 3 years.',
  'Do not stack jars inside the canner during processing unless using a two-tier rack designed for it.',
];

const RESOURCES = [
  {
    name: 'USDA Complete Guide to Home Canning',
    desc: 'The definitive reference. Covers every food category, all processing times, and altitude adjustments. Available free online from the USDA.',
    url: 'https://nchfp.uga.edu/publications/publications_usda.html',
  },
  {
    name: 'National Center for Home Food Preservation',
    desc: 'nchfp.uga.edu. University of Georgia, USDA-funded. The most comprehensive collection of tested canning recipes and research in the US.',
    url: 'https://nchfp.uga.edu',
  },
  {
    name: 'Ball Blue Book Guide to Preserving',
    desc: 'Widely available in stores. Contains tested recipes aligned with USDA standards. A good printed reference to keep in the kitchen.',
    url: 'https://www.freshpreserving.com',
  },
  {
    name: 'County extension office',
    desc: 'Land-grant university extension services offer free canning classes, dial gauge testing, and local altitude information. Search "[your county] extension office canning".',
    url: 'https://www.nifa.usda.gov/land-grant-colleges-and-universities-partner-website-directory',
  },
];

export default function CanningSafetyGuidePage() {
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
              Safety reference · USDA-grade
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              Home canning safety guide.
            </h1>
            <p
              className="font-body text-lg leading-relaxed max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              Home canning is safe when done right. The risk comes from shortcuts: wrong method, modified recipes, or bad equipment. This guide covers the real risks, how to prevent them, and how to spot a bad jar.
            </p>
          </div>
        </section>

        {/* Botulism spec table */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                The main risk
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Botulism: the four facts.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Calm authority. No drama. The facts are what matter.
              </p>
            </div>

            <div
              style={{
                backgroundColor: TOKEN.bg,
                border: `1px solid ${TOKEN.border}`,
              }}
            >
              {BOTULISM_FACTS.map(([label, value], i) => (
                <div
                  key={label}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-12 px-6 sm:px-8 py-6 items-baseline"
                  style={{ borderTop: i === 0 ? 'none' : `1px solid ${TOKEN.border}` }}
                >
                  <p className="font-body text-xs uppercase tracking-[0.18em]" style={{ color: TOKEN.muted }}>
                    {label}
                  </p>
                  <p className="font-display text-base leading-relaxed" style={{ color: TOKEN.fg }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Prevention
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Three rules that prevent contamination.
              </h2>
            </div>

            <div>
              {PREVENTION.map((p, i) => (
                <div
                  key={p.title}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-12 py-8"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === PREVENTION.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.muted }}>
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl" style={{ color: TOKEN.primary }}>{p.title}</h3>
                  </div>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spoilage signs */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Signs of spoilage
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Check every jar before opening.
              </h2>
              <p className="font-display text-lg" style={{ color: TOKEN.primary }}>
                When in doubt, throw it out.
              </p>
            </div>

            <div>
              {SPOILAGE_SIGNS.map(([sign, meaning], i) => (
                <div
                  key={sign}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-12 py-6"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === SPOILAGE_SIGNS.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <p className="font-display text-base" style={{ color: TOKEN.fg }}>{sign}</p>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{meaning}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-12 p-6 sm:p-8"
              style={{
                backgroundColor: TOKEN.surface,
                border: `1px solid ${TOKEN.border}`,
              }}
            >
              <p className="font-body text-xs uppercase tracking-[0.18em] mb-3" style={{ color: TOKEN.primary }}>
                Disposing of a suspect jar
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                If you suspect botulism contamination, do not open the jar and do not smell the contents. Place the jar in a heavy garbage bag, seal it, and dispose of it in a covered trash can. If the jar has opened, wash all surfaces the food may have touched with a bleach solution (1 part bleach to 9 parts water). Contact your local health department if you believe others may have eaten the food.
              </p>
            </div>
          </div>
        </section>

        {/* Bad methods */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Methods to avoid
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-4" style={{ color: TOKEN.fg }}>
                Five methods that do not work.
              </h2>
              <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                Still described on some older recipe blogs and YouTube channels. None produce consistently safe food.
              </p>
            </div>

            <div>
              {BAD_METHODS.map(([method, why], i) => (
                <div
                  key={method}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-12 py-6"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === BAD_METHODS.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <p className="font-display text-base" style={{ color: TOKEN.fg }}>{method}</p>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment rules */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Equipment safety
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Six equipment rules.
              </h2>
            </div>

            <div>
              {EQUIPMENT_RULES.map((rule, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[60px_1fr] gap-4 py-5 items-baseline"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === EQUIPMENT_RULES.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <span className="font-display text-xl tabular-nums" style={{ color: TOKEN.primary }}>0{i + 1}</span>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Trusted resources
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]" style={{ color: TOKEN.fg }}>
                Where USDA-tested recipes live.
              </h2>
            </div>

            <div>
              {RESOURCES.map((r, i) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-12 py-6 group"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === RESOURCES.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <p className="font-display text-base group-hover:underline" style={{ color: TOKEN.primary }}>{r.name}</p>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>{r.desc}</p>
                </a>
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
              Keep a record of every batch.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              If a jar ever looks or smells off, you need to know exactly when it was processed, which recipe you used, and what lot of jars it came from. CanningLog records all of it automatically. Free to download.
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
