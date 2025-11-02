import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "S$299",
      period: "/month",
      description: "Perfect for small businesses starting with AI reception",
      features: [
        "Up to 200 calls per month",
        "Basic appointment booking",
        "Email notifications",
        "Business hours only",
        "Standard voice quality",
      ],
    },
    {
      name: "Growth",
      price: "S$699",
      period: "/month",
      description: "For growing businesses with higher call volumes",
      features: [
        "Up to 1,000 calls per month",
        "Advanced appointment booking",
        "SMS + Email notifications",
        "24/7 availability",
        "Premium voice quality",
        "CRM integration",
        "Custom responses",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large operations",
      features: [
        "Unlimited calls",
        "Multi-location support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "Priority support",
        "White-label option",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-card hover:shadow-elegant transition-smooth animate-slide-up ${
                plan.popular
                  ? "bg-primary/5 border-2 border-primary"
                  : "bg-card"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-soft">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                onClick={scrollToContact}
              >
                {plan.name === "Enterprise" ? "Get a Quote" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
