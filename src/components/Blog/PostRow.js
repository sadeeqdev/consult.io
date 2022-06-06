import { Grid } from "@mui/material"
import { styled } from "@mui/system"
import SideImg1 from '../../assets/docimg_1.jpg';
import SideImg2 from '../../assets/docimg_5.jpg';
import SideImg3 from '../../assets/doc_img_8.jpg';
import SideImg4 from '../../assets/docimg_7.jpg';

const PostRow = () => {

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

    const StyledDateText = styled('div')(({theme})=>({
        fontSize:'14',
        color:"#bfbfbf",
        padding:'8px 0',
        fontWeight:300,
        [theme.breakpoints.down('sm')]:{
           
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

    return(
        <StyledPostDiv>
            <Grid container spacing={7} direction="row">
                <Grid item md={3} xs={12}>
                    <StyledMainImage src={SideImg4}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={3} xs={12}>
                <StyledMainImage src={SideImg3}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={3} xs={12}>
                <StyledMainImage src={SideImg2}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={3} xs={12}>
                <StyledMainImage src={SideImg1}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
            </Grid>
            <Grid container spacing={7} direction="row">
                <Grid item md={3} xs={12}>
                    <StyledMainImage src={SideImg4}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={3} xs={12}>
                <StyledMainImage src={SideImg3}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={3} xs={12}>
                <StyledMainImage src={SideImg2}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
                <Grid item md={3} xs={12}>
                <StyledMainImage src={SideImg1}/>
                    <StyledDateText>
                        17 Febuary 2021
                    </StyledDateText>
                    <StyledBannerHeaderText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </StyledBannerHeaderText>
                    <StyledBannerText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                    </StyledBannerText>
                </Grid>
            </Grid>
        </StyledPostDiv>
    )
}

export default PostRow
