import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alex Johnson</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Full-Stack Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-primary-foreground/60">
                alex@example.com
              </p>
              <p className="text-sm text-primary-foreground/60">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-400" /> by Alex Johnson © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;