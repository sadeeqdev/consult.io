import { Grid } from "@mui/material"
import { styled } from "@mui/system"
import MainImg from '../../assets/docimg_2.jpg';
import SideImg1 from '../../assets/docimg_1.jpg';
import SideImg2 from '../../assets/docimg_5.jpg';
import SideImg3 from '../../assets/doc_img_8.jpg';
import Skeleton from '@mui/material/Skeleton';

const BlogWelcomeBanner = () => {

    const StyledBanner = styled('div')(({theme})=>({
        width: '100%',
        height: 750,
        backgroundColor: '#07163a',
        color: 'white',
        [theme.breakpoints.down('md')]:{
            width: '100%',
            height:'auto',
            paddingBottom:'30px',
        }
    }))

    const StyledBannerDiv = styled(Grid)(({theme})=>({
        width: '80%',
        margin: '0px auto',
        [theme.breakpoints.down('md')]:{
            width:'90%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledMainImage = styled('img')(({theme})=>({
        width:'100%',
        height:'auto',
        [theme.breakpoints.down('md')]:{
            
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledSideImage = styled('img')(({theme})=>({
        width:'80%',
        height:'auto',
        [theme.breakpoints.down('md')]:{
            width:'90%',
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledGrid = styled(Grid)(({theme})=>({
        marginRight:'40px auto',
        [theme.breakpoints.down('md')]:{
            marginTop:'40px',
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledGridItem = styled(Grid)(({theme})=>({
        paddingBottom:'15px',
        marginBottom:'15px',
        borderBottom:'1px solid #202d4d',
        [theme.breakpoints.down('md')]:{
           
        },
        [theme.breakpoints.down('lg')]:{
            
        }
    }))

    const StyledDateText = styled('div')(({theme})=>({
        fontSize:'14',
        color:"#bfbfbf",
        padding:'8px 0',
        fontWeight:300,
        [theme.breakpoints.down('md')]:{
           
        }
    }))

    const StyledSideDateText = styled('div')(({theme})=>({
        fontSize:'14',
        color:"#bfbfbf",
        padding:'0 0 8px 0',
        fontWeight:300,
        [theme.breakpoints.down('md')]:{
           
        }
    }))

    const StyledBannerHeaderText = styled('div')(({theme})=>({
        fontSize:'25px',
        fontWeight:550,
        padding:'2px 0',
        lineHeight:'30px',
        [theme.breakpoints.down('md')]:{
           
        }
    }))

    const StyledBannerText = styled('div')(({theme})=>({
        fontSize:'15px',
        fontWeight:300,
        padding:'10px 0',
        lineHeight:'25px',
        [theme.breakpoints.down('md')]:{
           
        }
    }))

    const StyledSideBannerHeaderText = styled('div')(({theme})=>({
        fontSize:'23px',
        fontWeight:500,
        lineHeight:'30px',
        '&:hover':{color:'#2f53a5', cursor:'pointer'},
        [theme.breakpoints.down('md')]:{
           
        }
    }))

    const GridCircle = styled('div')(({theme})=>({
        width:'250px',
        height:'250px',
        borderRadius:'250px',
        border: '15px solid #fff',
        marginTop:'-530px',
        marginLeft:'-210px',
        [theme.breakpoints.down('md')]:{
            display:'none',
        },
        [theme.breakpoints.down('lg')]:{
            marginTop:'-270px',
            width:'230px',
            height:'230px',
            borderRadius:'230px',
            marginLeft:'-195px',
    }
    }))

    const StyledMainTitle = styled('div')(({theme}) =>({
        fontSize:'40px',
        textAlign:'justify',
        color:"#fff",
        fontWeight:550,
        padding:'30px 0',
        width:'70%',
        marginTop: '40px',
        margin:'40px auto 0 auto',
        [theme.breakpoints.down('md')]:{
            width:'90%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledSkeleton = styled(Skeleton)(({theme}) => ({
        width:'600px',
        height:'400px',
        backgroundColor:'#cfcfcf'
    }))


  return (
    <StyledBanner>
        <StyledMainTitle>Latest Articles From Consulta.io</StyledMainTitle>
        <StyledBannerDiv container spacing={0} direction="row">
            <StyledGrid item md={5.5} xs={12}>
                {MainImg ? <StyledMainImage src={MainImg}/> : <StyledSkeleton variant="rectangular"/>}
                <StyledDateText>
                    17 Febuary 2021
                </StyledDateText>
                <StyledBannerHeaderText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </StyledBannerHeaderText>
                <StyledBannerText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
                </StyledBannerText>
            </StyledGrid>
            <StyledGrid item md={0.5}>

            </StyledGrid>
            <StyledGrid item md={6} xs={12}>
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
        <GridCircle/>
    </StyledBanner>
  )
}

export default BlogWelcomeBanner