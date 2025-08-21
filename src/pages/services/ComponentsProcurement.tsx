import { Link } from "react-router-dom";
import { ArrowRight, Cpu, CheckCircle, Clock, Shield, Globe, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ComponentsProcurement = () => {
  const componentTypes = [
    "Microcontrollers (MCU)", "Digital Signal Processors (DSP)", "Power Management ICs (PMIC)",
    "Memory & Flash ICs", "Sensor ICs", "Communication ICs", "FPGA & ASIC",
    "Diodes & Transistors", "Capacitors", "Inductors & Filters", "Circuit Protection", "Data Conversion"
  ];

  const industries = [
    { name: "Computing / AI", description: "High-performance processors and accelerators" },
    { name: "Automotive", description: "ECUs, sensors, and power management" },
    { name: "Medical", description: "Precision components for medical devices" },
    { name: "Security", description: "Encryption and secure communication chips" },
    { name: "IoT", description: "Low-power wireless and sensor solutions" },
    { name: "Consumer Electronics", description: "Mobile, wearables, and smart home" }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Share your component specifications, quantities, and timeline requirements"
    },
    {
      step: "02", 
      title: "Global Sourcing",
      description: "We leverage our network to find the best suppliers and pricing for your needs"
    },
    {
      step: "03",
      title: "Quality Verification", 
      description: "Every component undergoes third-party lab testing for authenticity verification"
    },
    {
      step: "04",
      title: "Secure Delivery",
      description: "Fast, tracked shipping with full insurance and documentation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
              Components Procurement
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Source authentic electronic components from trusted global suppliers with guaranteed quality and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="p-4 bg-gradient-tech rounded-lg shadow-glow mb-4 inline-block">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Rapid Response</h3>
              <p className="text-muted-foreground">Efficient quote processing for urgent requirements</p>
            </div>
            <Card className="surface-elevated border-border text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">100% Authentic</h3>
                <p className="text-muted-foreground">Lab-verified components with full traceability</p>
              </CardContent>
            </Card>
            <Card className="surface-elevated border-border text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Global Network</h3>
                <p className="text-muted-foreground">Access to worldwide supplier relationships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Component Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Component Categories We Source
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From standard components to hard-to-find legacy parts, we source across all electronic component categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {componentTypes.map((type, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Cpu className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Procurement Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamlined workflow from requirement to delivery, ensuring quality and speed at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized component sourcing for high-growth and demanding industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-tech rounded-lg">
                      <Star className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Quality Guarantee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">365-Day Return Policy</h3>
                <p className="text-muted-foreground text-sm">Full refund if components fail authenticity testing</p>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Third-Party Lab Testing</h3>
                <p className="text-muted-foreground text-sm">Independent verification of every component</p>
              </div>
              <div>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Full Traceability</h3>
                <p className="text-muted-foreground text-sm">Complete documentation and chain of custody</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
              >
                <Link to="/contact">Request Procurement Quote</Link>
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

export default ComponentsProcurement;
