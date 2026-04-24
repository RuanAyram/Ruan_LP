import { SectionHeader } from "./section-header"
import { Code2, Terminal, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Front-end",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "NextJS", "React", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Programação",
    icon: Terminal,
    skills: ["Ruby", "Ruby on Rails", "Node.js", "PostgreSQL", "MySQL", "Liquid(Jekyll)"],
  },
  {
    title: "Outros",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Linux", "Windows", "REST APIs", "Agile"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Skills" />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
