import { Button,TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>welcome to react </h1>
      <input type="text" placeholder="type here"/>
      <br />
      <input type = "password" placeholder=" type here"/>
      <br />
      <button>login</button>
      <Typography variant= "h1">welcome to meterial ui</Typography>
      <br />
      <TextField variant = "outlined" label= "username"/>
      <br />
      <TextField   variant="filled" label="password" />
      <br />
      <TextField  variant="standard" label="password"  />
      <br />
      <Button variant="text">Text</Button>
      <br />
      <Button variant="contained">Contained</Button>
      <br />
      <Button variant="outlined">Outlined</Button>
      <br />

      <br />

    </div>
  )
}

export default First
