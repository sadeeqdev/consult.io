import { Grid } from "@mui/material"
import { styled } from "@mui/system"
import SideImg2 from '../../assets/docimg_5.jpg';
import SideImg3 from '../../assets/doc_img_8.jpg';
import SideImg4 from '../../assets/docimg_3.jpg';

const Videos = () => {

    const StyledBanner = styled('div')(({theme})=>({
        width: '100%',
        height: 'auto',
        backgroundColor: '#07163a',
        color: 'white',
        marginTop:'100px',
        paddingBottom:'20px',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            height:'auto',
            paddingBottom:'30px',
        }
    }))

    const StyledPostDiv = styled(Grid)(({theme})=>({
        width: '80%',
        margin: '30px auto',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledMainImage = styled('img')(({theme})=>({
        width:'100%',
        height:'auto',
        [theme.breakpoints.down('sm')]:{
            
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledBannerHeaderText = styled('div')(({theme})=>({
        fontSize:'25px',
        fontWeight:550,
        padding:'2px 0',
        lineHeight:'30px',
        [theme.breakpoints.down('sm')]:{
           
        }
    }))

    const StyledBannerText = styled('div')(({theme})=>({
        fontSize:'15px',
        fontWeight:300,
        padding:'10px 0',
        lineHeight:'25px',
        [theme.breakpoints.down('sm')]:{
           
        }
    }))

    const StyledMainTitle = styled('div')(({theme}) =>({
        fontSize:'35px',
        color:"#fff",
        fontWeight:550,
        padding:'30px 0',
    }))

  return (
    <StyledBanner>
        <StyledPostDiv>
            <StyledMainTitle>Videos</StyledMainTitle>
            <Grid container spacing={7} direction="row">
                <Grid item md={4} xs={12}>
                    <StyledMainImage src={SideImg4}/>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={4} xs={12}>
                <StyledMainImage src={SideImg3}/>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={4} xs={12}>
                <StyledMainImage src={SideImg2}/>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
            </Grid>
        </StyledPostDiv>
    </StyledBanner>
  )
}

export default Videos