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
            marginTop:'10px',
            justifyContent:'center', 
            marginRight:'60px'
        },
        [theme.breakpoints.down('xl')]:{
            width:"80%",
        },
    }))

    const GridItem = styled('div')(({theme})=>({
        width:'130px',
        height:'200px',
        backgroundColor:'#07163a',
        borderRadius:'0px 50px 50px 50px',
        marginLeft:'40px',
        marginTop:'50px',
        [theme.breakpoints.down('md')]:{
            width:'65px',
            height:'100px',
            backgroundColor:'#07163a',
            borderRadius:'0px 25px 25px 25px',
            marginLeft:'20px',
            marginTop:'25px',
        }
    }))

    const GridCircle = styled('div')(({theme}) => ({
        width:'100px',
        height:'100px',
        borderRadius:'100px',
        border: '4px solid #cfcfcf',
        margin:'30px auto',
        [theme.breakpoints.down('md')]:{
            width:'50px',
            height:'50px',
            borderRadius:'50px',
            border: '4px solid #cfcfcf',
            margin:'30px auto',
        }
    }))

    const GridText = styled('div')(({theme})=>({
        marginTop:'170px',
        marginLeft:'100px',
        [theme.breakpoints.down('md')]:{
            marginLeft:'60px',
            marginTop:'80px',
        }
    }))

    const StyledVaccineIcon = styled(VaccinesIcon)(({theme}) => ({
        width:'60px', height:'auto', color:'white', marginTop:'60px',
        [theme.breakpoints.down('md')]:{
            width:'40px', height:'auto', color:'white', marginTop:'30px',
        }
    }))

    const StyledSecureIcon = styled(EnhancedEncryptionIcon)(({theme}) => ({
        width:'60px', height:'auto', color:'white', marginTop:'60px',
        [theme.breakpoints.down('md')]:{
            width:'40px', height:'auto', color:'white', marginTop:'30px',
        }
    }))

    const StyledPeopleIcon = styled(PeopleOutlineIcon)(({theme}) => ({
        width:'60px', height:'auto', color:'white', marginTop:'60px',
        [theme.breakpoints.down('md')]:{
            width:'40px', height:'auto', color:'white', marginTop:'30px',
        }
    }))

  return (
    <StyleContainer container>
        <Grid item sm={4} xs={12}>
            <GridCircle>
                <GridItem>
                    <StyledVaccineIcon/>
                        
                </GridItem>
            </GridCircle>
            <GridText>
                <Typography variant="h6" color="initial">
                    <b>All Specialist</b>
                </Typography>
                <Typography variant="body1" color="initial">
                A social seed sown more than five decades ago is today the country’s third largest healthcare group.
                </Typography>
            </GridText>
        </Grid>
        <Grid item sm={4} xs={12}>
            <GridCircle>
                <GridItem>
                    <StyledSecureIcon/>
                        
                </GridItem>
            </GridCircle>
            <GridText>
                <Typography variant="h6" color="initial">
                    <b>Private and Secure</b>
                </Typography>
                <Typography variant="body1" color="initial">
                    Providing comprehensive care that is both curative and preventive in nature for a wide variety of patients.
                </Typography>
            </GridText>
        </Grid>
        <Grid item sm={4} xs={12}>
            <GridCircle>
                <GridItem>
                    <StyledPeopleIcon/>
                </GridItem>
            </GridCircle>
            <GridText>
                <Typography variant="h6" color="initial">
                    <b>Thousand Customers</b>
                </Typography>
                <Typography variant="body1" color="initial">
                    Thousand of lives touched with online consultation and therapy through provision of top notch services. 
                </Typography>
            </GridText>
        </Grid>
    </StyleContainer>
  )
}

export default BasicBar