import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, Star, ArrowRight, Download, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CanningLog — Search 500+ USDA-tested recipes",
  description: "CanningLog has 500+ USDA-tested canning recipes with processing times, jar sizes, and pressure settings. Log your batches, track your pantry, and can with confidence.",
};

const FEATURES = [
  { icon: Database, title: "USDA recipe database", body: "500+ tested recipes with processing times for water bath and pressure canning." },
  { icon: BookOpen, title: "Batch log", body: "Record batch date, jar count, yield, and notes. Know what you have and when you made it." },
  { icon: BarChart3, title: "Pantry tracker", body: "See your current stock at a glance. Mark jars as opened or used." },
  { icon: Star, title: "Altitude guide", body: "Automatic processing time adjustments for your elevation — built in." },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#F0FDFA' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full mb-6">
              Search 500+ USDA-tested canning recipes. Log your own.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Search 500+ USDA-tested recipes.
              <br />
              <span className="text-teal-800">Log your jars.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              CanningLog puts the USDA National Center for Home Food Preservation database in your pocket. Water bath and pressure canning recipes with tested processing times, jar sizes, and altitude adjustments. Log your batches, track your pantry stock, and can with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-800 transition-colors press-feedback min-h-[48px]">
                Browse the CanningLog Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Download
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Free app. No credit card. 500+ USDA-tested canning recipes from USDA National Center for Home Food Preservation.
            </p>
          </div>
        </section>

        {/* Database pitch */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The database IS the app.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Most log apps give you a blank screen. CanningLog gives you 500+ USDA-tested canning recipes from USDA National Center for Home Food Preservation — searchable, organized, and ready to use. Log what you do. Build your personal collection alongside the reference library.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-teal-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Get the free download first.
            </h2>
            <p className="text-gray-600 mb-6">
              Start with the printable reference sheet. Use it today, no app required. When you want the searchable database and log, get the app free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-800 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free PDF
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-teal-200 text-teal-800 font-medium px-8 py-3 rounded-xl hover:bg-teal-50 transition-colors min-h-[48px]">
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
