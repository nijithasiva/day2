import { Typography,Button } from '@mui/material'
import React from 'react'

const Task1 = () => {

    var[var1,setvar1]=useState()
    const changeH=()=>{
        setvar1("home")
    }
    const cahnGeh=()=>{
        setvar1("gellery")
    }
  return (
    <div>
        <Typography variant="h3">welcome</Typography>
        <br />
        <button variant="contained"color='blue' onClick={changeH}>
        home 
        </button>
      <br />
      <button variant="contained"color='blue' onClick={changGa}>
        gallery
        </button>
        <button variant="contained"color='blue' onClick={changCo}>
        Contact
        </button>
       

    </div>
  )
}

export default Task1
