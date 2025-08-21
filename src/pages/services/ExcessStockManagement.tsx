import { Link } from "react-router-dom";
import { ArrowRight, Package, TrendingUp, DollarSign, Recycle, CheckCircle, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ExcessStockManagement = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Inventory Assessment",
      description: "Comprehensive analysis of your excess inventory with detailed valuation and market demand assessment"
    },
    {
      icon: DollarSign,
      title: "Market Valuation",
      description: "Real-time pricing analysis to maximize recovery value for your surplus components"
    },
    {
      icon: Users,
      title: "Redistribution Network",
      description: "Access to our global network of buyers and partners for efficient component redistribution"
    },
    {
      icon: TrendingUp,
      title: "Cost Recovery",
      description: "Optimized strategies to recover maximum value from your excess inventory investment"
    }
  ];

  const benefits = [
    "Free up valuable warehouse space",
    "Recover capital tied up in excess inventory", 
    "Reduce carrying costs and insurance",
    "Prevent component obsolescence losses",
    "Access global redistribution channels",
    "Professional inventory management"
  ];

  const process = [
    {
      step: "01",
      title: "Inventory Audit",
      description: "Complete assessment of your excess stock with detailed cataloging and condition evaluation"
    },
    {
      step: "02",
      title: "Market Analysis", 
      description: "Current market demand analysis and pricing evaluation for optimal positioning"
    },
    {
      step: "03",
      title: "Strategic Planning",
      description: "Custom redistribution strategy based on component types, quantities, and market conditions"
    },
    {
      step: "04",
      title: "Execution & Recovery",
      description: "Implementation of redistribution plan with regular progress reporting and payment processing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            Excess Stock Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your surplus inventory into recovered capital with our professional excess stock management and redistribution services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="surface-elevated border-border">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Inventory Liberation</h3>
                <p className="text-muted-foreground">Free up warehouse space and reduce carrying costs</p>
              </CardContent>
            </Card>
            <Card className="surface-elevated border-border">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Capital Recovery</h3>
                <p className="text-muted-foreground">Maximize return on your excess inventory investment</p>
              </CardContent>
            </Card>
            <Card className="surface-elevated border-border">
              <CardContent className="p-6 text-center">
                <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Sustainable Solution</h3>
                <p className="text-muted-foreground">Prevent waste through efficient component redistribution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Excess Stock Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to optimize your excess inventory management and maximize recovery value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-tech rounded-lg shadow-glow group-hover:animate-glow">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Why Manage Excess Stock?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Excess inventory ties up valuable capital and warehouse space while depreciating in value. 
                Our professional management services help you recover maximum value while optimizing your operations.
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
                <div className="text-3xl font-bold text-gradient mb-2">60-80%</div>
                <div className="text-sm text-muted-foreground">Average Recovery Rate</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">30-90</div>
                <div className="text-sm text-muted-foreground">Days to Liquidation</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Buyer Network</div>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg border border-border">
                <div className="text-3xl font-bold text-gradient mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Upfront Costs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Management Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to maximize value recovery from your excess inventory.
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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8 md:p-12">
            <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free assessment of your excess stock and discover how much capital you can recover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
              >
                <Link to="/contact">Request Free Assessment</Link>
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

export default ExcessStockManagement;
