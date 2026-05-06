import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CanningLog Library — USDA Canning Recipe Reference",
  description: "Browse 150+ USDA-tested canning recipes with processing times, jar sizes, altitude adjustments, and safety guidance. Full search available in the free CanningLog app.",
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

const RECIPE_CATEGORIES = [
  {
    name: "Tomatoes",
    count: 22,
    method: "Water bath or pressure",
    highlights: ["Crushed tomatoes", "Whole peeled tomatoes", "Tomato juice", "Tomato sauce", "Diced tomatoes"],
    notes: "Tomatoes sit at the edge of safe water-bath pH. Always add lemon juice or citric acid as directed to ensure acidity. The USDA recipes in CanningLog include the specific acid amounts per jar size. Both water bath and pressure canning entries are included with side-by-side processing times. Do not reduce the acid addition. That is not optional.",
  },
  {
    name: "Fruits and jams",
    count: 28,
    method: "Water bath",
    highlights: ["Strawberry jam", "Peach slices", "Applesauce", "Blueberry jam", "Mixed berry preserves"],
    notes: "High-acid fruits are safe for water-bath processing. Entries include light, medium, and heavy syrup options for fruit slices, with processing times for both pint and quart jars. Jam entries note both pectin and no-pectin versions where both exist. Applesauce entries include chunky vs. smooth variants with texture guidance.",
  },
  {
    name: "Vegetables",
    count: 30,
    method: "Pressure only",
    highlights: ["Green beans", "Corn", "Carrots", "Beets", "Potatoes"],
    notes: "Low-acid vegetables require pressure canning. No exceptions. Water-bath canning vegetables is not safe and is not supported in CanningLog. Entries include both dial-gauge and weighted-gauge pressure canner settings with altitude adjustment tables built in. Green beans are the most-logged vegetable in the app. The entry covers hot pack, cold pack, and altitude adjustments through 10,000 feet.",
  },
  {
    name: "Pickles and relishes",
    count: 18,
    method: "Water bath",
    highlights: ["Dill pickles", "Bread and butter pickles", "Bread and butter relish", "Pickled peppers", "Pickled beets"],
    notes: "Pickles rely on vinegar acidity for safety. Entries specify minimum 5 percent acidity vinegar and note that diluting brine below tested concentrations is not safe. Entries include both quick-pack and fermented dill methods. Bread and butter pickle entries note the sugar and turmeric ratios that define the classic flavor. Pickled pepper entries cover both sweet and hot varieties.",
  },
  {
    name: "Meats and stocks",
    count: 20,
    method: "Pressure only",
    highlights: ["Chicken pieces", "Ground beef", "Venison", "Chicken stock", "Beef broth"],
    notes: "Meats are exclusively pressure-canned. Entries include raw pack and hot pack methods. Raw pack is often preferred for chicken pieces as it results in better texture. Stock entries note the importance of removing fat before canning to prevent seal failure. Venison entries treat it identically to beef with equivalent pressure and time requirements.",
  },
  {
    name: "Soups and salsas",
    count: 10,
    method: "Pressure (soups) / water bath (salsa)",
    highlights: ["Bean soup", "Minestrone", "Classic tomato salsa", "Corn salsa", "Mango salsa"],
    notes: "Salsa is one of the most-tested categories in USDA research precisely because home canners modify recipes and reduce acidity unintentionally. CanningLog includes only USDA-tested salsa recipes. Do not substitute ingredients or alter ratios. Soup entries require pressure canning regardless of ingredients because mixed vegetable soups default to the lowest-acid component.",
  },
];

const SAFETY_RULES = [
  {
    title: "Use only USDA-tested recipes",
    body: "Canning recipes are not interchangeable with cooking recipes. Processing times are calculated for a specific density, pH, and jar size. Doubling a recipe, using a different jar size, or substituting ingredients can make the finished product unsafe even if it looks and smells fine.",
  },
  {
    title: "Low-acid foods need pressure",
    body: "Vegetables, meats, and mixed soups must be pressure canned. Boiling water baths do not reach temperatures high enough to kill Clostridium botulinum spores in low-acid foods. This is a safety requirement, not a preference. CanningLog will not show water-bath times for low-acid entries.",
  },
  {
    title: "Altitude changes time and pressure",
    body: "Water boils at lower temperatures at higher altitudes. At 3,000 feet, you need more processing time for water-bath and higher pressure for pressure canning. CanningLog includes altitude adjustment tables for every recipe. If you live above 1,000 feet, you must apply these adjustments.",
  },
  {
    title: "Inspect every lid before storing",
    body: "After processing and cooling, press the center of each lid. It should not flex up and down. Any lid that flexes, or that did not seal with a satisfying pop during cooling, must be refrigerated and used within days or discarded. Never store unsealed jars with the band tightened to hide the seal failure.",
  },
  {
    title: "Do not taste-test for safety",
    body: "Botulism toxin is odorless and tasteless. A contaminated jar may look, smell, and taste normal. Proper processing technique is the only safety check. You cannot inspect your way to safety after the fact.",
  },
  {
    title: "Keep records of every batch",
    body: "If a recall or illness occurs, knowing which batch was processed when, at what pressure, and for how long is critical. CanningLog's batch log creates a complete record automatically. Include the processing date, recipe used, and number of jars in every entry.",
  },
];

