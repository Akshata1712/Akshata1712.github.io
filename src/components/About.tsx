import { Code, Database, Terminal, Wrench, BarChart3, FlaskConical, Palette } from "lucide-react";
const About = () => {
  const skillCategories = [{
    icon: Code,
    category: "Programming",
    tools: "Python, C, SQL"
  }, {
    icon: Database,
    category: "Data & ML",
    tools: "NumPy, Pandas, Matplotlib, scikit-learn, PyTorch"
  }, {
    icon: Terminal,
    category: "Development",
    tools: "HTML, CSS, JavaScript, Flask, Git, VS Code"
  }, {
    icon: BarChart3,
    category: "Analytics & Visualization",
    tools: "Excel, Power BI, Jupyter Notebook"
  }, {
    icon: Wrench,
    category: "Testing & Automation",
    tools: "Selenium"
  }, {
    icon: Palette,
    category: "Design",
    tools: "Canva"
  }];
  return <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-12">About Me</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-lg leading-relaxed text-foreground/90">I'm a Computer Science Engineering student passionate about applying AI and machine learning to solve financial technology challenges and real-world problems.</p>
              <p className="text-lg leading-relaxed text-foreground/90">Through research and hands-on projects, I’ve explored how intelligent systems can enhance financial decision-making, from market prediction and risk analysis to fraud detection and portfolio optimization. I enjoy turning data into clear, actionable insights and designing solutions that bridge technology and finance.</p>
              <p className="text-lg leading-relaxed text-foreground/90">My goal is to contribute to the growing field of financial technology and create tools that make decision-making smarter, faster, and more transparent.</p>
            </div>

            {/* Core Tools */}
            <div className="bento-card">
              <h3 className="text-xl font-bold mb-6">Core Tools</h3>
              <div className="space-y-4">
                {skillCategories.map(category => <div key={category.category} className="flex items-start gap-3">
                    <category.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{category.category}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.tools}</p>
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