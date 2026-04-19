import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Gauge, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Canning Recipes — Safe Times & Pressures | CanningLog',
  description:
    'Pressure canning recipes for vegetables, beans, meats, and soups. USDA-tested processing times and pressures for safe home canning.',
};

const RECIPES = [
  {
    name: 'Green Beans',
    category: 'Vegetable',
    pressure: '10 lb (weighted gauge) / 11 lb (dial gauge)',
    pints: '20 minutes',
    quarts: '25 minutes',
    pack: 'Hot pack or raw pack',
    notes: 'Green beans are the most commonly home-canned vegetable. Raw pack: pack tightly into jars and cover with boiling water. Hot pack: boil 5 minutes, pack loosely. Leave 1 inch headspace either way.',
  },
  {
    name: 'Corn (whole kernel)',
    category: 'Vegetable',
    pressure: '10 lb (weighted gauge) / 11 lb (dial gauge)',
    pints: '55 minutes',
    quarts: '85 minutes',
    pack: 'Hot pack or raw pack',
    notes: 'Corn is low-acid and dense. The long processing times reflect that density. Do not reduce processing time. Use only tested recipes with the exact ratios of water to corn.',
  },
  {
    name: 'Chicken Pieces (bone-in or boneless)',
    category: 'Meat',
    pressure: '10 lb (weighted gauge) / 11 lb (dial gauge)',
    pints: '75 minutes',
    quarts: '90 minutes',
    pack: 'Raw pack or hot pack',
    notes: 'Raw pack chicken often produces better texture. Remove skin to prevent fat from interfering with the seal. Do not add water for raw pack — chicken releases its own liquid during processing.',
  },
  {
    name: 'Ground Beef',
    category: 'Meat',
    pressure: '10 lb (weighted gauge) / 11 lb (dial gauge)',
    pints: '75 minutes',
    quarts: '90 minutes',
    pack: 'Hot pack (browned)',
    notes: 'Brown ground beef and drain fat before packing. Fat remaining in the jar can prevent a proper seal. Pack loosely into jars with boiling broth or water. Leave 1 inch headspace.',
  },
  {
    name: 'Bean Soup (mixed)',
    category: 'Soup',
    pressure: '10 lb (weighted gauge) / 11 lb (dial gauge)',
    pints: '75 minutes',
    quarts: '90 minutes',
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
  'When time is up, turn off heat. Let the canner depressurize naturally — do not rush it.',
  'Wait 10 minutes after pressure drops to zero. Open the lid away from your face.',
  'Remove jars and let cool undisturbed for 12 to 24 hours.',
];

export default function PressureCanningRecipesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <Gauge className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pressure Canning Recipes
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Low-acid foods require pressure canning. A boiling water bath cannot reach the temperature needed to destroy Clostridium botulinum spores. Pressure canning reaches 240 degrees F, which does the job. Every recipe below uses USDA-tested processing times.
            </p>
          </div>
        </section>

        {/* Safety Warning */}
        <section className="py-6 px-4 bg-amber-50 border-y border-amber-200">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Botulism is the risk.</strong> Clostridium botulinum spores survive boiling water. They thrive in sealed jars with low acid. Only pressure canning reaches 240 degrees F, which is required to destroy the spores in low-acid foods. This is why water bath canning vegetables is not safe.
            </p>
          </div>
        </section>

        {/* Recipes Table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">USDA Processing Times</h2>
            <p className="text-gray-600 text-center mb-3 max-w-xl mx-auto">
              Times below are for sea level (0 to 1,000 ft). If you live above 1,000 feet, use 15 lb pressure with a weighted gauge or consult the USDA table for dial-gauge adjustments.
            </p>
            <p className="text-xs text-center text-gray-400 mb-10">
              Source: USDA National Center for Home Food Preservation
            </p>
            <div className="space-y-6">
              {RECIPES.map((r) => (
                <div key={r.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{r.name}</h3>
                      <span className="text-xs text-green-700 font-medium">{r.category}</span>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-700">
                      Pressure Can Only
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Pressure</p>
                      <p className="text-sm font-semibold text-gray-900">{r.pressure}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Pints</p>
                      <p className="text-sm font-semibold text-gray-900">{r.pints}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Quarts</p>
                      <p className="text-sm font-semibold text-gray-900">{r.quarts}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Pack method</p>
                      <p className="text-sm font-semibold text-gray-900">{r.pack}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Altitude */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Altitude adjustment for pressure canning</h2>
            <p className="text-gray-600 text-center mb-6">
              Above 1,000 feet, water boils at a lower temperature. You must increase pressure to compensate.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-green-700 text-white px-4 py-3">
                  <p className="font-semibold text-sm">Weighted gauge canners</p>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-gray-700">0 – 1,000 ft</td>
                      <td className="px-4 py-3 font-medium text-gray-900">10 lb</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">Above 1,000 ft</td>
                      <td className="px-4 py-3 font-medium text-gray-900">15 lb</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-green-700 text-white px-4 py-3">
                  <p className="font-semibold text-sm">Dial gauge canners</p>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-gray-700">0 – 2,000 ft</td>
                      <td className="px-4 py-3 font-medium text-gray-900">11 lb</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">2,001 – 4,000 ft</td>
                      <td className="px-4 py-3 font-medium text-gray-900">12 lb</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">4,001 – 6,000 ft</td>
                      <td className="px-4 py-3 font-medium text-gray-900">13 lb</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">6,001 – 8,000 ft</td>
                      <td className="px-4 py-3 font-medium text-gray-900">14 lb</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3">
              Source: USDA National Center for Home Food Preservation. Have dial gauge canners tested for accuracy annually.
            </p>
          </div>
        </section>

        {/* How to Pressure Can */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">How to use a pressure canner</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              Follow these steps in order. The venting step is the one beginners most often skip. Do not skip it.
            </p>
            <div className="space-y-3">
              {SETUP_STEPS.map((step, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-700 text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety checklist */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Pressure canning safety checklist</h2>
            <div className="space-y-3">
              {[
                'Gasket and sealing ring are in good condition — replace every 2 to 3 years or when cracked.',
                'Vent and safety valves are clear of debris.',
                'Dial gauge has been tested within the last year (county extension offices test these for free).',
                'Using a tested recipe with the exact headspace, pack method, and processing time specified.',
                'Not opening the canner until pressure has fully dropped to zero on its own.',
                'Letting jars cool undisturbed for 12 to 24 hours before checking seals.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-white border border-green-100">
                  <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log your pressure canning batches</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              CanningLog records pressure, time, jar count, and seal results for every batch. Knowing your exact records matters most for pressure-canned foods.
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
