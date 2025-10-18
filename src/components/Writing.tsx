import { ExternalLink, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  topics: string[];
  url: string;
}

const Writing = () => {
  const posts: BlogPost[] = [
    {
      title: "Understanding Neural Network Architectures: From Perceptrons to Transformers",
      date: "March 2024",
      excerpt: "A comprehensive exploration of how neural networks evolved from simple perceptrons to modern transformer architectures. I break down the mathematics behind backpropagation, explain the vanishing gradient problem, and demonstrate why attention mechanisms revolutionized NLP. Includes Python implementations and visualization code for each architecture discussed.",
      topics: ["Machine Learning", "Deep Learning", "Computer Science"],
      url: "https://medium.com/@yourname/neural-network-architectures"
    },
    {
      title: "Building Scalable APIs: Lessons from Production Failures",
      date: "January 2024",
      excerpt: "After my first API deployment crashed under 500 concurrent users, I learned system design the hard way. This post documents my journey implementing rate limiting, connection pooling, and circuit breakers. I share load testing strategies using k6, database optimization techniques that reduced query time by 80%, and the caching strategies that finally made my API production-ready.",
      topics: ["Backend Development", "System Design", "DevOps"],
      url: "https://medium.com/@yourname/scalable-apis"
    },
    {
      title: "The Math Behind Computer Graphics: Linear Algebra in Action",
      date: "November 2023",
      excerpt: "Computer graphics seemed like magic until I understood the linear algebra powering it. This piece demystifies transformation matrices, quaternions for 3D rotation, and the rendering pipeline. I walk through building a basic 3D renderer from scratch in Python, explaining each mathematical operation with visual diagrams and interactive demos.",
      topics: ["Mathematics", "Computer Graphics", "Python"],
      url: "https://medium.com/@yourname/graphics-linear-algebra"
    },
    {
      title: "Designing for Accessibility: Beyond Compliance",
      date: "September 2023",
      excerpt: "After volunteering to audit my school's website, I discovered that most accessibility fixes benefit everyone. This article goes beyond WCAG checklists to explore the cognitive science behind inclusive design. I discuss color contrast ratios for users with visual impairments, keyboard navigation patterns, screen reader optimization, and how semantic HTML improves SEO while supporting assistive technologies.",
      topics: ["UI/UX Design", "Web Development", "Accessibility"],
      url: "https://medium.com/@yourname/accessibility-design"
    },
  ];

  return (
    <section id="writing" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-12">Writing & Research</h2>
          
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
              href="https://medium.com/@yourname"
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
