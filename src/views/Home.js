import BasicBar from "../components/BasicBar";
import Navbar from "../components/Navbar";
import PictureBar from "../components/PictureBar";
import PictureBarBottom from "../components/PictureBarBottom";
import PictureBarMid from "../components/PictureBarMid";
import WelcomeBanner from "../components/WelcomeBanner";
import WelcomeImage from "../components/WelcomeImage";

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
    </div>
  )
}

export default Home