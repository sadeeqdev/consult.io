import { Button, Grid, TextField } from "@mui/material"
import { styled } from "@mui/system"
import BannerImg from '../assets/loginpng_4.png';

const Login = () => {

    const StyledGridBannerSide = styled(Grid)(({theme})=> ({
        backgroundColor:'#07163a',
        width:'100%',
        height:'100vh',
        color:'white',
        padding:'30px',
    }))


    const StyledGridBannerLogo = styled(Grid)(({theme})=> ({
        fontSize:'30px',
        fontWeight:600,
    }))

    const StyledGridBannerHeader = styled(Grid)(({theme})=> ({
        fontSize:'50px',
        textAlign:'center',
        marginTop:'50px'
    }))

    const StyledGridBannerpng = styled('div')(({theme})=> ({
        width:'80%',
        margin:'auto',
        marginTop: '40px',
        height:'500px',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: '650px 500px',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
    }))

    const StyledGridBannerText = styled(Grid)(({theme})=> ({
        textAlign:'center',
        fontsize:'15px',
        margin:'10px 0'
    }))

    const StyledGridLoginSideDiv = styled('div')(({theme})=> ({
        width:'80%',
        height:'100vh',
        margin:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }))

    const StyledGridLoginHeader = styled('div')(({theme})=> ({
        fontSize:'30px',
        margin:'50px 0px',
        color:'#07163a',
        fontWeight:600
    }))


    const StyledGridLoginLabel = styled('div')(({theme})=> ({
        fontSize:'17px',
        fontWeight:500,
        color:'#07163a',
        margin:'10px 0'
    }))

    const StyledGridLoginInput = styled(TextField)(({theme})=> ({
        width:'400px'
    }))

    const StyledGridLoginButton= styled(Button)(({theme})=> ({
        display:'block',
        width:'400px',
        backgroundColor:'#07163a',
        color:'white',
        height:'50px',
        margin:'30px 0',
        fontWeight:600,
    }))

    const StyledGridLoginText = styled('div')(({theme})=> ({
        textAlign:'center',
        lineHeight:'25px'

    }))

    const StyledLoginText = styled('div')(({theme})=> ({
        textAlign:'center',
        marginTop:'40px',
        fontWeight:600
    }))

  return (
    <Grid container direction="row">
        <StyledGridBannerSide item sm={6} xl={8}>
            <StyledGridBannerLogo>Consulta.io</StyledGridBannerLogo>
            <StyledGridBannerHeader>Talk To a Doctor With Ease</StyledGridBannerHeader>
            <StyledGridBannerText>
                Get express health care from the comfort of your home with our qualified doctor ready to hear from you
            </StyledGridBannerText>
            <StyledGridBannerpng/>
        </StyledGridBannerSide>        
        <Grid item sm={6} xl={4}>
            <StyledGridLoginSideDiv>
                <div>
                <StyledGridLoginHeader>Login</StyledGridLoginHeader>
                <StyledGridLoginLabel >Email</StyledGridLoginLabel>
                <StyledGridLoginInput placeholder="example@gmail.com" />
                <StyledGridLoginLabel >Password</StyledGridLoginLabel>
                <StyledGridLoginInput placeholder="6 + strong characters" />
                <StyledGridLoginButton>Continue</StyledGridLoginButton>
                <StyledGridLoginText>
                    By signing up, you agreee to our <br/>
                    <span style={{color:'blue', cursor:'pointer'}}>Terms and Conditions & Privacy and Policy</span>
                </StyledGridLoginText>
                <StyledLoginText>
                    Dont have an account? 
                    <span style={{color:'blue', cursor:'pointer'}}> SIGN UP</span>
                </StyledLoginText>
                </div>
            </StyledGridLoginSideDiv>        
        </Grid>        
    </Grid>
  )
}

export default Login