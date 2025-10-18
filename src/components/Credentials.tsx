import { Award, ExternalLink, ArrowRight } from "lucide-react";

interface Credential {
  title: string;
  provider: string;
  date: string;
  skills: string[];
  application: {
    project: string;
    description: string;
  };
  certificate?: string;
}

const Credentials = () => {
  const credentials: Credential[] = [
    {
      title: "Python and Statistics for Financial Analysis",
      provider: "Hong Kong University of Science and Technology (HKUST)",
      date: "Oct 5, 2025",
      skills: ["Advanced Python", "Financial Data Analysis", "Statistical Modeling", "NumPy/Pandas"],
      application: {
        project: "Sentiment Analysis for Stock Prediction & Online Fraud Detection",
        description: "Applied advanced Python programming and Pandas data manipulation to process large-scale financial datasets and social media feeds. Leveraged statistical modeling techniques for feature extraction and correlation analysis in stock prediction models. Used NumPy for efficient numerical computations in fraud detection feature engineering. The course's focus on financial time-series analysis directly informed my approach to handling real-world market data volatility and transaction pattern recognition."
      },
      certificate: "/Financial Analysis.jpg"
    },
    {
      title: "Foundations of Modern Machine Learning",
      provider: "International Institute of Information Technology Hyderabad (IIIT Hyderabad)",
      date: "Completed (18 April 2025)",
      skills: ["Core ML Algorithms", "Deep Learning Fundamentals", "Model Evaluation", "Neural Networks"],
      application: {
        project: "Online Fraud Detection, Water Level Monitoring (ResNet), Federated Learning",
        description: "Implemented ensemble methods (Random Forest, XGBoost) and evaluation metrics for fraud detection, applying course concepts on handling imbalanced datasets and cost-sensitive learning. Used transfer learning and ResNet architecture knowledge to fine-tune CNNs for water level prediction from CCTV imagery. Currently applying federated learning theory and neural network optimization techniques in ongoing privacy-preserving ML research. The course's rigorous mathematical foundation enabled me to understand model convergence, regularization, and generalization across all these projects."
      },
      certificate: "/Foundations of Modern Machine Learning.jpg"
    },
    {
      title: "Fundamentals of Finance",
      provider: "University of Pennsylvania (The Wharton School)",
      date: "Jan 15, 2025",
      skills: ["Financial Statements", "Time Value of Money", "Valuation", "Risk & Return", "Capital Budgeting"],
      application: {
        project: "Quant Model Backtesting and Asset Valuation",
        description: "Built and backtested quantitative trading strategies, ensuring models were grounded in core financial principles like risk-adjusted returns and cash flow analysis. Applied fundamental valuation techniques (DCF) to confirm the sanity of model-derived asset price targets, bridging the gap between algorithmic prediction and foundational economic theory."
      },
      certificate: "/Fundamentals of Finance.pdf"
    },
    {
      title: "Introduction to Financial Planning and Wealth Management",
      provider: "Corporate Finance Institute",
      date: "Oct 9, 2025",
      skills: ["Wealth Management", "Investment Planning", "Risk Management", "Tax Strategy", "Retirement Planning"],
      application: {
        project: "Fintech Advisory System Design",
        description: "The holistic view of personal finance and risk management informed the design of a user-facing Fintech advisory prototype. I applied principles of goal-based planning and investment risk assessment to create user stories and feature requirements for an automated wealth management tool."
      },
      certificate: "/Financial Planning.pdf"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      provider: "University of Michigan",
      date: "Jan 12, 2025",
      skills: ["Python Basics", "Data Structures", "Loops & Logic", "API Access"],
      application: {
        project: "Web Scraping Financial News & API Integration",
        description: "Used foundational Python knowledge to develop scripts for efficiently scraping and parsing unstructured financial news data from multiple sources. Implemented robust data cleansing workflows and utilized API endpoints to seamlessly integrate external market data feeds into primary financial models."
      },
      certificate: "/Python.pdf"
    }
  ];

  return (
    <section id="credentials" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-12">Credentials & Applied Skills</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Each certification directly informs my project work, demonstrating proactive skill transfer from coursework to real-world applications.
          </p>

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
                        Applied In: {cred.application.project}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed bg-secondary/50 p-4 rounded-sm border-l-2 border-accent">
                      {cred.application.description}
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

