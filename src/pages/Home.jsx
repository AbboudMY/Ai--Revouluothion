import AiBenefits from "../component/aiBenefits";
import AiTypes from "../component/aiTypes";
import Content from "../component/content";
import Footer from "../component/footer";
import HeroSection from "../component/heroSection";
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
