import { Button, AppBar,Box,Typography,Toolbar,} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NaVbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button >
            <Link to={'/'} style={{color:'white'}}>Login</Link>
            </Button>
            <Button>
            <Link to={'/r'} style={{color:'white'}}>Reg</Link>
            </Button>
            <Button>
            <Link to={'/t'} style={{color:'white'}}>Tabo</Link>
            </Button>
            <Button>
            <Link to={'/1'} style={{color:'white'}}>Cardss</Link>
                </Button>
                <Button>
            <Link to={'/s'} style={{color:'white'}}>StateBasic</Link>
                </Button>
                <Button>
            <Link to={'/ta'} style={{color:'white'}}>Task1</Link>
                </Button>


                
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NaVbar
