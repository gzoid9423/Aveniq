import { Button } from "@/components/ui/button";
import { Play, Phone } from "lucide-react";
import { toast } from "sonner";

const DemoSection = () => {
  const handlePlayDemo = () => {
    toast.info("Demo audio integration coming soon", {
      description: "Connect your Twilio demo widget here",
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="demo" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 shadow-elegant animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Experience It Yourself
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear how our AI receptionist sounds—human, professional, and ready to help your customers
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center shadow-soft hover:shadow-elegant transition-smooth cursor-pointer animate-float" onClick={handlePlayDemo}>
                <Play className="w-16 h-16 text-primary" />
              </div>

              <Button
                variant="hero"
                size="xl"
                onClick={handlePlayDemo}
                className="group"
              >
                <Play className="w-5 h-5" />
                Play Demo Call
              </Button>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContact}
                >
                  <Phone className="w-5 h-5" />
                  Request Live Demo
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => window.location.href = "tel:+6512345678"}
                >
                  Or Call +65 1234 5678
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
