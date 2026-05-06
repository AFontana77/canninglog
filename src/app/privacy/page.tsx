import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — CanningLog',
  description: 'Privacy policy for the CanningLog mobile application and canninglog.com website.',
};

const TOKEN = {
  surface: 'oklch(0.94 0.018 105)',
  fg: 'oklch(0.18 0.025 130)',
  body: 'oklch(0.32 0.022 130)',
  muted: 'oklch(0.46 0.018 130)',
  primary: 'oklch(0.40 0.12 145)',
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Legal
            </p>
            <h1 className="font-display text-4xl sm:text-5xl mb-4" style={{ color: TOKEN.fg }}>
              Privacy Policy
            </h1>
            <p className="font-body text-sm" style={{ color: TOKEN.muted }}>
              Last updated: April 17, 2026
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 sm:px-10 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-display text-2xl mt-2 mb-3" style={{ color: TOKEN.primary }}>1. Who we are</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              Anvil Road LLC operates canninglog.com and the CanningLog mobile application.
              Contact: <a href="mailto:support@canninglog.com" className="underline" style={{ color: TOKEN.primary }}>support@canninglog.com</a>
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>2. Information we collect</h2>
            <ul className="list-disc pl-6 mb-4 space-y-1 font-body" style={{ color: TOKEN.body }}>
              <li><strong style={{ color: TOKEN.fg }}>Account email address</strong> — optional, for cross-device sync only.</li>
              <li><strong style={{ color: TOKEN.fg }}>Canning batch records you create</strong> — stored locally on your device and, if you have an account, in our secure cloud database (Supabase).</li>
              <li><strong style={{ color: TOKEN.fg }}>Purchase confirmation</strong> — via RevenueCat when you unlock premium features. We do not receive your payment details.</li>
              <li><strong style={{ color: TOKEN.fg }}>Device identifiers</strong> — used by RevenueCat to associate your purchase with your device.</li>
            </ul>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>3. How we use your information</h2>
            <ul className="list-disc pl-6 mb-4 space-y-1 font-body" style={{ color: TOKEN.body }}>
              <li>To operate the app and sync your data across devices (if you have an account)</li>
              <li>To restore your purchase on new devices</li>
              <li>To respond to support requests</li>
            </ul>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              We do not use your data for advertising. We do not sell your data to any third party.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>4. Third-party services</h2>
            <ul className="list-disc pl-6 mb-4 space-y-1 font-body" style={{ color: TOKEN.body }}>
              <li><strong style={{ color: TOKEN.fg }}>Supabase</strong> — secure cloud database for optional account sync. Hosted on AWS US-East.</li>
              <li><strong style={{ color: TOKEN.fg }}>RevenueCat</strong> — in-app purchase management and subscription tracking.</li>
              <li><strong style={{ color: TOKEN.fg }}>Apple App Store / Google Play</strong> — app distribution and payment processing.</li>
            </ul>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>5. Data deletion</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              You may delete your account and all associated cloud data at any time from the app settings.
              We will delete your data within 30 days of the request. Local device data is deleted when you uninstall the app.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>6. Children</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              This app is not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>7. Changes to this policy</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              We may update this policy. We will post the revised policy at this URL with a new last updated date.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>8. Contact</h2>
            <p className="font-body leading-relaxed" style={{ color: TOKEN.body }}>
              Questions about this policy? Email <a href="mailto:support@canninglog.com" className="underline" style={{ color: TOKEN.primary }}>support@canninglog.com</a>.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
