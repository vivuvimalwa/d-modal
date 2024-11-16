import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { div } from 'framer-motion/client';

export default function Main() {
  const [path, setPath] = React.useState([
    { image: 'https://images.unsplash.com/photo-1514037673804-5d655caba9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGl6YXJkfGVufDB8fDB8fHww', id: 1 },
    { image: 'https://images.unsplash.com/photo-1513039763578-cf2c1c5f8750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpemFyZHxlbnwwfHwwfHx8MA%3D%3D', id: 2 },
    { image: 'https://images.unsplash.com/photo-1513568484386-6c8858456c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpemFyZHxlbnwwfHwwfHx8MA%3D%3D', id: 3 }
  ])


  return (
    <div>
      <div className=' h-[25vh] p-4 items-center flex justify-center'>
        <p className='text-center text-2xl font-bold text-black/65'>ORRAMO in 3 steps</p>
      </div>
      <div className=' justify-evenly flex mx-6'>

        {path.map((item) => {
          return (

            <div className='p-2' key={item.id}>

              <Card sx={{ maxWidth:240 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="80"
                  image={item.image}
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
              </Card></div>
          )
        })}


      </div>
    </div>
  );
}