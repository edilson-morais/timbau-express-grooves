import { Card, CardContent } from "@/components/ui/card";

export function GuaranteeSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-card/80 border-primary/60 backdrop-blur-sm shadow-glow">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                {/* Guarantee Badge */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-orange-300">
                      <div className="text-center">
                        <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                          Garantia
                        </div>
                        <div className="text-2xl font-black text-white">
                          15 DIAS
                        </div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                          Incondicional
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary uppercase tracking-wider">
                    Conheça Nossa Garantia
                  </h2>
                  
                  <div className="mb-6">
                    <p className="text-lg font-semibold text-foreground mb-2">
                      Estás Protegido por nossa
                    </p>
                    <p className="text-xl font-bold text-primary">
                      ⭐ Garantia Incondicional de Satisfação ⭐
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Fazendo sua inscrição hoje seu risco é zero, porque contas com nossa 
                      garantia total incondicional de satisfação do Timbau Express.
                    </p>
                    
                    <p>
                      Se não quedas satisfeito com o método, solo envianos um email dentro de 
                      15 dias e devolveremos 100% de tu dinero, sin ninguna pregunta.
                    </p>
                    
                    <p>
                      Creio que NÃO vamos a llegar a ese punto pero, si realmente estás 
                      preocupado si esto va a funcionar para ti o no, quédate tranquilo, porque 
                      tienes garantia.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}