import { SectionHeader } from "./section-header"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Portfolio Pessoal",
    description: "Site pessoal desenvolvido para apresentar meus projetos e habilidades profissionais.",
    image: "/LP_Ruan_v1.png",
    tags: ["Bootstrap", "JavaScript", "HTML5", "Google Analytics"],
    link: "#",
    version: "Versão 1.0",
  },
  {
    title: "Portfolio Pessoal v2",
    description: "Site pessoal desenvolvido para apresentar meus projetos e habilidades profissionais.",
    image: "/LP_Ruan_v2.png",
    tags: ["Bootstrap", "JavaScript", "HTML5", "SCSS", "Google Analytics"],
    link: "https://691ddaaabc69c160037a9a58--ruankaylo.netlify.app/?utm_source=ruankaylo.netlify.app&utm_medium=portifolio_cards&utm_campaign=discovery",
    version: "Versão 2.0",
  },
  {
    title: "Sorteador de Bingo 75",
    description: "Sorteie números de bingo online gratuitamente! Sorteador de Bingo 75 (americano) com histórico de números, grade colorida B-I-N-G-O. Perfeito para jogos em família e eventos.",
    image: "/BINGO.png",
    tags: ["Bootstrap", "JavaScript", "HTML5", "SCSS", "Google Analytics"],
    link: "https://bingo.miny.app.br/?utm_source=ruankaylo.netlify.app&utm_medium=portifolio_cards&utm_campaign=discovery",
    version: "Produção",
  },
  {
    title: "Luisa Rosa - Rommanel",
    description: "Site desenvolvido para a consultora independente Luisa Rosa, para divulgação de suas coleções e tirar dúvidas sobre os produtos.",
    image: "/LP_Luisa_v1.png",
    tags: ["Bootstrap", "JavaScript", "HTML5", "SCSS", "Google Analytics"],
    link: "https://luisarommanel.netlify.app/?utm_source=ruankaylo.netlify.app&utm_medium=portifolio_cards&utm_campaign=discovery",
    version: "Produção",
  },
  {
    title: "◢ ◤ TR TV ◢ ◤",
    description: "Site desenvolvido para mostrar a tabela de preços da TR TV - TV por assinatura via streaming.",
    image: "/LP_TRTV_v1.png",
    tags: ["NextJS", "React", "TypeScript", "TailwindCSS", "Google Analytics"],
    link: "https://trtvtabela.netlify.app/?utm_source=ruankaylo.netlify.app&utm_medium=portifolio_cards&utm_campaign=discovery",
    version: "Produção",
  },
  {
    title: "Site Helder Eugênio",
    description: "Portal de conteúdo com artigos sobre produtividade, desenvolvimento pessoal e tecnologia.",
    image: "/Blog_HE.png",
    tags: ["Liquid(Jekyll)", "HTML5", "CSS3", "JavaScript", "Google Analytics"],
    link: "https://heldereugenio.com.br/?utm_source=ruankaylo.netlify.app&utm_medium=portifolio_cards&utm_campaign=discovery",
    version: "Produção",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Portfólio" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.title} href={project.link} className="group block" target="_blank">
              <article className="overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-[17/8] overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={2500}
                    height={2500}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 text-foreground font-medium">
                      Ver Projeto <ExternalLink size={18} />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{project.version}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
