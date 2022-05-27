import BasicBar from "../components/BasicBar";
import Navbar from "../components/Navbar";
import WelcomeBanner from "../components/WelcomeBanner";
import WelcomeImage from "../components/WelcomeImage";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <WelcomeBanner/>
        <WelcomeImage/>
        <BasicBar/>
    </div>
  )
}

export default Home