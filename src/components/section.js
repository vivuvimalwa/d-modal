import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { div } from 'framer-motion/client';
import { motion } from 'framer-motion';

export default function Section() {
    const image = 'https://images.unsplash.com/photo-1514037673804-5d655caba9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGl6YXJkfGVufDB8fDB8fHww'
    const image1 = 'https://plus.unsplash.com/premium_photo-1661658740167-45b56833412b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlfGVufDB8fDB8fHww'
  return (
    <div className='bg-white h-full w-full '>
     
        <div className=' max-h-[80vh] mt-[10vh] bg-[#091740]  shadow-2xl '>
            <div className='flex justify-evenly  w-full pt-8'>
            <div className=' w-[120%]'><p className=' text-white p-14 mx-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam tenetur ipsa quam tempore rerum, ducimus nam rem delectus, autem dolorem amet quas assumenda at beatae, inventore eaque accusantium suscipit.</p></div>
            <div className='  p-16 pt-[15px] '>
              
            <Card sx={{ maxWidth: 1000 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={image}
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
            </div>
        
        </div>
    
    </div>
  )
}
