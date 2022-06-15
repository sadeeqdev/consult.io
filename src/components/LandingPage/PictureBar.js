import { Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import BannerImg from '../../assets/doc_img_8.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PictureBar = () => {

    const StyleGridContainer = styled(Grid)(({theme})=>({
        height:'auto',
        width:'70%',
        margin:'200px auto',
        display: 'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('xl')]:{
            width:"80%",
            marginTop:'100px'
        },
        [theme.breakpoints.down('sm')]:{
            width:"90%",
            margin:'100px auto 40px auto'
        }
    }))

    const StyleImageBar = styled('div')(({theme}) => ({
        width:'90%',
        height:'500px',
        borderRadius: '10px 40%',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: '800px 500px',
        backgroundPosition:'center right',
        marginTop: '0px',
        backgroundRepeat:'no-repeat',
        [theme.breakpoints.down('xl')]:{
            backgroundPosition:'center',
            height:'400px'
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
            marginLeft:'50px',
            align:'center'
        }

    }))

  return (
    <StyleGridContainer container direction="row">
        <Grid item sm={5} xs={12}> 
            <StyleImageBar/>
        </Grid>
        <Grid item sm={6} xs={12}>
            <StyledHeaderText>
                Success Will Come If You Think Freely Without Thinking About What To Do
            </StyledHeaderText>
            <StyledBodyText>
                If I could teach only one value to live by, it would be this: Success will come and go, but integrity is forever. Integrity means doing the right thing at all times and in all circumstances, whether or not anyone is watching. It takes having the courage to do the right thing, no matter what the consequences will be.
            </StyledBodyText>
            <StyledBodyButton>
                Talk to an expert
                <ArrowRightAltIcon sx={{color:'white'}}/>
            </StyledBodyButton>
        </Grid>
    </StyleGridContainer>   
  )
}

export default PictureBar