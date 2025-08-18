import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, Zap, Satellite, Shield } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: <Radar className="h-8 w-8" />,
      title: "Advanced Radar Systems",
      description: "Development of next-generation radar technologies for defense applications, including phased array systems and adaptive beam forming techniques.",
      highlights: ["Phased Array Design", "MIMO Radar", "Adaptive Beamforming"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Microwave Circuit Design",
      description: "Innovation in RF and microwave circuit architectures for high-frequency applications in communication and sensing systems.",
      highlights: ["RF Amplifiers", "Microwave Filters", "Power Combiners"]
    },
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Antenna Engineering",
      description: "Research into novel antenna configurations and metamaterial structures for enhanced performance in satellite and terrestrial communications.",
      highlights: ["Metamaterial Antennas", "Reconfigurable Arrays", "Millimeter-wave Design"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Defense Technologies",
      description: "Application of electromagnetic principles to develop cutting-edge solutions for national security and defense systems.",
      highlights: ["Electronic Warfare", "Stealth Technology", "Counter-surveillance"]
    }
  ];

  const currentProjects = [
    {
      title: "Multi-Band Phased Array Antenna System",
      status: "Ongoing",
      description: "Development of a revolutionary multi-band phased array system for next-generation radar applications."
    },
    {
      title: "Metamaterial-Enhanced Communication Arrays",
      status: "In Review",
      description: "Novel metamaterial structures for improving gain and directivity in satellite communication systems."
    },
    {
      title: "AI-Driven Antenna Optimization",
      status: "Completed",
      description: "Machine learning approaches to optimize antenna parameters for specific application requirements."
    }
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">Research & Innovation</h2>
          
          {/* Research Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {researchAreas.map((area, index) => (
              <Card key={index} className="card-elevated group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-academic-light-blue text-academic-blue group-hover:bg-academic-blue group-hover:text-white transition-all duration-300">
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl text-academic-navy">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-academic-light-blue text-academic-navy rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Projects */}
          <div>
            <h3 className="text-2xl font-bold text-academic-navy text-center mb-8">Current Projects</h3>
            <div className="grid gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-academic-navy">{project.title}</h4>
                      <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                        project.status === 'In Review' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;