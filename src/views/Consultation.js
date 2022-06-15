import { styled } from '@mui/system'
import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Button, Grid } from "@mui/material"

const Consultation = () => {

  const StyledBanner = styled('div')(({theme})=>({
    width: '100%',
    height: 350,
    backgroundColor: '#07163a',
    color: 'white',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        width: '100%',
        height:'auto',
        paddingBottom:'30px',
    }
  }))

  const StyledBannerDiv = styled('div')(({theme})=>({
      width: '70%',
      margin: 'auto',
      [theme.breakpoints.down('md')]:{
          width:'100%',
      },
      [theme.breakpoints.up('xl')]:{
          width:'70%',
      }
  }))

  const StyledBannerHeader = styled('div')(({theme})=>({
      fontWeight:400,
      fontSize:'55px',
      paddingTop:'10px',
      [theme.breakpoints.down('md')]:{
          width:'90%',
          height:'auto',
          margin:'auto',  
          fontSize:'px',
          color:'#fff',
      },
      [theme.breakpoints.down('lg')]:{
          fontSize:'30px',
      }
  }))

  const StyledBannerText = styled('div')(({theme})=>({
      fontSize:'20px',
      lineHeight: '10px',
      paddingTop:'120px',
      [theme.breakpoints.down('md')]:{
          paddingTop:'20px',
          fontSize:'16px',
          lineHeight: '20px',
      }
  }))

  const StyledBody = styled('div')(({theme}) => ({
      width:'60%',
      margin:'-150px auto auto auto',
  }))

  const StyledBodyGrid = styled(Grid)(({theme}) => ({
      marginTop:'65px',
  }))

  const StyledItemCard = styled(Grid)(({theme}) => ({
      width:'100%',
      backgroundColor:'#fff',
      height:'570px',
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      }))

  const StyledItemHeading = styled(Grid)(({theme}) => ({
      textAlign:'center',
      fontSize:'23px',
      fontWeight:600,
      paddingTop:'40px',
  }))

  const StyledItemText = styled(Grid)(({theme}) => ({
      padding:'20px 30px 15px 30px'
  }))

  const StyledItemButton = styled(Button)({
      width:'100%',
      height:'45px',
      backgroundColor:'#07163a',
      color: '#fff',
      bottom: 0,
      fontWeight: '900',
      '&:hover':{backgroundColor:'#2f53a5', color:'white'}
  })

  const StyledHeaderText = styled('div')(({theme}) => ({
      textAlign:'center',
      fontSize:'16px',
  }))

  return (
    <Fragment>
      <Navbar/>
      <StyledBanner>
        <StyledBannerDiv>
            <StyledBannerText>
              Regular Member Pricing
            </StyledBannerText>
            <StyledBannerHeader>
              Choose a plan that works for you
            </StyledBannerHeader>
        </StyledBannerDiv>
      </StyledBanner>
      <StyledBody>
        <StyledBodyGrid container spacing={2}>
            <Grid item md={4} xs={12}>
            <StyledItemCard>
                    <div>
                    <StyledItemHeading>Basic Care</StyledItemHeading>
                    <StyledItemText>
                      <StyledHeaderText>
                        <span style={{fontSize:'40px', fontWeight:'700'}}>$75</span>/year
                      </StyledHeaderText>
                      <ul style={{padding:15, fontSize:'20px', lineHeight:'40px', color:'#333'}}>
                        <li>12 months of care</li>
                        <li>7-part health plan</li>
                        <li>Health plan updates</li>
                        <li>CMS Integration</li>
                        <li>Email & SMS reminders</li>
                        <li>Drop-in-Lab</li>
                        <li>Expert only</li>
                      </ul>    
                      <StyledItemButton>
                            Select
                        </StyledItemButton>                          
                    </StyledItemText>
                    </div>
                </StyledItemCard>
            </Grid>
            <Grid item md={4} xs={12}>
                <StyledItemCard>
                    <div>
                    <StyledItemHeading>Regular Care</StyledItemHeading>
                    <StyledItemText>
                      <StyledHeaderText>
                        <span style={{fontSize:'40px', fontWeight:'700'}}>$150</span>/year
                      </StyledHeaderText>
                      <ul style={{padding:15, fontSize:'20px', lineHeight:'40px', color:'#333'}}>
                        <li>12 months of care</li>
                        <li>7-part health plan</li>
                        <li>Health plan updates</li>
                        <li>CMS Integration</li>
                        <li>Email & SMS reminders</li>
                        <li>Drop-in-Lab</li>
                        <li>Expert only</li>
                      </ul>    
                      <StyledItemButton>
                         Select
                      </StyledItemButton>    
                                          
                    </StyledItemText>
                    </div>
                </StyledItemCard>
            </Grid>
            <Grid item md={4} xs={12}>
                <StyledItemCard>
                    <div>
                    <StyledItemHeading>Ultimate Care</StyledItemHeading>
                    <StyledItemText>
                      <StyledHeaderText>
                        <span style={{fontSize:'40px', fontWeight:'700'}}>$280</span>/year
                      </StyledHeaderText>
                      <ul style={{padding:15, fontSize:'20px', lineHeight:'40px', color:'#333'}}>
                        <li>12 months of care</li>
                        <li>7-part health plan</li>
                        <li>Health plan updates</li>
                        <li>CMS Integration</li>
                        <li>Email & SMS reminders</li>
                        <li>Drop-in-Lab</li>
                        <li>Expert only</li>
                      </ul>    
                      <StyledItemButton>
                            Select
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

export default Consultation