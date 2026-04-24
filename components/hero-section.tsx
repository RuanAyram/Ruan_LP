import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/RuanAyram", label: "GitHub" },
  { icon: Linkedin, href: "https://br.linkedin.com/in/ruan-kaylo-99805812b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ruan.kaylo@gmail.com", label: "Email" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight text-balance">
          Ruan Kaylo
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-8">Full Stack Developer</p>
        <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Construindo experiências digitais acessíveis e de alta performance para a web.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up animation-delay-200">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label={label}
            >
              <Icon size={24} />
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </Link>
    </section>
  )
}
