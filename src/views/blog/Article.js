import { Grid } from "@mui/material"
import { styled } from "@mui/system"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideImg1 from '../../assets/docimg_1.jpg';

const Article = () => {
    const StyledSideImage = styled('img')(({theme})=>({
        width:'92%',
        height:'auto',
        borderRadius:'5px',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledGrid = styled(Grid)(({theme})=>({
        width:'60%',
        margin:'100px auto',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            marginTop:'100px',
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledGridItem = styled(Grid)(({theme})=>({
        paddingBottom:'15px',
        marginBottom:'15px',
        [theme.breakpoints.down('sm')]:{
           
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledSideDateText = styled('div')(({theme})=>({
        fontSize:'14',
        color:"#777777",
        padding:'0 0 8px 0',
        fontWeight:300,
        [theme.breakpoints.down('sm')]:{
           
        }
    }))

    const StyledSideBannerHeaderText = styled('div')(({theme})=>({
        fontSize:'28px',
        fontWeight:550,
        textAlign:'justify',
        lineHeight:'30px',
        '&:hover':{color:'#2f53a5', cursor:'pointer'},
        [theme.breakpoints.down('sm')]:{
           
        }
    }))

    const StyledBodyText = styled('div')(({theme}) => ({
        fontSize:'18px',
        lineHeight: '30px',
        paddingTop:'10px',
        textAlign:'justify',
        [theme.breakpoints.down('sm')]:{
            paddingTop:'20px',
            fontSize:'12px',
            lineHeight: '30px',
        }
    
      }))

  return (
    <div>
        <Navbar/>
        <StyledGrid>
            <StyledGridItem container>
                <Grid item md={6} xs={12}>
                    <StyledSideImage src={SideImg1}/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <StyledSideDateText>
                        17 Febuary 2021
                    </StyledSideDateText>
                    <StyledSideBannerHeaderText>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                    </StyledSideBannerHeaderText>
                    <StyledBodyText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBodyText>
                </Grid>
            </StyledGridItem>
        </StyledGrid>
        <Footer/>
    </div>
  )
}

export default Article