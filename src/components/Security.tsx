import { Shield, Lock, FileCheck } from "lucide-react";

const Security = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Data is Secure
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with enterprise-grade security and full PDPA compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            <div className="p-6 rounded-xl bg-card shadow-card text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">PDPA Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Full compliance with Singapore's Personal Data Protection Act
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card shadow-card text-center">
              <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Encrypted Data</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption for all customer communications
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card shadow-card text-center">
              <FileCheck className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Configurable Retention</h3>
              <p className="text-sm text-muted-foreground">
                Full control over how long data is stored
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
