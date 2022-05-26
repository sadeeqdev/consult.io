import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderText = styled('h2')({
    color:'#fff',
    fontWeight:'950',
    fontSize:'20px'
})


const StyledToolBar = styled(Toolbar)({
    width:'90%', 
    margin:'auto', 
    display:'flex', 
    justifyContent:'space-between',
})

const StyledMenuButton = styled(Button)({
    color:"#fff",
    fontWeight:700,
    fontSize:'13px'
})

const StyledLoginButton = styled(Button)({
    color:'#333',
    backgroundColor:'#fff',
    borderRadius:'20px',
    width:'120px'
})

const Navbar = () => {
  return (
    <div>
        <AppBar position="sticky" sx={{backgroundColor:'#07163a'}} > 
                <StyledToolBar>
                    <HeaderText>Consult.io</HeaderText>
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