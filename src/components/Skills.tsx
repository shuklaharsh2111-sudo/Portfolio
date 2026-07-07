import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code, Database, Shield, Terminal, GitBranch, Layout } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 90, icon: Layout },
  { name: "JavaScript", level: 85, icon: Code },
  { name: "Node.js & Express.js", level: 80, icon: Terminal },
  { name: "Python", level: 75, icon: Terminal },
  { name: "MySQL", level: 85, icon: Database },
  { name: "REST APIs", level: 75, icon: Code },
  { name: "Git & GitHub", level: 85, icon: GitBranch },
];

const tools = ["VS Code","Git Bash", "GitHub", "MySQL Workbench", "Vercel", "Render", "Railway", "Supabase", "npm"];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="space-y-2" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-lg font-semibold text-center mb-6 text-foreground">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-lg bg-muted text-sm text-muted-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
