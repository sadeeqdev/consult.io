import { Grid } from "@mui/material"
import { styled } from "@mui/system"

const SubscribeBox = () => {

    const StyledRowGrid = styled(Grid)(({theme}) =>({
        width:'80%',
        margin:'20px auto',
        height:'auto',
        backgroundColor:'#07163a',
        borderRadius:'10px',
        color:'white',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    const StyledInnerGrid = styled(Grid)(({theme}) => ({
        padding:'20px',

    }))

    const StyledInnerHeader = styled('div')(({theme}) => ({
        fontSize:'32px',
        fontWeight:550,
        marginLeft:'50px',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'0px',
            fontSize:'27px',
        },
        [theme.breakpoints.up('xl')]:{
        }
    }))

    const StyledInnerText = styled('div')(({theme}) => ({
        fontSize:'17px',
        fontWeight:350,
        marginLeft:'50px',
        marginTop:'8px',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'0px',
        },
        [theme.breakpoints.up('xl')]:{
        }
    }))


    const StyledSearchBox = styled('input')(({theme}) => ({
        width:'80%',
        height:'0px',
        border:'0px',
        borderRadius:'40px',
        fontSize:'18px',
        color:'#555555',
        marginTop:'30px',
        padding:'30px',
        marginLeft:'40px',
        [theme.breakpoints.down('sm')]:{
            width:'82%',
            marginLeft:'0px',
            padding:'25px',
            fontSize:'16px',
            marginTop:'0px',
        },
        [theme.breakpoints.up('xl')]:{
            width:'80%',
        }
    }))

    const StyledSearchButton = styled('div')(({theme}) => ({
        width:'auto',
        height:'24px',
        backgroundColor:'#3051a3',
        marginTop:'30px',
        padding:'18px',
        borderRadius:'30px',
        marginLeft:'-40px',
        fontSize:'20px',
        fontWeight:550,
        textAlign:'center',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            margin:'10px auto',
            padding:'13px',
            fontSize:'20px',
        },
        [theme.breakpoints.up('xl')]:{
            width:'70%',
        }
    }))

    return (
        <StyledRowGrid container direction="row">
            <StyledInnerGrid item md={6} xs={12}>
                <StyledInnerHeader>Get The Latest CRO Resources In Your Inbox</StyledInnerHeader>
                <StyledInnerText>Get The Latest CRO <br/>Resources In Your Inbox</StyledInnerText>
            </StyledInnerGrid>
            <StyledInnerGrid item md={6} xs={12}>
                <Grid container>
                    <Grid item md={9} xs={12}>
                        <StyledSearchBox type="text" placeholder="Your Email" />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <StyledSearchButton>Sign up</StyledSearchButton>
                    </Grid>
                </Grid>
            </StyledInnerGrid>
        </StyledRowGrid>
    )
}

export default SubscribeBox