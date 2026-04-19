import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ClipboardList, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Canning Log Sheet — Track Every Batch | CanningLog',
  description:
    'Free canning log sheet to track your batches — recipe name, date, jar size, quantity, processing time, and notes. Or use the CanningLog app on your phone.',
};

const LOG_COLUMNS = [
  {
    col: 'Recipe name',
    why: 'Which specific recipe you followed. Include the source (Ball Blue Book page number, USDA guide section, etc.).',
  },
  {
    col: 'Date canned',
    why: 'When you processed the batch. Helps you track age and rotate your pantry.',
  },
  {
    col: 'Jar size',
    why: 'Half-pint, pint, or quart. Processing times differ by jar size, so this matters for your records.',
  },
  {
    col: 'Quantity',
    why: 'How many jars you processed. Helps you track what is in storage and plan future batches.',
  },
  {
    col: 'Canning method',
    why: 'Water bath or pressure canning. For pressure: record the pressure used and canner type (dial or weighted gauge).',
  },
  {
    col: 'Processing time',
    why: 'Exact minutes at full boil or full pressure. If something ever looks wrong with a jar, this tells you whether the batch was properly processed.',
  },
  {
    col: 'Seal check',
    why: 'How many jars sealed vs. how many did not. Unsaved jars go in the fridge immediately.',
  },
  {
    col: 'Storage location',
    why: 'Which shelf, basement section, or cabinet. Helps you find jars without tearing the pantry apart.',
  },
  {
    col: 'Use-by estimate',
    why: 'Most home-canned goods are best within 1 to 2 years for quality. They remain safe longer if the seal holds, but flavor and texture decline.',
  },
  {
    col: 'Notes',
    why: 'What worked, what to change next time, variations you tried. This turns into your personal recipe book over time.',
  },
];

