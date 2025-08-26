import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Cpu, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-tech rounded-lg">
                <Cpu className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-bold text-gradient">
                SouthBlue
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Leading provider of integrated circuits and semiconductor solutions for modern technology needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li><Link to="/services/components-procurement" className="text-muted-foreground text-sm hover:text-primary transition-colors">Components Procurement</Link></li>
              <li><Link to="/services/quality-assurance" className="text-muted-foreground text-sm hover:text-primary transition-colors">Quality Assurance</Link></li>
              <li><Link to="/services/excess-stock-management" className="text-muted-foreground text-sm hover:text-primary transition-colors">Excess Stock Management</Link></li>
              <li><Link to="/services/value-added-services" className="text-muted-foreground text-sm hover:text-primary transition-colors">Value-Added Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@southblueweb.com
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +852 3069 7418
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                FLAT/RM 511 5/F MING SANG INDUSTRIAL BUILDING, 19-21 HING YIP ST KWUN TONG KL, HONGKONG
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 SouthBlue. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;