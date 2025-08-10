import { Card, CardContent } from "@/components/ui/card";
import { Zap, Heart, Sparkles, Target, Timer, Waves } from "lucide-react";
import treatmentImage from "@/assets/wowshape-woman-treatment.jpg";
import endostherapyImage from "@/assets/endostherapy-treatment.jpg";
import infrapunamattImage from "@/assets/infrapunamatt-treatment.jpg";
import wowshapeImage from "@/assets/wowshape-treatment.jpg";

export const ProductBenefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Infrapunamatt",
      description: "Ideaalseim kaalulangusprotseduur, põletiku alandaja, paistetuse eemaldaja ning tervise parandaja"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "WowShape",
      description: "Salendav kehamähis aitab vähendada vööümbermõõtu, pinguldada nahka ja stimuleerida lümfiringet"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "EndosTherapy",
      description: "Tõhus tselluliidi- ja kehahooldus mikrovibratsiooni ja mikrosurve tehnoloogiaga"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Naha Noorendamine",
      description: "Kollageeni tootmise suurendamine ja naha elastsuse parandamine"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Suunatud Efekt",
      description: "Täpne probleempiirkondadele suunamine"
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Kiired Tulemused",
      description: "Nähtavad tulemused juba esimestest seansidest"
    }
  ];

  const products = [
    {
      image: infrapunamattImage,
      title: "Infrapunamatt",
      description: "Kulutad 1 tunni jooksul kuni 900 kcal. Kaal väheneb 1 tunniga 500g-1kg."
    },
    {
      image: wowshapeImage,
      title: "WowShape",
      description: "Vähenda vööümbermõõtu kuni 2 cm juba esimese hooldusega."
    },
    {
      image: endostherapyImage,
      title: "EndosTherapy",
      description: "Stimuleerib vereringet, lümfiringet ja aktiveerib rasvkoe lagunemist."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Miks valida just see kombopakett?
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">{product.title}</h4>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
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