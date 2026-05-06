import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — CanningLog',
  description: 'Terms of service for the CanningLog mobile application and canninglog.com website.',
};

const TOKEN = {
  surface: 'oklch(0.94 0.018 105)',
  fg: 'oklch(0.18 0.025 130)',
  body: 'oklch(0.32 0.022 130)',
  muted: 'oklch(0.46 0.018 130)',
  primary: 'oklch(0.40 0.12 145)',
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="font-body text-sm" style={{ color: TOKEN.muted }}>
              Last updated: April 18, 2026
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 sm:px-10 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <p className="font-body leading-relaxed mb-6" style={{ color: TOKEN.body }}>
              These Terms of Service govern your use of the CanningLog home canning log app and the website at canninglog.com.
              By downloading the app or using the website, you agree to these terms.
              If you do not agree, do not use the service.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>1. Who we are</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              Anvil Road LLC operates canninglog.com and the CanningLog mobile application.
              Contact: <a href="mailto:support@canninglog.com" className="underline" style={{ color: TOKEN.primary }}>support@canninglog.com</a>
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>2. Use of the service</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              CanningLog is a personal home canning log app. You may use the service for personal, non-commercial purposes only.
              You agree not to misuse the service, reverse-engineer the app, or use it in any way that violates applicable law.
            </p>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              You are responsible for all data you enter into the app. We do not verify the accuracy of your logged entries.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>3. User accounts</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              Creating an account is optional. If you create an account, you are responsible for keeping your credentials secure.
              You may delete your account at any time from the app settings.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>4. In-app purchases</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              CanningLog offers a one-time in-app purchase ($6.99 USD) to unlock the full database and premium logging features.
              Purchases are processed by Apple App Store or Google Play and are subject to their respective refund policies.
              We do not process payment information directly.
            </p>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              Purchases are tied to your App Store or Google Play account and can be restored on new devices using the restore
              purchases option in settings.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>5. Intellectual property</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              All content, design, code, and database records in the CanningLog app and website are owned by Anvil Road LLC
              or licensed to us. You may not copy, reproduce, or redistribute any part of the service without written permission.
            </p>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              Data you create in the app (your personal log entries) remains yours. We do not claim ownership of your personal records.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>Health and safety notice</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              CanningLog provides reference information sourced from USDA Complete Guide to Home Canning. Processing times and pressures are for reference only. Always follow current USDA-tested recipes and consult local extension offices for altitude adjustments. Improper canning can cause serious illness.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>6. Limitation of liability</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              CanningLog is provided &ldquo;as is&rdquo; without warranties of any kind. Anvil Road LLC is not liable for any damages
              arising from use of the app, including data loss, inaccurate reference information, or service interruptions.
              Our total liability to you is limited to the amount you paid for any in-app purchase.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>7. Changes to these terms</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              We may update these terms from time to time. We will post the revised terms at this URL with a new last updated date.
              Continued use of the service after changes constitutes your acceptance of the updated terms.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>8. Governing law</h2>
            <p className="font-body leading-relaxed mb-4" style={{ color: TOKEN.body }}>
              These terms are governed by the laws of the State of New Jersey, United States, without regard to conflict of law principles.
              Any disputes must be brought in the courts of New Jersey.
            </p>

            <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: TOKEN.primary }}>9. Contact</h2>
            <p className="font-body leading-relaxed" style={{ color: TOKEN.body }}>
              Questions about these terms? Email <a href="mailto:support@canninglog.com" className="underline" style={{ color: TOKEN.primary }}>support@canninglog.com</a>.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