export default function LibraryPage() {
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
              Recipe library · 150+ entries
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              Every recipe.<br />USDA-tested.
            </h1>
            <p
              className="font-body text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              150+ canning recipes with processing times, jar sizes, altitude adjustment tables, and safety guidance. Every recipe in this library has been tested by the USDA National Center for Home Food Preservation. Full search is in the app.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-download" className="btn-primary">Free processing chart</Link>
              <Link href="/canning-safety-guide" className="btn-ghost">Read the safety guide</Link>
            </div>
          </div>
        </section>

        {/* Safety notice strip */}
        <section
          className="px-6 sm:px-10 py-10"
          style={{
            backgroundColor: TOKEN.bg,
            borderTop: `1px solid ${TOKEN.border}`,
            borderBottom: `1px solid ${TOKEN.border}`,
          }}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-[200px_1fr] gap-6 items-start">
            <p
              className="font-body text-xs uppercase tracking-[0.18em]"
              style={{ color: TOKEN.primary }}
            >
              Safety notice
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
              Use only USDA-tested recipes with exact ingredients and measurements. Botulism is odorless, tasteless, and dangerous. Do not modify recipes, substitute ingredients, or alter jar sizes without a tested recipe that accounts for those changes.
            </p>
          </div>
        </section>

        {/* Recipe Categories */}
        <section className="px-6 sm:px-10 py-20 lg:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-16">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Recipes by category
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6" style={{ color: TOKEN.fg }}>
                Six categories. 150+ entries.
              </h2>
              <p className="font-body text-lg leading-relaxed" style={{ color: TOKEN.body }}>
                Each entry includes method (water bath or pressure), processing time, jar sizes, and altitude adjustment tables.
              </p>
            </div>

            <div>
              {RECIPE_CATEGORIES.map((cat, i) => (
                <div
                  key={cat.name}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-12 py-8 lg:py-10"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === RECIPE_CATEGORIES.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.muted }}>
                      {cat.method}
                    </p>
                    <h3 className="font-display text-2xl mb-2" style={{ color: TOKEN.primary }}>
                      {cat.name}
                    </h3>
                    <p className="font-display text-3xl tabular-nums" style={{ color: TOKEN.fg }}>
                      {cat.count} <span className="font-body text-sm uppercase tracking-wider" style={{ color: TOKEN.muted }}>recipes</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-sm mb-3" style={{ color: TOKEN.muted }}>
                      Includes: <span style={{ color: TOKEN.fg }}>{cat.highlights.join(' · ')}</span>
                    </p>
                    <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                      {cat.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body text-xs mt-8" style={{ color: TOKEN.muted }}>
              Source: USDA National Center for Home Food Preservation. All recipes tested for safety. Do not modify tested recipes.
            </p>
          </div>
        </section>

        {/* Safety rules */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Six rules
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6" style={{ color: TOKEN.fg }}>
                Not tips. The difference between safe food and an emergency.
              </h2>
            </div>
            <div>
              {SAFETY_RULES.map((rule, i) => (
                <div
                  key={rule.title}
                  className="grid grid-cols-[60px_1fr] sm:grid-cols-[90px_1fr_2fr] gap-4 sm:gap-8 py-6 items-baseline"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === SAFETY_RULES.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <span className="font-display text-2xl tabular-nums" style={{ color: TOKEN.primary }}>
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg" style={{ color: TOKEN.fg }}>{rule.title}</h3>
                  <p className="font-body text-base leading-relaxed sm:col-start-3" style={{ color: TOKEN.body }}>
                    {rule.body}
                  </p>
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
              Search 150+ recipes. Log every batch.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              The CanningLog app has all 150+ USDA-tested recipes with full-text search and altitude adjustment tables built in, plus a batch log with processing records for every jar. Free to download. $6.99 one-time for the full log.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Google Play
              </a>
            </div>
            <p className="font-body text-sm mt-6" style={{ color: TOKEN.muted }}>
              Free. No subscription. No credit card.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
