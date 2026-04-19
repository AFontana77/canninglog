import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Sprout, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Canning for Beginners — Start Here | CanningLog',
  description:
    'Home canning guide for beginners. Start with water bath canning, learn what equipment you need, and discover which recipes are safest to start with.',
};

const EQUIPMENT = [
  {
    item: 'Water bath canner kit',
    price: '~$30',
    note: 'Comes with a pot, rack, and sometimes a jar lifter. Granite ware is common and affordable.',
  },
  {
    item: 'Ball Mason jars',
    price: '~$12 / dozen',
    note: 'Start with pint jars. They work for most beginner recipes and are easy to fill.',
  },
  {
    item: 'New lids and rings',
    price: 'Included with jars',
    note: 'Never reuse lids from a previous season. Rings can be reused if they show no rust.',
  },
  {
    item: 'Jar lifter',
    price: '~$8',
    note: 'You cannot safely pull hot jars from boiling water without one. Do not skip this.',
  },
  {
    item: 'Canning funnel',
    price: '~$5',
    note: 'Keeps food off the jar rims. Dirty rims cause seal failures.',
  },
  {
    item: 'Bubble remover or thin spatula',
    price: '~$4',
    note: 'Slides around the inside of the jar to release trapped air pockets.',
  },
];

const BEGINNER_RECIPES = [
  {
    name: 'Strawberry Jam',
    method: 'Water Bath',
    difficulty: 'Easy',
    why: 'High in natural acid. Short processing time (10 minutes). Forgiving if you get the headspace slightly off. Great first batch.',
  },
  {
    name: 'Dill Pickles',
    method: 'Water Bath',
    difficulty: 'Easy',
    why: 'Vinegar brine controls the acidity, so safety is straightforward. No cooking required for the cucumbers. Results are ready to eat in 2 weeks.',
  },
  {
    name: 'Tomato Sauce',
    method: 'Water Bath',
    difficulty: 'Moderate',
    why: 'Requires added lemon juice or citric acid (do not skip this step). Widely used and great for clearing a garden harvest. Follow a USDA recipe exactly.',
  },
];

const SAFETY_RULES = [
  'Use only tested recipes from USDA, Ball Blue Book, or National Center for Home Food Preservation.',
  'Do not reduce vinegar, lemon juice, or acid amounts in any recipe. These control safety, not just flavor.',
  'Never water bath can vegetables, meats, beans, or anything low-acid. Use a pressure canner for those.',
  'Check seals after 12 to 24 hours of cooling. Press the center of the lid — it should not flex.',
  'Discard any jar that spurts liquid, smells off, or has a bulging lid. Do not taste it first.',
  'Label every jar with the recipe name and date canned.',
];

export default function CanningForBeginnersPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <Sprout className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Home Canning for Beginners
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Canning lets you preserve seasonal food and build a pantry that lasts through winter. If you are new to canning, start here. This guide covers both methods, what equipment you need, and which recipes to try first.
            </p>
          </div>
        </section>

        {/* Safety Warning */}
        <section className="py-6 px-4 bg-amber-50 border-y border-amber-200">
          <div className="max-w-3xl mx-auto flex gap-4 items-start">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>New to canning?</strong> Always follow a tested recipe from USDA, Ball, or the National Center for Home Food Preservation. Home canning is safe when done correctly. The most common cause of problems is modifying recipes or using the wrong method for the food type.
            </p>
          </div>
        </section>

        {/* Why Can */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why people can food at home</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: 'Use what you grow',
                  body: 'Garden tomatoes, cucumbers, and berries come in all at once. Canning lets you preserve the surplus instead of watching it go to waste.',
                },
                {
                  title: 'Save money',
                  body: 'A flat of strawberries in June costs a fraction of what jam costs at the store. You get more jars for less money, and you control what goes in.',
                },
                {
                  title: 'Build a pantry',
                  body: 'Properly canned food lasts 1 to 5 years. Knowing you have a full shelf of tomato sauce, pickles, and jam feels good.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl bg-green-50 p-6 border border-green-100">
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two Methods */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Two canning methods</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              The method you use depends on what you are canning. This is not a preference — it is a food safety requirement.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-green-200 bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">Start here</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Water Bath Canning</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Uses a large pot of boiling water. Works for high-acid foods only: jams, jellies, pickles, fruits, and tomatoes with added acid. Easier and cheaper than pressure canning.
                </p>
                <p className="text-sm font-medium text-green-700 mb-1">Good for beginners</p>
                <p className="text-sm text-gray-600">Equipment costs about $30 to $50. You can be canning your first batch within an hour of starting.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">After you learn the basics</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pressure Canning</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Uses a pressure canner to reach 240 degrees F. Required for low-acid foods: vegetables, meats, beans, soups, and stews. Without pressure canning, these foods are not safe to store at room temperature.
                </p>
                <p className="text-sm font-medium text-gray-700 mb-1">Requires a pressure canner</p>
                <p className="text-sm text-gray-600">A quality pressure canner costs $80 to $150. Learn water bath canning first before adding this method.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment List */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Beginner equipment list</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              You do not need much to get started. This is everything for water bath canning.
            </p>
            <div className="space-y-3">
              {EQUIPMENT.map(({ item, price, note }) => (
                <div key={item} className="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                  <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-gray-900 text-sm">{item}</p>
                      <span className="text-xs text-green-700 font-medium">{price}</span>
                    </div>
                    <p className="text-xs text-gray-600">{note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Ball canning kits at Walmart, Target, and Amazon usually include the pot, rack, and jar lifter together.
            </p>
          </div>
        </section>

        {/* Best Beginner Recipes */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Best recipes to start with</h2>
            <p className="text-gray-600 text-center mb-8">
              These three recipes are beginner-friendly and use the water bath method.
            </p>
            <div className="space-y-4">
              {BEGINNER_RECIPES.map((r) => (
                <div key={r.name} className="bg-white rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{r.name}</h3>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 font-medium">{r.method}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{r.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Rules */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Beginner safety rules</h2>
            <div className="space-y-3">
              {SAFETY_RULES.map((rule, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-lg border border-gray-100 bg-gray-50">
                  <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-gray-700">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log your first batch in CanningLog</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              CanningLog records each batch: recipe, date, jar count, processing time, and seal results. Keep a record from day one. Free to download.
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
              Download the free canning batch log sheet first
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
