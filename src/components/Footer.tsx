import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">Minimalist</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Science-backed skincare that works. Simple, effective, and transparent.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Products</h3>
            <div className="space-y-2">
              <Link to="/products/cleansers" className="block text-sm text-muted-foreground hover:text-primary">
                Cleansers
              </Link>
              <Link to="/products/serums" className="block text-sm text-muted-foreground hover:text-primary">
                Serums
              </Link>
              <Link to="/products/moisturizers" className="block text-sm text-muted-foreground hover:text-primary">
                Moisturizers
              </Link>
              <Link to="/products/sunscreens" className="block text-sm text-muted-foreground hover:text-primary">
                Sunscreens
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Link to="/skin-test" className="block text-sm text-muted-foreground hover:text-primary">
                Skin Test
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link to="/faq" className="block text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Minimalist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};