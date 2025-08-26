const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: August 21, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                SOUTHBLUE ELECTRONICS HK LIMITED ("we," "our," or "us") collects information you provide directly to us, 
                such as when you create an account, make a purchase, request a quote, or contact us for support.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Company information (company name, address, industry)</li>
                <li>Technical requirements and specifications</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Process and fulfill your orders and quote requests</li>
                <li>Provide customer support and technical assistance</li>
                <li>Send you important updates about your orders and our services</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations and industry regulations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>With trusted suppliers and logistics partners to fulfill your orders</li>
                <li>With third-party testing laboratories for quality assurance purposes</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
                and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. International Transfers</h2>
              <p className="mb-4">
                As we operate globally, your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-surface p-6 rounded-lg border border-border">
                <p><strong>SOUTHBLUE ELECTRONICS HK LIMITED</strong></p>
                <p>FLAT/RM 511 5/F MING SANG INDUSTRIAL BUILDING</p>
                <p>19-21 HING YIP ST KWUN TONG KL</p>
                <p>HONGKONG</p>
                <p className="mt-4">
                  Email: <a href="mailto:info@southblueweb.com" className="text-primary hover:underline">info@southblueweb.com</a><br />
                  Phone: <a href="tel:+85230697418" className="text-primary hover:underline">+852 3069 7418</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by 
                posting the new policy on our website and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
