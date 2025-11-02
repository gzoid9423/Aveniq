import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">AI Voice Reception</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium hover:text-primary transition-smooth"
            >
              FAQ
            </button>
          </div>

          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("demo")}
          >
            Book Free Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
