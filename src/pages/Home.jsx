import AiBenefits from "../component/AiBenefits";
import AiTypes from "../component/AiTypes";
import Content from "../component/Content";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Content />
      </main>
      <Footer />
    </>
  );
};

export default Home;
