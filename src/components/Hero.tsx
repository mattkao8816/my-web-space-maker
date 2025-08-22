import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary-glow bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Full-Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences 
            that make a difference. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 hover:shadow-glow transition-smooth px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 transition-smooth px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-white/70 hover:text-white transition-smooth hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-smooth animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;