import { VideoIcon, BookOpen, MessageCircle, Brain, Clock, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MessageCircle,
    title: "Suporte Direto",
    description: "Fale com a gente sempre que precisar, por e-mail.",
    emoji: "💬"
  },
  {
    icon: Brain,
    title: "Método Progressivo",
    description: "Ideal para iniciantes e intermediários evoluírem com segurança.",
    emoji: "🧠"
  },
  {
    icon: Clock,
    title: "Liberdade Total",
    description: "Acesso flexível para adaptar ao seu dia a dia.",
    emoji: "⏱️"
  },
  {
    icon: Lock,
    title: "Acesso Garantido",
    description: "Por 2 anos, com acesso contínuo e sem limites.",
    emoji: "🔒"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-white/10 backdrop-blur-sm hover:bg-card/70 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group shadow-card"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}