const WHY_TRACK = [
  {
    title: 'FIFO: first in, first out',
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
  {
    recipe: 'Classic Strawberry Jam (Ball Blue Book)',
    date: '06/14/2025',
    size: 'Half-pint',
    qty: '8',
    method: 'Water Bath',
    time: '10 min',
    seals: '8/8',
    location: 'Shelf A',
    useby: 'June 2027',
  },
  {
    recipe: 'Dill Pickles (NCHFP)',
    date: '07/22/2025',
    size: 'Quart',
    qty: '7',
    method: 'Water Bath',
    time: '10 min',
    seals: '7/7',
    location: 'Shelf B',
    useby: 'July 2027',
  },
  {
    recipe: 'Green Beans (USDA)',
    date: '08/05/2025',
    size: 'Pint',
    qty: '12',
    method: 'Pressure 10 lb',
    time: '20 min',
    seals: '11/12',
    location: 'Shelf A',
    useby: 'Aug 2027',
  },
];

export default function CanningLogSheetPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-white rounded-2xl items-center justify-center mb-6 shadow-sm">
              <ClipboardList className="text-green-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Free Canning Log Sheet
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Track every batch: recipe, date canned, jar size, quantity, processing time, seal check, and storage location. Download the free PDF log sheet or use the CanningLog app to track everything on your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/free-download"
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-800 transition-colors min-h-[48px]"
              >
                <Download size={18} /> Download Free Log Sheet
              </Link>
            </div>
          </div>
        </section>

        {/* Why Track */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Why keep a canning log?</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              Experienced canners all say the same thing: start logging from your very first batch. Here is why it matters.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_TRACK.map(({ title, body }) => (
                <div key={title} className="rounded-xl bg-green-50 border border-green-100 p-5">
                  <CheckCircle className="text-green-700 mb-3" size={18} />
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Track */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">What to record in each batch</h2>
            <p className="text-gray-600 text-center mb-8">
              The log sheet has a column for each of these fields.
            </p>
            <div className="space-y-3">
              {LOG_COLUMNS.map(({ col, why }) => (
                <div key={col} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-700 mt-2" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{col}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Log */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Sample log entries</h2>
            <p className="text-gray-600 text-center mb-8">
              Here is what a filled-in canning log looks like. The CanningLog app stores all of this on your phone automatically.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-xs sm:text-sm min-w-[700px]">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="text-left px-3 py-3 font-semibold">Recipe</th>
                    <th className="text-left px-3 py-3 font-semibold">Date</th>
                    <th className="text-left px-3 py-3 font-semibold">Size</th>
                    <th className="text-left px-3 py-3 font-semibold">Qty</th>
                    <th className="text-left px-3 py-3 font-semibold">Method</th>
                    <th className="text-left px-3 py-3 font-semibold">Time</th>
                    <th className="text-left px-3 py-3 font-semibold">Seals</th>
                    <th className="text-left px-3 py-3 font-semibold">Storage</th>
                    <th className="text-left px-3 py-3 font-semibold">Use by</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SAMPLE_ROWS.map((row, i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="px-3 py-3 text-gray-700">{row.recipe}</td>
                      <td className="px-3 py-3 text-gray-700 whitespace-nowrap">{row.date}</td>
                      <td className="px-3 py-3 text-gray-700">{row.size}</td>
                      <td className="px-3 py-3 text-gray-700">{row.qty}</td>
                      <td className="px-3 py-3 text-gray-700">{row.method}</td>
                      <td className="px-3 py-3 text-gray-700">{row.time}</td>
                      <td className="px-3 py-3 text-gray-700">{row.seals}</td>
                      <td className="px-3 py-3 text-gray-700">{row.location}</td>
                      <td className="px-3 py-3 text-gray-700">{row.useby}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              Sample data for illustration. Always use real USDA-tested processing times for your actual batches.
            </p>
          </div>
        </section>

        {/* Shelf Life Reference */}
        <section className="py-14 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Home-canned food shelf life</h2>
            <p className="text-gray-600 text-center mb-6">
              Properly sealed and stored jars are safe beyond these timeframes, but quality (texture, color, flavor) declines.
            </p>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Food type</th>
                    <th className="text-left px-4 py-3 font-semibold">Best quality</th>
                    <th className="text-left px-4 py-3 font-semibold">Still safe (if sealed)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Jams and jellies', '1 year', '2 to 3 years'],
                    ['Fruits and tomatoes', '1 to 2 years', '3 to 5 years'],
                    ['Pickles', '1 to 2 years', '2 to 3 years'],
                    ['Vegetables (pressure canned)', '2 to 3 years', '4 to 5 years'],
                    ['Meats and poultry (pressure canned)', '1 to 2 years', '3 to 5 years'],
                  ].map(([type, best, safe]) => (
                    <tr key={type as string} className="even:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">{type}</td>
                      <td className="px-4 py-3 text-gray-700">{best}</td>
                      <td className="px-4 py-3 text-gray-700">{safe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3">
              Store in a cool, dark, dry location. Discard any jar with a broken seal, unusual odor, or signs of spoilage regardless of date.
            </p>
          </div>
        </section>

        {/* App vs Paper */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Paper log vs. CanningLog app</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-bold text-gray-700 mb-4">Paper log sheet</h3>
                <ul className="space-y-2">
                  {[
                    'Free to print and use',
                    'Works without a phone or power',
                    'Good for simple tracking',
                    'Easy to lose or get damaged in the kitchen',
                    'No search or filter',
                    'Hard to total your inventory',
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">&#8226;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <h3 className="font-bold text-green-800 mb-4">CanningLog app</h3>
                <ul className="space-y-2">
                  {[
                    'All batches stored in one place',
                    'Search by recipe, date, or food type',
                    'Total inventory at a glance',
                    'Reminders when jars approach use-by dates',
                    'Works on iPhone and Android',
                    '$6.99 one-time unlock for the full log',
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-700 mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get the free log sheet now</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Download the free PDF canning log sheet or download CanningLog on your phone to track batches digitally. Both are free to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <Link
                href="/free-download"
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-800 transition-colors min-h-[48px]"
              >
                <Download size={18} /> Free PDF Log Sheet
              </Link>
            </div>
            <p className="text-sm text-gray-500 mb-4">Or download the app:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
