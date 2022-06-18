import { Box, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useNavigate } from "react-router-dom"

const WelcomeBanner = () => {

    const navigate = useNavigate()

    const StyledBanner = styled('div')(({theme})=>({
        width: '100%',
        height: 530,
        backgroundColor: '#07163a',
        color: 'white',
        textAlign:'center',
        [theme.breakpoints.down('md')]:{
            width: '100%',
            height:'360px',
            paddingBottom:'30px',
        }
    }))

    const StyledBannerDiv = styled('div')(({theme})=>({
        width: '80%',
        margin: 'auto',
        [theme.breakpoints.down('md')]:{
            width:'95%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledBannerHeader = styled('div')(({theme})=>({
        fontWeight:400,
        fontSize:'55px',
        paddingTop:'100px',
        [theme.breakpoints.down('lg')]:{
            fontSize:'30px',
        },
        [theme.breakpoints.down('md')]:{
            width:'100%',
            height:'auto',
            margin:'auto',  
            fontSize:'30px',
            color:'#fff',
            paddingTop:'80px',
        },
        
    }))

    const StyledBannerText = styled('div')(({theme})=>({
        fontSize:'18px',
        lineHeight: '30px',
        fontWeight:300,
        paddingTop:'30px',
        [theme.breakpoints.down('md')]:{
            width:'85%',
            margin:'auto',
            paddingTop:'10px',
            fontSize:'15px',
            lineHeight: '22px',
            fontWeight:300,
        }
    }))

    const StyledQuoteButton = styled(Button)(({theme}) =>({
        width:'300px',
        height:'50px',
        borderRadius:'40px',
        backgroundColor:'#fff',
        color: '#07163a',
        fontWeight: '900',
        marginTop: '20px',
        fontSize:'17px',
        '&:hover':{backgroundColor:'#2f53a5', color:'white'},
        [theme.breakpoints.down('md')]:{
            width:'250px',
            height:'42px',
            borderRadius:'40px',
            backgroundColor:'#fff',
            color: '#07163a',
            fontWeight: '900',
            marginTop: '20px',
            fontSize:'15px'
        }

    }))

    const GridCircle = styled('div')(({theme})=>({
        width:'250px',
        height:'250px',
        borderRadius:'250px',
        border: '15px solid #fff',
        marginTop:'-230px',
        marginLeft:'-185px',
        [theme.breakpoints.down('md')]:{
            display:'none'
        },
        [theme.breakpoints.down('lg')]:{
            marginTop:'-250px',
            width:'130px',
            height:'130px',
            borderRadius:'130px',
            marginLeft:'-105px',
    }
    }))


  return (
    <StyledBanner>
        <StyledBannerDiv>
            <StyledBannerHeader>
            <Box sx={{display:{xs:'none', md:'block'}}}>Consult a Doctor Anytime, Anywhere <br/>by Video Call</Box>
            <Box sx={{display:{xs:'block', md:'none'}}}>Consult a Doctor Anytime, Anywhere by Video Call</Box>
            </StyledBannerHeader>
            <StyledBannerText>
                <Box sx={{display:{xs:'none', md:'block'}}}>The focus at Consulta.io is to develop an affordable tertiary and multispecialty healthcare framework through its entire delivery spectrum and further extend it to homecare. One of the most preferred and recognized healthcare facilities by pharmaceutical companies for drug trials.</Box>
                <Box sx={{display:{xs:'block', md:'none'}}}>Consulta.io is an affordable tertiary and multispecialty healthcare framework that specializes in online therapy and medical services.</Box>
            </StyledBannerText>
            <StyledQuoteButton onClick={() => {navigate('/consult')}}>
                Book An Appointment
            </StyledQuoteButton>
        </StyledBannerDiv>
        <GridCircle/>
    </StyledBanner>
  )
}

export default WelcomeBanner