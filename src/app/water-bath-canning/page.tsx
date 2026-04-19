import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Droplets, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Bath Canning Guide — How to Can at Home | CanningLog',
  description:
    'Water bath canning guide for beginners. Learn what foods are safe to water bath can, the step-by-step process, and processing times.',
};

const STEPS = [
  {
    num: '1',
    title: 'Wash and inspect jars',
    body: 'Wash jars in hot soapy water. Look for cracks or chips on the rim — even a small nick can prevent a seal. Discard any damaged jars.',
  },
  {
    num: '2',
    title: 'Keep jars hot',
    body: 'Place clean jars in the canner filled with simmering water. Keep them hot until you are ready to fill. This prevents thermal shock when you add hot food.',
  },
  {
    num: '3',
    title: 'Prepare your recipe',
    body: 'Follow a tested recipe exactly. Have all ingredients measured and ready before you start filling jars. Do not make substitutions.',
  },
  {
    num: '4',
    title: 'Fill jars with correct headspace',
    body: 'Use a canning funnel. Leave 1/4 inch headspace for jams and jellies. Leave 1/2 inch headspace for most other products (fruits, pickles, tomatoes). Headspace affects the seal.',
  },
  {
    num: '5',
    title: 'Remove air bubbles',
    body: 'Slide a thin plastic spatula or bubble remover around the inside edge of the jar. Bubbles can prevent a complete seal. Adjust headspace again if needed after removing bubbles.',
  },
  {
    num: '6',
    title: 'Wipe rims and apply lids',
    body: 'Wipe the jar rim with a clean, damp cloth. Any food on the rim can prevent sealing. Apply a new lid and a clean ring. Tighten to fingertip tight — not cranked down hard.',
  },
  {
    num: '7',
    title: 'Process in boiling water',
    body: 'Lower jars onto the rack in the canner. Water must cover jars by at least 1 inch. Bring to a full rolling boil. Start your timer only after the water returns to a boil.',
  },
  {
    num: '8',
    title: 'Cool and check seals',
    body: 'Remove jars with a jar lifter. Place on a towel with space between each jar. Do not tilt or tip. Let cool 12 to 24 hours. Press the center of each lid — it should not flex. Refrigerate any unsealed jars and use within days.',
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

export default function WaterBathCanningPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <Droplets className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Water Bath Canning Guide
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Water bath canning uses boiling water to process high-acid foods. It is the easiest canning method and requires minimal equipment. This guide covers what you can safely water bath can, the full process, and altitude adjustments.
            </p>
          </div>
        </section>

        {/* Safety Warning */}
        <section className="py-6 px-4 bg-amber-50 border-y border-amber-200">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Important:</strong> Water bath canning is only safe for high-acid foods. Low-acid foods like vegetables, meats, and beans must be pressure canned. A boiling water bath does not get hot enough to kill botulism spores in low-acid foods.
            </p>
          </div>
        </section>

        {/* What You Can / Cannot Can */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">What you can water bath can</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              High-acid foods (pH below 4.6) are safe for water bath processing. Low-acid foods are not.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-700" /> Safe to water bath can
                </h3>
                <ul className="space-y-2">
                  {SAFE_FOODS.map((food) => (
                    <li key={food} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5">&#10003;</span> {food}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <XCircle size={18} className="text-red-600" /> Must be pressure canned
                </h3>
                <ul className="space-y-2">
                  {UNSAFE_FOODS.map((food) => (
                    <li key={food} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-500 mt-0.5">&#10007;</span> {food}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-red-700 mt-4">
                  Water bath canning these foods is not safe. The USDA does not publish water-bath times for low-acid foods because the method cannot reach a safe temperature for them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Equipment you need</h2>
            <p className="text-gray-600 text-center mb-8">
              Water bath canning is the most affordable way to start. Most beginners spend $30 to $50 on equipment total.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { item: 'Large pot (water bath canner)', note: 'Must be at least 2 inches taller than your tallest jar. Many canners come with a rack.' },
                { item: 'Jar rack', note: 'Keeps jars off the bottom of the pot and lets water circulate underneath.' },
                { item: 'Mason jars with new lids', note: 'Ball, Kerr, or equivalent. Never reuse lids from a previous season.' },
                { item: 'Jar lifter', note: 'Non-negotiable. You cannot safely lift hot jars from boiling water without one.' },
                { item: 'Canning funnel', note: 'Wide-mouth funnel that fits inside the jar opening. Keeps rims clean.' },
                { item: 'Bubble remover or thin spatula', note: 'Removes air pockets before you apply the lid.' },
                { item: 'Lid wand or small magnet', note: 'Pulls lids out of hot water without contaminating the sealing compound.' },
                { item: 'Timer', note: 'Start timing only after the water returns to a full boil with jars in the canner.' },
              ].map(({ item, note }) => (
                <div key={item} className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item}</p>
                  <p className="text-xs text-gray-600">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by Step */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Step-by-step process</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              Follow every step in order. Skipping steps is how seal failures happen.
            </p>
            <div className="space-y-4">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Altitude */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Altitude adjustments</h2>
            <p className="text-gray-600 text-center mb-6">
              Water boils at lower temperatures as elevation increases. If you live above 1,000 feet, you must process longer to reach safe temperatures.
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
                  {[
                    ['0 – 1,000 ft', 'No adjustment needed'],
                    ['1,001 – 3,000 ft', 'Add 5 minutes'],
                    ['3,001 – 6,000 ft', 'Add 10 minutes'],
                    ['6,001 – 8,000 ft', 'Add 15 minutes'],
                    ['8,001 – 10,000 ft', 'Add 20 minutes'],
                  ].map(([alt, adj]) => (
                    <tr key={alt} className="even:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{alt}</td>
                      <td className="px-4 py-3 text-gray-700">{adj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3">
              Source: USDA National Center for Home Food Preservation
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Track every batch in CanningLog</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              CanningLog records your recipe, processing time, jar count, and seal results. Your entire canning history in one place. Free to download.
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
              Download the free canning batch log sheet
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
