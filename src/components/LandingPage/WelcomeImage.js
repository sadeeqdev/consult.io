import { styled } from "@mui/system"
import BannerImg from '../../assets/docimg_4.jpg';

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
          marginTop:'-40px',
          width:'90%',
          height:'200px',
          borderRadius: '5px',
          backgroundSize: '300px 190px',
      }
    }))

  return (
    <WelcomeImage></WelcomeImage>
  )
}

export default WelcomeImage