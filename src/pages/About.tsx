import { Shield, CheckCircle, Globe, Users, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "100% Authentic Parts",
      description: "We sell only new and original parts. Every component is tested in third-party labs to ensure 100% authenticity from manufacturers."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Each part number passes visual tests and authenticity verification. We provide COC and packing lists from authorized dealers."
    },
    {
      icon: Globe,
      title: "Global Supplier",
      description: "Reliable worldwide distribution network with deep understanding of international requirements and compliance standards."
    },
    {
      icon: Users,
      title: "Value-Added Services",
      description: "Beyond trading - we help find PCBA factories in China, support testing, and consolidate shipments from multiple suppliers."
    }
  ];

  const industries = [
    "Computing / AI", "Automotive", "Medical", "Security", "IoT", 
    "Consumer Electronics", "Telecommunications", "Industrial Automation", 
    "Defense and Aerospace", "Energy"
  ];

  const services = [
    "Components Procurement",
    "Excess Stock Management", 
    "Obsolescence/EOL Support",
    "Cost Reduction Services",
    "PCBA Factory Recommendations",
    "Third-Party Testing Support",
    "Consolidated Shipping"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            About SouthBlue
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Independent distributor of electronic components with a commitment to authenticity, 
            quality, and exceptional service. We bridge the gap between global suppliers and 
            European markets with trust and expertise.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In an industry plagued by refurbished and counterfeit parts, SouthBlue stands as a beacon of trust. 
                We are committed to providing only authentic, new, and original electronic components backed by 
                rigorous third-party testing and comprehensive quality assurance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our well-established, data-driven supply chain system enables real-time decision making and 
                secure delivery to our clients across Europe, ensuring supply continuity and peace of mind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">365</div>
                <div className="text-sm text-muted-foreground">Day Return Policy</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Authentic Parts</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">Fast</div>
                <div className="text-sm text-muted-foreground">Efficient Logistics</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets SouthBlue apart in the electronic components industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-tech rounded-lg shadow-glow group-hover:animate-glow">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Beyond traditional component distribution, we offer comprehensive value-added services 
                to support your entire supply chain needs.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="p-3 bg-background rounded-lg border border-border text-center">
                    <span className="text-sm font-medium text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Quality Guarantee
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              We stand behind every component we sell. If any part fails authenticity testing by a 
              third-party lab within 365 days of shipment, we cover all rework costs and return shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
