import BasicBar from "../components/LandingPage/BasicBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Partners from "../components/LandingPage/Partners";
import PictureBar from "../components/LandingPage/PictureBar";
import PictureBarBottom from "../components/LandingPage/PictureBarBottom";
import PictureBarMid from "../components/LandingPage/PictureBarMid";
import WelcomeBanner from "../components/LandingPage/WelcomeBanner";
import WelcomeImage from "../components/LandingPage/WelcomeImage";

const Home = () => {

  return (
    <div>
        <Navbar/>
        <WelcomeBanner/>
        <WelcomeImage/>
        <BasicBar/>
        <PictureBar/>
        <PictureBarMid/>
        <PictureBarBottom/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Home