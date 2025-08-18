import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
