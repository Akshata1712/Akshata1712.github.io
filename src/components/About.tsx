import { Code, Palette, Database, Terminal } from "lucide-react";
const About = () => {
  const skills = [{
    icon: Code,
    name: "Python",
    level: "Advanced"
  }, {
    icon: Terminal,
    name: "JavaScript/React",
    level: "Proficient"
  }, {
    icon: Palette,
    name: "Figma/UI Design",
    level: "Proficient"
  }, {
    icon: Database,
    name: "SQL/PostgreSQL",
    level: "Intermediate"
  }];
  return <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-12">About Me</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-lg leading-relaxed text-foreground/90">I’m a Computer Science Engineering student passionate about applying AI and data-driven methods to solve financial and real-world challenges.</p>
              <p className="text-lg leading-relaxed text-foreground/90">My work spans machine learning, data analytics, and full-stack development, with a focus on building systems that combine technical depth with business relevance.</p>
              <p className="text-lg leading-relaxed text-foreground/90">I enjoy translating complex concepts into clear, actionable insights, whether through research, design, or storytelling. My goal is to bridge technology and finance to create smarter, data-informed decisions.</p>
            </div>

            {/* Core Tools */}
            <div className="bento-card">
              <h3 className="text-xl font-bold mb-6">Core Tools</h3>
              <div className="space-y-4">
                {skills.map(skill => <div key={skill.name} className="flex items-start gap-3">
                    <skill.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">{skill.level}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;