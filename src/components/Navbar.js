import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{fontWeight:920}}>
              Consult.io
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar