import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function GuaranteeSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-card/70 border-orange-500/40 backdrop-blur-sm shadow-glow">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Garantia de 7 dias
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              De acordo com o Art. 49 da Lei do Consumidor, você tem 7 dias de garantia. Se por algum motivo você não quiser 
              continuar com o Curso, você terá seu dinheiro de volta, sem burocracia, basta pedir o reembolso!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}