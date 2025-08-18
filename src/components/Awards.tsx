import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Users, Calendar } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "IEEE Fellow",
      organization: "Institute of Electrical and Electronics Engineers",
      year: "2023",
      description: "Awarded for outstanding contributions to microwave engineering and antenna design",
      icon: <Trophy className="h-6 w-6" />,
      category: "Fellowship"
    },
    {
      title: "Best Paper Award",
      organization: "International Conference on Antennas and Propagation",
      year: "2022",
      description: "Recognition for groundbreaking research on metamaterial antenna arrays",
      icon: <Medal className="h-6 w-6" />,
      category: "Research Excellence"
    },
    {
      title: "Outstanding Researcher Award",
      organization: "National Academy of Engineering",
      year: "2021",
      description: "Honored for significant contributions to defense technology research",
      icon: <Trophy className="h-6 w-6" />,
      category: "National Recognition"
    },
    {
      title: "Young Scientist Award",
      organization: "Indian National Science Academy",
      year: "2019",
      description: "Early career recognition for innovative work in RF circuit design",
      icon: <Medal className="h-6 w-6" />,
      category: "Early Career"
    }
  ];

  const invitedTalks = [
    {
      title: "Future of Antenna Design in 6G Communications",
      event: "IEEE International Conference on Communications",
      location: "Rome, Italy",
      date: "June 2024",
      type: "Keynote"
    },
    {
      title: "AI-Driven Optimization in Microwave Engineering",
      event: "European Microwave Conference",
      location: "Madrid, Spain", 
      date: "September 2023",
      type: "Invited Talk"
    },
    {
      title: "Metamaterials in Defense Applications",
      event: "DRDO Technology Symposium",
      location: "New Delhi, India",
      date: "March 2023",
      type: "Plenary"
    }
  ];

  const professionalRoles = [
    {
      role: "Associate Editor",
      organization: "IEEE Transactions on Antennas and Propagation",
      period: "2022 - Present"
    },
    {
      role: "Technical Program Committee Chair",
      organization: "International Conference on Microwave Engineering",
      period: "2021 - 2023"
    },
    {
      role: "Review Panel Member",
      organization: "National Science Foundation",
      period: "2020 - Present"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">Awards & Recognition</h2>
          
          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {awards.map((award, index) => (
              <Card key={index} className="card-elevated group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-academic-light-blue text-academic-blue group-hover:bg-academic-blue group-hover:text-white transition-all duration-300">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-academic-navy">{award.title}</CardTitle>
                      <div className="text-sm text-academic-grey">
                        {award.organization} • {award.year}
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 bg-academic-light-blue text-academic-navy rounded-full">
                      {award.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Invited Talks */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-academic-navy text-center mb-8">Invited Talks & Keynotes</h3>
            <div className="space-y-4">
              {invitedTalks.map((talk, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-academic-navy mb-1">{talk.title}</h4>
                        <div className="text-academic-grey text-sm">
                          <span className="font-medium">{talk.event}</span> • {talk.location}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          talk.type === 'Keynote' ? 'bg-gold-100 text-gold-800' :
                          talk.type === 'Plenary' ? 'bg-purple-100 text-purple-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {talk.type}
                        </span>
                        <div className="flex items-center text-xs text-academic-grey">
                          <Calendar className="h-3 w-3 mr-1" />
                          {talk.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Roles */}
          <div>
            <h3 className="text-2xl font-bold text-academic-navy text-center mb-8">Professional Service</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {professionalRoles.map((role, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Users className="h-8 w-8 text-academic-blue mx-auto" />
                    </div>
                    <h4 className="font-semibold text-academic-navy mb-2">{role.role}</h4>
                    <p className="text-sm text-academic-grey mb-2">{role.organization}</p>
                    <p className="text-xs text-academic-grey">{role.period}</p>
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

export default Awards;