import { Button } from "@mui/material"
import { styled } from "@mui/system"
import BannerImg from '../assets/docimg_4.jpg';

const WelcomeBanner = () => {

    const StyledBanner = styled('div')(({theme})=>({
        width: '100%',
        height: 550,
        backgroundColor: '#07163a',
        color: 'white',
        textAlign:'center',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            height:'auto',
            paddingBottom:'30px',
        }
    }))

    const StyledBannerDiv = styled('div')(({theme})=>({
        width: '80%',
        margin: 'auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledBannerHeader = styled('div')(({theme})=>({
        fontWeight:400,
        fontSize:'45px',
        paddingTop:'100px',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            height:'300px',
            fontSize:'30px',
            color:'#fff',
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: '150% 370px',
            backgroundPosition:'center top',
            backgroundRepeat:'no-repeat',
            boxShadow:'5px'
        }
    }))

    const StyledBannerText = styled('div')(({theme})=>({
        fontSize:'15px',
        lineHeight: '30px',
        paddingTop:'30px',
        [theme.breakpoints.down('sm')]:{
            paddingTop:'0px'
        }
    }))

    const StyledQuoteButton = styled(Button)({
        width:'300px',
        height:'50px',
        borderRadius:'40px',
        backgroundColor:'#fff',
        color: '#07163a',
        fontWeight: '900',
        marginTop: '20px',
        '&:hover':{backgroundColor:'#2f53a5', color:'white'}

    })



  return (
    <StyledBanner>
        <StyledBannerDiv>
            <StyledBannerHeader>
                Consult a Doctor Anytime, Anywhere <br/>by Video Call
            </StyledBannerHeader>
            <StyledBannerText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </StyledBannerText>
            <StyledQuoteButton>
                Ask A Doctor Online
            </StyledQuoteButton>
        </StyledBannerDiv>
    </StyledBanner>
  )
}

export default WelcomeBanner