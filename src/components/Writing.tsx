import { ExternalLink, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  topics: string[];
  url: string;
}

const Writing = () => {
  // Data sourced from @TheDataDrivenDollar Medium profile
  const posts: BlogPost[] = [
    {
      title: "AI as a Magic Show, XAI as the Revealed Trick",
      date: "September 15",
      excerpt: "You've seen the show: the dazzling predictions, the confident buy and sell signals. This article explores how Explainable AI (XAI) pulls back the curtain on deep learning models, making them transparent and auditable for critical applications in Fintech and risk management.",
      topics: ["AI Ethics", "Explainable AI", "Fintech", "Risk"],
      url: "https://medium.com/@TheDataDrivenDollar/ai-as-a-magic-show-xai-as-the-revealed-trick-729d2daf6f1f"
    },
    {
      title: "Can a Neural Network Spot the Next Unicorn Before Wall Street?",
      date: "August 14",
      excerpt: "What if your predictions didn’t just look at numbers, but at relationships? We dive into Graph Neural Networks (GNNs) and their ability to analyze complex interconnected financial data, offering a powerful, cutting-edge approach to investment scouting and market forecasting.",
      topics: ["Graph Neural Networks", "Investing", "Predictive Modeling"],
      url: "https://medium.com/@TheDataDrivenDollar/can-a-neural-network-spot-the-next-unicorn-before-wall-street-8a19f8462c56"
    },
    {
      title: "Deep Learning in Hedge Funds: The Future of Market Prediction",
      date: "August 2",
      excerpt: "Hedge funds constantly seek 'alpha'—returns that beat the market. This post details how deep learning models are being deployed to exploit subtle market inefficiencies, automate trading strategies, and manage vast, high-frequency financial datasets with superior accuracy.",
      topics: ["Deep Learning", "Algorithmic Trading", "Finance"],
      url: "https://medium.com/@TheDataDrivenDollar/deep-learning-in-hedge-funds-the-future-of-market-prediction-36507eb1a3ea"
    },
    {
      title: "Can Machine Learning Really Predict Stock Market Crashes?",
      date: "May 15",
      excerpt: "The stock market is a chaotic, unpredictable mix of factors. We analyze the effectiveness and limitations of machine learning in forecasting extreme volatility and system-wide failures, exploring models that go beyond simple time series to detect subtle precursors to crashes.",
      topics: ["Time Series Analysis", "Risk Modeling", "Financial Data"],
      url: "https://medium.com/@TheDataDrivenDollar/can-machine-learning-really-predict-stock-market-crashes-2a33828f544d"
    },
  ];

  return (
    <section id="writing" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-4">Writing & Research</h2>
          <p className="text-xl text-accent font-semibold mb-12">@TheDataDrivenDollar</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bento-card space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                
                <p className="text-sm leading-relaxed text-foreground/80">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.topics.map((topic) => (
                    <span key={topic} className="text-xs px-3 py-1 bg-secondary rounded-sm">
                      {topic}
                    </span>
                  ))}
                </div>

                <a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 link-accent text-sm font-semibold pt-2"
                >
                  Read Full Article
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://medium.com/@TheDataDrivenDollar"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-lg font-semibold inline-flex items-center gap-2"
            >
              View All Articles on Medium
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;

