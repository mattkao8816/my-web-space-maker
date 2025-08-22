import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SASS"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Tools & Cloud",
      skills: ["AWS", "Docker", "Git", "CI/CD", "Vercel", "Figma"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with a diverse set of technologies to bring ideas to life, 
            from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="gradient-card shadow-elegant hover:shadow-glow transition-smooth hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-lg">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="px-4 py-2">
              Currently Learning: AI/ML
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Next Up: Web3
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;