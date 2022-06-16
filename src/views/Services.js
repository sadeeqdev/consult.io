import { Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HealingIcon from '@mui/icons-material/Healing';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Fragment } from "react";

const QuestionAnswers = () => {

    const StyledTitleBlock = styled('div')(({theme}) => ({
        marginTop:'100px',
        fontSize:'35px',
        fontWeight:600,
        color:'#07163a'
    }))

    const StyledBody = styled('div')(({theme}) => ({
        width:'75%',
        margin:'auto',
        [theme.breakpoints.down('md')]:{
            width:'90%',
        },
        [theme.breakpoints.up('xl')]:{
            width:'60%',
        }
    }))

    const StyledBodyGrid = styled(Grid)(({theme}) => ({
        marginTop:'65px',
        [theme.breakpoints.down('md')]:{
            marginTop:'15px',
        },
    }))

    const StyledItemCard = styled(Grid)(({theme}) => ({
        width:'100%',
        backgroundColor:'#fff',
        height:'auto',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        display:'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]:{
            marginTop:'50px'
        },
        }))

    const StyledItemHeader = styled(Grid)(({theme}) => ({
        textAlign:'center',
        padding:'20px',
        backgroundColor:'#07163a',
        width:'110px',
        height:'110px',
        borderRadius:'110px',
        marginTop:'-50px',
        position:'absolute',
    }))

    const StyledItemHeading = styled(Grid)(({theme}) => ({
        textAlign:'center',
        fontSize:'23px',
        fontWeight:600,
        paddingTop:'90px',
    }))

    const StyledItemText = styled(Grid)(({theme}) => ({
        textAlign:'justify',
        lineHeight:'30px',
        fontSize:'18px',
        padding:'20px 30px 15px 30px'
    }))

    const StyledItemButton = styled(Button)({
        width:'100%',
        height:'45px',
        backgroundColor:'#07163a',
        color: '#fff',
        fontWeight: '900',
        marginTop: '25px',
        '&:hover':{backgroundColor:'#2f53a5', color:'white'}

    })

  return (
    <Fragment>
        <Navbar/>
            <StyledBody>
                <StyledTitleBlock>
                    Our Services
                </StyledTitleBlock>
                <StyledBodyGrid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <VaccinesIcon sx={{fontSize:'60px', color:'#fff'}}/>
                            </StyledItemHeader>
                            <div>
                            <StyledItemHeading>MEDICAL CHECK UP</StyledItemHeading>
                            <StyledItemText>
                                Routine medical check-ups are a great way to stay on top of your health and wellness. It is easy to think that we are healthy and there is no need for a health check-up, but with regular medical checkups, you can detect any health threats early.
                                <StyledItemButton>
                                    Enroll
                                </StyledItemButton>                          
                            </StyledItemText>
                            </div>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <MedicalServicesIcon sx={{fontSize:'60px', color:'#fff'}}/>
                            </StyledItemHeader>
                            <div>
                            <StyledItemHeading>EMERGENCY</StyledItemHeading>
                            <StyledItemText>
                                Routine medical check-ups are a great way to stay on top of your health and wellness. It is easy to think that we are healthy and there is no need for a health check-up, but with regular medical checkups, you can detect any health threats early.
                                <StyledItemButton>
                                    Enroll
                                </StyledItemButton>                          
                            </StyledItemText>
                            </div>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <HealingIcon sx={{fontSize:'60px', color:'#fff'}}/>
                            </StyledItemHeader>
                            <div>
                            <StyledItemHeading>DAMAGE CONTROL</StyledItemHeading>
                            <StyledItemText>
                            Routine medical check-ups are a great way to stay on top of your health and wellness. It is easy to think that we are healthy and there is no need for a health check-up, but with regular medical checkups, you can detect any health threats early.
                                <StyledItemButton>
                                    Enroll
                                </StyledItemButton>                          
                            </StyledItemText>
                            </div>
                        </StyledItemCard>
                    </Grid>
                </StyledBodyGrid>
                <StyledBodyGrid container spacing={2}>

                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <MedicationLiquidIcon sx={{fontSize:'60px', color:'#fff'}}/>
                            </StyledItemHeader>
                            <div>
                            <StyledItemHeading>FIRST AID</StyledItemHeading>
                            <StyledItemText>
                            Routine medical check-ups are a great way to stay on top of your health and wellness. It is easy to think that we are healthy and there is no need for a health check-up, but with regular medical checkups, you can detect any health threats early.
                                <StyledItemButton>
                                    Enroll
                                </StyledItemButton>                          
                            </StyledItemText>
                            </div>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <MonitorHeartIcon sx={{fontSize:'60px', color:'#fff'}}/>
                            </StyledItemHeader>
                            <div>
                            <StyledItemHeading>CADRIOGRAPHY</StyledItemHeading>
                            <StyledItemText>
                            Routine medical check-ups are a great way to stay on top of your health and wellness. It is easy to think that we are healthy and there is no need for a health check-up, but with regular medical checkups, you can detect any health threats early.
                                <StyledItemButton>
                                    Enroll
                                </StyledItemButton>                          
                            </StyledItemText>
                            </div>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <PeopleOutlineIcon sx={{fontSize:'60px', color:'#fff'}}/>
                            </StyledItemHeader>
                            <div>
                            <StyledItemHeading>THERAPY</StyledItemHeading>
                            <StyledItemText>
                            Routine medical check-ups are a great way to stay on top of your health and wellness. It is easy to think that we are healthy and there is no need for a health check-up, but with regular medical checkups, you can detect any health threats early.
                                <StyledItemButton>
                                    Enroll
                                </StyledItemButton>                          
                            </StyledItemText>
                            </div>
                        </StyledItemCard>
                    </Grid>
                </StyledBodyGrid>
            </StyledBody>
        <Footer/>
    </Fragment>
  )
}

export default QuestionAnswers