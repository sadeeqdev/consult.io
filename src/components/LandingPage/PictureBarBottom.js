import { Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import BannerImg from '../../assets/docimg_7.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PictureBarBottom = () => {

    const StyleGridContainer = styled(Grid)(({theme})=>({
        height:'auto',
        width:'70%',
        margin:'100px auto',
        display: 'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('xl')]:{
            width:"80%",
            marginTop:'-200px'
        },
        [theme.breakpoints.down('sm')]:{
            width:"90%",
        },
        [theme.breakpoints.down('lg')]:{
            marginTop:'-100px'
        },
    }))

    const StyleImageBar = styled('div')(({theme}) => ({
        width:'90%',
        height:'500px',
        borderRadius: '10px 40%',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: '800px 500px',
        backgroundPosition:'center',
        marginTop: '0px',
        backgroundRepeat:'no-repeat',
        [theme.breakpoints.down('xl')]:{
            backgroundPosition:'center',
            height:'400px',
        },
        [theme.breakpoints.down('sm')]:{
            width:"100%",
            height:'300px',
            backgroundSize: '120% 100%',
            borderRadius: '10px 50%',
        },
        [theme.breakpoints.down('lg')]:{
            width:"100%",
        },
    }))

    const StyledHeaderText = styled('div')(({theme}) =>({
        color:'#07163a',
        fontSize:'50px',
        textAlign:'justify',
        fontWeight:560,
        [theme.breakpoints.down('xl')]:{
            fontSize:'35px'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'25px',
            marginTop:'15px',
        }
    }))

    const StyledBodyText = styled('div')(({theme}) =>({
        fontSize:'20px',
        textAlign:'justify',
        lineHeight:'30px',
        marginTop:'20px',
        [theme.breakpoints.down('xl')]:{
            fontSize:'17px'
        },
        [theme.breakpoints.down('lg')]:{
            marginTop:'10px',
            lineHeight:'25px',
        }
    }))

    const StyledBodyButton = styled(Button)(({theme})=>({
        width:'230px',
        height:'50px',
        borderRadius:'40px',
        backgroundColor:'#07163a',
        color: '#fff',
        fontWeight: '900',
        marginTop: '110px',
        '&:hover':{backgroundColor:'#2f53a5', color:'white'},
        [theme.breakpoints.down('xl')]:{
            marginTop:'50px',
        },
        [theme.breakpoints.down('lg')]:{
            marginTop:'30px',
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:'20px',
        }

    }))

  return (
    <StyleGridContainer container direction="row">
        <Grid item sm={5} xs={12}> 
            <StyleImageBar/>
        </Grid>
        <Grid item sm={6} xs={12}>
            <StyledHeaderText>
                Frequently Asked Questions
            </StyledHeaderText>
            <StyledBodyText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            </StyledBodyText>
            <StyledBodyButton>
                Talk to an expert
                <ArrowRightAltIcon sx={{color:'white'}}/>
            </StyledBodyButton>
        </Grid>
    </StyleGridContainer>   
  )
}

export default PictureBarBottom