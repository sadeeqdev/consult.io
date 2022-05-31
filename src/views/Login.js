import { Button, Grid, TextField } from "@mui/material"
import { styled } from "@mui/system"
import BannerImg from '../assets/loginpng_5.png';
import MobileBannerImg from '../assets/loginpng_5.png';

const Login = () => {

    const StyledGridBannerSide = styled(Grid)(({theme})=> ({
        backgroundColor:'#07163a',
        width:'100%',
        height:'100vh',
        color:'white',
        padding:'30px',
        [theme.breakpoints.down('md')]:{
            height:'50px',
            padding:'15px',
            backgroundColor:'#fff   ',
            fontSize:'23px',
            color:'#07163a'

        },
    }))


    const StyledGridBannerLogo = styled(Grid)(({theme})=> ({
        fontSize:'30px',
        fontWeight:600,
        [theme.breakpoints.down('xl')]:{
            fontSize:'25px',
        },
        [theme.breakpoints.down('md')]:{
            backgroundColor:'#fff   ',
            fontSize:'23px',
            color:'#07163a'

        },
    }))

    const StyledGridBannerHeader = styled(Grid)(({theme})=> ({
        fontSize:'50px',
        textAlign:'center',
        marginTop:'50px',
        [theme.breakpoints.down('xl')]:{
            fontSize:'40px',
            marginTop:'30px'
        },
        [theme.breakpoints.down('lg')]:{
            fontSize:'40px',
            marginTop:'30px',
        },
        [theme.breakpoints.down('md')]:{
            fontSize:'25px',
            display:'none',
            marginTop:'10px',
            color:'#07163a'
        },
    }))

    const StyledGridBannerpng = styled('div')(({theme})=> ({
        width:'80%',
        margin:'auto',
        marginTop: '40px',
        height:'500px',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: '650px 450px',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        [theme.breakpoints.down('xl')]:{
            backgroundSize: '450px 390px',
            marginTop: '0px',
        },
        [theme.breakpoints.down('lg')]:{
            height:'300px',
            backgroundSize: '300px 250px',
            marginTop: '0px',
        },
        [theme.breakpoints.down('md')]:{
            backgroundImage: `url(${MobileBannerImg})`,
            width:'90%',
            backgroundSize: '250px 190px',
        },
    }))

    const StyledGridBannerText = styled(Grid)(({theme})=> ({
        textAlign:'center',
        fontsize:'15px',
        margin:'10px 0',
        [theme.breakpoints.down('md')]:{
            display:'none'

        },
    }))

    const StyledGridLoginSideDiv = styled('div')(({theme})=> ({
        width:'80%',
        height:'100vh',
        margin:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
            width:'90%',
            display:'block',
            height:'auto',
            marginTop:'240px',
        },
    }))

    const StyledGridLoginHeader = styled('div')(({theme})=> ({
        fontSize:'30px',
        margin:'50px 0px',
        color:'#07163a',
        fontWeight:600,
        [theme.breakpoints.down('md')]:{
            margin:'70px 0px',
            display:'none'
        },
    }))


    const StyledGridLoginLabel = styled('div')(({theme})=> ({
        fontSize:'17px',
        fontWeight:500,
        color:'#07163a',
        margin:'10px 0',
        [theme.breakpoints.down('md')]:{
        },
    }))

    const StyledGridLoginInput = styled(TextField)(({theme})=> ({
        width:'400px',
        backgoundColor:'white',
        [theme.breakpoints.down('md')]:{
            width:'100%',
        },
    }))

    const StyledGridLoginButton= styled(Button)(({theme})=> ({
        display:'block',
        width:'400px',
        backgroundColor:'#07163a',
        color:'white',
        height:'50px',
        margin:'30px 0',
        fontWeight:600,
        '&:hover':{backgroundColor:'#2f53a5', color:'white'},
        [theme.breakpoints.down('md')]:{
            width:'100%',
        },
        
    }))

    const StyledGridLoginText = styled('div')(({theme})=> ({
        textAlign:'center',
        lineHeight:'25px',
        [theme.breakpoints.down('md')]:{
            width:'100%',
            marginTop:'-10px',
    },

    }))

    const StyledLoginText = styled('div')(({theme})=> ({
        textAlign:'center',
        marginTop:'40px',
        fontWeight:600,
        [theme.breakpoints.down('md')]:{
        marginTop:'10px',
        },
    }))

  return (
    <Grid container direction="row">
        <StyledGridBannerSide item md={6.5} xl={7.5} xs={12}>
            <StyledGridBannerLogo>Consulta.io</StyledGridBannerLogo>
            <StyledGridBannerHeader>Talk To a Doctor With Ease</StyledGridBannerHeader>
            <StyledGridBannerText>
                Get express health care from the comfort of your home with our qualified doctor ready to hear from you
            </StyledGridBannerText>
            <StyledGridBannerpng/>
        </StyledGridBannerSide>        
        <Grid item md={5.5} xl={4.5} xs={12}>
            <StyledGridLoginSideDiv>
                <div>
                <StyledGridLoginHeader>Login</StyledGridLoginHeader>
                <StyledGridLoginLabel >Email☀️</StyledGridLoginLabel>
                <StyledGridLoginInput placeholder="example@gmail.com" />
                <StyledGridLoginLabel >Password☀️</StyledGridLoginLabel>
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