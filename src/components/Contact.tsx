import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-academic-light-grey">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">Contact & Collaboration</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-academic-navy mb-6">Get in Touch</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  I'm always open to discussing research collaborations, speaking opportunities, 
                  or consulting on microwave and antenna engineering projects. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <Card className="card-elevated">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-academic-light-blue text-academic-blue">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-academic-navy">Email</div>
                        <div className="text-academic-grey">ashutosh.kedar@institution.edu</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-academic-light-blue text-academic-blue">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-academic-navy">Office Phone</div>
                        <div className="text-academic-grey">+91 (XXX) XXX-XXXX</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Professional Links */}
              <div>
                <h4 className="text-lg font-semibold text-academic-navy mb-4">Professional Networks</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start h-auto p-3">
                    <Linkedin className="h-4 w-4 mr-2" />
                    <div className="text-left">
                      <div className="text-sm font-medium">LinkedIn</div>
                      <div className="text-xs text-academic-grey">Professional Profile</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-3">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Google Scholar</div>
                      <div className="text-xs text-academic-grey">Publications</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl text-academic-navy">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-academic-navy mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-academic-navy mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-academic-navy mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-academic-navy mb-2 block">
                    Organization
                  </label>
                  <Input placeholder="Your Institution/Company" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-academic-navy mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="Research Collaboration Inquiry" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-academic-navy mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Please describe your inquiry, research interests, or collaboration ideas..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full">
                  Send Message
                </Button>
                
                <p className="text-xs text-academic-grey text-center">
                  I'll typically respond within 24-48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;