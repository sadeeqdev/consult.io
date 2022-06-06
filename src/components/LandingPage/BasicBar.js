import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import VaccinesIcon from '@mui/icons-material/Vaccines';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const BasicBar = () => {

    const StyleContainer = styled(Grid)(({theme})=>({
        display:'flex', 
        justifyContent:'space-around', 
        width:'80%', 
        margin:'auto', 
        textAlign:'center', 
        marginTop:'20px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'30px',
            marginRight:'130px'
        }
    }))

    const GridItem = styled('div')(({theme})=>({
        width:'130px',
        height:'200px',
        backgroundColor:'#07163a',
        borderRadius:'0px 50px 50px 50px',
        marginLeft:'40px',
        marginTop:'50px',
        [theme.breakpoints.down('sm')]:{
            
        }
    }))

    const GridCircle = styled('div')({
        width:'100px',
        height:'100px',
        borderRadius:'100px',
        border: '4px solid #cfcfcf',
        margin:'30px auto'
    })

    const GridText = styled('div')(({theme})=>({
        marginTop:'170px',
        marginLeft:'100px',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'60px',
            marginTop:'160px',

        }
    }))

  return (
    <StyleContainer container>
        <Grid item sm={4} xs={12}>
            <GridCircle>
                <GridItem>
                    <VaccinesIcon sx={{width:'60px', height:'auto', color:'white', marginTop:'60px'}}/>
                        
                </GridItem>
            </GridCircle>
            <GridText>
                <Typography variant="h6" color="initial">
                    <b>All Specialist</b>
                </Typography>
                <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                </Typography>
            </GridText>
        </Grid>
        <Grid item sm={4} xs={12}>
            <GridCircle>
                <GridItem>
                    <EnhancedEncryptionIcon sx={{width:'60px', height:'auto', color:'white', marginTop:'60px'}}/>
                        
                </GridItem>
            </GridCircle>
            <GridText>
                <Typography variant="h6" color="initial">
                    <b>Private and Secure</b>
                </Typography>
                <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                </Typography>
            </GridText>
        </Grid>
        <Grid item sm={4} xs={12}>
            <GridCircle>
                <GridItem>
                    <PeopleOutlineIcon sx={{width:'60px', height:'auto', color:'white', marginTop:'60px'}}/>
                    
                </GridItem>
            </GridCircle>
            <GridText>
                <Typography variant="h6" color="initial">
                    <b>Thousand Customers</b>
                </Typography>
                <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                </Typography>
            </GridText>
        </Grid>
    </StyleContainer>
  )
}

export default BasicBar