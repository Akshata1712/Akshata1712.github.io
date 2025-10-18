import { useState } from "react";
import { Send, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll respond within 24-48 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-12">Get in Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div className="bento-card">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right: Contact Info & CV */}
            <div className="space-y-6">
              <div className="bento-card">
                <h3 className="text-xl font-bold mb-6">Academic Assets</h3>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/80 text-foreground font-semibold mb-4"
                  onClick={() => {
                    toast({
                      title: "CV download started",
                      description: "Your download will begin shortly.",
                    });
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV / Resume
                </Button>
                <p className="text-sm text-muted-foreground">
                  Comprehensive academic CV including research experience, publications, 
                  and detailed project descriptions. Updated monthly.
                </p>
              </div>

              <div className="bento-card">
                <h3 className="text-xl font-bold mb-6">Connect</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:your.email@university.edu"
                    className="flex items-center gap-3 hover-accent group"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-sm">your.email@university.edu</span>
                  </a>
                  <a 
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover-accent group"
                  >
                    <Github className="w-5 h-5 text-accent" />
                    <span className="text-sm">github.com/yourusername</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover-accent group"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                    <span className="text-sm">linkedin.com/in/yourprofile</span>
                  </a>
                </div>
              </div>

              <div className="bento-card bg-accent/5">
                <p className="text-sm leading-relaxed">
                  <span className="font-bold">Open to Opportunities:</span> Actively seeking research 
                  collaborations, internships, and academic programs focused on AI/ML, systems engineering, 
                  or human-computer interaction for Fall 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
