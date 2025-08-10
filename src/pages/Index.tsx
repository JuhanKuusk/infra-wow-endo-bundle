import { ProductHero } from "@/components/ProductHero";
import { ProductBenefits } from "@/components/ProductBenefits";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import kehastuudioLogo from "@/assets/kehastuudio-logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="bg-pink-100 text-pink-800 text-center py-2 px-4 text-sm border-b">
        Sisestades täna sooduskoodi SUVEKOMBO - saate meie suvise hittpaketi 678 Euro asemel 499 Euroga. 
        <button className="ml-2 hover:underline">Peida</button>
      </div>

      {/* Download Section */}
      <div className="bg-blue-50 text-blue-800 text-center py-3 px-4 border-b">
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm">WooCommerce import fail:</span>
          <Button 
            size="sm" 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/woocommerce-import.csv';
              link.download = 'woocommerce-import.csv';
              link.click();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Laadi alla CSV fail
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src={kehastuudioLogo} 
                  alt="Kehastuudio logo" 
                  className="h-8 w-auto"
                />
              </div>
              
              {/* Search */}
              <div className="hidden md:flex items-center">
                <input 
                  type="search" 
                  placeholder="Search..." 
                  className="px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-wellness"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="md:hidden">
                <span className="text-lg">≡</span>
              </button>
              
              <div className="hidden md:flex items-center gap-6">
                <div className="relative group">
                  <button className="hover:text-pink-600 transition-colors">Salongihooldused</button>
                </div>
                <div className="relative group">
                  <button className="hover:text-pink-600 transition-colors">Näohooldused</button>
                </div>
                <div className="relative group">
                  <button className="hover:text-pink-600 transition-colors">Hoolduspaketid</button>
                </div>
                <a href="#" className="hover:text-pink-600 transition-colors">E-pood</a>
                <a href="#" className="hover:text-pink-600 transition-colors">Hinnakiri</a>
                <a href="#" className="hover:text-pink-600 transition-colors">Kontakt</a>
                
                <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                  BRONEERI AEG
                </Button>
                
                <a href="#" className="text-sm hover:text-pink-600">Logi sisse</a>
              </div>
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
                Broneeri Meie Uus Kombo
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
                      <span>+372 5151566</span>
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
                      <span>E-P: 09:00-21:00, L: 09:00-19:00, P: Kokkuleppel</span>
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
      <footer className="bg-foreground/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src={kehastuudioLogo} 
                  alt="Kehastuudio logo" 
                  className="h-6 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                15 aastat parimaid ilu- ja kaalulangetusprotseduure. 
                Meie eesmärk on aidata klientidel püsida tervemad, säravamad ja õnnelikumad.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Teenused</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-pink-600 transition-colors">Salongihooldused</a>
                <a href="#" className="block text-muted-foreground hover:text-pink-600 transition-colors">Näohooldused</a>
                <a href="#" className="block text-muted-foreground hover:text-pink-600 transition-colors">Hoolduspaketid</a>
                <a href="#" className="block text-muted-foreground hover:text-pink-600 transition-colors">E-pood</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+372 5151566</p>
                <p>info@kehastuudio.ee</p>
                <p>Tallinn, Eesti</p>
                <p>Haapsalu Kehastuudio</p>
              </div>
            </div>

            {/* Language & Actions */}
            <div>
              <h3 className="font-semibold mb-4">Keel</h3>
              <div className="flex gap-2 mb-4">
                <button className="w-6 h-4 bg-blue-500 text-white text-xs rounded">EN</button>
                <button className="w-6 h-4 bg-blue-500 text-white text-xs rounded">ET</button>
                <button className="w-6 h-4 bg-blue-500 text-white text-xs rounded">RU</button>
              </div>
              
              <div className="space-y-2">
                <a href="https://wa.link/ly3nnj" className="block text-sm text-pink-600 hover:underline">Whatsapp Us</a>
                <a href="tel:+372" className="block text-sm text-pink-600 hover:underline">Call Us</a>
                <a href="mailto:info@kehastuudio.ee" className="block text-sm text-pink-600 hover:underline">Mail Us</a>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-pink-600">Esileht</a>
              <a href="#" className="hover:text-pink-600">Pood</a>
              <a href="#" className="hover:text-pink-600">Kasutustingimused</a>
              <a href="#" className="hover:text-pink-600">Tagasiside</a>
              <a href="#" className="hover:text-pink-600">Järelmaks</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <a href="#" className="hover:text-pink-600">Back to Top</a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-muted-foreground text-sm">
              © 2024 Kehastuudio. Kõik õigused kaitstud.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
