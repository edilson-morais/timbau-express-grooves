import { Card, CardContent } from "@/components/ui/card";
import { Crown, Star } from "lucide-react";

const achievements = [
  "Começou na percussão aos 7 anos, orientado por Tony Mola",
  "Participou da fundação da Timbalada",
  "Tocou com Caetano Veloso, Gilberto Gil, Gal Costa, Djavan, Milton Nascimento",
  "Vencedor do Grammy com Sérgio Mendes",
  "Fez show solo no Whitney Museum em Nova York",
  "Vive em NYC desde 2017, atuando como músico, professor e compositor"
];

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            👑 Sobre o Mestre Gustavo Di Dalva
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/50 border-white/10 backdrop-blur-sm shadow-card">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}