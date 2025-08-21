import { useState } from "react";
import { Search, Filter, Cpu, Zap, Shield, Radio, CircuitBoard, Gauge, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", count: "1000+" },
    { id: "ic", name: "Integrated Circuits", count: "400+" },
    { id: "discrete", name: "Discrete Components", count: "200+" },
    { id: "passive", name: "Passive Components", count: "150+" },
    { id: "sensors", name: "Sensors & Modules", count: "100+" },
    { id: "protection", name: "Circuit Protection", count: "80+" },
    { id: "conversion", name: "Data Conversion", count: "70+" }
  ];

  const productTypes = [
    {
      icon: Cpu,
      category: "ic",
      title: "Microcontrollers (MCU)",
      description: "8-bit, 16-bit, and 32-bit microcontrollers for embedded applications",
      applications: ["Automotive ECUs", "IoT Devices", "Industrial Control", "Consumer Electronics"],
      brands: ["STMicroelectronics", "Microchip", "NXP", "Texas Instruments"]
    },
    {
      icon: CircuitBoard,
      category: "ic", 
      title: "Digital Signal Processors (DSP)",
      description: "High-performance DSPs for signal processing applications",
      applications: ["Audio Processing", "Image Processing", "Communications", "Motor Control"],
      brands: ["Texas Instruments", "Analog Devices", "NXP", "Infineon"]
    },
    {
      icon: Zap,
      category: "ic",
      title: "Power Management ICs (PMIC)",
      description: "Voltage regulators, power switches, and battery management solutions",
      applications: ["Mobile Devices", "Computing", "Automotive", "Industrial"],
      brands: ["Texas Instruments", "Maxim", "Linear Technology", "ON Semiconductor"]
    },
    {
      icon: Shield,
      category: "ic",
      title: "Memory & Flash ICs",
      description: "DRAM, SRAM, Flash memory, and EEPROM solutions",
      applications: ["Data Storage", "Program Memory", "Cache Memory", "Configuration Storage"],
      brands: ["Samsung", "Micron", "SK Hynix", "Winbond"]
    },
    {
      icon: Gauge,
      category: "sensors",
      title: "Sensor ICs",
      description: "Temperature, pressure, motion, and environmental sensors",
      applications: ["HVAC Systems", "Automotive", "Medical Devices", "Smart Home"],
      brands: ["Bosch", "STMicroelectronics", "Infineon", "Sensirion"]
    },
    {
      icon: Radio,
      category: "ic",
      title: "Communication ICs",
      description: "RF transceivers, wireless modules, and communication processors",
      applications: ["Wireless Communication", "IoT Connectivity", "Bluetooth/WiFi", "Cellular"],
      brands: ["Qualcomm", "Broadcom", "Nordic", "Espressif"]
    },
    {
      icon: CircuitBoard,
      category: "ic",
      title: "FPGA & ASIC",
      description: "Field-programmable gate arrays and application-specific integrated circuits",
      applications: ["Custom Logic", "Signal Processing", "Acceleration", "Prototyping"],
      brands: ["Xilinx", "Intel/Altera", "Lattice", "Microsemi"]
    },
    {
      icon: Zap,
      category: "discrete",
      title: "Diodes & Transistors",
      description: "Power diodes, MOSFETs, BJTs, and switching components",
      applications: ["Power Switching", "Signal Amplification", "Voltage Regulation", "Protection"],
      brands: ["Infineon", "ON Semiconductor", "Vishay", "Nexperia"]
    },
    {
      icon: CircuitBoard,
      category: "passive",
      title: "Capacitors",
      description: "Ceramic, electrolytic, tantalum, and film capacitors",
      applications: ["Power Supply Filtering", "Decoupling", "Timing Circuits", "Energy Storage"],
      brands: ["Murata", "TDK", "KEMET", "Nichicon"]
    },
    {
      icon: Radio,
      category: "passive",
      title: "Inductors & Filters",
      description: "Power inductors, RF inductors, and EMI/RFI filters",
      applications: ["Power Conversion", "RF Circuits", "EMI Suppression", "Signal Filtering"],
      brands: ["Coilcraft", "Wurth", "TDK", "Bourns"]
    },
    {
      icon: Shield,
      category: "protection",
      title: "Circuit Protection",
      description: "Fuses, TVS diodes, surge protectors, and overcurrent protection",
      applications: ["Overcurrent Protection", "ESD Protection", "Surge Protection", "Safety"],
      brands: ["Littelfuse", "Bourns", "Vishay", "ON Semiconductor"]
    },
    {
      icon: Cpu,
      category: "conversion",
      title: "Data Conversion",
      description: "ADCs, DACs, and mixed-signal processing components",
      applications: ["Signal Acquisition", "Audio Processing", "Measurement", "Control Systems"],
      brands: ["Analog Devices", "Texas Instruments", "Maxim", "Linear Technology"]
    }
  ];

  const filteredProducts = productTypes.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const industries = [
    "Computing / AI", "Automotive", "Medical", "Security", "IoT",
    "Consumer Electronics", "Telecommunications", "Industrial Automation",
    "Defense and Aerospace", "Energy"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            Electronic Components Catalog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive range of authentic electronic components from trusted manufacturers. 
            All parts are tested and verified for quality assurance.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="surface-elevated border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Filter className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-heading font-bold text-foreground">Categories</h3>
                  </div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{category.name}</span>
                          <span className="text-xs">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Industries Served */}
              <Card className="surface-elevated border-border mt-6">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-foreground mb-4">Industries Served</h3>
                  <div className="space-y-2">
                    {industries.map((industry, index) => (
                      <div key={index} className="text-sm text-muted-foreground p-2 bg-muted rounded">
                        {industry}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content - Product Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} component categories
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {filteredProducts.map((product, index) => (
                <Card key={index} className="surface-elevated border-border hover:shadow-accent transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-gradient-tech rounded-lg shadow-glow group-hover:animate-glow">
                        <product.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Applications:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.applications.map((app, idx) => (
                          <span key={idx} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Key Brands:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.brands.map((brand, idx) => (
                          <span key={idx} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      asChild 
                      className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
                    >
                      <Link to="/contact" className="flex items-center justify-center">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No components found matching your criteria.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4"
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Can't Find What You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our procurement specialists can source hard-to-find and obsolete components. 
            Contact us with your requirements for a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground"
            >
              <Link to="/contact">Request Custom Quote</Link>
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
      </section>
    </div>
  );
};

export default Products;
