import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, Search, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CanningLog Library — USDA Canning Recipe Reference",
  description: "Browse 150+ USDA-tested canning recipes with processing times, jar sizes, altitude adjustments, and safety guidance. Full search available in the free CanningLog app.",
};

const RECIPE_CATEGORIES = [
  {
    name: "Tomatoes",
    count: 22,
    method: "Water Bath or Pressure",
    highlights: ["Crushed Tomatoes", "Whole Peeled Tomatoes", "Tomato Juice", "Tomato Sauce", "Diced Tomatoes"],
    notes: "Tomatoes sit at the edge of safe water-bath pH — always add lemon juice or citric acid as directed to ensure acidity. The USDA recipes in CanningLog include the specific acid amounts per jar size. Both water bath and pressure canning entries are included with side-by-side processing times. Do not reduce the acid addition — that is not optional.",
  },
  {
    name: "Fruits & Jams",
    count: 28,
    method: "Water Bath",
    highlights: ["Strawberry Jam", "Peach Slices", "Applesauce", "Blueberry Jam", "Mixed Berry Preserves"],
    notes: "High-acid fruits are safe for water-bath processing. Entries include light, medium, and heavy syrup options for fruit slices, with processing times for both pint and quart jars. Jam entries note both pectin and no-pectin versions where both exist. Applesauce entries include chunky vs. smooth variants with texture guidance.",
  },
  {
    name: "Vegetables",
    count: 30,
    method: "Pressure Only",
    highlights: ["Green Beans", "Corn", "Carrots", "Beets", "Potatoes"],
    notes: "Low-acid vegetables require pressure canning — no exceptions. Water-bath canning vegetables is not safe and is not supported in CanningLog. Entries include both dial-gauge and weighted-gauge pressure canner settings with altitude adjustment tables built in. Green beans are the most-logged vegetable in the app — the entry covers hot pack, cold pack, and altitude adjustments through 10,000 feet.",
  },
  {
    name: "Pickles & Relishes",
    count: 18,
    method: "Water Bath",
    highlights: ["Dill Pickles", "Bread & Butter Pickles", "Bread & Butter Relish", "Pickled Peppers", "Pickled Beets"],
    notes: "Pickles rely on vinegar acidity for safety — entries specify minimum 5% acidity vinegar and note that diluting brine below tested concentrations is not safe. Entries include both quick-pack and fermented dill methods. Bread and butter pickle entries note the sugar and turmeric ratios that define the classic flavor. Pickled pepper entries cover both sweet and hot varieties.",
  },
  {
    name: "Meats & Stocks",
    count: 20,
    method: "Pressure Only",
    highlights: ["Chicken Pieces", "Ground Beef", "Venison", "Chicken Stock", "Beef Broth"],
    notes: "Meats are exclusively pressure-canned. Entries include raw pack and hot pack methods — raw pack is often preferred for chicken pieces as it results in better texture. Stock entries note the importance of removing fat before canning to prevent seal failure. Venison entries treat it identically to beef with equivalent pressure and time requirements.",
  },
  {
    name: "Soups & Salsas",
    count: 10,
    method: "Pressure (Soups) / Water Bath (Salsa)",
    highlights: ["Bean Soup", "Minestrone", "Classic Tomato Salsa", "Corn Salsa", "Mango Salsa"],
    notes: "Salsa is one of the most-tested categories in USDA research precisely because home canners modify recipes and reduce acidity unintentionally. CanningLog includes only USDA-tested salsa recipes — do not substitute ingredients or alter ratios. Soup entries require pressure canning regardless of ingredients because mixed vegetable soups default to the lowest-acid component.",
  },
];

const SAFETY_RULES = [
  {
    title: "Use only USDA-tested recipes",
    body: "Canning recipes are not interchangeable with cooking recipes. Processing times are calculated for a specific density, pH, and jar size. Doubling a recipe, using a different jar size, or substituting ingredients can make the finished product unsafe even if it looks and smells fine.",
  },
  {
    title: "Low-acid vegetables require pressure canning",
    body: "Vegetables, meats, and mixed soups must be pressure canned. Boiling water baths do not reach temperatures high enough to kill Clostridium botulinum spores in low-acid foods. This is not a preference — it is a safety requirement. CanningLog will not show water-bath times for low-acid entries.",
  },
  {
    title: "Altitude changes processing time and pressure",
    body: "Water boils at lower temperatures at higher altitudes. At 3,000 feet, you need more processing time for water-bath and higher pressure for pressure canning. CanningLog includes altitude adjustment tables for every recipe. If you live above 1,000 feet, you must apply these adjustments.",
  },
  {
    title: "Inspect every lid before storing",
    body: "After processing and cooling, press the center of each lid. It should not flex up and down. Any lid that flexes — or that did not seal with a satisfying pop during cooling — must be refrigerated and used within days or discarded. Never store unsealed jars with the band tightened to hide the seal failure.",
  },
  {
    title: "Do not taste-test for safety",
    body: "Botulism toxin is odorless and tasteless. A contaminated jar may look, smell, and taste normal. This is why proper processing technique is the only safety check — you cannot inspect your way to safety after the fact.",
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
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDFA' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-green-50 rounded-2xl items-center justify-center mb-6">
              <Database className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">CanningLog Recipe Library</h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed mb-4">
              150+ USDA-tested canning recipes with processing times, jar sizes, altitude adjustment tables, and safety guidance. Every recipe in this library has been tested and approved by the USDA National Center for Home Food Preservation. Full search is in the app.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-green-700 bg-green-50 px-4 py-2 rounded-full">
              <Search size={14} /> Full recipe search available in the free CanningLog app
            </div>
          </div>
        </section>

        {/* Safety Warning */}
        <section className="py-8 px-4 bg-amber-50 border-y border-amber-200">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={22} />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Safety notice:</strong> Only use USDA-tested recipes with exact ingredients and measurements. Botulism is odorless, tasteless, and dangerous. Do not modify recipes, substitute ingredients, or alter jar sizes without a tested recipe that accounts for those changes.
            </p>
          </div>
        </section>

        {/* Recipe Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Recipes by Category</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              150+ recipes organized by food type. Each entry includes method (water bath or pressure), processing time, jar sizes, and altitude adjustment tables.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {RECIPE_CATEGORIES.map((cat) => (
                <div key={cat.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6 card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{cat.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-700">{cat.count} recipes</span>
                  </div>
                  <p className="text-xs font-medium text-green-700 mb-2">Method: {cat.method}</p>
                  <p className="text-xs font-medium text-gray-500 mb-2">Includes: {cat.highlights.join(", ")}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.notes}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-sm text-gray-400">
              Source: USDA National Center for Home Food Preservation. All recipes tested for safety. Do not modify tested recipes.
            </p>
          </div>
        </section>

        {/* Safety Rules */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Six canning safety rules</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              These aren't tips — they're the difference between safe food and a health emergency. Every one applies to every batch.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {SAFETY_RULES.map(({ title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDFA' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search 150+ recipes. Log every batch.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The CanningLog app has all 150+ USDA-tested recipes with full-text search, altitude adjustment tables built in, plus a batch log with processing records for every jar. Free to download. $6.99 one-time for the full log.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Google Play
              </a>
            </div>
            <p className="text-sm text-gray-400">Free. No subscription. No credit card.</p>
            <div className="mt-6">
              <Link href="/free-download" className="text-sm text-green-700 hover:underline">
                Or download the free canning safety cheat sheet first
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
