import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radar, Zap, ExternalLink, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const navigate = useNavigate();
  
  const expertiseAreas = [
    "Active Phased Array Antennas",
    "Wide Band Wide Scanning Antenna Arrays", 
    "Sparse Antenna Arrays",
    "T/R Modules & Beamformers",
    "Array Analysis & Synthesis",
    "Genetic Algorithms & Particle Swarm Techniques",
    "Microwave Circuit Development",
    "Radar System Technologies"
  ];

  const researchHighlights = [
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
    }
  ];

  const publicationHighlights = [
    {
      title: "On the Application of Radon Transformation for the Synthesis of Thinned Planar Antenna Arrays",
      authors: "Ashutosh Kedar, P. Vangol and A. Mahesh",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2025",
      volume: "vol. 73, no. 8, pp. 5637-5649",
      type: "Journal Article"
    },
    {
      title: "Hybridization of Bayesian Compressive Sensing and Array Dilation Technique for Synthesis of Linear Isophoric Sparse Antenna Arrays",
      authors: "Ashutosh Kedar, P. Vangol and Mahesh A.",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2023",
      volume: "vol. 71",
      type: "Journal Article"
    },
    {
      title: "Deterministic Synthesis of Wide Scanning Linear Sparse Antenna Arrays",
      authors: "Ashutosh Kedar",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2020",
      volume: "vol. 67, no.2, pp. 905-914",
      type: "Journal Article"
    }
  ];

  return (
    <section id="about" className="py-20 bg-academic-light-grey">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">About Dr. Ashutosh Kedar</h2>
          
          {/* First Row: Profile Image and Bio */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start lg:items-center">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Dr. Ashutosh Kedar - Speaker"
                  className="w-80 h-80 object-cover rounded-lg shadow-strong"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-academic-blue/20 to-transparent"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  Dr. Ashutosh Kedar is a distinguished scientist and researcher in microwave engineering, antenna systems, and electromagnetic applications, with over two decades of experience in advancing radar and defense technologies. He earned his Ph.D. in Electronics Science, M.Tech. in Microwave Electronics, M.Sc. in Physics, and B.Sc. in Physics from the University of Delhi, India. Before joining the Defence R & D Organization (DRDO) in 2003, he served as a Lecturer at the University of Delhi and as a Research Associate at CSIR. At DRDO, he currently serves as a Senior Scientist, leading the development of wide band wide scanning active phased array antennas, sparse arrays, T/R modules, and advanced radar technologies.
                </p>
                <p className="text-foreground leading-relaxed">
                  His research interests include active phased array antennas, computational electromagnetics, and evolutionary optimization techniques such as Genetic Algorithms and Particle Swarm Optimization. He has authored over 100 research papers, holds a patent on a radiating element for active phased arrays, and is the author of the book <em>Sparse Phased Array Antennas: Theory and Applications</em> (Artech House). He has received numerous honors, including the IETE Hari Ramji Toshniwal Award 2023, the IETE CDIL Best Paper Award 2024, and several Best Paper Awards at international conferences such as ICMARS, ATMS, and WAMS.
                </p>
                <p className="text-foreground leading-relaxed">
                  Dr. Kedar is a Life Fellow of WAMSS, Fellow of IETE, Senior Member of IEEE, Life Member of ACES, and Member of AMTA. He actively contributes to the professional community, serving on review boards of leading IEEE journals and holding leadership roles in the IEEE AP/MTT-S Joint Chapter Bangalore, where he currently serves as Chair. He has also played key roles in major international conferences, including MAPCON, IEEE SPACE, and Connect, and continues to be recognized globally for his contributions, including a listing in Asia’s Who’s Who.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row: Three Columns */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-white">Ph.D. in Electronic Science</div>
                    <div className="text-white/80">University of Delhi South Campus</div>
                    <div className="text-sm text-white/80">Computer Aided Study of High Temperature Superconducting Microwave Components using Full Wave solvers</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">M.Tech. in Microwave Electronics</div>
                    <div className="text-white/80">University of Delhi South Campus</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">M.Sc. in Physics</div>
                    <div className="text-white/80">University of Delhi</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">B.Sc. (Hons.) Physics</div>
                    <div className="text-white/80">University of Delhi</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Experience */}
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-academic-navy">Professional Experience</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-academic-navy">Senior Scientist</div>
                    <div className="text-academic-grey">Defence R & D Organization, Min. of Defence, Govt. of India</div>
                    <div className="text-sm text-academic-grey">2003 - Present</div>
                  </div>
                  <div>
                    <div className="font-medium text-academic-navy">Research Associate</div>
                    <div className="text-academic-grey">CSIR, India</div>
                  </div>
                  <div>
                    <div className="font-medium text-academic-navy">Lecturer</div>
                    <div className="text-academic-grey">Dept. of Electronic Science, University of Delhi South Campus</div>
                    <div className="text-sm text-academic-grey">1999 - 2003</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Activities */}
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-academic-navy">Professional Activities</h3>
                <div className="space-y-2">
                  <div className="text-sm text-white">
                    <strong>Chair,</strong> IEEE AP/MTT-S Jt. Chapter Bangalore 2025
                  </div>
                  <div className="text-sm text-white">
                    <strong>Vice-Chair,</strong> IEEE AP/MTT-S Jt. Chapter Bangalore 2024
                  </div>
                  <div className="text-sm text-white">
                    <strong>Secretary,</strong> IEEE AP/MTT-S Jt. Chapter Bangalore 2022-23
                  </div>
                  <div className="text-sm text-white">
                    <strong>Execom Member,</strong> IEEE Bangalore Section, 2022 onwards
                  </div>
                  <div className="text-sm text-white">
                    <strong>ExeCOM Member</strong> – MAPCON, WAMSS, IEEE Bangalore Section
                  </div>
                  <div className="text-sm text-white">
                    <strong>Editor,</strong> IETE Journal of Research
                  </div>
                  <div className="text-sm text-white">
                    <strong>Reviewer</strong> for IEEE TAP, IEEE Communication Magazine, IET Letters
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expertise Areas */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-academic-navy text-center mb-8">Areas of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {expertiseAreas.map((area) => (
                <span key={area} className="expertise-badge">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Research & Publication Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-academic-navy text-center mb-12">Research & Publication</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Research Card */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-xl text-academic-navy text-center">Research</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {researchHighlights.map((research, index) => (
                    <Card key={index} className="bg-white/5 border-white/10">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-academic-light-blue text-academic-blue">
                            {research.icon}
                          </div>
                          <CardTitle className="text-lg text-white">{research.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 mb-4 leading-relaxed text-sm">
                          {research.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {research.highlights.map((highlight, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-academic-light-blue text-academic-navy rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="text-center pt-4">
                    <Button 
                      onClick={() => navigate('/research')}
                      className="bg-academic-blue hover:bg-academic-blue/90 text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Publication Card */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-xl text-academic-navy text-center">Publication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {publicationHighlights.map((pub, index) => (
                    <Card key={index} className="bg-white/5 border-white/10">
                      <CardContent className="p-4">
                        <h4 className="text-sm font-semibold text-white mb-2 leading-tight">{pub.title}</h4>
                        <div className="text-xs text-white/80 mb-2">
                          <span className="font-medium">{pub.authors}</span>
                        </div>
                        <div className="text-xs text-white/80 mb-3">
                          <span className="font-medium">{pub.journal}</span> • {pub.volume} • {pub.year}
                        </div>
                        <div className="flex items-center justify-start">
                          <span className="text-xs px-2 py-1 bg-academic-light-blue text-academic-navy rounded-full">
                            {pub.type}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="text-center pt-4">
                    <Button 
                      onClick={() => navigate('/publications')}
                      className="bg-academic-blue hover:bg-academic-blue/90 text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;