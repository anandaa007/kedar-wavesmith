import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Research", href: "/research" },
    { name: "Publications", href: "/publications" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home first then scroll
      if (location.pathname !== "/") {
        navigate("/");
        // Use setTimeout to allow navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
      <header className="fixed w-full top-0 z-50 bg-[hsl(var(--academic-navy))]">      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button 
            onClick={() => navigate("/")}
            className="font-bold text-xl text-white drop-shadow-lg hover:text-white/90 transition-colors"
          >
            Dr. Ashutosh Kedar
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors w-full text-left rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;