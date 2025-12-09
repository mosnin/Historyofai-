import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AI History",
  description: "Terms of service for AI History website",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="kanye-text text-5xl md:text-7xl mb-8">
          TERMS OF
          <br />
          SERVICE
        </h1>

        <p className="text-sm text-muted-foreground mb-12">
          Last Updated: December 9, 2025
        </p>

        <div className="space-y-12 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Agreement to Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using AI History, you agree to be bound by these Terms of
              Service. If you disagree with any part of these terms, you may not access
              the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Use License
            </h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily view the materials on AI History for
              personal, non-commercial use only. This license shall automatically
              terminate if you violate any of these restrictions.
            </p>
            <p className="leading-relaxed">
              You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for commercial purposes</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Disclaimer
            </h2>
            <p className="leading-relaxed">
              The materials on AI History are provided on an 'as is' basis. We make no
              warranties, expressed or implied, and hereby disclaim and negate all other
              warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Accuracy of Materials
            </h2>
            <p className="leading-relaxed">
              The materials appearing on AI History may include technical, typographical,
              or photographic errors. We do not warrant that any of the materials are
              accurate, complete, or current. We may make changes to the materials at any
              time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Links
            </h2>
            <p className="leading-relaxed">
              We have not reviewed all of the sites linked to our website and are not
              responsible for the contents of any such linked site. The inclusion of any
              link does not imply endorsement by us. Use of any linked website is at the
              user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content, features, and functionality on AI History are owned by us or
              our licensors and are protected by international copyright, trademark,
              patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Modifications
            </h2>
            <p className="leading-relaxed">
              We may revise these Terms of Service at any time without notice. By using
              this website, you agree to be bound by the current version of these Terms of
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms shall be governed and construed in accordance with applicable
              laws, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase mb-4 text-foreground">
              Contact Information
            </h2>
            <p className="leading-relaxed">
              Questions about the Terms of Service should be sent to{" "}
              <a
                href="mailto:legal@aihistory.com"
                className="text-foreground underline hover:no-underline"
              >
                legal@aihistory.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
