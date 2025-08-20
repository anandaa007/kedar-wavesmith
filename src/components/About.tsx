import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-academic-light-grey">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">About Dr. Kedar</h2>
          
          {/* First Row: Profile Image and Bio */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start lg:items-center">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Dr. Ashutosh Kedar - Speaker"
                  className="w-80 h-80 object-cover rounded-2xl shadow-strong"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-academic-blue/20 to-transparent"></div>
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
                <h3 className="text-xl font-semibold mb-4 text-academic-navy">Education</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-academic-navy">Ph.D. in Electronic Science</div>
                    <div className="text-academic-grey">University of Delhi South Campus</div>
                    <div className="text-sm text-academic-grey">Computer Aided Study of High Temperature Superconducting Microwave Components using Full Wave solvers</div>
                  </div>
                  <div>
                    <div className="font-medium text-academic-navy">M.Tech. in Microwave Electronics</div>
                    <div className="text-academic-grey">University of Delhi South Campus</div>
                  </div>
                  <div>
                    <div className="font-medium text-academic-navy">M.Sc. in Physics</div>
                    <div className="text-academic-grey">University of Delhi</div>
                  </div>
                  <div>
                    <div className="font-medium text-academic-navy">B.Sc. (Hons.) Physics</div>
                    <div className="text-academic-grey">University of Delhi</div>
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
                  <div className="text-sm text-foreground">
                    <strong>Chair,</strong> IEEE AP/MTT-S Jt. Chapter Bangalore 2025
                  </div>
                  <div className="text-sm text-foreground">
                    <strong>Vice-Chair,</strong> IEEE AP/MTT-S Jt. Chapter Bangalore 2024
                  </div>
                  <div className="text-sm text-foreground">
                    <strong>Secretary,</strong> IEEE AP/MTT-S Jt. Chapter Bangalore 2022-23
                  </div>
                  <div className="text-sm text-foreground">
                    <strong>Execom Member,</strong> IEEE Bangalore Section, 2022 onwards
                  </div>
                  <div className="text-sm text-foreground">
                    <strong>ExeCOM Member</strong> – MAPCON, WAMSS, IEEE Bangalore Section
                  </div>
                  <div className="text-sm text-foreground">
                    <strong>Editor,</strong> IETE Journal of Research
                  </div>
                  <div className="text-sm text-foreground">
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
        </div>
      </div>
    </section>
  );
};

export default About;