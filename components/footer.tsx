import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/RuanAyram", label: "GitHub" },
  { icon: Linkedin, href: "https://br.linkedin.com/in/ruan-kaylo-99805812b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ruan.kaylo@gmail.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © 2018 - {currentYear} Ruan Kaylo. Todos os direitos reservados.
          </p>

          <p className="text-xs text-muted-foreground">
            Feito com{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </Link>{" "}
            e{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
