import { styled } from "@mui/system"
import BannerImg from '../assets/docimg_4.jpg';

const WelcomeImage = () => {

    const WelcomeImage = styled('div')(({theme}) => ({
        width:'800px',
        height:'450px',
        borderRadius: '10px',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: '800px 490px',
        margin:'auto',
        marginTop: '-100px',
        [theme.breakpoints.down('sm')]:{
            marginTop: '0',
            width:'100%',
            height:'0',
            borderRadius: '0px',
            backgroundImage: 'none',
        }
    }))

  return (
    <WelcomeImage></WelcomeImage>
  )
}

export default WelcomeImage