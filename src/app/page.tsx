import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, ArrowRight, Download, CheckCircle, ShieldCheck, Thermometer } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CanningLog — USDA Canning Recipes + Batch Log App",
  description: "CanningLog has 150+ USDA-tested canning recipes with processing times, pressure levels, and headspace requirements. Log every batch, track your pantry, and can with confidence. Free on iPhone and Android.",
};

const FEATURES = [
  {
    icon: Database,
    title: "150+ USDA-tested recipes",
    body: "Every recipe in CanningLog comes from USDA Complete Guide to Home Canning or Ball Blue Book sources — not guesswork, not an adapted family recipe. Processing times, pressure levels, headspace, jar size, and altitude adjustment tables are included for every entry.",
  },
  {
    icon: ShieldCheck,
    title: "Altitude adjustment built in",
    body: "High-altitude canning changes your processing time and pressure settings. CanningLog factors elevation into every recipe automatically. Enter your altitude once — the app adjusts every recipe going forward with no manual math.",
  },
  {
    icon: BookOpen,
    title: "Batch log for every session",
    body: "Log every canning run with recipe, jar count, batch date, and notes. Know exactly what's in your pantry, when it was processed, and whether every jar sealed. Track batches like the small-scale food producer you are.",
  },
  {
    icon: BarChart3,
    title: "Pantry inventory tracker",
    body: "Every logged batch updates your pantry count. Mark jars consumed as you open them. See what you have, what's running low, and what's approaching the one-year best-by mark — no more mystery jars from last season.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Find a tested recipe",
    body: "Search by ingredient or food type. Get the USDA-sourced recipe with processing time, pressure setting, headspace, and jar size options. Everything you need before you heat the canner.",
  },
  {
    step: "2",
    title: "Log the batch",
    body: "After processing, record the session — recipe used, jar count, date, and seal results. Takes 30 seconds and gives you a permanent record of what went into your pantry and when.",
  },
  {
    step: "3",
    title: "Track the pantry",
    body: "Your batch logs build a running pantry inventory. Mark jars consumed. Get a clear view of what you have, when it was processed, and what needs to be used first.",
  },
];

const DB_CATEGORIES = [
  { label: "Tomatoes (crushed)", method: "Water bath or pressure", time: "35 min (pints)", note: "Add lemon juice or citric acid" },
  { label: "Green beans", method: "Pressure only", time: "20 min (pints) at 10 PSI", note: "Low-acid — pressure required" },
  { label: "Tomato salsa", method: "Water bath", time: "15 min (pints)", note: "Use tested recipe ratios only" },
  { label: "Apple butter", method: "Water bath", time: "5 min (half-pints)", note: "High sugar + high acid" },
  { label: "Chicken broth", method: "Pressure only", time: "25 min (pints) at 11 PSI", note: "Low-acid protein product" },
  { label: "Peach slices", method: "Water bath", time: "25 min (quarts)", note: "Hot pack recommended" },
];

const FAQS = [
  {
    q: "Is CanningLog free?",
    a: "Yes. The app and the full USDA recipe library are free. The $6.99 one-time unlock adds unlimited batch logging, pantry inventory, and altitude adjustment. No subscription, no renewal.",
  },
  {
    q: "Are the recipes actually USDA-tested?",
    a: "Yes. Every recipe is sourced from USDA Complete Guide to Home Canning or Ball Blue Book tested formulations. We don't include untested family recipes or modified quantities. Food safety is not a place to improvise.",
  },
  {
    q: "Why does altitude matter for canning?",
    a: "Water boils at a lower temperature at higher elevations, which changes required processing times and pressure settings. At 5,000 feet, you need longer water bath times and higher pressure canner settings to reach safe kill temperature. CanningLog adjusts every recipe automatically once you enter your elevation.",
  },
  {
    q: "Can I log recipes not in the database?",
    a: "You can log any batch with custom notes, but we recommend only using tested recipe sources. If you're modifying a recipe, consult a Master Food Preserver or your local extension office before treating it as a safe batch.",
  },
  {
    q: "Does the app work offline?",
    a: "Yes. The recipe library is built into the app and works without an internet connection. Batch logs are stored locally on your device.",
  },
  {
    q: "How does the pantry tracker work?",
    a: "Each logged batch adds jars to your pantry inventory with a date and recipe tag. Mark jars consumed as you use them. The app shows your current inventory, what's oldest, and what's approaching the one-year best-by window.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CanningLog",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "USDA-tested canning recipes for 200+ foods. Log your batches, track yields, and build a safe home canning reference.",
            "url": "https://www.canninglog.com"
          })
        }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#F0FDF4' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full mb-6">
              USDA-tested recipes. Safe processing times. Real records.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Can with confidence.
              <br />
              <span className="text-green-700">Log every batch.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              CanningLog gives you 150+ USDA-tested canning recipes with processing times, pressure settings, headspace requirements, and altitude adjustments built in. Log every batch, track your pantry, and build a real record of everything you've put up. Free on iPhone and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-800 transition-colors press-feedback min-h-[48px]">
                Browse the Recipe Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Processing Time Chart
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free app. No credit card. 150+ USDA recipes included.</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The recipe library keeps you safe.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Home canning done wrong has real consequences. Botulism is odorless, tasteless, and dangerous. The USDA tested these recipes at a lab so you don't have to guess. CanningLog puts that tested data in your pocket — searchable, altitude-adjusted, and cross-referenced to your batch history.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-6 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-green-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How CanningLog works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Tested recipe. Logged batch. Tracked pantry.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map(({ step, title, body }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 font-bold text-lg mb-4">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sample recipes from the library</h2>
              <p className="text-gray-600 max-w-xl mx-auto">150+ recipes total — browse and search the full library in the app.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Recipe</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Method</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Processing time</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {DB_CATEGORIES.map(({ label, method, time, note }) => (
                    <tr key={label} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-gray-900">{label}</td>
                      <td className="py-3 pr-4 text-green-700 font-medium">{method}</td>
                      <td className="py-3 pr-4 text-gray-600">{time}</td>
                      <td className="py-3 text-gray-500 text-xs">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-6 text-sm text-gray-400">Covers fruits, vegetables, tomatoes, meats, broths, jams, pickles, and condiments.</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Free app. One-time unlock.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Download CanningLog free. The USDA recipe library is free. Unlock batch logging, pantry inventory, and altitude adjustment for a one-time $6.99.</p>
            <div className="bg-white rounded-2xl p-8 border border-green-100 mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-1">$6.99</div>
              <div className="text-sm text-gray-400 mb-6">One-time. Yours forever.</div>
              <ul className="text-left space-y-3 mb-6">
                {["Unlimited batch log entries","Pantry inventory tracker","Altitude adjustment for every recipe","Jar seal status tracking","Works fully offline","All future updates included"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Download on App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Get it on Google Play</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Common questions</h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Start with the free processing chart.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Download the printable processing time reference — 20 common recipes with water bath times, pressure settings, and headspace on one page.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-800 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free Chart
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-green-200 text-green-700 font-medium px-8 py-3 rounded-xl hover:bg-green-50 transition-colors min-h-[48px]">
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
