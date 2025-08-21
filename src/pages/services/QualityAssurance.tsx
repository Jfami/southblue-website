import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Award, Microscope, FileCheck, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QualityAssurance = () => {
  const testingSteps = [
    {
      icon: Microscope,
      title: "Visual Inspection",
      description: "Detailed visual examination of component markings, packaging, and physical characteristics"
    },
    {
      icon: FileCheck,
      title: "Authenticity Verification",
      description: "Third-party lab testing to confirm component authenticity and manufacturer origin"
    },
    {
      icon: CheckCircle,
      title: "Electrical Testing",
      description: "Functional testing to verify component specifications and performance parameters"
    },
    {
      icon: Award,
      title: "Documentation",
      description: "Complete test reports, certificates of compliance, and traceability documentation"
    }
  ];

  const guarantees = [
    {
      title: "365-Day Return Policy",
      description: "Full refund if any component fails third-party authenticity testing within one year",
      icon: Clock
    },
    {
      title: "Zero Counterfeit Tolerance",
      description: "We cover all rework costs and return shipping if counterfeit parts are discovered",
      icon: Shield
    },
    {
      title: "Complete Traceability",
      description: "Full chain of custody documentation from manufacturer to your facility",
      icon: FileCheck
    }
  ];

  const certifications = [
    "ISO 9001 Quality Management",
    "RoHS Compliance Verification", 
    "REACH Regulation Compliance",
    "Certificate of Compliance (COC)",
    "Authorized Dealer Documentation",
    "Third-Party Lab Reports"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            Quality Assurance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Industry-leading quality verification process ensuring 100% authentic components with comprehensive testing and documentation.
          </p>
          
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20 p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-xl font-bold text-foreground">The Counterfeit Crisis</h3>
            </div>
            <p className="text-muted-foreground">
              Up to 15% of electronic components in the global supply chain are counterfeit, costing companies billions in failures, recalls, and reputation damage. 
              <span className="font-semibold text-foreground"> SouthBlue's rigorous testing eliminates this risk completely.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our 4-Stage Testing Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every component undergoes rigorous multi-stage verification before reaching your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingSteps.map((step, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-tech rounded-lg shadow-glow group-hover:animate-glow">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Labs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Independent Lab Verification
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We partner with accredited third-party testing laboratories to provide unbiased verification of component authenticity. 
                This independent validation ensures complete objectivity in our quality assurance process.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Accredited testing facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Independent verification process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Detailed test reports provided</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Full traceability documentation</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Components Tested</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">0%</div>
                <div className="text-sm text-muted-foreground">Counterfeit Rate</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">24-48h</div>
                <div className="text-sm text-muted-foreground">Testing Time</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">365</div>
                <div className="text-sm text-muted-foreground">Day Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full compliance documentation and certifications for regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="surface-elevated border-border text-center hover:shadow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Quality Guarantees
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stand behind every component with industry-leading guarantees that protect your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-tech rounded-full w-fit mx-auto mb-6 shadow-glow group-hover:animate-glow">
                    <guarantee.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Risk-Free Quality Assurance
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                If any component fails third-party authenticity testing within 365 days, we cover all costs including rework, materials, and return shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
                >
                  <Link to="/contact">Request Quality Report</Link>
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
        </div>
      </section>
    </div>
  );
};

export default QualityAssurance;
