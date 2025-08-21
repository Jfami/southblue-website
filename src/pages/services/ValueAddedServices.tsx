import { Link } from "react-router-dom";
import { ArrowRight, Factory, TestTube, Package, Globe, CheckCircle, Users, Wrench, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ValueAddedServices = () => {
  const services = [
    {
      icon: Factory,
      title: "PCBA Factory Recommendations",
      description: "Connect with vetted PCB assembly factories in China with proven track records and quality certifications",
      features: ["Pre-qualified suppliers", "Quality certifications verified", "Competitive pricing negotiated", "Direct factory relationships"]
    },
    {
      icon: TestTube,
      title: "Testing Lab Support",
      description: "Access to accredited testing laboratories for component verification and product validation",
      features: ["Component authenticity testing", "Electrical parameter validation", "Environmental testing", "Compliance certification"]
    },
    {
      icon: Package,
      title: "Consolidated Shipping",
      description: "Combine orders from multiple suppliers into single shipments to reduce costs and complexity",
      features: ["Multi-supplier consolidation", "Reduced shipping costs", "Single point of contact", "Streamlined logistics"]
    },
    {
      icon: Wrench,
      title: "EOL/Obsolescence Support",
      description: "Specialized sourcing for end-of-life and obsolete components with alternative recommendations",
      features: ["Legacy component sourcing", "Alternative part recommendations", "Last-time-buy planning", "Redesign consultation"]
    }
  ];

  const pcbaProcess = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understand your PCB assembly needs, volume requirements, and quality standards"
    },
    {
      step: "02",
      title: "Factory Matching",
      description: "Match you with pre-qualified factories that meet your specific requirements"
    },
    {
      step: "03",
      title: "Quality Verification",
      description: "Verify factory certifications, capabilities, and quality management systems"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Provide ongoing liaison and quality monitoring throughout your partnership"
    }
  ];

  const benefits = [
    "Reduce supply chain complexity",
    "Access to vetted Chinese suppliers",
    "Lower total cost of ownership",
    "Single point of contact",
    "Quality assurance support",
    "Logistics optimization"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            Value-Added Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Beyond component trading - comprehensive supply chain solutions that solve your entire procurement puzzle.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-3">Complete Supply Chain Partnership</h3>
            <p className="text-muted-foreground">
              We don't just sell components - we solve supply chain challenges with end-to-end services that streamline your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Value-Added Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions that go beyond traditional component distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-gradient-tech rounded-lg shadow-glow group-hover:animate-glow">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PCBA Factory Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                PCBA Factory Partnerships
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Leverage our established relationships with qualified PCB assembly factories in China. 
                We've done the vetting so you can focus on your product development.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Vetted Factories</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Partners</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Coverage</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Quality Verified</div>
              </div>
            </div>
          </div>

          {/* PCBA Process */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              PCBA Partnership Process
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach to connecting you with the right manufacturing partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pcbaProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h4 className="text-lg font-heading font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Global Network, Local Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Based in Hong Kong with deep connections across China and focused service delivery to European markets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="surface-elevated border-border">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Hong Kong Base</h3>
                <p className="text-muted-foreground">Strategic location for China-Europe trade with established logistics networks</p>
              </CardContent>
            </Card>
            <Card className="surface-elevated border-border">
              <CardContent className="p-8 text-center">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">China Manufacturing</h3>
                <p className="text-muted-foreground">Direct relationships with qualified factories across major manufacturing regions</p>
              </CardContent>
            </Card>
            <Card className="surface-elevated border-border">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">European Focus</h3>
                <p className="text-muted-foreground">Specialized service delivery optimized for European market requirements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8 md:p-12">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Streamline Your Supply Chain?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us solve your complete supply chain puzzle with our comprehensive value-added services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
              >
                <Link to="/contact">Discuss Your Needs</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValueAddedServices;
