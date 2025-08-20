import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-academic-light-grey">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title text-center mb-16">Contact & Collaboration</h2>
          
          <div className="flex justify-center">
            {/* Contact Information */}
            <div className="space-y-8 flex flex-col items-center justify-center w-full">
              <div className="text-center">
                <p className="text-foreground leading-relaxed mb-6">
                  I'm always open to discussing research collaborations, speaking opportunities, 
                  or consulting on microwave and antenna engineering projects. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 w-full">
                <Card className="card-elevated">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="p-3 rounded-lg bg-academic-light-blue text-academic-blue">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-white">Email</div>
                        <div className="text-white/80">ashutosh.kedar@institution.edu</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </div>

              {/* Professional Links */}
              <div className="text-center w-full">
                <h4 className="text-lg font-semibold text-academic-navy mb-4">Professional Networks</h4>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" className="flex items-center justify-center space-x-2 h-auto p-3">
                    <Linkedin className="h-4 w-4" />
                    <div className="text-center">
                      <div className="text-sm font-medium">LinkedIn</div>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-auto p-3"
                    onClick={() => window.open('https://scholar.google.com/citations?user=o17igLEAAAAJ&hl=en', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <div className="text-center">
                      <div className="text-sm font-medium">Google Scholar</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;