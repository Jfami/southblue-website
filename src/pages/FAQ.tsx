import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What types of integrated circuits do you offer?",
      answer: "We offer a comprehensive range of integrated circuits including microprocessors, memory chips, analog ICs, digital signal processors, microcontrollers, and custom ASIC solutions. Our inventory spans from standard commodity chips to specialized high-performance components."
    },
    {
      question: "Do you provide custom chip design services?",
      answer: "Yes, we offer custom ASIC and FPGA design services. Our experienced engineering team can develop tailored solutions based on your specific requirements, from initial concept to final production-ready designs."
    },
    {
      question: "What is your typical delivery timeframe?",
      answer: "Standard components are typically shipped within 1-3 business days. Custom solutions and specialized chips may require 2-8 weeks depending on complexity and current demand. We always provide accurate timelines during the quote process."
    },
    {
      question: "Do you offer technical support and integration assistance?",
      answer: "Absolutely! We provide comprehensive technical support including design consultation, integration guidance, troubleshooting, and post-delivery support. Our engineering team is available to help with implementation challenges."
    },
    {
      question: "What quality standards do your chips meet?",
      answer: "All our products meet or exceed industry standards including ISO 9001, RoHS compliance, and various automotive (AEC-Q100) and industrial certifications. We provide detailed quality documentation with every shipment."
    },
    {
      question: "What are your minimum order quantities?",
      answer: "Minimum order quantities vary by product. Standard components often have low MOQs (sometimes as low as 1 piece for prototyping), while custom solutions typically require higher quantities. Contact us for specific product MOQ information."
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer competitive volume pricing for larger quantities. Our pricing structure includes tiered discounts based on order volume, long-term contracts, and partnership agreements for regular customers."
    },
    {
      question: "How do you handle obsolete or hard-to-find components?",
      answer: "We specialize in sourcing obsolete and end-of-life components through our extensive network of suppliers. We can also suggest modern alternatives or provide custom solutions to replace discontinued chips."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-tech rounded-full shadow-glow">
              <HelpCircle className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our integrated circuit solutions, 
            services, and processes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="surface-elevated border-border overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left hover:bg-surface-variant transition-colors duration-200 flex items-center justify-between"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-lg font-heading font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 border-t border-border">
                      <p className="text-muted-foreground pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our technical experts are here to help you find the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@chiptrade.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:bg-gradient-accent transition-all duration-300 shadow-accent"
            >
              Email Us
            </a>
            <a 
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-6 py-3 bg-surface-variant text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300 border border-border"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;