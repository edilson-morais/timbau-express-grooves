import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    emoji: "🔥",
    title: "MÓDULO 1 - TUCAIA",
    lessons: [
      "01 - TUCAIA 01 - 80 BPM",
      "02 - TUCAIA 01 - 160 BPM",
      "03 - TUCAIA 02 - 80 BPM",
      "04 - TUCAIA 02 - 160 BPM",
      "05 - TUCAIA 03 - 80 BPM",
      "06 - TUCAIA 03 - 160 BPM"
    ]
  },
  {
    emoji: "🥁",
    title: "MÓDULO 2 - CABILA - AFRO BRASILEIRO",
    lessons: [
      "01 CABILA LÉ 1 60 BPM",
      "02 CABILA LÉ 1",
      "03 CABILA LÉ 2 60 BPM",
      "04 CABILA LÉ 2",
      "05 CABILA RUMPI 60 BPM",
      "06 CABILA RUMPI",
      "07 CABILA RUM 60 BPM",
      "08 CABILA RUM"
    ]
  },
  {
    emoji: "🎯",
    title: "MÓDULO 3 - EXERCÍCIOS PARA LIMPAR O SOM",
    lessons: [
      "EXPLICAÇÃO EXERCÍCIOS",
      "SONS DO TIMBAU - AULA EXTRA",
      "EXERCÍCIO 01",
      "EXERCÍCIO 02",
      "EXERCÍCIO 03",
      "EXERCÍCIO 04",
      "EXERCÍCIO 05",
      "EXERCÍCIO 06",
      "EXERCÍCIO 07",
      "EXERCÍCIO 08",
      "Open Slap Open Bass - AULA EXTRA",
      "Open2 Slap+ Open2 Bass - AULA EXTRA",
      "Open Slap Open Bass 1 e 2 por tempo - AULA EXTRA"
    ]
  },
  {
    emoji: "🌶️",
    title: "MÓDULO 4 - MERENGUE TIMBALADA E CONGO DE OURO",
    lessons: [
      "MERENGUE TIMBALADA 01",
      "MERENGUE TIMBALADA 02",
      "MERENGUE TIMBALADA 03",
      "CONGO DE OURO LÉ",
      "CONGO DE OURO RUMPI",
      "CONGO DE OURO RUM"
    ]
  },
  {
    emoji: "⚡",
    title: "MÓDULO 5 - SAMBA DURO",
    lessons: [
      "01 SAMBA DURO 1",
      "02 SAMBA DURO 1 - 60 BPM",
      "03 SAMBA DURO 2",
      "04 SAMBA DURO 2 - 60 BPM",
      "05 SAMBA DURO 3",
      "06 SAMBA DURO 3 - 60 BPM",
      "07 SAMBA DURO 4",
      "08 SAMBA DURO 4 - 60 BPM"
    ]
  },
  {
    emoji: "💀",
    title: "MORTAL GROOVES",
    lessons: [
      "MORTAL GROOVE 1",
      "MORTAL GROOVE 1 LENTO",
      "MORTAL GROOVE 2",
      "MORTAL GROOVE 2 LENTO",
      "MORTAL GROOVE 3",
      "MORTAL GROOVE 3 LENTO",
      "MORTAL GROOVE 4",
      "MORTAL GROOVE 4 LENTO",
      "MORTAL GROOVE 5",
      "MORTAL GROOVE 5 LENTO",
      "MORTAL GROOVE 6",
      "MORTAL GROOVE 6 LENTO",
      "MORTAL GROOVE 7",
      "MORTAL GROOVE 7 LENTO",
      "MORTAL GROOVE 7 (Variação)",
      "MORTAL GROOVE 7 LENTO (Variação)"
    ]
  },
  {
    emoji: "💥",
    title: "MORTAL PHRASES - FRASES PARA SOLOS",
    lessons: [
      "TIMBAU SOLO",
      "MORTAL FRASES - EXPLICAÇÃO",
      "FRASE 01",
      "FRASE 02",
      "FRASE 03",
      "FRASE 04",
      "FRASE 05",
      "FRASE 06",
      "FRASE 07",
      "FRASE 08",
      "FRASE 09",
      "FRASE 10",
      "FRASE 11",
      "FRASE 12",
      "FRASE 13",
      "FRASE 14"
    ]
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
                    <div className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{lesson}</span>
                        </div>
                      ))}
                    </div>
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