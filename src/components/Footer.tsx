import { Phone, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5" />
              <span className="font-bold text-lg">AI Voice Reception</span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              AI Voice Reception built in Singapore for Singapore businesses
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="opacity-80 hover:opacity-100 transition-smooth"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("use-cases")}
                  className="opacity-80 hover:opacity-100 transition-smooth"
                >
                  Use Cases
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="opacity-80 hover:opacity-100 transition-smooth"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="opacity-80 hover:opacity-100 transition-smooth"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-smooth">
                  PDPA Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:hello@aivoicereception.sg"
                  className="hover:opacity-100 transition-smooth"
                >
                  hello@aivoicereception.sg
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                <a href="tel:+6512345678" className="hover:opacity-100 transition-smooth">
                  +65 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Linkedin className="w-4 h-4" />
                <a href="#" className="hover:opacity-100 transition-smooth">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} AI Voice Reception. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
