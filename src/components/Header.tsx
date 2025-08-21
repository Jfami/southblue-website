import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-tech rounded-lg shadow-glow">
              <Cpu className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-heading font-bold text-gradient">
              SouthBlue
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground font-medium shadow-accent"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  Home
                </Link>
                <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                  Services
                </Link>
                <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium">
                  Products
                </Link>
                <Link to="/faq" className="text-foreground hover:text-primary transition-colors font-medium">
                  FAQ
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                  Contact
                </Link>
              </div>
              <Button 
                asChild 
                className="mt-4 bg-gradient-primary text-primary-foreground w-fit"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;