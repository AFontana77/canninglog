import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — CanningLog',
  description: 'Get help with the CanningLog app. Contact support or browse common questions.',
};

export default function SupportPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">App Support</h1>
            <p className="text-gray-500 mb-10">Get help with CanningLog or give us feedback.</p>

            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-10 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="text-teal-700" size={20} />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 mb-1">Email Support</h2>
                <p className="text-gray-600 text-sm mb-2">We respond within 1–2 business days.</p>
                <a href="mailto:support@canninglog.com" className="text-teal-700 font-medium hover:underline">support@canninglog.com</a>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-3">
              <details className="border border-gray-200 rounded-xl">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-xl list-none flex justify-between items-center">
                  How do I get the app? <span className="text-teal-600 text-lg">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  Search &ldquo;CanningLog&rdquo; in the App Store or Google Play. The app is free to download. The $6.99 one-time unlock removes entry limits and adds premium features.
                </div>
              </details>
              <details className="border border-gray-200 rounded-xl">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-xl list-none flex justify-between items-center">
                  What does the $6.99 unlock include? <span className="text-teal-600 text-lg">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  Unlimited batch logs, pantry tracker, PDF export, and altitude auto-adjust. One-time payment, no subscription, no expiration.
                </div>
              </details>
              <details className="border border-gray-200 rounded-xl">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-xl list-none flex justify-between items-center">
                  How do I restore my purchase? <span className="text-teal-600 text-lg">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  Open the app, go to Settings, and tap &ldquo;Restore Purchases.&rdquo; Make sure you are signed in to the same Apple ID or Google account you used to purchase.
                </div>
              </details>
              <details className="border border-gray-200 rounded-xl">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-xl list-none flex justify-between items-center">
                  Does the app require an account? <span className="text-teal-600 text-lg">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  No account is required for offline use. An optional free account lets you sync your canning batch records across devices.
                </div>
              </details>
              <details className="border border-gray-200 rounded-xl">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-xl list-none flex justify-between items-center">
                  Is there a subscription? <span className="text-teal-600 text-lg">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  No. CanningLog is free to download with entry limits, and $6.99 one-time to unlock everything. No monthly fees, ever.
                </div>
              </details>
              <details className="border border-gray-200 rounded-xl">
                <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-xl list-none flex justify-between items-center">
                  How do I delete my account and data? <span className="text-teal-600 text-lg">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  Go to Settings in the app and tap &ldquo;Delete Account.&rdquo; This removes all cloud data within 30 days. Local data is removed when you uninstall the app.
                </div>
              </details>
            </div>

            <p className="mt-10 text-sm text-gray-400 text-center">
              See our <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a> for information on how we handle your data.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
