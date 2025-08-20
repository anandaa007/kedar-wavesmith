import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import heroBackgroundMobile from "@/assets/hero-background-mobile.jpg";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return (
    <section id="home" className="relative flex flex-col justify-end md:justify-center overflow-hidden" style={{ minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={isMobile ? heroBackgroundMobile : heroBackground}
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectPosition: isMobile ? 'center' : 'center 20%'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="w-full pb-12">
          <div className="max-w-4xl text-white md:text-left text-center">
        <div className="p-6 md:p-0 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dr. Ashutosh Kedar
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Microwave & Antenna Engineering Researcher
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl md:mx-0 mx-auto leading-relaxed text-center md:text-left">
            Advancing the frontiers of electromagnetic research through innovative antenna design, 
            microwave systems, and radar technology for defense and civilian applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => navigate('/publications')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Publications
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-black/20 hover:bg-white hover:text-black transition-all duration-300 hover:border-white w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;