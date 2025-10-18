import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Typography */}
          <div className="space-y-6">
            <h1 className="text-massive uppercase tracking-tight">
              Fintech
              <br />
              <span className="text-accent">Innovator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              STEM-focused innovator combining technical precision with design thinking. 
              Crafting meaningful solutions at the intersection of code and creativity.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#projects" className="link-accent text-lg font-semibold">
                View Projects →
              </a>
              <a href="#contact" className="link-accent text-lg font-semibold">
                Get in Touch →
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-accent opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
              <img 
                src={profilePhoto} 
                alt="Professional portrait"
                className="relative rounded-sm w-80 h-80 object-cover border-2 border-accent/20 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">Explore</span>
          <ArrowDown className="w-6 h-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
