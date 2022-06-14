import { Grid } from "@mui/material"
import { styled } from "@mui/system"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HealingIcon from '@mui/icons-material/Healing';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const QuestionAnswers = () => {

  const StyledTitleBlock = styled('div')(({theme}) => ({
    marginTop:'100px',
    fontSize:'35px',
    fontWeight:600,
    color:'#07163a'
  }))

  const StyledBody = styled('div')(({theme}) => ({
    width:'50%',
    margin:'auto',
  }))

  const StyledBodyGrid = styled(Grid)(({theme}) => ({
    marginTop:'20px',
  }))

const StyledItemCard = styled(Grid)(({theme}) => ({
      width:'100%',
      backgroundColor:'#fff',
      height:'400px',
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    }))

const StyledItemHeader = styled(Grid)(({theme}) => ({
    textAlign:'center',
    padding:'20px',
    fontSize: '36px'
}))

const StyledItemHeading = styled(Grid)(({theme}) => ({
    textAlign:'center',
    fontSize:'20px',
    fontWeight:600
}))

const StyledItemText = styled(Grid)(({theme}) => ({
    textAlign:'center',
    fontSize:'19px',
    marginTop:15
}))

  return (
    <div>
        <Navbar/>
            <StyledBody>
                <StyledTitleBlock>
                    Our Services
                </StyledTitleBlock>
                <StyledBodyGrid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <VaccinesIcon sx={{fontSize:'60px', color:'#07163a'}}/>
                            </StyledItemHeader>
                            <StyledItemHeading>MEDICAL CHECK UP</StyledItemHeading>
                            <StyledItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledItemText>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <MedicalServicesIcon sx={{fontSize:'60px', color:'#07163a'}}/>
                            </StyledItemHeader>
                            <StyledItemHeading>EMERGENCY</StyledItemHeading>
                            <StyledItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledItemText>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <HealingIcon sx={{fontSize:'60px', color:'#07163a'}}/>
                            </StyledItemHeader>
                            <StyledItemHeading>DAMAGE CONTROL</StyledItemHeading>
                            <StyledItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledItemText>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <MedicationLiquidIcon sx={{fontSize:'60px', color:'#07163a'}}/>
                            </StyledItemHeader>
                            <StyledItemHeading>FIRST AID</StyledItemHeading>
                            <StyledItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledItemText>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <MonitorHeartIcon sx={{fontSize:'60px', color:'#07163a'}}/>
                            </StyledItemHeader>
                            <StyledItemHeading>HEART RADIOGRAPHY</StyledItemHeading>
                            <StyledItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledItemText>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <PeopleOutlineIcon sx={{fontSize:'60px', color:'#07163a'}}/>
                            </StyledItemHeader>
                            <StyledItemHeading>THERAPY</StyledItemHeading>
                            <StyledItemText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledItemText>
                        </StyledItemCard>
                    </Grid>
                </StyledBodyGrid>
            </StyledBody>
        <Footer/>
    </div>
  )
}

export default QuestionAnswers