import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
export function HeroSection() {
  return <section className="relative text-center py-16">
      <div className="container mx-auto px-4">
        {/* Beta Badge */}
        <div className="inline-block mb-8">
          <span className="bg-primary/20 border border-primary/30 text-primary-glow px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm animate-float">🥁 TIMBAU EXPRESS está em Relançamento</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent leading-tight">
          Desperte o Timbaleiro que Existe em Você
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Chega de vídeos soltos e confusos no YouTube.
        </p>
        <p className="text-lg md:text-xl text-foreground mb-12 max-w-2xl mx-auto font-medium">
          Agora você vai aprender TIMBAU com quem viveu a criação da Timbalada.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full sm:w-auto"
            asChild
          >
            <a 
              href="https://sun.eduzz.com/39ZB3ZRB9E?utm_source=nova+pv&utm_id=timbau+express+pv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              EU QUERO TOCAR TIMBAU
            </a>
          </Button>
          
        </div>
      </div>
    </section>;
}