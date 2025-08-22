import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveLink: "https://demo.com",
      githubLink: "https://github.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveLink: "https://demo.com",
      githubLink: "https://github.com",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets for weather enthusiasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
      liveLink: "https://demo.com",
      githubLink: "https://github.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media managers with real-time data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Python", "D3.js", "Redis", "Docker"],
      liveLink: "https://demo.com",
      githubLink: "https://github.com",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in 
            full-stack development and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group overflow-hidden shadow-elegant hover:shadow-glow transition-smooth hover:scale-[1.02] ${
                project.featured ? 'border-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button 
                    size="sm"
                    className="gradient-primary text-white border-0 hover:shadow-glow transition-smooth"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;