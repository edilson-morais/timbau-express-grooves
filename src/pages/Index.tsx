import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ModulesSection } from "@/components/ModulesSection";
import { PricingSection } from "@/components/PricingSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-primary-glow/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <Header />
      <HeroSection />
      <FeaturesSection />
      <ModulesSection />
      <PricingSection />
      <AboutSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            {/* Disclaimer */}
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Comunidade NEW TIMBAU EXPRESS - GUSTAVO DI DALVA não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.
              </p>
            </div>
            
            {/* Copyright */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com os nossos Termos de Uso e Política de Privacidade.
              </p>
            </div>

            {/* Brand Name */}
            <div className="py-4">
              <h3 className="text-lg font-semibold text-white">
                NEW TIMBAU EXPRESS - GUSTAVO DI DALVA
              </h3>
            </div>

            {/* Links */}
            <div className="flex justify-center items-center gap-4 text-sm">
              <a 
                href="#" 
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Termos de Uso
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://politica-de-privacidade.rota50ia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Política de Privacidade
              </a>
            </div>

            {/* Bottom info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Todos os direitos reservados – Edilson Morais 2025</p>
              <p>
                Contato: <a href="mailto:edilsomdil@gmail.com" className="text-primary hover:text-primary-glow transition-colors">edilsomdil@gmail.com</a>
              </p>
              <p>Desenvolvido por Edilson Morais</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
