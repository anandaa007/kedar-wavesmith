import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dr. Ashutosh Kedar
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Microwave & Antenna Engineering Researcher
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Advancing the frontiers of electromagnetic research through innovative antenna design, 
            microwave systems, and radar technology for defense and civilian applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Publications
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white hover:text-black transition-all duration-300 hover:border-white backdrop-blur-sm">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;