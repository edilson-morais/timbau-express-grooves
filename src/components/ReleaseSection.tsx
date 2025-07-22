import { Card, CardContent } from "@/components/ui/card";

export function ReleaseSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card/70 border-primary/40 backdrop-blur-sm shadow-glow overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 items-center">
                {/* Text Content */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                    RELEASE
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Gustavo di Dalva
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        Percussionista | Educador | Criador do Timbau Express
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Gustavo di Dalva é um dos principais nomes da percussão afro-brasileira contemporânea. 
                        Natural da Bahia, é cofundador da Timbalada, grupo que marcou uma revolução na música 
                        percussiva brasileira nos anos 1990. Ao longo de sua carreira, acompanhou Gilberto Gil 
                        por 28 anos, participando de gravações, turnês internacionais e importantes projetos culturais.
                      </p>
                      
                      <p>
                        Atualmente, vive em Nova York (EUA), onde atua como percussionista do lendário David Byrne, 
                        ex-Talking Heads, em projetos de repercussão global.
                      </p>
                      
                      <p>
                        Além de sua carreira artística, Gustavo é um pesquisador das linguagens rítmicas afro-baianas 
                        e idealizador do curso online Timbau Express. O curso apresenta sua metodologia própria aplicada 
                        ao timbau, com foco em técnica, linguagem e musicalidade, atendendo desde iniciantes até músicos 
                        profissionais.
                      </p>
                      
                      <p>
                        Com ampla experiência internacional e domínio técnico reconhecido, Gustavo di Dalva se destaca 
                        pela precisão rítmica, fluência criativa e contribuição significativa à difusão da percussão 
                        brasileira no mundo.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative h-full min-h-[500px] md:min-h-[600px]">
                  <img 
                    src="/lovable-uploads/0374f5d6-5373-48ce-8ce9-e17936e0047a.png"
                    alt="Gustavo di Dalva - Percussionista e criador do Timbau Express"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}