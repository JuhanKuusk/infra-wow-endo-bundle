import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Heart, Share2 } from "lucide-react";
import heroImage from "@/assets/hero-combo-treatment.jpg";
import treatmentImage from "@/assets/treatment-equipment.jpg";

export const ProductHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 gradient-wellness opacity-20" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={heroImage}
                alt="Kehastuudio Inframatt + WowShape + EndosTherapy kombo hooldus"
                className="w-full h-[500px] object-cover rounded-lg shadow-wellness transition-smooth group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-wellness text-white">Uus Kombo</Badge>
                <Badge variant="secondary">Soodustus</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={treatmentImage}
                alt="EndosTherapy seade"
                className="w-full h-32 object-cover rounded-lg shadow-md transition-smooth hover:scale-105"
              />
              <div className="bg-wellness-light/30 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-wellness">3in1</div>
                  <div className="text-sm text-muted-foreground">Teenust</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gradient">
                Inframatt + WowShape + EndosTherapy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kõige efektiivsem kehahoolduse kombo! Kolm tipptasemel hooldust ühes pakettis - 
                revolutsiooniline lähenemine kaalulangusele, keha kujundamisele ja tselluliidi vähendamisele.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(127 arvustust)</span>
            </div>

            {/* Price */}
            <Card className="p-6 bg-wellness-light/20 border-wellness/20">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-wellness">89€</span>
                <span className="text-lg text-muted-foreground line-through">120€</span>
                <Badge className="bg-green-500 text-white">-26% säästus</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Ümber tavahinna 120€ asemel
              </p>
            </Card>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-lg font-semibold text-wellness">Kuni 900</div>
                <div className="text-sm text-muted-foreground">kcal põletamist</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-lg font-semibold text-wellness">1 tunni</div>
                <div className="text-sm text-muted-foreground">jooksul</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full h-12 text-lg gradient-hero hover:opacity-90 transition-smooth shadow-wellness">
                Broneeri Aeg Nüüd
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Lisa Lemmikutesse
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Jaga
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};