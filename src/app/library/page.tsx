import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CanningLog Library — 500+ USDA-tested canning recipes",
  description: "Water bath and pressure canning recipes with processing times, jar sizes, and altitude adjustments — all USDA-tested. Browse the CanningLog reference database — available in the free app.",
};

const CATEGORIES = [
  { name: "Fruits", detail: "Applesauce, berries, peaches, jams, jellies — water bath with tested times." },
  { name: "Vegetables", detail: "Green beans, corn, tomatoes, carrots — pressure canning with PSI tables." },
  { name: "Pickles", detail: "Dill, bread and butter, relishes — brine ratios and processing times." },
  { name: "Meats & Stocks", detail: "Chicken, beef, venison, bone broth — pressure canning required." },
  { name: "Salsas & Sauces", detail: "Tested salsa, pasta sauce, and pizza sauce recipes with pH guidance." },
];

export default function LibraryPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F0FDFA' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-teal-50 rounded-2xl items-center justify-center mb-6">
              <Database className="text-teal-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              CanningLog Library
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              500+ USDA-tested canning recipes from USDA National Center for Home Food Preservation. Water bath and pressure canning recipes with processing times, jar sizes, and altitude adjustments — all USDA-tested.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-teal-800 bg-teal-50 px-4 py-2 rounded-full">
              <Search size={14} /> Full search available in the free app
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Browse by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORIES.map((cat) => (
                <div key={cat.name} className="bg-gray-50 rounded-xl p-6 card-hover border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-16 px-4 bg-teal-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search the full database in the app.
            </h2>
            <p className="text-gray-600 mb-6">
              The CanningLog app has the complete 500+ USDA-tested canning recipes with full-text search, filters, and your personal log — all free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Google Play
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free. No subscription. No credit card.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
