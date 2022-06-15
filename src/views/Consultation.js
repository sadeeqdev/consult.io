import { styled } from '@mui/system'
import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Button, Grid } from "@mui/material"

const Consultation = () => {

  const StyledBanner = styled('div')(({theme})=>({
    width: '100%',
    height: 370,
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

  const StyledTitleBlock = styled('div')(({theme}) => ({
    marginTop:'100px',
    fontSize:'35px',
    fontWeight:600,
    color:'#07163a'
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
      height:'670px',
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      display:'flex',
      justifyContent: 'center'
      }))

  const StyledItemHeading = styled(Grid)(({theme}) => ({
      textAlign:'center',
      fontSize:'23px',
      fontWeight:600,
      paddingTop:'40px',
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
                    <StyledItemHeading>One-time</StyledItemHeading>
                    <StyledItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <StyledItemButton>
                            Enroll
                        </StyledItemButton>                          
                    </StyledItemText>
                    </div>
                </StyledItemCard>
            </Grid>
            <Grid item md={4} xs={12}>
                <StyledItemCard>
                    <div>
                    <StyledItemHeading>Monthly</StyledItemHeading>
                    <StyledItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <StyledItemButton>
                            Enroll
                        </StyledItemButton>                          
                    </StyledItemText>
                    </div>
                </StyledItemCard>
            </Grid>
            <Grid item md={4} xs={12}>
                <StyledItemCard>
                    <div>
                    <StyledItemHeading>Yearly</StyledItemHeading>
                    <StyledItemText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

export default Consultation