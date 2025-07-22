import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield } from "lucide-react";
export function PricingSection() {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            OFERTA ESPECIAL
          </h2>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/70 border-primary/40 backdrop-blur-sm shadow-glow">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="inline-block bg-gradient-accent text-white px-6 py-2 rounded-full font-bold text-lg mb-8 animate-pulse-glow">
              OFERTA LIMITADA
            </div>

            <div className="mb-6">
              <div className="text-2xl text-muted-foreground line-through mb-2">
                DE R$ 497
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">R$ 127</div>
              <div className="text-xl text-muted-foreground">Ou 12x de R$ 12,70 no cartão</div>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full mb-6"
              asChild
            >
              <a 
                href="https://sun.eduzz.com/39ZB3ZRB9E?utm_source=nova+pv&utm_id=timbau+express+pv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                QUERO TOCAR TIMBAU COM O MESTRE GUSTAVO
              </a>
            </Button>

            <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
              <Shield className="w-5 h-5" />
              🔒 GARANTIA INCONDICIONAL DE 15 DIAS
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
}