import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual CV/Resume file URL or path
    const resumeUrl = "https://github.com/Akshata1712/Akshata1712.github.io/blob/main/public/Akshata%20Miramir%20Resume%20(MSF).pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'CV_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bento-card text-center space-y-6">
            <h2 className="text-editorial">Academic Assets</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my complete CV/Resume for detailed information about my academic background, 
              technical skills, and project experience.
            </p>
            <Button 
              onClick={handleDownload}
              size="lg"
              className="gap-2 text-base"
            >
              <Download className="w-5 h-5" />
              Download CV/Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
