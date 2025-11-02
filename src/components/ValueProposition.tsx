import { Phone, Calendar, MessageSquare } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Phone,
      title: "Never Miss a Call",
      description: "Your AI receptionist answers every call instantly, even when you're busy or after hours",
    },
    {
      icon: Calendar,
      title: "Seamless Booking",
      description: "Automatically schedules appointments and syncs directly with your calendar system",
    },
    {
      icon: MessageSquare,
      title: "PDPA-Safe Handling",
      description: "All customer data is encrypted and handled with full compliance to Singapore's PDPA",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Problem with Traditional Reception
          </h2>
          <p className="text-lg text-muted-foreground">
            Missed calls mean missed revenue. Overwhelmed staff, after-hours calls, and manual booking lead to frustrated customers and lost opportunities. Our AI voice reception solves this—intelligently, reliably, and affordably.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
