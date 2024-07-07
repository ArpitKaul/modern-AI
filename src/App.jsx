import ButtonGradient from "./assets/svg/ButtonGradient"
import Benifits from "./Components/Benifits";
import Collaboration from "./Components/Collaboration";
import Header from "./Components/Header";
import  Hero from "./Components/Hero";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import RoadMap from "./Components/RoadMap";
import Footer from "./Components/Footer"
const App = () => {

  return (
    <>
    
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Benifits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <RoadMap/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App
