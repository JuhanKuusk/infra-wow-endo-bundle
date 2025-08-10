import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import clientImage from "@/assets/client-testimonial.jpg";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Maria K.",
      rating: 5,
      text: "Pärast 6 seanssi oli mu keha kuju märgatavalt paranenud. Inframatt aitas lõõgastuda ja WowShape kujundas mu kõhtu täpselt nii, nagu tahtsin.",
      treatment: "Inframatt + WowShape + EndosTherapy"
    },
    {
      name: "Anna L.",
      rating: 5,
      text: "Uskumatu, kui kiiresti ma tundsin erinevust! Nahk on pingem, tselluliit vähenenud ja üldine enesetunne palju parem.",
      treatment: "Kombo-teraapiapakett"
    },
    {
      name: "Karin M.",
      rating: 5,
      text: "Professionaalne teenindus ja tõhusad tulemused. Soovitan kindlasti kõigile, kes tahavad kiireid ja püsivaid tulemusi.",
      treatment: "Täielik kombokuur"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meie Klientide Kogemused
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Loe, mida meie rahulolev kliendid ütlevad komboteraapiate kohta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={clientImage} 
              alt="Rahulolev klient"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">5.0</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Üle 10 000 Rahuloleva Kleindi
            </h3>
            <p className="text-muted-foreground mb-6">
              Liituge meie suure ja õnneliku kliendiperega ja alustage oma teekonda muutuse poole juba täna!
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Rahulolu määr</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Aastat kogemusi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Esimesed tulemused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};