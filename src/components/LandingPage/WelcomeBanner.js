import { Button } from "@mui/material"
import { styled } from "@mui/system"
import { useNavigate } from "react-router-dom"

const WelcomeBanner = () => {

    const navigate = useNavigate()

    const StyledBanner = styled('div')(({theme})=>({
        width: '100%',
        height: 550,
        backgroundColor: '#07163a',
        color: 'white',
        textAlign:'center',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            height:'450px',
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
        fontSize:'55px',
        paddingTop:'100px',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            height:'auto',
            margin:'auto',  
            fontSize:'px',
            color:'#fff',
        },
        [theme.breakpoints.down('lg')]:{
            fontSize:'30px',
            textShadow: '2px 2px #222222',
        }
    }))

    const StyledBannerText = styled('div')(({theme})=>({
        fontSize:'15px',
        lineHeight: '30px',
        paddingTop:'30px',
        [theme.breakpoints.down('sm')]:{
            paddingTop:'20px',
            fontSize:'12px',
            lineHeight: '20px',
            textShadow: '2px 2px #222222',
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

    const GridCircle = styled('div')(({theme})=>({
        width:'250px',
        height:'250px',
        borderRadius:'250px',
        border: '15px solid #fff',
        marginTop:'-230px',
        marginLeft:'-185px',
        [theme.breakpoints.down('sm')]:{
            width:'40px',
            height:'40px',
            borderRadius:'40px',
            border: '5px solid #afafaf',
            marginTop:'30px',
            marginLeft:'-40px',
            zIndex:'-99'
        },
        [theme.breakpoints.down('lg')]:{
            marginTop:'-270px',
            width:'230px',
            height:'230px',
            borderRadius:'230px',
            marginLeft:'-195px',
    }
    }))


  return (
    <StyledBanner>
        <StyledBannerDiv>
            <StyledBannerHeader>
                Consult a Doctor Anytime, Anywhere <br/>by Video Call
            </StyledBannerHeader>
            <StyledBannerText>
                The focus at Consulta.io is to develop an affordable tertiary care multispecialty healthcare framework through its entire delivery spectrum and further extend it to homecare. One of the most preferred and recognized healthcare facilities by pharmaceutical companies for drug trials, the group’s flagship website in the world is JAN accredited and ranked amongst the Top 10 multispecialty websites in the world.
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