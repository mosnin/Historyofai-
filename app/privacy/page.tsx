import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI History",
  description: "Privacy policy for AI History website",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="kanye-text text-5xl md:text-7xl mb-8">
          PRIVACY
          <br />
          POLICY
        </h1>

        <p className="text-sm text-muted-foreground mb-12">
          Last Updated: December 9, 2025
        </p>

        <div className="space-y-12 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Introduction
            </h2>
            <p className="leading-relaxed">
              AI History ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your
              information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Usage data (pages visited, time spent, etc.)</li>
              <li>Device information (browser type, operating system)</li>
              <li>Contact information (if you reach out to us)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Improve and optimize our website</li>
              <li>Analyze user behavior and trends</li>
              <li>Respond to inquiries and support requests</li>
              <li>Protect against fraud and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Cookies
            </h2>
            <p className="leading-relaxed">
              We use cookies to enhance your browsing experience. You can control cookie
              settings through your browser preferences. Disabling cookies may limit some
              functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Third-Party Services
            </h2>
            <p className="leading-relaxed">
              We may use third-party services for analytics and hosting. These services
              have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Data Security
            </h2>
            <p className="leading-relaxed">
              We implement reasonable security measures to protect your information.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Your Rights
            </h2>
            <p className="leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of certain data collection</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new policy on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:privacy@aihistory.com"
                className="text-foreground underline hover:no-underline"
              >
                privacy@aihistory.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
