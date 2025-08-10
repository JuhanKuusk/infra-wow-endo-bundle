import { Card, CardContent } from "@/components/ui/card";
import { Zap, Heart, Sparkles, Target, Timer, Waves } from "lucide-react";
import treatmentImage from "@/assets/treatment-equipment.jpg";

export const ProductBenefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Inframatt Saun",
      description: "Sügav soojusravi, mis parandab vereringe ja kiirendab metabolismi"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "WowShape",
      description: "Rasvpõletamine ja lihaste toonuse parandamine"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "EndosTherapy",
      description: "Lümfisüsteemi stimuleerimine ja toksiiide väljutamine"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Naha Noorendamine",
      description: "Kollageeni tootmise suurendamine ja naha elastsuse parandamine"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Täpne Toime",
      description: "Sihtmärkide täpne ravi probleempiirkondades"
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Kiired Tulemused",
      description: "Nähtavad tulemused juba esimestest seansidest"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Miks Valida Meie Komboteraapiat?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kolme tõhusa tehnika ühendamine tagab maksimaalse efektiivsuse ja kiiremad tulemused
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src={treatmentImage} 
              alt="Kaasaegne ravivarustus"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Üksteist Täiendavad Tehnoloogiad
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meie kombineeritud lähenemine kasutab korraga kolme erinevat tehnikat, 
            mis täiendavad teineteist ja annavad paremaid tulemusi kui üksikud protseduurid eraldi.
          </p>
        </div>
      </div>
    </section>
  );
};