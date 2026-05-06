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
        <section className="px-6 sm:px-10 py-16 lg:py-20" style={{ background: 'oklch(0.99 0.008 105)' }}>
          <div className="max-w-3xl mx-auto">

            <h2 className="font-display text-xl font-semibold mt-0 mb-3" style={{ color: TOKEN.fg }}>1. Who We Are</h2>
            <p className="leading-relaxed mb-6 font-body" style={{ color: TOKEN.body }}>
              Anvil Road LLC operates canninglog.com and the CanningLog mobile application.
              Contact: <a href="mailto:support@canninglog.com" style={{ color: TOKEN.primary }} className="hover:underline">support@canninglog.com</a>
            </p>

            <h2 className="font-display text-xl font-semibold mt-10 mb-3" style={{ color: TOKEN.fg }}>2. Information We Collect</h2>
            <p className="mb-3 font-body" style={{ color: TOKEN.body }}>We collect the minimum data needed to operate the app:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-body" style={{ color: TOKEN.body }}>
              <li><strong style={{ color: TOKEN.fg }}>Canning batch records you create.</strong> Stored locally on your device only. This data is never uploaded to any server.</li>
              <li><strong style={{ color: TOKEN.fg }}>Purchase data.</strong> When you unlock the full app, RevenueCat receives a transaction ID and device identifier to verify and restore your purchase. We do not receive your payment details.</li>
            </ul>

            <h2 className="font-display text-xl font-semibold mt-10 mb-3" style={{ color: TOKEN.fg }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1 font-body" style={{ color: TOKEN.body }}>
              <li>To operate the app and display your logged batches</li>
              <li>To restore your purchase on new devices</li>
              <li>To respond to support requests</li>
            </ul>
            <p className="mb-6 font-body" style={{ color: TOKEN.body }}>We do not use your data for advertising. We do not sell your data to any third party.</p>

            <h2 className="font-display text-xl font-semibold mt-10 mb-3" style={{ color: TOKEN.fg }}>4. Third-Party Services</h2>
            <ul className="list-disc pl-6 mb-6 space-y-1 font-body" style={{ color: TOKEN.body }}>
              <li><strong style={{ color: TOKEN.fg }}>RevenueCat.</strong> In-app purchase management. They receive device identifiers and transaction data to process and restore purchases.</li>
              <li><strong style={{ color: TOKEN.fg }}>Apple App Store / Google Play.</strong> App distribution and payment processing.</li>
            </ul>

            <h2 className="font-display text-xl font-semibold mt-10 mb-3" style={{ color: TOKEN.fg }}>5. Data Deletion</h2>
            <p className="leading-relaxed mb-6 font-body" style={{ color: TOKEN.body }}>
              Your data is stored only on your device. It is permanently deleted when you uninstall the app.
              We do not store any of your logged data on our servers.
            </p>

            <h2 className="font-display text-xl font-semibold mt-10 mb-3" style={{ color: TOKEN.fg }}>6. Children</h2>
            <p className="leading-relaxed mb-6 font-body" style={{ color: TOKEN.body }}>
              This app is not directed at children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="font-display text-xl font-semibold mt-10 mb-3" style={{ color: TOKEN.fg }}>7. Changes to This Policy</h2>
            <p className="leading-relaxed mb-6 font-body" style={{ color: TOKEN.body }}>
              We may update this policy. We will post the revised policy at this URL with a new last updated date.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="font-display text-xl font-semibold mt-10 mb-3" style={{ color: TOKEN.fg }}>8. Contact</h2>
            <p className="leading-relaxed font-body" style={{ color: TOKEN.body }}>
              Questions about this policy? Email{' '}
              <a href="mailto:support@canninglog.com" style={{ color: TOKEN.primary }} className="hover:underline">support@canninglog.com</a>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
