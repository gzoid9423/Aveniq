import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated wave bars */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="flex gap-2 items-end h-32">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full animate-wave"
              style={{
                height: `${Math.random() * 100 + 20}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Never Miss a Call
            <span className="text-primary"> Again</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Human-quality AI voice reception for Singapore's premium businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToDemo}
              className="group"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToDemo}
            >
              <Volume2 className="w-5 h-5" />
              Hear a Sample
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm shadow-card hover:shadow-soft transition-smooth animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-semibold mb-1">Always Available</div>
              <div className="text-sm text-muted-foreground">Never miss an opportunity, day or night</div>
            </div>
            
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm shadow-card hover:shadow-soft transition-smooth animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-primary mb-2">&lt;2s</div>
              <div className="text-sm font-semibold mb-1">Response Time</div>
              <div className="text-sm text-muted-foreground">Instant, natural conversation flow</div>
            </div>
            
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm shadow-card hover:shadow-soft transition-smooth animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm font-semibold mb-1">PDPA Compliant</div>
              <div className="text-sm text-muted-foreground">Secure and fully regulated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
