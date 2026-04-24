"use client"

import { SectionHeader } from "./section-header"
import Link from "next/link"
import { ExternalLink, Star, GitFork, Loader2 } from "lucide-react"
import useSWR from "swr"

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-600/20 text-blue-400",
  JavaScript: "bg-yellow-500/20 text-yellow-400",
  Ruby: "bg-red-500/20 text-red-400",
  Go: "bg-cyan-500/20 text-cyan-400",
  HTML: "bg-orange-500/20 text-orange-400",
  CSS: "bg-purple-500/20 text-purple-400",
  Python: "bg-green-500/20 text-green-400",
  Java: "bg-amber-600/20 text-amber-400",
  PHP: "bg-indigo-500/20 text-indigo-400",
  Shell: "bg-emerald-500/20 text-emerald-400",
  Vue: "bg-green-600/20 text-green-400",
  Dart: "bg-sky-500/20 text-sky-400",
  default: "bg-gray-500/20 text-gray-400",
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const GITHUB_USERNAME = "RuanAyram"

export function RepositoriesSection() {
  const {
    data: repos,
    error,
    isLoading,
  } = useSWR<GitHubRepo[]>(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed`, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  })

  const getLanguageColor = (language: string | null) => {
    if (!language) return languageColors.default
    return languageColors[language] || languageColors.default
  }

  return (
    <section id="repositories" className="py-24 px-6 bg-card/50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Últimos Repositórios" />

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Carregando repositórios...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Não foi possível carregar os repositórios.</p>
            <Link
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-2 inline-block"
            >
              Ver no GitHub
            </Link>
          </div>
        )}

        {repos && !error && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              {repos.slice(0, 6).map((repo) => (
                <Link
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-secondary/30 transition-all duration-200 overflow-hidden min-w-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <h3 className="text-foreground font-medium group-hover:text-primary transition-colors truncate">
                        {repo.name}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover:opacity-100 text-primary transition-opacity flex-shrink-0"
                      />
                    </div>
                    {repo.language && (
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full flex-shrink-0 w-fit ${getLanguageColor(repo.language)}`}
                      >
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                    {repo.description || "Sem descrição disponível"}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 pt-3 border-t border-border/50">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                    <span className="text-xs text-muted-foreground sm:ml-auto w-full sm:w-auto">
                      Atualizado em {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/30 text-foreground hover:text-primary transition-all duration-200"
              >
                Ver todos os repositórios
                <ExternalLink size={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
