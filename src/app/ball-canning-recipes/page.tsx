import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { BookOpen, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ball Canning Recipes — Water Bath & Pressure | CanningLog',
  description:
    'Ball canning recipes for jams, pickles, tomatoes, salsa, and vegetables. Water bath and pressure canning methods with USDA-approved processing times.',
};

const RECIPES = [
  {
    name: 'Classic Strawberry Jam',
    method: 'Water Bath',
    jarSize: '8 oz (half-pint)',
    processTime: '10 minutes',
    yield: 'About 8 half-pint jars',
    ingredients: 'Fresh strawberries, sugar, lemon juice, pectin (optional).',
    overview:
      'Crush berries and mix with sugar. Cook until the mixture reaches gel stage. Ladle into hot, sterilized jars with 1/4 inch headspace. Process in a boiling water bath.',
  },
  {
    name: 'Bread and Butter Pickles',
    method: 'Water Bath',
    jarSize: 'Pint jars',
    processTime: '10 minutes',
    yield: 'About 7 pint jars',
    ingredients: 'Sliced cucumbers, onions, sugar, cider vinegar (5% acidity), canning salt, mustard seed, celery seed, turmeric.',
    overview:
      'Brine cucumber slices overnight with salt and ice. Rinse well. Combine vinegar, sugar, and spices and bring to a boil. Add cucumbers and onions. Pack hot into jars and process.',
  },
  {
    name: 'Diced Tomatoes',
    method: 'Water Bath or Pressure',
    jarSize: 'Quart jars',
    processTime: '45 min water bath | 10 min at 10 lb pressure',
    yield: 'About 7 quart jars',
    ingredients: 'Ripe tomatoes, lemon juice or citric acid, canning salt (optional).',
    overview:
      'Peel, core, and dice tomatoes. Add 2 tablespoons bottled lemon juice (or 1/2 teaspoon citric acid) per quart jar. This acid addition is not optional. Pack hot into jars with 1/2 inch headspace.',
  },
  {
    name: 'Tomato Salsa',
    method: 'Water Bath',
    jarSize: 'Pint jars',
    processTime: '15 minutes',
    yield: 'About 6 pint jars',
    ingredients: 'Tomatoes, jalapeños, onion, garlic, cilantro, bottled lime juice, canning salt.',
    overview:
      'Use only a USDA-tested salsa recipe. Do not reduce the vinegar or lime juice. Do not add extra onion or peppers beyond what the recipe calls for. Those ratios control acidity and make the product safe.',
  },
  {
    name: 'Dill Pickles',
    method: 'Water Bath',
    jarSize: 'Quart jars',
    processTime: '10 minutes',
    yield: 'About 7 quart jars',
    ingredients: 'Pickling cucumbers, dill weed or seed, garlic, cider vinegar (5%), canning salt.',
    overview:
      'Pack cucumbers tightly into hot jars with dill and garlic. Pour hot brine over cucumbers, leaving 1/2 inch headspace. Remove air bubbles. Wipe rims and process in a boiling water bath.',
  },
];

export default function BallCanningRecipesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <BookOpen className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ball Canning Recipes
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Ball and Kerr are the most trusted brands in home canning. Their recipes follow USDA-tested processing times and work with standard wide-mouth and regular-mouth jars. Every recipe below uses approved times from USDA research.
            </p>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-6 px-4 bg-amber-50 border-y border-amber-200">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Safety notice:</strong> Always use tested recipes with exact ingredients and measurements. Do not change vinegar amounts, lemon juice amounts, or sugar ratios in acid-dependent recipes. Botulism has no smell or taste. Proper processing is the only protection.
            </p>
          </div>
        </section>

        {/* Recipes */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">5 Classic Ball Recipes</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              Processing times below come from USDA and Ball testing. Adjust for altitude if you live above 1,000 feet.
            </p>
            <div className="space-y-6">
              {RECIPES.map((recipe) => (
                <div key={recipe.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">
                      {recipe.method}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Jar size</p>
                      <p className="text-sm font-semibold text-gray-900">{recipe.jarSize}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Clock size={11} /> Processing time</p>
                      <p className="text-sm font-semibold text-gray-900">{recipe.processTime}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Yield</p>
                      <p className="text-sm font-semibold text-gray-900">{recipe.yield}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-800">Ingredients: </span>{recipe.ingredients}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{recipe.overview}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-xs text-gray-400">
              Source: USDA National Center for Home Food Preservation and Ball Blue Book. All times are sea-level values.
            </p>
          </div>
        </section>

        {/* Altitude Section */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Altitude Adjustments</h2>
            <p className="text-gray-600 text-center mb-6">
              Water boils at lower temperatures at higher elevations. If you live above 1,000 feet, you must add extra processing time.
            </p>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Altitude</th>
                    <th className="text-left px-4 py-3 font-semibold">Add to processing time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="even:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">0 – 1,000 ft</td>
                    <td className="px-4 py-3 text-gray-700">No adjustment needed</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">1,001 – 3,000 ft</td>
                    <td className="px-4 py-3 text-gray-700">Add 5 minutes</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">3,001 – 6,000 ft</td>
                    <td className="px-4 py-3 text-gray-700">Add 10 minutes</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">6,001 – 8,000 ft</td>
                    <td className="px-4 py-3 text-gray-700">Add 15 minutes</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">8,001 – 10,000 ft</td>
                    <td className="px-4 py-3 text-gray-700">Add 20 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Safety Checklist */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Before you can: quick safety check</h2>
            <div className="space-y-3">
              {[
                'Using a tested Ball or USDA recipe — not a family recipe that hasn\'t been tested.',
                'Using Ball, Kerr, or Jarden lids — no reused lids from previous seasons.',
                'Using bottled lemon juice (not fresh) when adding acid to tomatoes.',
                'Not changing vinegar, lemon juice, or citric acid amounts in the recipe.',
                'Checking jar size matches the recipe (pint vs. quart changes processing time).',
                'Looking up altitude adjustment for your zip code before you start.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-green-50">
                  <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log your Ball canning batches</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              CanningLog stores your recipe, date, jar count, processing time, and seal results for every batch. No more trying to remember what you made last August.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              >
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]"
              >
                Google Play
              </a>
            </div>
            <Link href="/free-download" className="text-sm text-green-700 hover:underline">
              Download the free canning batch log sheet instead
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
