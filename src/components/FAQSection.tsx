import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Kui kaua kestab üks kombo-seanss?",
      answer: "Täielik Inframatt + WowShape + EndosTherapy seanss kestab umbes 90-120 minutit. See sisaldab ettevalmistust, kõiki kolme protseduuri ja järelravi soovitusi."
    },
    {
      question: "Kui tihti peaksin käima seansidel?",
      answer: "Optimaalsete tulemuste saamiseks soovitame 1-2 seanssi nädalas. Alguses võib olla vaja tihedamat ravi (2-3 korda nädalas), hiljem piisab ülalpidavaks 1 korrast nädalas."
    },
    {
      question: "Kas komboteraapial on mingeid vastunäidustusi?",
      answer: "Jah, ravi ei sobi rasedatele, südameprobleemidega inimestele, metall-implantaatidega patsientidele või akuutse põletiku korral. Enne ravi tehakse alati põhjalik konsultatsioon."
    },
    {
      question: "Millal hakkan nähtavaid tulemusi märkama?",
      answer: "Esimesed tulemused on tavaliselt nähtavad juba pärast 2-3 seanssi. Märgatavad muutused keha kujus ja naha kvaliteedis ilmnevad 4-6 nädala jooksul regulaarse ravi korral."
    },
    {
      question: "Kas tulemused on püsivad?",
      answer: "Jah, korralikult läbiviidud ravikuur annab püsivaid tulemusi. Ülalpidavaks soovitame 1-2 seanssi kuus, et säilitada saavutatud tulemused."
    },
    {
      question: "Kui valus on ravi?",
      answer: "Ravi on tavaliselt valuvaba ja lõõgastav. Inframatt pakub sooja komforti, WowShape tekitab kerget vibratsiooni ja EndosTherapy on täiesti valuvaba. Mõned kliendid koguvad isegi ravi ajal."
    },
    {
      question: "Kas ravi sobib kõigile kehatüüpidele?",
      answer: "Jah, meie komboteraapiat saab kohandada kõigi kehatüüpide ja individuaalsete vajaduste järgi. Ravi programm valitakse pärast põhjalikku konsultatsiooni ja keha analüüsi."
    },
    {
      question: "Millised on hinnad ja paketid?",
      answer: "Üksik kombo-seanss maksab 89€. Pakume ka soodsamaid pakette: 5 seanssi 400€ (säästab 45€) ja 10 seanssi 750€ (säästab 140€). Pakettide puhul on võimalik ka osadeks maksmine."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Korduma Kippuvad Küsimused
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leia vastused kõige sagedamini esitatud küsimustele meie komboteraapiate kohta
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ei leidnud vastust oma küsimusele?
            </h3>
            <p className="text-muted-foreground mb-6">
              Võta meiega ühendust ja meie spetsialistid vastavad kõigile Su küsimustele!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                HELISTA KOHE
              </Button>
              <Button variant="outline" size="lg">
                KIRJUTA MEILE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};