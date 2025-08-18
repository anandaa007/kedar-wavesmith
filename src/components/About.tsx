import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const expertiseAreas = [
    "Microwave Engineering",
    "Antenna Design & Development",
    "Radar Systems",
    "RF Circuit Design",
    "Electromagnetic Theory",
    "Defense Technologies",
    "Satellite Communications",
    "Signal Processing"
  ];

  return (
    <section id="about" className="py-20 bg-academic-light-grey">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">About Dr. Kedar</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Dr. Ashutosh Kedar"
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
                  and antenna systems, with over <strong>15 years of experience</strong> in advancing 
                  electromagnetic research for both defense and civilian applications.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  His research focuses on innovative antenna design methodologies, advanced microwave 
                  circuit development, and cutting-edge radar system technologies. Dr. Kedar has 
                  contributed significantly to the field through his work on <strong>phased array 
                  antennas</strong>, <strong>metamaterial structures</strong>, and 
                  <strong>millimeter-wave systems</strong>.
                </p>

                <p className="text-foreground leading-relaxed">
                  Currently serving as a <strong>Principal Research Scientist</strong>, he leads 
                  interdisciplinary teams in developing next-generation electromagnetic solutions 
                  for aerospace, defense, and telecommunications industries.
                </p>
              </div>

              {/* Education */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-academic-navy">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-academic-navy">Ph.D. in Electrical Engineering</div>
                      <div className="text-academic-grey">Indian Institute of Technology (IIT)</div>
                      <div className="text-sm text-academic-grey">Specialization: Microwave & Antenna Engineering</div>
                    </div>
                    <div>
                      <div className="font-medium text-academic-navy">M.Tech in Electronics & Communication</div>
                      <div className="text-academic-grey">National Institute of Technology (NIT)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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