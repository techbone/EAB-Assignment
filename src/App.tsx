import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import StatisticsSection from "./components/StatisticsSection";
import ImpactSection from "./components/ImpactSection";
import AboutSection from "./components/AboutSection";
import SchoolsSection from "./components/SchoolsSection";
import ContactForm from "./components/ContactForm";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import StickySearch from "./components/StickySearch";

function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroBanner />
      <StatisticsSection />
      <ImpactSection />
      <AboutSection />
      <SchoolsSection />
      <BackToTop />
      <ContactForm />
      <div className="w-full h-0.5 bg-white" />
      <Footer />
      <StickySearch />
    </div>
  );
}

export default App;
