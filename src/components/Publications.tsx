import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award } from "lucide-react";

const Publications = () => {
  const featuredPublications = [
    {
      title: "Advanced Metamaterial Antenna Arrays for 5G Communications",
      authors: "A. Kedar, S. Sharma, R. Patel",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2024",
      impact: "High Impact",
      abstract: "This paper presents a novel approach to designing metamaterial-enhanced antenna arrays for next-generation wireless communication systems...",
      citations: 45,
      type: "Journal Article"
    },
    {
      title: "Machine Learning Optimization of Phased Array Radar Systems",
      authors: "A. Kedar, M. Kumar, P. Singh",
      journal: "IEEE Access",
      year: "2023", 
      impact: "Medium Impact",
      abstract: "We introduce an AI-driven methodology for optimizing the performance parameters of phased array radar systems...",
      citations: 32,
      type: "Journal Article"
    },
    {
      title: "Reconfigurable Antenna Design for Satellite Communication Applications",
      authors: "A. Kedar, L. Gupta",
      journal: "International Conference on Antennas and Propagation (ICAP)",
      year: "2023",
      impact: "Conference",
      abstract: "A comprehensive study on reconfigurable antenna architectures specifically designed for modern satellite communication requirements...",
      citations: 18,
      type: "Conference Paper"
    }
  ];

  const publicationStats = [
    { number: "50+", label: "Published Papers" },
    { number: "1200+", label: "Total Citations" },
    { number: "25", label: "h-index" },
    { number: "15", label: "Keynote Speeches" }
  ];

  const researchInterests = [
    "Microwave and Millimeter-wave Engineering",
    "Smart Antenna Systems",
    "Metamaterial Applications",
    "Radar Signal Processing",
    "RF Circuit Design",
    "Electromagnetic Compatibility"
  ];

  return (
    <section id="publications" className="py-20 bg-academic-light-grey">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">Publications & Research</h2>
          
          {/* Publication Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {publicationStats.map((stat, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-academic-blue mb-2">{stat.number}</div>
                  <div className="text-sm text-academic-grey font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Publications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-academic-navy text-center mb-8">Featured Publications</h3>
            <div className="space-y-6">
              {featuredPublications.map((pub, index) => (
                <Card key={index} className="card-elevated">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-academic-navy mb-2">{pub.title}</CardTitle>
                        <div className="text-sm text-academic-grey mb-2">
                          <span className="font-medium">{pub.authors}</span> • {pub.journal} • {pub.year}
                        </div>
                        <div className="flex items-center space-x-4 text-xs">
                          <span className={`px-2 py-1 rounded-full ${
                            pub.impact === 'High Impact' ? 'bg-green-100 text-green-800' :
                            pub.impact === 'Medium Impact' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {pub.impact}
                          </span>
                          <span className="flex items-center">
                            <Award className="h-3 w-3 mr-1" />
                            {pub.citations} citations
                          </span>
                          <span className="flex items-center">
                            <FileText className="h-3 w-3 mr-1" />
                            {pub.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4 leading-relaxed">{pub.abstract}</p>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Paper
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        Citation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl text-academic-navy">Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {researchInterests.map((interest, index) => (
                    <li key={index} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-academic-blue rounded-full mr-3"></div>
                      {interest}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl text-academic-navy">Academic Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Google Scholar Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ResearchGate
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  IEEE Xplore
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ORCID Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;