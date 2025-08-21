const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using the services of SOUTHBLUE ELECTRONICS HK LIMITED ("Company," "we," "our," or "us"), 
                you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="mb-4">
                We provide electronic components trading services including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Components procurement and sourcing</li>
                <li>Quality assurance and third-party testing</li>
                <li>Excess stock management and redistribution</li>
                <li>Value-added services including PCBA factory recommendations</li>
                <li>Consolidated shipping and logistics support</li>
                <li>EOL/Obsolescence support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Product Authenticity and Quality</h2>
              <p className="mb-4">
                We guarantee that all components supplied are 100% authentic, new, and original. All products undergo 
                third-party laboratory testing for verification. We provide a 365-day return policy with detailed 
                failure analysis reports.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Orders and Pricing</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>All prices are subject to change without notice</li>
                <li>Orders are subject to availability and acceptance</li>
                <li>We reserve the right to refuse or cancel orders</li>
                <li>Payment terms will be specified in individual quotations</li>
                <li>All prices exclude shipping, taxes, and duties unless otherwise stated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Shipping and Delivery</h2>
              <p className="mb-4">
                We maintain an optimized logistics network to ensure efficient delivery. Delivery times are estimates 
                and may vary based on product availability, destination, and customs procedures. Risk of loss passes 
                to the buyer upon delivery to the carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Returns and Warranties</h2>
              <p className="mb-4">
                We offer a 365-day return policy for components that fail authenticity verification. Returns must be 
                in original condition and packaging. Warranty terms vary by manufacturer and will be specified with 
                each product.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                Our liability is limited to the purchase price of the products. We are not liable for consequential, 
                incidental, or special damages. This limitation applies to the fullest extent permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="mb-4">
                All content on our website, including text, graphics, logos, and software, is our property or licensed 
                to us and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Export Control and Compliance</h2>
              <p className="mb-4">
                Customers are responsible for compliance with all applicable export control laws and regulations. 
                We reserve the right to refuse shipments to restricted destinations or end-users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by the laws of Hong Kong. Any disputes shall be resolved in the courts of Hong Kong.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
              <p className="mb-4">
                For questions regarding these Terms of Service, please contact us:
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
