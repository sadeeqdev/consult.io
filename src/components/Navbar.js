import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

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

    const navigate = useNavigate()

  return (
    <div>
        <AppBar position="fixed" sx={{backgroundColor:'#07163a', boxShadow:'none', position:'fixed'}} > 
                <StyledToolBar>
                    <HeaderText>Consulta.io</HeaderText>
                    <Box direction="row" sx={{display:{xs:'none', md:'block'}}}>
                        <StyledMenuButton onClick={() => navigate("/")} variant="body1">
                            Home
                        </StyledMenuButton>
                        <StyledMenuButton  onClick={() => navigate("/services")} variant="body1">
                            Services
                        </StyledMenuButton>
                        <StyledMenuButton onClick={() => navigate("/faq")} variant="body1">
                            Question & Answer 
                        </StyledMenuButton>
                        <StyledMenuButton onClick={() => navigate("/consult")} variant="body1">
                            Consultation
                        </StyledMenuButton>
                        <StyledMenuButton onClick={() => navigate("/blog")} variant="body1">
                            Articles
                        </StyledMenuButton>
                    </Box>
                    <Box >
                        <StyledLoginButton onClick={() => navigate("/login")} sx={{display:{xs:'none', md:'block'}}}>
                            Log in
                        </StyledLoginButton>
                        <IconButton sx={{display:{xs:'block', md:'none', color:'white'}}}>
                          <MenuIcon/>
                        </IconButton>
                    </Box>
                </StyledToolBar>
        </AppBar>
    </div>
  )
}

export default Navbar