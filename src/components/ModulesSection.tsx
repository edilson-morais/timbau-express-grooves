import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    emoji: "🔥",
    title: "MÓDULO 1 – Grooves Essenciais: Tucaia & Cabila",
    description: "Comece com os fundamentos que formam a base do timbau moderno. Aqui você vai aprender e dominar grooves clássicos da Timbalada, com variações em diferentes andamentos."
  },
  {
    emoji: "🥁",
    title: "MÓDULO 2 – Samba Duro com Pegada Profissional",
    description: "Mergulhe no universo do Samba Duro, um dos ritmos mais marcantes da Bahia. Você vai aprender passo a passo as principais levadas."
  },
  {
    emoji: "🌶️",
    title: "MÓDULO 3 – Merengue & Congo de Ouro: A Fusão Perfeita",
    description: "Explore dois ritmos quentes que unem tradição e criatividade. Neste módulo você vai desenvolver a expressividade do Merengue Timbalada."
  },
  {
    emoji: "⚡",
    title: "MÓDULO 4 – Velocidade, Força & Clareza",
    description: "Chegou a hora de evoluir tecnicamente. Este é um intensivo de exercícios práticos para ganhar velocidade, força de toque e definição nas notas."
  },
  {
    emoji: "💥",
    title: "MÓDULO 5 – BÔNUS: Frases Mortais para Solos",
    description: "Depois de dominar os fundamentos, vem o show! Aqui você vai aprender frases prontas e explosivas para improvisar, solar e se destacar."
  }
];

export function ModulesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-text bg-clip-text text-transparent">
          🎼 O QUE VOCÊ VAI DOMINAR EM CADA MÓDULO
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-white/10 backdrop-blur-sm hover:bg-card/70 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group shadow-card"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {module.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground leading-tight">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {module.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}