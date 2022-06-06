import { Apple, Facebook, Google, Instagram, Reddit, Twitter } from "@mui/icons-material"
import { Grid } from "@mui/material"
import { styled } from "@mui/system"

const Partners = () => {

    const StyledContainer = styled(Grid)(({theme}) => ({
        width:'60%', 
        margin:'auto',
        display:"flex",
        justifyContent:'space-around',
        textAlign:'center',
        [theme.breakpoints.down('sm')]:{
            width:"90%",
        }
    }))

  return (
    <StyledContainer container direction="row">
        <Grid item sm={2} xs={4}><Google sx={{fontSize:'40px'}}/></Grid>
        <Grid item sm={2} xs={4}><Facebook sx={{fontSize:'40px'}}></Facebook></Grid>
        <Grid item sm={2} xs={4}><Twitter sx={{fontSize:'40px'}}></Twitter></Grid>
        <Grid item sm={2} xs={4}><Reddit sx={{fontSize:'40px'}}></Reddit></Grid>
        <Grid item sm={2} xs={4}><Apple sx={{fontSize:'40px'}}></Apple></Grid>
        <Grid item sm={2} xs={4}><Instagram sx={{fontSize:'40px'}}></Instagram></Grid>
    </StyledContainer>
  )
}

export default Partners