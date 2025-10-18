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
      title: "Online Fraud Detection",
      category: "FinTech Security & Machine Learning",
      description: "High-accuracy ML system for real-time fraudulent transaction detection",
      problem: "Digital banking platforms face increasing sophistication in fraudulent transaction patterns, requiring real-time detection systems that can adapt to evolving fraud tactics while minimizing false positives that disrupt legitimate customer transactions.",
      solution: "Developed a multi-algorithm fraud detection pipeline using Python, scikit-learn, and ensemble methods. Implemented feature engineering to extract transaction velocity patterns, geographic anomalies, and behavioral signatures. Trained Random Forest and XGBoost models on imbalanced datasets using SMOTE for synthetic oversampling, achieving 96% accuracy with low false-positive rates.",
      reflection: "This project taught me the critical balance between security and user experience in FinTech. The technical challenge wasn't just achieving high accuracy—it was understanding the business cost of false positives versus undetected fraud. I learned to tune precision-recall tradeoffs and implement cost-sensitive learning, gaining deep insight into how ML systems must align with real-world financial risk management.",
      tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy", "SMOTE"],
      github: "https://github.com/Akshata1712/Online-Fraud-Detector",
      gridSpan: "lg:col-span-2"
    },
    {
      title: "Sentiment Analysis for Stock Prediction",
      category: "Financial Markets & NLP",
      description: "NLP system analyzing sentiment data to predict stock price movements",
      problem: "Traditional quantitative trading models rely solely on historical price and volume data, missing crucial market sentiment signals from news articles and social media that drive investor behavior and create price movements.",
      solution: "Built an NLP pipeline using Python and PyTorch to process real-time news and social media data. Implemented BERT-based sentiment classification to extract bullish/bearish signals from financial text. Integrated sentiment scores with technical indicators using feature engineering, creating a hybrid model that correlates sentiment shifts with next-day price movements across S&P 500 stocks.",
      reflection: "This project revealed the complex relationship between market psychology and price action. I discovered that sentiment signals are most predictive during high-volatility periods but add noise during stable markets. The challenge of handling financial language nuances—sarcasm, domain-specific terminology—taught me that real-world NLP requires deep domain understanding beyond standard model architectures. I learned to critically evaluate when alternative data adds genuine predictive value.",
      tech: ["Python", "PyTorch", "BERT", "NLP", "Pandas", "Financial APIs"],
      github: "https://github.com/Akshata1712/Sentiment-Analysis-For-Stock-Prediction",
      gridSpan: "lg:col-span-2"
    },
    {
      title: "Water Level Monitoring (ResNet)",
      category: "Deep Learning & Computer Vision",
      description: "Real-time river monitoring using ResNet-50 CNN and CCTV imagery",
      problem: "Traditional river monitoring relies on physical sensors that are expensive, require maintenance, and provide limited geographic coverage. A scalable computer vision approach could enable real-time flood risk assessment across multiple locations using existing CCTV infrastructure.",
      solution: "Designed a deep learning pipeline using ResNet-50 architecture fine-tuned on annotated river imagery datasets. Implemented transfer learning to adapt the pre-trained model to water level regression tasks. Built a data preprocessing pipeline handling variable lighting conditions and camera angles. Achieved 92% accuracy in water level estimation, enabling automated alert systems for flood-prone regions.",
      reflection: "This project taught me the practical challenges of deploying deep learning in real-world safety-critical systems. Transfer learning was powerful, but domain adaptation required careful dataset curation and augmentation strategies to handle diverse environmental conditions. I learned that model accuracy alone isn't sufficient—inference speed, edge deployment constraints, and failure mode analysis are equally crucial when lives depend on predictions. This deepened my understanding of responsible AI development.",
      tech: ["Python", "PyTorch", "ResNet-50", "Computer Vision", "OpenCV"],
      github: "https://github.com/Akshata1712/Water-Level-Prediction-ResNet",
      gridSpan: "lg:col-span-2"
    },
    {
      title: "Federated Learning Framework",
      category: "Ongoing Research & Privacy-Preserving ML",
      description: "Exploring federated architectures for decentralized model training",
      problem: "Traditional centralized machine learning requires pooling sensitive data in single locations, creating privacy risks and regulatory compliance challenges. Financial institutions and healthcare providers need collaborative ML training methods that preserve data sovereignty while building powerful shared models.",
      solution: "Developing a federated learning framework implementing FedAvg and FedProx algorithms using Python and PyTorch. Building secure aggregation protocols to combine model updates from distributed nodes without exposing raw data. Researching differential privacy techniques to add mathematical guarantees against data leakage. Currently testing on distributed financial datasets to evaluate communication efficiency and convergence rates.",
      reflection: "This ongoing research has revealed the fundamental tension between model accuracy and privacy guarantees in distributed ML. The theoretical elegance of federated learning faces practical challenges: non-IID data distributions, communication bottlenecks, and Byzantine failure modes. I'm learning that cutting-edge research requires balancing mathematical rigor with engineering pragmatism. This project is shaping my understanding of privacy-preserving ML as a critical frontier for FinTech and healthcare applications.",
      tech: ["Python", "PyTorch", "Federated Learning", "Differential Privacy", "Cryptography"],
      github: "https://github.com/Akshata1712/Federated-Learning-",
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
