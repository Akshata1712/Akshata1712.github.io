import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  reflection: string;
  tech: string[];
  github?: string;
  demo?: string;
  gridSpan: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Algorithmic Trading System",
      category: "Machine Learning",
      description: "Real-time stock prediction engine using ensemble ML models",
      problem: "Manual trading strategies fail to process market data at scale and respond to rapid price movements.",
      solution: "Built a Python-based system combining Random Forest and LSTM networks, achieving 73% prediction accuracy. Integrated with Alpaca API for real-time data processing and automated trade execution.",
      reflection: "Learned the critical importance of feature engineering and risk management. Future iterations will incorporate sentiment analysis from financial news APIs.",
      tech: ["Python", "TensorFlow", "Pandas", "REST APIs"],
      github: "https://github.com/yourusername/algo-trading",
      gridSpan: "lg:col-span-2"
    },
    {
      title: "Campus Navigation App",
      category: "Full-Stack Development",
      description: "Progressive Web App for indoor university navigation",
      problem: "New students struggle with building layouts and finding classrooms efficiently, especially during orientation.",
      solution: "Designed and deployed a React PWA with interactive floor maps using D3.js. Implemented Dijkstra's algorithm for optimal pathfinding and integrated with Google Calendar API for schedule-based routing.",
      reflection: "User testing revealed the need for accessibility features. Added voice navigation and high-contrast mode, increasing adoption by 40%.",
      tech: ["React", "Node.js", "PostgreSQL", "D3.js"],
      github: "https://github.com/yourusername/campus-nav",
      demo: "https://campus-nav-demo.com",
      gridSpan: "lg:col-span-2"
    },
    {
      title: "Climate Data Visualizer",
      category: "Data Science",
      description: "Interactive dashboard analyzing 50+ years of temperature data",
      problem: "Climate datasets are often inaccessible to non-experts, hindering public understanding of environmental trends.",
      solution: "Created a web-based visualization tool processing NOAA datasets. Used Python's Plotly library for interactive graphs and implemented statistical models to project future trends.",
      reflection: "Communicating uncertainty in projections was challenging. Incorporated confidence intervals and educational tooltips to improve data literacy.",
      tech: ["Python", "Plotly", "FastAPI", "Docker"],
      github: "https://github.com/yourusername/climate-viz",
      gridSpan: "lg:col-span-2"
    },
    {
      title: "Distributed Task Scheduler",
      category: "Systems Design",
      description: "Fault-tolerant job queue with horizontal scaling",
      problem: "Single-server task processing creates bottlenecks and single points of failure in production systems.",
      solution: "Architected a microservices-based scheduler using Redis for job queuing and Docker Swarm for orchestration. Achieved 99.9% uptime with automatic failover.",
      reflection: "Deep dive into CAP theorem trade-offs. Prioritized availability over consistency for non-critical tasks, significantly improving throughput.",
      tech: ["Go", "Redis", "Docker", "gRPC"],
      github: "https://github.com/yourusername/task-scheduler",
      gridSpan: "lg:col-span-2"
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-12">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`bento-card ${project.gridSpan} space-y-4`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-sm text-accent font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                    <p className="text-muted-foreground mt-1">{project.description}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <h4 className="text-sm font-bold text-accent mb-1">Problem</h4>
                    <p className="text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-accent mb-1">Solution</h4>
                    <p className="text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-accent mb-1">Reflection</h4>
                    <p className="text-sm leading-relaxed">{project.reflection}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-secondary rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 link-accent text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 link-accent text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
