import FirstSection from "./FirstSection/page";
import FourthSection from "./FourthSection/page";
import Logo from "./Navbar/_components/logo";
import Navbar from "./Navbar/navbar";
import SecondSection from "./SecondSection/page";
import ThirdSection from "./ThirdSection/page";


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
    </div>
  );
}

export default LandingPage;