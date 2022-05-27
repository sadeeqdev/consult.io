import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderText = styled('h2')({
    color:'#fff',
    fontWeight:'900',
    fontSize:'23px'
})


const StyledToolBar = styled(Toolbar)({
    width:'90%', 
    margin:'auto', 
    display:'flex', 
    justifyContent:'space-between',
    boxShadow:'0px'
})

const StyledMenuButton = styled(Button)({
    color:"#fff",
    fontWeight:700,
    fontSize:'13px'
})

const StyledLoginButton = styled(Button)({
    color:'#333',
    fontWeight:800,
    backgroundColor:'#fff',
    borderRadius:'20px',
    width:'120px',
    '&:hover':{backgroundColor:'#2f53a5', color:'white'}
})

const Navbar = () => {
  return (
    <div>
        <AppBar position="fixed" sx={{backgroundColor:'#07163a', boxShadow:'none'}} > 
                <StyledToolBar>
                    <HeaderText>Consulta.io</HeaderText>
                    <Box direction="row" sx={{display:{xs:'none', sm:'block'}}}>
                        <StyledMenuButton variant="body1">
                            Home
                        </StyledMenuButton>
                        <StyledMenuButton variant="body1">
                            Services
                        </StyledMenuButton>
                        <StyledMenuButton variant="body1">
                            Question & Answer 
                        </StyledMenuButton>
                        <StyledMenuButton variant="body1">
                            Consultation
                        </StyledMenuButton>
                        <StyledMenuButton variant="body1">
                            Articles
                        </StyledMenuButton>
                    </Box>
                    <Box >
                        <StyledLoginButton sx={{display:{xs:'none', sm:'block'}}}>
                            Log in
                        </StyledLoginButton>
                        <IconButton sx={{display:{xs:'block', sm:'none', color:'white'}}}>
                          <MenuIcon/>
                        </IconButton>
                    </Box>
                </StyledToolBar>
        </AppBar>
    </div>
  )
}

export default Navbar