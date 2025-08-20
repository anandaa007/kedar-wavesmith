import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, Zap, Satellite, Shield, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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

    const researchInterests = [
    "Wide band wide scanning active phased array antennas for radar applications",
    "Design and development of state of the art technology related to wide band wide scanning sparse antenna arrays",
    "Realization of new active array technologies like T/R modules, beamformers, antenna arrays",
    "Software development for array analysis and synthesis",
    "Evolutionary optimization techniques esp. Genetic algorithms and Particle Swarm techniques",
    "Stochastic design approaches for array synthesis and optimization"
  ];

  const patents = [
    {
      title: "Radiating Element for Active Phased Array Radars",
      patentNo: "315014",
      applicationNo: "2250/DEL/2011",
      year: "2011",
      description: "Innovation in radiating element design for enhanced performance in active phased array radar systems."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-academic-blue/10 to-academic-light-blue/20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-academic-navy mb-6">Research & Innovation</h1>
              <p className="text-xl text-academic-grey leading-relaxed">
                Advancing electromagnetic research through innovative microwave engineering, 
                antenna design, and radar technology solutions for defense and civilian applications.
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Research Areas</h2>
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
                      <p className="text-white mb-4 leading-relaxed">
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
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Research Experience</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-xl text-academic-navy">Current Research Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {researchInterests.map((interest, index) => (
                        <li key={index} className="flex items-start text-white">
                          <div className="w-2 h-2 bg-academic-blue rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{interest}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-xl text-academic-navy">Research Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-academic-blue">20+</div>
                      <div className="text-sm text-academic-grey">Years of Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-academic-blue">100+</div>
                      <div className="text-sm text-academic-grey">Research Papers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-academic-blue">1</div>
                      <div className="text-sm text-academic-grey">Patent</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Patents */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Patents</h2>
              <div className="space-y-6">
                {patents.map((patent, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-academic-navy mb-2">{patent.title}</CardTitle>
                          <div className="text-sm text-academic-grey mb-2">
                            <span className="font-medium">Patent No:</span> {patent.patentNo} • 
                            <span className="font-medium"> Application No:</span> {patent.applicationNo} • 
                            <span className="font-medium"> Year:</span> {patent.year}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white mb-4 leading-relaxed">{patent.description}</p>
                      <Button size="sm" className="text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        View Patent Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;