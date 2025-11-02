import { Heart, Utensils, Dumbbell, Sparkles } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Heart,
      industry: "Clinics",
      benefit: "Reduce missed bookings by 40%",
      description: "Handle patient inquiries and appointment scheduling 24/7",
    },
    {
      icon: Sparkles,
      industry: "Spas & Aesthetic Clinics",
      benefit: "Premium customer experience",
      description: "Maintain your high-end brand with sophisticated call handling",
    },
    {
      icon: Utensils,
      industry: "Restaurants",
      benefit: "Never lose a reservation",
      description: "Manage table bookings even during peak hours",
    },
    {
      icon: Dumbbell,
      industry: "Fitness Studios",
      benefit: "Boost class attendance",
      description: "Easy class bookings and membership inquiries",
    },
  ];

  return (
    <section id="use-cases" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for Premium Service Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Clinics • Spas • Restaurants • Fitness Studios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-smooth animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{useCase.industry}</h3>
                    <div className="text-sm font-medium text-accent mb-3">
                      {useCase.benefit}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
