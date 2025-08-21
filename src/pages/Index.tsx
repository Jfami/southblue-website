import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Zap, Shield, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Zero Counterfeit Risk",
      description: "Every component lab-tested by independent third parties. We stake our reputation on authenticity - and back it with a 365-day guarantee."
    },
    {
      icon: Zap,
      title: "Optimized Logistics",
      description: "Streamlined supply chain and strategic partnerships ensure efficient delivery to European markets. Our logistics network minimizes delays and keeps your production on schedule."
    },
    {
      icon: Users,
      title: "Beyond Trading",
      description: "Connect with vetted PCBA factories, access testing labs, consolidate shipments. We solve your entire supply chain puzzle."
    },
    {
      icon: Cpu,
      title: "Complete Component Universe",
      description: "From cutting-edge AI chips to legacy components. If it exists, we can source it - including those 'impossible to find' parts."
    }
  ];

  const stats = [
    { number: "365", label: "Day Return Policy" },
    { number: "100%", label: "Authentic Parts" },
    { number: "1-3", label: "Days Shipping" },
    { number: "10+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 41, 60, 0.8), rgba(33, 41, 60, 0.9)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-8 animate-fade-in">
              Europe's Most Trusted
              <br />
              Electronic Components Partner
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Skip the counterfeit nightmare. Get 100% authentic components with lab-verified quality, optimized European logistics, and a 365-day guarantee that protects your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground text-lg px-8 py-4 shadow-accent animate-glow"
              >
                <Link to="/services" className="flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-4"
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-tech rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-primary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-secondary-accent rounded-full animate-float opacity-25" style={{ animationDelay: "2s" }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Why Choose SouthBlue?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading integrated circuit solutions backed by expertise and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-tech rounded-full w-fit mx-auto mb-6 shadow-glow group-hover:animate-glow">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join 500+ European companies who've eliminated component sourcing headaches. 
            Get your custom quote in under 4 hours - guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground text-lg px-8 py-4 shadow-accent"
            >
              <Link to="/contact" className="flex items-center">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-border text-foreground hover:bg-muted text-lg px-8 py-4"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">Industry Leading Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-muted-foreground">Secure & Reliable</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
