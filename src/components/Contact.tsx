import { useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    emailjs
      .send(
        "service_kij6y73",       // your service ID
        "template_su559ea",      // your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "ocGL4pmjkl39_5hkq"      // your public key
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully!",
            description: "Thank you for reaching out. I'll respond ASAP.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error sending message",
            description: "Please try again later.",
            variant: "destructive",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-editorial mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-12">
            Open to discussions about FinTech research, graduate opportunities, and collaborative projects.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bento-card">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Links */}
            <div className="space-y-6">
              <div className="bento-card">
                <h3 className="text-xl font-bold mb-6">Connect</h3>
                <div className="space-y-3">
                  <a href="mailto:akmiramir17@gmail.com" className="flex items-center gap-3 hover-accent group">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-sm">akmiramir17@gmail.com</span>
                  </a>
                  <a href="https://github.com/Akshata1712" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover-accent group">
                    <Github className="w-5 h-5 text-accent" />
                    <span className="text-sm">github.com/Akshata1712</span>
                  </a>
                  <a href="https://www.linkedin.com/in/akshata-miramir-b9208a295/" rel="noopener noreferrer" className="flex items-center gap-3 hover-accent group">
                    <Linkedin className="w-5 h-5 text-accent" />
                    <span className="text-sm"> Akshata Miramir | LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="bento-card bg-accent/5">
                <p className="text-sm leading-relaxed">
                  <span className="font-bold">Open to Opportunities:</span> Actively seeking research collaborations, internships, and graduate programs focused on FinTech, Machine Learning, and Data Science.
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
