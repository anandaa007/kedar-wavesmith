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
            <div className="flex justify-center lg:justify-start">
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
                  Dr. Ashutosh Kedar is a distinguished researcher and expert in microwave engineering 
                  and antenna systems, with over <strong>20+ years of experience</strong> in advancing 
                  electromagnetic research for defense applications. He is a <strong>Life Fellow WAMSS</strong>, 
                  <strong>Fellow IETE</strong>, <strong>Senior Member IEEE</strong>, and <strong>Life Member ACES</strong>.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  His research focuses on innovative <strong>active phased array antennas</strong> and 
                  associated technologies. Dr. Kedar has contributed significantly to the field through 
                  his work on <strong>wide band wide scanning active phased array antennas</strong>, 
                  <strong>sparse antenna arrays</strong>, and <strong>T/R modules</strong>.
                </p>

                <p className="text-foreground leading-relaxed">
                  Currently serving as a <strong>Senior Scientist</strong> in Defence R & D Organization, 
                  Min. of Defence, Govt. of India (2003-till date), he leads activities related to 
                  wide band wide scanning active phased array antennas for radar applications and 
                  realization of new active array technologies within the country.
                </p>

                <p className="text-foreground leading-relaxed">
                  Leading activities related to wide band wide scanning active phased array antennas for radar applications. 
                  Design and development of state of the art technology related to wide band wide scanning sparse antenna arrays. 
                  Realization of new active array technologies like T/R modules, beamformers, antenna arrays, etc within country. 
                  Software development for array analysis and synthesis using evolutionary optimization techniques esp. 
                  Genetic algorithms and Particle Swarm techniques.
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