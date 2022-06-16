import { styled } from '@mui/system'
import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Button, Grid } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Consultation = () => {

  const StyledBanner = styled('div')(({theme})=>({
    width: '100%',
    height: 350,
    backgroundColor: '#07163a',
    color: 'white',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        width: '100%',
        height:'250px',
        paddingBottom:'30px',
    }
  }))

  const StyledBannerDiv = styled('div')(({theme})=>({
      width: '60%',
      margin: 'auto',
      [theme.breakpoints.down('md')]:{
          width:'100%',
      },
      [theme.breakpoints.up('xl')]:{
          width:'50%',
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
          paddingTop:'80px',
          fontSize:'16px',
          lineHeight: '20px',
      }
  }))

  const StyledBody = styled('div')(({theme}) => ({
      width:'70%',
      margin:'-150px auto auto auto',
      [theme.breakpoints.down('md')]:{
        width:'90%',
      },
      [theme.breakpoints.up('xl')]:{
          width:'60%',
      }
  }))

  const StyledBodyGrid = styled(Grid)(({theme}) => ({
      marginTop:'65px',
  }))

  const StyledItemCard = styled(Grid)(({theme}) => ({
      width:'100%',
      backgroundColor:'#fff',
      height:'auto',
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  }))

  const StyledItemHeading = styled(Grid)(({theme}) => ({
      textAlign:'center',
      fontSize:'23px',
      fontWeight:600,
      paddingTop:'40px',
      color:'#222'
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
      color:'#444'
  }))

  const StyledCheckButton = styled(CheckCircleIcon)(({theme}) =>({
    marginBottom:'-5px',
    color:'green'
  }))

  const StyledCancelButton = styled(CancelIcon)(({theme}) =>({
    marginBottom:'-5px',
    color:'#e13636'
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
                      <ul style={{padding:10, fontSize:'20px', lineHeight:'40px', color:'#333', textDecoration:'none', listStyle:'none'}}>
                        <li><StyledCheckButton/> 12 months of care</li>
                        <li><StyledCheckButton/> 7-part health plan</li>
                        <li><StyledCheckButton/> Health plan updates</li>
                        <li><StyledCancelButton/> CMS Integration</li>
                        <li><StyledCancelButton/> Email & SMS reminders</li>
                        <li><StyledCancelButton/> Drop-in-Lab</li>
                        <li><StyledCancelButton/> Expert only</li>
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
                      <ul style={{padding:10, fontSize:'20px', lineHeight:'40px', color:'#333', textDecoration:'none', listStyle:'none'}}>
                        <li><StyledCheckButton/> 12 months of care</li>
                        <li><StyledCheckButton/> 7-part health plan</li>
                        <li><StyledCheckButton/> Health plan updates</li>
                        <li><StyledCheckButton/> CMS Integration</li>
                        <li><StyledCheckButton/> Email & SMS reminders</li>
                        <li><StyledCancelButton/> Drop-in-Lab</li>
                        <li><StyledCancelButton/> Expert only</li>
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
                      <ul style={{padding:10, fontSize:'20px', lineHeight:'40px', color:'#333', textDecoration:'none', listStyle:'none'}}>
                        <li><StyledCheckButton/> 12 months of care</li>
                        <li><StyledCheckButton/> 7-part health plan</li>
                        <li><StyledCheckButton/> Health plan updates</li>
                        <li><StyledCheckButton/> CMS Integration</li>
                        <li><StyledCheckButton/> Email & SMS reminders</li>
                        <li><StyledCheckButton/> Drop-in-Lab</li>
                        <li><StyledCheckButton/> Expert only</li>
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