import heroImage from "@/assets/hero-combo-treatment.jpg";
import { Button } from "@/components/ui/button";

export const ProductHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Inframatt + WowShape + EndosTherapy
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Revolutsiooniline kombo kiiresti parima figuuri saavutamiseks
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <span className="text-3xl md:text-4xl font-bold text-primary">89€</span>
          <span className="text-lg opacity-75">kolm protseduuri kokku</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            BRONEERI KOHE
          </Button>
          <Button variant="secondary" size="lg" className="px-8 py-3">
            LISAINFO
          </Button>
        </div>
      </div>
    </section>
  );
};