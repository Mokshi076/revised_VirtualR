import FeatureSec from "./components/FeatureSec";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WorkFlow from "./components/WorkFlow";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      </div>
      <FeatureSec/>
      <WorkFlow/>
      
    </>
  );
};

export default App;
