import { ProductHero } from "@/components/ProductHero";
import { ProductBenefits } from "@/components/ProductBenefits";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-wellness rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-serif font-bold text-xl">Kehastuudio</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#teenused" className="hover:text-wellness transition-colors">Teenused</a>
              <a href="#hinnad" className="hover:text-wellness transition-colors">Hinnad</a>
              <a href="#kontakt" className="hover:text-wellness transition-colors">Kontakt</a>
              <Button className="gradient-hero">Broneeri Aeg</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <ProductHero />
        <ProductBenefits />
        <TestimonialSection />
        <FAQSection />
        
        {/* Contact Section */}
        <section className="py-16 bg-wellness-light/10" id="kontakt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-gradient">
                Broneeri Oma Kombo Hooldus
              </h2>
              <p className="text-lg text-muted-foreground">
                Alusta oma teekonda täiusliku kehani juba täna
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-4">Kontaktandmed</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-wellness" />
                      <span>+372 XXX XXXX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-wellness" />
                      <span>info@kehastuudio.ee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-wellness" />
                      <span>Tallinn, Eesti</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-wellness" />
                      <span>E-P: 10:00-20:00, L: 10:00-16:00</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-wellness-light/20">
                  <h3 className="text-xl font-serif font-semibold mb-4 text-wellness">Erisoodus Uutele Klientidele!</h3>
                  <p className="text-muted-foreground mb-4">
                    Esimene kombo hooldus ainult 69€ (tavahind 89€)
                  </p>
                  <Button className="w-full gradient-hero">
                    Kasuta Erisoodust
                  </Button>
                </Card>
              </div>
              
              {/* CTA */}
              <div className="bg-gradient-to-br from-wellness to-wellness-dark p-8 rounded-lg text-white">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Valmis Muutuseks?
                </h3>
                <p className="mb-6 text-white/90">
                  Meie eksperdid on valmis aitama teil saavutada unistuste keha. 
                  Broneerige konsultatsioon juba täna ja alustage oma teekonda!
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-wellness hover:bg-white/90">
                    Broneeri Tasuta Konsultatsioon
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    Helista Kohe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-wellness rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">K</span>
            </div>
            <span className="font-serif font-bold">Kehastuudio</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Kehastuudio. Kõik õigused kaitstud.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
