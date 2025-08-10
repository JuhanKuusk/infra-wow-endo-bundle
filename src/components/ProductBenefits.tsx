import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Inframatt",
    description: "Kuni 900 kcal põletamist tunnis",
    details: [
      "Toksiinide väljutamine",
      "Ainevahetuse kiirendamine", 
      "Kaalulangus kuni 1kg/tunniga",
      "Tselluliidi vähendamine"
    ]
  },
  {
    icon: Sparkles,
    title: "WowShape Kehamähis",
    description: "Salendav ja pinguldav mähis",
    details: [
      "Ümbermõõtude vähendamine",
      "Naha pinguldamine",
      "Tursete vähendamine", 
      "Siluv efekt"
    ]
  },
  {
    icon: Heart,
    title: "EndosTherapy",
    description: "Mikrovibratsiooni teraapia",
    details: [
      "Vere- ja lümfiringe parandamine",
      "Lihaspingete leevendamine",
      "Tselluliidi vähendamine",
      "Naha tooniuse parandamine"
    ]
  }
];

export const ProductBenefits = () => {
  return (
    <section className="py-16 bg-wellness-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-gradient">
            Kolm Võimsat Hooldust Ühes Pakettis
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meie ekspertide poolt koostatud kombo pakub maksimaalset efektiivsust, 
            kombineerides kõige paremaid tehnoloogiaid keha kujundamiseks ja tervendamiseks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 transition-smooth hover:shadow-wellness hover:-translate-y-1 border-wellness/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-wellness-light rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-wellness" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
              
              <div className="space-y-3">
                {benefit.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Combined Benefits */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-wellness-light/20 to-wellness-light/30 border-wellness/30">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-6 text-wellness">
              Kombo Efekt - Maksimaalne Tulemus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness mb-2">3x</div>
                <div className="text-sm text-muted-foreground">Kiirem tulemus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness mb-2">26%</div>
                <div className="text-sm text-muted-foreground">Säästus tavahinnast</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness mb-2">90min</div>
                <div className="text-sm text-muted-foreground">Kogu hooldus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Rahulolevad kliendid</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};