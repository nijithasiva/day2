import {Button, Typography,TextField } from "@mui/material" 
import React from 'react'

const Reg = () => {
  return (
    <div>
        <br />
        <Typography variant= "h1">Registration form</Typography><br />
        <br />
        <TextField variant = "outlined" label= "name"/>
        <br /><br />
        <TextField variant = "outlined" label= "age"/>
        <br /><br />

        <TextField variant = "outlined" label= "place"/>
        <br /><br />
        <TextField variant = "outlined" label= "username"/>
        <br /><br />
        <TextField variant = "outlined" label= "password"/>
        <br /><br />
        <Button variant="contained" color="primary">login</Button>
        <br /><br />


      
    </div>
  )
}

export default Reg
