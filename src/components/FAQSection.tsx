import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Mis on Inframatt + WowShape + EndosTherapy kombo?",
    answer: "See on Kehastuudio eksklusiivne kolme erineva tipptehnoloogia kombinatsioon: infrapunamatt kaalulanguseks ja detoksiks, WowShape salendav kehamähis ning EndosTherapy mikrovibratsiooni teraapia. Koos annavad nad maksimaalse tulemuse keha kujundamisel ja tselluliidi vähendamisel."
  },
  {
    question: "Kui kaua kestab üks kombo seanss?",
    answer: "Täielik kombo seanss kestab umbes 90 minutit. See jaguneb järgmiselt: 30 min inframatt, 30 min WowShape kehamähis ja 30 min EndosTherapy. Kõik hooldused tehakse järjest sama külastuse ajal."
  },
  {
    question: "Millised on tulemused ja kui kiiresti need nähtavad on?",
    answer: "Esimesed tulemused on nähtavad juba pärast esimest seanssi: kaal võib väheneda kuni 1kg, ümbermõõdud vähenevad ja nahk tundub siledamana. Püsivate tulemuste saavutamiseks soovitame 6-12 seanssi sõltuvalt eesmärkidest."
  },
  {
    question: "Kas hooldus on valus või ebameeldiv?",
    answer: "Ei, kõik kolm hooldust on mugavad ja lõõgastavad. Inframatt pakub sooja ja rahustava tunnet, WowShape on nagu õrn massaaž ning EndosTherapy mikrovibratsioon on väga meeldiv. Paljud kliendid isegi magavad hoolduse ajal."
  },
  {
    question: "Kellele see kombo sobib?",
    answer: "Kombo sobib kõigile täiskasvanutele, kes soovivad: kaalu langetada, tselluliiti vähendada, keha kujundada, ainevahetust kiirendada või lihtsalt end hästi tunda. Rasedatele ja teatud tervisehädadega inimestele hooldus ei sobi - konsulteerige meie spetsialistidega."
  },
  {
    question: "Kui tihti peaks kombot tegema?",
    answer: "Optimaalsed tulemused saavutamiseks soovitame 2-3 korda nädalas 4-6 nädala jooksul. Hiljem saab jätkata 1 kord nädalas tulemuste säilitamiseks. Meie spetsialistid kohandavad graafiku vastavalt teie eesmärkidele."
  },
  {
    question: "Kas on mingeid ettevalmistusi vaja teha?",
    answer: "Erilist ettevalmistust ei ole vaja. Soovitame: tulla 2 tundi pärast sööki, juua piisavalt vett, kanda mugavaid riideid ning tulla dušš võtmata (seda saab teha pärast hooldust meie salongis)."
  },
  {
    question: "Mis hind kehtib ja kas on võimalik maksta järelmaksuga?",
    answer: "Kombo erikulu maksab 89€ (tavahind 120€). Võimalik on maksta ka järelmaksuga läbi Stebby või muude partnerite. Pakume ka kuupakette soodsamate hindadega - küsige meie spetsialistidelt!"
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 bg-wellness-light/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-gradient">
            Korduma Kippuvad Küsimused
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vastused kõige sagedamatele küsimustele meie kombo hoolduse kohta
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-wellness/20 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:text-wellness transition-colors font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-serif font-semibold mb-4">
            Ei leidnud vastust oma küsimusele?
          </h3>
          <p className="text-muted-foreground mb-6">
            Meie sõbralikud spetsialistid on valmis aitama ja vastama kõigile teie küsimustele
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+372XXXXXXX" 
              className="inline-flex items-center justify-center px-6 py-3 bg-wellness text-white rounded-lg hover:bg-wellness-dark transition-colors"
            >
              Helista Meile
            </a>
            <a 
              href="mailto:info@kehastuudio.ee"
              className="inline-flex items-center justify-center px-6 py-3 border border-wellness text-wellness rounded-lg hover:bg-wellness-light/20 transition-colors"
            >
              Kirjuta E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};