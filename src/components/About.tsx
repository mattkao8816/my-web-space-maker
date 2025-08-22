import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer with over 5 years of experience creating digital solutions 
            that bridge the gap between design and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              My journey started with a curiosity about how websites work, which led me to dive deep 
              into both frontend and backend development. I believe great software comes from understanding 
              both the technical possibilities and the human needs.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community through blog posts and talks.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <Card className="gradient-card shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building scalable APIs and server-side applications with Node.js, Python, and databases
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Designing user-centered experiences with tools like Figma and Adobe Creative Suite
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;