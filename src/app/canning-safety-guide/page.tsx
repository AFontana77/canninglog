import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ShieldCheck, AlertTriangle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Canning Safety Guide — USDA Rules + Botulism Prevention | CanningLog',
  description:
    'Home canning safety guide. What causes foodborne illness in canned goods, how to prevent it, and how to tell if a jar is safe to eat.',
};

const SPOILAGE_SIGNS = [
  {
    sign: 'Spurting liquid when you open the jar',
    meaning: 'Pressure has built inside the jar. This is a sign of microbial activity. Do not taste. Discard.',
  },
  {
    sign: 'Off odor',
    meaning: 'Any unusual or unpleasant smell means discard. Note: botulism toxin itself is odorless. An off smell means a different problem, but the jar is still unsafe.',
  },
  {
    sign: 'Visible mold',
    meaning: 'Discard without opening if possible. Do not smell mold inside a jar. Wear gloves when handling.',
  },
  {
    sign: 'Bulging lid',
    meaning: 'Pressure inside the jar has pushed the lid up. Discard without opening.',
  },
  {
    sign: 'Lid that was not sealed',
    meaning: 'If the center of the lid flexes up and down when pressed, the jar did not seal. Refrigerate and use within days, or discard.',
  },
  {
    sign: 'Cloudy liquid (in pickles)',
    meaning: 'Some cloudiness is normal in fermented pickles. In water bath or pressure-canned pickles, cloudiness can mean spoilage. When in doubt, throw it out.',
  },
];

const BAD_METHODS = [
  {
    method: 'Open kettle canning',
    why: 'Ladle hot food into jars and seal without processing. Lids may seal from the heat, but the food inside is not processed to a safe temperature. This method was common decades ago and is not safe.',
  },
  {
    method: 'Oven canning',
    why: 'Dry heat in an oven does not transfer heat into the center of a dense, liquid-filled jar the same way boiling water does. Processing times tested for water baths do not apply to ovens.',
  },
  {
    method: 'Dishwasher canning',
    why: 'Dishwashers do not reach or hold temperatures needed for safe processing. This method does not produce consistently safe food.',
  },
  {
    method: 'Inversion sealing (flipping jars upside down)',
    why: 'Sometimes used for jams. The hot food may create a temporary seal, but it is not sufficient to prevent spoilage. Use water bath processing instead.',
  },
  {
    method: 'Water bath canning low-acid foods',
    why: 'Boiling water reaches 212 degrees F. That is not hot enough to kill Clostridium botulinum spores in low-acid foods. Only pressure canning reaches 240 degrees F.',
  },
];

export default function CanningSafetyGuidePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <ShieldCheck className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Home Canning Safety Guide
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Home canning is safe when done right. The risk comes from shortcuts: wrong method, modified recipes, or bad equipment. This guide covers the real risks, how to prevent them, and how to spot a bad jar.
            </p>
          </div>
        </section>

        {/* The Main Risk */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">The main risk: botulism</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-amber-900 mb-2">What you need to know</p>
                  <p className="text-sm text-amber-900 leading-relaxed mb-3">
                    Clostridium botulinum is a bacterium that produces a deadly toxin. It thrives in low-acid, low-oxygen environments at room temperature. A sealed jar of improperly canned food is exactly that environment.
                  </p>
                  <p className="text-sm text-amber-900 leading-relaxed mb-3">
                    Botulism toxin is odorless and tasteless. A contaminated jar may look and smell completely normal. You cannot tell by looking at it or smelling it.
                  </p>
                  <p className="text-sm text-amber-900 leading-relaxed font-medium">
                    This is why proper processing technique is the only safety check.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
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
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl bg-green-50 border border-green-100 p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signs of Spoilage */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Signs of spoilage</h2>
            <p className="text-gray-600 text-center mb-3">
              Check every jar before opening. If you see any of these signs, do not eat the contents.
            </p>
            <p className="text-center mb-10 font-semibold text-gray-700 text-sm">
              When in doubt, throw it out.
            </p>
            <div className="space-y-3">
              {SPOILAGE_SIGNS.map(({ sign, meaning }) => (
                <div key={sign} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100">
                  <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{sign}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{meaning}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl bg-amber-50 border border-amber-200">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Disposing of a suspect jar:</strong> If you suspect botulism contamination, do not open the jar and do not smell the contents. Place the jar in a heavy garbage bag, seal it, and dispose of it in a covered trash can. If the jar has opened, wash all surfaces the food may have touched with a bleach solution (1 part bleach to 9 parts water). Contact your local health department if you believe others may have eaten the food.
              </p>
            </div>
          </div>
        </section>

        {/* Methods to Avoid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Methods to avoid</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              These methods are still described on some older recipe blogs and YouTube channels. None produce consistently safe food.
            </p>
            <div className="space-y-4">
              {BAD_METHODS.map(({ method, why }) => (
                <div key={method} className="flex gap-4 p-5 rounded-xl bg-red-50 border border-red-100">
                  <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{method}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Safety */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Equipment safety rules</h2>
            <div className="space-y-3">
              {[
                'Use only Ball, Kerr, or Jarden brand lids. Do not use off-brand lids with unverified sealing compound.',
                'Never reuse lids from a previous canning season. Rings can be reused if rust-free and undamaged.',
                'Discard any jar with a chip or crack on the rim. Even a small defect prevents a complete seal.',
                'Have dial-gauge pressure canners tested for accuracy annually. Many county extension offices do this free.',
                'Replace gaskets and overpressure plugs on pressure canners every 2 to 3 years.',
                'Do not stack jars inside the canner during processing unless using a two-tier rack designed for it.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-white border border-green-100">
                  <ShieldCheck className="text-green-700 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Trusted resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: 'USDA Complete Guide to Home Canning',
                  desc: 'The definitive reference. Covers every food category, all processing times, and altitude adjustments. Available free online from the USDA.',
                  url: 'https://nchfp.uga.edu/publications/publications_usda.html',
                },
                {
                  name: 'National Center for Home Food Preservation',
                  desc: 'nchfp.uga.edu — University of Georgia, USDA-funded. The most comprehensive collection of tested canning recipes and research in the US.',
                  url: 'https://nchfp.uga.edu',
                },
                {
                  name: 'Ball Blue Book Guide to Preserving',
                  desc: 'Widely available in stores. Contains tested recipes aligned with USDA standards. A good printed reference to keep in the kitchen.',
                  url: 'https://www.freshpreserving.com',
                },
                {
                  name: 'Your county extension office',
                  desc: 'Land-grant university extension services offer free canning classes, dial gauge testing, and local altitude information. Search "[your county] extension office canning".',
                  url: 'https://www.nifa.usda.gov/land-grant-colleges-and-universities-partner-website-directory',
                },
              ].map(({ name, desc, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-100 bg-gray-50 p-5 hover:border-green-200 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-semibold text-gray-900 text-sm">{name}</p>
                    <ExternalLink size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Keep a record of every batch</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If a jar ever looks or smells off, you need to know exactly when it was processed, which recipe you used, and what lot of jars it came from. CanningLog records all of it automatically. Free to download.
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
