import { Button, Grid } from "@mui/material"
import { styled } from "@mui/system"

const Footer = () => {

    const StyledFooter = styled(Grid)(({theme}) => ({
        width:'100%',
        height:'auto',
        backgroundColor:'#07163a',
        color:'white',
        margin:'auto',
        marginTop:'50px',
        [theme.breakpoints.down('md')]:{
            height:'auto',
        },
    }))

    const StyledInerGrid = styled(Grid)(({theme}) => ({
        width:'70%', 
        margin:'20px auto',
        [theme.breakpoints.down('xl')]:{
            width:'80%', 
        },
    }))

    const StyledGridHeader = styled('div')(({theme}) => ({
        fontSize:'20px',
        fontWeight:500,
        margin:'15px 0px',
        [theme.breakpoints.down('md')]:{
            fontSize:'17px',
            fontWeight:700,
    },
    }))

    const StyledGridText = styled('div')(({theme}) => ({
        backgoundColor:'#07163a',
        fontSize:'17px',
        fontWeight:400,
        display:'block',
        margin:'3px 0',
        color:'white',
        [theme.breakpoints.down('md')]:{
            fontSize:'16px',
            fontWeight:300,
        },
    }))

    const StyledGridLogo = styled('div')(({theme}) => ({
        margin:'12px 0px',
        fontSize:'30px',
        fontWeight:700,
        [theme.breakpoints.down('md')]:{
            fontSize:'22px',
        },
    }))

    const StyledGridButton = styled(Button)(({theme}) => ({
        backgoundColor:'#07163a',
        fontSize:'12px',
        fontWeight:600,
        display:'block',
        margin:'3px 0',
        color:'white',
        paddingLeft:'0px',
        [theme.breakpoints.down('md')]:{
            fontWeight:500,
        },
    }))

  return (
    <StyledFooter container>
        <StyledInerGrid container>
          <Grid item sm={3} xs={6}>
              <StyledGridHeader>
                  Our Services
              </StyledGridHeader>
              <StyledGridButton>Consultation</StyledGridButton>
              <StyledGridButton>Therapy</StyledGridButton>
              <StyledGridButton>Quick Response</StyledGridButton>
              <StyledGridButton>Guidance</StyledGridButton>
          </Grid>
          <Grid item sm={3} xs={6}>
                <StyledGridHeader>
                  Terms & Condition
              </StyledGridHeader>
              <StyledGridButton>Service</StyledGridButton>
              <StyledGridButton>Tips & Jesks</StyledGridButton>
              <StyledGridButton>Security</StyledGridButton>
              <StyledGridButton>FindOut</StyledGridButton>
              
          </Grid>
          <Grid item sm={3} xs={6}>
                <StyledGridHeader>
                    Information
                </StyledGridHeader>
              <StyledGridButton>Instagram</StyledGridButton>
              <StyledGridButton>Facebook</StyledGridButton>
              <StyledGridButton>Twitter</StyledGridButton>
              <StyledGridButton>LinkedIn</StyledGridButton>

          </Grid>
          <Grid item sm={3} xs={6}>
            <StyledGridLogo>
                Consulta.io
            </StyledGridLogo>
            <StyledGridText>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                 <br/>
                 <br/>
                 Copyright 2022 - All Rights Reserved
            </StyledGridText>

          </Grid>
        </StyledInerGrid>
    </StyledFooter>
  )
}

export default Footer