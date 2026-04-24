import { SectionHeader } from "./section-header"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Sobre Mim" />

        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
          <div className="hidden md:flex flex-col gap-2">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Background</span>
          </div>

          <div className="space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              Sou um desenvolvedor apaixonado por criar{" "}
              <span className="text-primary font-medium">interfaces acessíveis</span> e{" "}
              <span className="text-primary font-medium">pixel-perfect</span> que combinam design cuidadoso com
              engenharia robusta.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Formado em Ciências da Computação pela{" "}
              <span className="text-foreground">Universidade Estadual do Piauí (UESPI)</span>, sou apaixonado por
              tecnologia e programação. Sempre procuro desenvolver projetos para aprimorar meu conhecimento e
              habilidades.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Atualmente trabalho com <span className="text-foreground font-medium">Ruby on Rails</span> e estou me
              especializando em <span className="text-foreground font-medium">NextJS (TypeScript)</span> para me
              especializar no front-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
