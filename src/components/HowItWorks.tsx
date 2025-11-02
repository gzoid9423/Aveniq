import { PhoneCall, Bot, Calendar, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: PhoneCall,
      title: "AI Answers",
      description: "Customer calls your business number, AI picks up instantly",
    },
    {
      icon: Bot,
      title: "Books Appointment",
      description: "Natural conversation to understand needs and schedule time",
    },
    {
      icon: Calendar,
      title: "Syncs to Your System",
      description: "Automatically updates your calendar and CRM in real-time",
    },
    {
      icon: MessageCircle,
      title: "Sends Confirmation",
      description: "Customer receives SMS confirmation immediately",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, seamless, and sophisticated—your AI receptionist handles everything
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="p-6 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-smooth text-center h-full">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-soft">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto mt-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
