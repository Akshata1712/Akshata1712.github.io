import { Award, ExternalLink, ArrowRight } from "lucide-react";

interface Credential {
  title: string;
  provider: string;
  date: string;
  skills: string[];
  appliedIn: {
    project: string;
    application: string;
  };
  certificate?: string;
}

const Credentials = () => {
  const credentials: Credential[] = [
    {
      title: "Machine Learning Specialization",
      provider: "Stanford University (Coursera)",
      date: "Completed: February 2024",
      skills: ["Supervised Learning", "Neural Networks", "TensorFlow", "Model Evaluation"],
      appliedIn: {
        project: "Algorithmic Trading System",
        application: "Implemented ensemble ML models (Random Forest + LSTM) for stock prediction. Applied regularization techniques and hyperparameter tuning learned in Week 6 to prevent overfitting, improving validation accuracy from 61% to 73%."
      },
      certificate: "https://coursera.org/verify/MLSPEC2024"
    },
    {
      title: "The Complete Web Developer Bootcamp",
      provider: "Udemy",
      date: "Completed: December 2023",
      skills: ["React.js", "Node.js", "REST APIs", "MongoDB", "Authentication"],
      appliedIn: {
        project: "Campus Navigation App",
        application: "Used React component architecture and React Router patterns from Section 34 to build the PWA. Implemented JWT authentication and Express.js middleware to secure API endpoints, directly applying course modules 28-30."
      },
      certificate: "https://udemy.com/certificate/WEBDEV2023"
    },
    {
      title: "Data Structures and Algorithms in Python",
      provider: "UC San Diego (edX)",
      date: "Completed: October 2023",
      skills: ["Algorithm Design", "Time Complexity", "Graph Theory", "Dynamic Programming"],
      appliedIn: {
        project: "Campus Navigation App & Task Scheduler",
        application: "Implemented Dijkstra's algorithm for optimal pathfinding in navigation app. Used priority queues and graph representations from Week 4. Applied dynamic programming concepts to optimize task scheduling logic, reducing average job queue time by 35%."
      },
      certificate: "https://edx.org/certificates/DSAPYTHON2023"
    },
    {
      title: "Docker and Kubernetes: The Complete Guide",
      provider: "Udemy",
      date: "Completed: August 2023",
      skills: ["Containerization", "Orchestration", "CI/CD", "Microservices"],
      appliedIn: {
        project: "Distributed Task Scheduler & Climate Visualizer",
        application: "Containerized entire task scheduler microservices architecture using Docker Compose patterns from Section 7. Deployed with Docker Swarm for horizontal scaling and automatic failover. Used multi-stage builds to reduce climate visualizer image size by 60%."
      },
      certificate: "https://udemy.com/certificate/DOCKERK8S2023"
    },
    {
      title: "UI/UX Design Specialization",
      provider: "CalArts (Coursera)",
      date: "Completed: June 2023",
      skills: ["User Research", "Wireframing", "Figma", "Prototyping", "Usability Testing"],
      appliedIn: {
        project: "Campus Navigation App",
        application: "Conducted 15 user interviews using techniques from Course 2 to identify pain points. Created high-fidelity Figma prototypes before coding. Ran A/B tests on navigation patterns, leading to 40% increase in feature adoption after implementing accessibility improvements."
      },
      certificate: "https://coursera.org/verify/UIUX2023"
    },
  ];

  return (
    <section id="credentials" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-12">Credentials & Applied Skills</h2>
          
          <div className="space-y-6">
            {credentials.map((cred, index) => (
              <div key={index} className="bento-card">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left: Certificate Info */}
                  <div className="lg:col-span-1 space-y-3">
                    <Award className="w-8 h-8 text-accent" />
                    <h3 className="text-xl font-bold">{cred.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cred.provider}
                      <br />
                      {cred.date}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cred.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 bg-secondary rounded-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    {cred.certificate && (
                      <a 
                        href={cred.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 link-accent text-sm font-semibold pt-2"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Right: Application Evidence */}
                  <div className="lg:col-span-2 space-y-3">
                    <div className="flex items-center gap-2 text-accent">
                      <ArrowRight className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-wider">
                        Applied In: {cred.appliedIn.project}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed bg-secondary/50 p-4 rounded-sm border-l-2 border-accent">
                      {cred.appliedIn.application}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
