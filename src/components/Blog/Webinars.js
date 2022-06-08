import { Grid } from '@mui/material'
import {styled } from '@mui/system'
import SideImg1 from '../../assets/docimg_1.jpg';
import SideImg2 from '../../assets/docimg_5.jpg';
import SideImg3 from '../../assets/doc_img_8.jpg';

const Webinars = () => {

    const StyledMainDiv = styled('div')(({theme}) => ({
        width:'80%',
        height:'auto',
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledMainTitle = styled('div')(({theme}) =>({
        fontSize:'35px',
        color:"#333333",
        fontWeight:550,
        marginTop:'50px',
    }))

    const StyledBannerDiv = styled(Grid)(({theme})=>({
        width: '100%',
        margin: '30px auto',
    }))



    const StyledSideImage = styled('img')(({theme})=>({
        width:'90%',
        height:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledGrid = styled(Grid)(({theme})=>({
        marginRight:'40px auto',
        [theme.breakpoints.down('sm')]:{
            marginTop:'40px',
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledGridItem = styled(Grid)(({theme})=>({
        paddingBottom:'15px',
        marginBottom:'5px',
        [theme.breakpoints.down('sm')]:{
           
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledSideDateText = styled('div')(({theme})=>({
        fontSize:'14',
        color:"#bfbfbf",
        padding:'0 0 8px 0',
        fontWeight:300,
        [theme.breakpoints.down('sm')]:{
           
        }
    }))

    const StyledSideBannerHeaderText = styled('div')(({theme})=>({
        fontSize:'23px',
        fontWeight:500,
        lineHeight:'30px',
        '&:hover':{color:'#2f53a5', cursor:'pointer'},
        [theme.breakpoints.down('sm')]:{
           
        }
    }))

    return (
        <StyledMainDiv>
            <StyledMainTitle>Webinars</StyledMainTitle>
                <StyledBannerDiv container spacing={0} direction="row">
                <StyledGrid item md={5.75} xs={12}>
                    <StyledGridItem container>
                        <Grid item md={6} xs={6}>
                            <StyledSideImage src={SideImg1}/>
                        </Grid>
                        <Grid draggable item md={6} xs={6}>
                            <StyledSideDateText>
                                17 Febuary 2021
                            </StyledSideDateText>
                            <StyledSideBannerHeaderText>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                            </StyledSideBannerHeaderText>
                        </Grid>
                    </StyledGridItem>
                    <StyledGridItem container>
                        <Grid item md={6} xs={6}>
                            <StyledSideImage src={SideImg2}/>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <StyledSideDateText>
                                17 Febuary 2021
                            </StyledSideDateText>
                            <StyledSideBannerHeaderText>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                            </StyledSideBannerHeaderText>
                        </Grid>
                    </StyledGridItem>
                    <StyledGridItem container>
                        <Grid item md={6} xs={6}>
                            <StyledSideImage src={SideImg3}/>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <StyledSideDateText>
                                17 Febuary 2021
                            </StyledSideDateText>
                            <StyledSideBannerHeaderText>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                            </StyledSideBannerHeaderText>
                        </Grid>
                    </StyledGridItem>
                </StyledGrid>
                <StyledGrid md={0.5}>
                </StyledGrid>
                <StyledGrid item md={5.75} xs={12}>
                    <StyledGridItem container>
                        <Grid item md={6} xs={6}>
                            <StyledSideImage src={SideImg1}/>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <StyledSideDateText>
                                17 Febuary 2021
                            </StyledSideDateText>
                            <StyledSideBannerHeaderText>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                            </StyledSideBannerHeaderText>
                        </Grid>
                    </StyledGridItem>
                    <StyledGridItem container>
                        <Grid item md={6} xs={6}>
                            <StyledSideImage src={SideImg2}/>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <StyledSideDateText>
                                17 Febuary 2021
                            </StyledSideDateText>
                            <StyledSideBannerHeaderText>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                            </StyledSideBannerHeaderText>
                        </Grid>
                    </StyledGridItem>
                    <StyledGridItem container>
                        <Grid item md={6} xs={6}>
                            <StyledSideImage src={SideImg3}/>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <StyledSideDateText>
                                17 Febuary 2021
                            </StyledSideDateText>
                            <StyledSideBannerHeaderText>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                            </StyledSideBannerHeaderText>
                        </Grid>
                    </StyledGridItem>
                </StyledGrid>
            </StyledBannerDiv>
        </StyledMainDiv>
    )
}

export default Webinars