import Footer from "./components/Footer";
import FeatureSec from "./components/FeatureSec";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WorkFlow from "./components/WorkFlow";


const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <FeatureSec/>
      </div>
      <div className="max-w-6xl mx-auto pt-20 px-8">
        <WorkFlow/>
      </div>
      
      <div className="max-w-6xl mx-auto pt-20 px-8">
        <Pricing/>
      </div>
      <div className="max-w-6xl mx-auto pt-20 px-8">
        <Testimonials/>
      </div>
      <div className="max-w-6xl mx-auto pt-20 px-14">
        <Footer/>
      </div>
    </>
  );
};

export default App;
