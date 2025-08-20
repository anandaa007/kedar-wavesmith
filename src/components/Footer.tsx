import { ExternalLink, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Dr. Ashutosh Kedar</h3>
              <p className="text-blue-200 leading-relaxed mb-4">
                Advancing electromagnetic research through innovative microwave engineering, 
                antenna design, and radar technology solutions for defense and civilian applications.
              </p>
              <div className="text-sm text-blue-300">
                Department of Electronics & Communication<br />
                Research Institution, India
              </div>
            </div>

            {/* Quick Links & Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:ashutosh.kedar@institution.edu" 
                  className="flex items-center text-blue-200 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-blue-200 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-blue-200 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Google Scholar
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <div className="text-sm text-blue-300">
              © 2024 Dr. Ashutosh Kedar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;