import { Button, TextField ,} from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
        var[fname,setFname]=useState("nijitha")
        var[car,setCar]=useState("celerio")
        const nameChange=() =>{
          setFname(car)
        };
        const inputHandler =(e)=>{
            console.log(e.target.value)
            setCar(e.target.value)
        }
        
      return (
        <div>
          <h1>hello {fname}</h1>
          <TextField variant = "outlined" label= "text" onChange={inputHandler}/>
          <br />
          <Button variant="contained" onClick={nameChange}> 
          change
          </Button>
    
           
        
        </div>
      )
    }
    
    export default StateBasic
    