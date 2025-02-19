import { Card,CardMedia,CardContent,Typography,CardActions, Button} from '@mui/material'
import React from 'react'

const Cardss = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Cardss
