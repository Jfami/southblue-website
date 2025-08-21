import { Cpu, Zap, Shield, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Components Procurement",
      description: "Sourcing authentic electronic components from trusted suppliers",
      features: ["ICs & Microcontrollers", "Diodes & Transistors", "Capacitors & Inductors", "Sensors & Modules"],
      price: "Competitive pricing",
      link: "/services/components-procurement"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Third-party lab testing for 100% authentic parts guarantee",
      features: ["Visual Authenticity Tests", "Third-Party Lab Verification", "COC Documentation", "365-Day Return Policy"],
      price: "Included in service",
      link: "/services/quality-assurance"
    },
    {
      icon: Zap,
      title: "Excess Stock Management",
      description: "Efficient management and redistribution of surplus inventory",
      features: ["Inventory Assessment", "Market Valuation", "Redistribution Network", "Cost Recovery"],
      price: "Commission-based",
      link: "/services/excess-stock-management"
    },
    {
      icon: Headphones,
      title: "Value-Added Services",
      description: "Comprehensive support beyond component trading",
      features: ["PCBA Factory Recommendations", "Testing Lab Support", "Consolidated Shipping", "EOL/Obsolescence Support"],
      price: "Custom quotes",
      link: "/services/value-added-services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Independent distribution of authentic electronic components with comprehensive 
            quality assurance and value-added services for European markets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-tech rounded-lg shadow-glow mr-4 group-hover:animate-glow">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-primary font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
                  >
                    <Link to={service.link} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to delivery, we ensure a seamless experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements" },
              { step: "02", title: "Design", desc: "Custom solution development" },
              { step: "03", title: "Testing", desc: "Quality assurance and validation" },
              { step: "04", title: "Delivery", desc: "Fast and secure shipping" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;