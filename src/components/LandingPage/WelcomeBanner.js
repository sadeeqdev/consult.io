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
        [theme.breakpoints.down('md')]:{
            width: '100%',
            height:'470px',
            paddingBottom:'30px',
        }
    }))

    const StyledBannerDiv = styled('div')(({theme})=>({
        width: '80%',
        margin: 'auto',
        [theme.breakpoints.down('md')]:{
            width:'90%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledBannerHeader = styled('div')(({theme})=>({
        fontWeight:400,
        fontSize:'55px',
        paddingTop:'100px',
        [theme.breakpoints.down('md')]:{
            width:'90%',
            height:'auto',
            margin:'auto',  
            fontSize:'px',
            color:'#fff',
            paddingTop:'80px',
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
        [theme.breakpoints.down('md')]:{
            paddingTop:'20px',
            fontSize:'12px',
            lineHeight: '20px',
            textShadow: '2px 2px #222222',
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
            width:'40px',
            height:'40px',
            borderRadius:'40px',
            border: '5px solid #afafaf',
            marginTop:'30px',
            marginLeft:'-40px',
            zIndex:'-99'
        },
        [theme.breakpoints.down('lg')]:{
            marginTop:'-330px',
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