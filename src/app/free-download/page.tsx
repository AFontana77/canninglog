import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free USDA Canning Safety Cheat Sheet",
  description: "A one-page quick reference — when to water bath vs. pressure can, key processing temps, and warning signs. Free printable from CanningLog — no signup required.",
};

export default function FreeDownloadPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="py-20 px-4" style={{ backgroundColor: '#F0FDFA' }}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex w-16 h-16 bg-teal-50 rounded-2xl items-center justify-center mb-6">
              <Download className="text-teal-700" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Free USDA Canning Safety Cheat Sheet
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              A one-page quick reference — when to water bath vs. pressure can, key processing temps, and warning signs.
            </p>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left mb-6">
              <h2 className="font-bold text-gray-900 text-lg mb-4">What is inside</h2>
              <ul className="space-y-3">
                            <li key="Water bath vs. pressure canning decision guide" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-teal-700 mt-0.5 shrink-0" /> Water bath vs. pressure canning decision guide</li>
            <li key="pH rule for high-acid vs. low-acid foods" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-teal-700 mt-0.5 shrink-0" /> pH rule for high-acid vs. low-acid foods</li>
            <li key="Key internal processing temperatures" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-teal-700 mt-0.5 shrink-0" /> Key internal processing temperatures</li>
            <li key="Warning signs of improper seals" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-teal-700 mt-0.5 shrink-0" /> Warning signs of improper seals</li>
            <li key="Altitude adjustment table for pressure canning" className="flex items-start gap-3 text-gray-600 text-sm"><CheckCircle size={16} className="text-teal-700 mt-0.5 shrink-0" /> Altitude adjustment table for pressure canning</li>
              </ul>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Get your free copy</h2>
              <p className="text-gray-500 text-sm mb-6">Enter your email and we will send it right to your inbox.</p>
              <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="w-full px-4 py-3 rounded-xl border border-teal-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700 text-base min-h-[48px]"
                />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-800 transition-colors press-feedback min-h-[48px]">
                  Send Me the Free PDF <ArrowRight size={18} />
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4 text-center">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want the searchable database?</h2>
            <p className="text-gray-500 mb-6">The free PDF covers the basics. The CanningLog app gives you the full searchable library and your personal log — free on iPhone and Android.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Get on App Store <ArrowRight size={18} />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Get on Google Play <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
