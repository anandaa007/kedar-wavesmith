import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award, BookOpen } from "lucide-react";

const Publications = () => {
  const featuredPublications = [
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
    },
    {
      title: "Deterministic Synthesis of Wide Scanning Sparse Concentric Ring Antenna Arrays",
      authors: "Ashutosh Kedar",
      journal: "IEEE Transactions on Antennas and Propagation",
      year: "2019", 
      volume: "vol. 67, No.12, pp.7387-7395",
      type: "Journal Article"
    }
  ];

  const publicationStats = [
    { number: "100+", label: "Published Papers" },
    { number: "2000+", label: "Total Citations" },
    { number: "30+", label: "h-index" },
    { number: "25+", label: "Conference Talks" }
  ];

  const books = [
    {
      title: "Sparse Phased Array Antenna: Technologies and applications",
      publisher: "Artech House",
      year: "2024",
      type: "Book",
      description: "Comprehensive guide to sparse phased array antenna technologies and their applications in modern radar and communication systems."
    },
    {
      title: "Phased Array Antennas",
      publisher: "Handbook of Metrology by Springer Nature",
      year: "2023",
      type: "Book Chapter",
      description: "Detailed chapter covering the fundamentals and advanced concepts of phased array antenna systems."
    }
  ];

  const recentConferences = [
    {
      title: "A Sparse Concentric Ring Antenna Array Design with Wide Scanning and Low Sidelobe Level",
      conference: "WAMS 2024",
      location: "Visakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      title: "Design of a Broadband Stacked Annular Ring Antenna Using Theory of Characteristic Modes",
      conference: "WAMS 2024", 
      location: "Visakhapatnam",
      year: "2024",
      type: "Conference Paper"
    },
    {
      title: "Investigations on the Performance of Isophoric Linear Sparse Array Antenna with Low Sidelobe Level Due to Non-Isotropic Radiators",
      conference: "MAPCON 2023",
      location: "Ahmedabad",
      year: "2023",
      type: "Conference Paper"
    }
  ];

  const editorialRoles = [
    {
      role: "Editor",
      journal: "IETE Journal of Research",
      period: "Current"
    },
    {
      role: "Reviewer",
      journal: "IEEE Transactions on Antennas and Propagation",
      period: "Ongoing"
    },
    {
      role: "Reviewer",
      journal: "IEEE Communication Magazine",
      period: "Ongoing"
    },
    {
      role: "Reviewer",
      journal: "IET Electronic letters",
      period: "Ongoing"
    },
    {
      role: "Reviewer",
      journal: "IET Microwaves, Antennas and Propagation", 
      period: "Ongoing"
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
              <h1 className="text-5xl font-bold text-academic-navy mb-6">Publications & Research</h1>
              <p className="text-xl text-academic-grey leading-relaxed">
                Comprehensive collection of research contributions in microwave engineering, 
                antenna design, and radar technology spanning over two decades.
              </p>
            </div>
          </div>
        </section>

        {/* Publication Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {publicationStats.map((stat, index) => (
                  <Card key={index} className="card-elevated text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-academic-blue mb-2">{stat.number}</div>
                      <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Publications */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Journal Details</h2>
              <div className="space-y-6">
                {featuredPublications.map((pub, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-academic-navy mb-2">{pub.title}</CardTitle>
                          <div className="text-sm text-academic-grey mb-2">
                            <span className="font-medium">{pub.authors}</span>
                          </div>
                          <div className="text-sm text-academic-grey mb-3">
                            <span className="font-medium">{pub.journal}</span> • {pub.volume} • {pub.year}
                          </div>
                          <div className="flex items-center space-x-4 text-xs">
                            <span className="flex items-center">
                              <FileText className="h-3 w-3 mr-1" />
                              {pub.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Paper
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Books */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Books & Chapters</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {books.map((book, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-academic-light-blue text-academic-blue">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg text-white">{book.title}</CardTitle>
                          <div className="text-sm text-white/80">
                            {book.publisher} • {book.year}
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 bg-academic-light-blue text-academic-navy rounded-full">
                          {book.type}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 leading-relaxed mb-4">{book.description}</p>
                      <Button size="sm" className="text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Publication
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conferences/Symposiums */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Conferences/Symposiums</h2>
              <div className="space-y-4">
                {recentConferences.map((conf, index) => (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{conf.title}</h4>
                          <div className="text-white/80 text-sm">
                            <span className="font-medium">{conf.conference}</span> • {conf.location} • {conf.year}
                          </div>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium mt-2 md:mt-0">
                          {conf.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editorial & Review Work */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-center mb-16">Editorial & Review Work</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {editorialRoles.map((role, index) => (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <Award className="h-8 w-8 text-academic-blue mx-auto" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">{role.role}</h4>
                      <p className="text-sm text-white/80 mb-2">{role.journal}</p>
                      <p className="text-xs text-white/80">{role.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Academic Profiles */}
        <section className="py-20 bg-academic-light-grey">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center mb-16">Academic Profiles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="w-full justify-start h-12">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Google Scholar Profile
                </Button>
                <Button variant="outline" className="w-full justify-start h-12">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ResearchGate
                </Button>
                <Button variant="outline" className="w-full justify-start h-12">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  IEEE Xplore
                </Button>
                <Button variant="outline" className="w-full justify-start h-12">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ORCID Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;