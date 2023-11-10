import EighthSection from "./EighthSection/page";
import FifthSection from "./FifthSection/page";
import FirstSection from "./FirstSection/page";
import FourthSection from "./FourthSection/page";
import Logo from "./Navbar/_components/logo";
import Navbar from "./Navbar/navbar";
import SecondSection from "./SecondSection/page";
import SeventhSection from "./SeventhSection/page";
import SixthSection from "./SixthSection/page";
import ThirdSection from "./ThirdSection/page";


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EighthSection/>
      
    </div>
  );
}

export default LandingPage;