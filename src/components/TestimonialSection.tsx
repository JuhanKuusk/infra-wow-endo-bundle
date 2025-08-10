import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import clientImage from "@/assets/client-testimonial.jpg";

const testimonials = [
  {
    name: "Kairi M.",
    age: "32",
    text: "Pärast esimest combo seanssi tundsin kohe erinevust – mu jalad olid kergemad ja nahk palju siledam! Pärast kuuri oli tselluliit märgatavalt vähenenud ja keha toonuses. See kombo on tõesti imeline!",
    rating: 5,
    treatment: "Inframatt + WowShape + EndosTherapy"
  },
  {
    name: "Liia K.",
    age: "28", 
    text: "Olin väsinud tursetest ja raskustundest kehas. Kombo hooldus andis uskumatuid tulemusi - juba pärast 2. seanssi oli mu keha märgatavalt vormitum ja energiatase kõrgem. Parim investeering iseendasse!",
    rating: 5,
    treatment: "Täielik 3-in-1 kombo"
  },
  {
    name: "Mari S.",
    age: "35",
    text: "See kombo ületab kõik ootused! Inframatt + mähis + EndosTherapy koos annavad suurepäraseid tulemusi. Kaal vähenes 3kg ja ümbermõõdud 8cm esimese kuu jooksul. Soovitan kõigile!",
    rating: 5,
    treatment: "Kuu kestev kuur"
  }
];

export const TestimonialSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-gradient">
            Mida Ütlevad Meie Kliendid
          </h2>
          <p className="text-lg text-muted-foreground">
            Tuhandete rahuloleva kliendi kogemused räägivad enda eest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative transition-smooth hover:shadow-wellness hover:-translate-y-1">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-wellness/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={clientImage}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.treatment}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-wellness mb-1">1200+</div>
            <div className="text-sm text-muted-foreground">Rahulolev klient</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-wellness mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Aastat kogemust</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-wellness mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Soovitab edasi</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-wellness mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Klienditugi</div>
          </div>
        </div>
      </div>
    </section>
  );
};