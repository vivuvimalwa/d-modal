import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <motion.div className="home container transition" 
    initial={{opacity:0,marginTop:600,width:20}}
    animate={{ opacity:0.9,marginTop:100,background:'#add',width:600,borderRadius:10}}
    transition={{delay:0.5,duration:0.3}}
    >
      <motion.h2 initial={{color:'white'}} animate={{color:'blue',fontSize:25,fontWeight:'bold'}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>
          <motion.span initial={{marginLeft:-920,opacity:0}} animate={{marginLeft:0,opacity:0.9,color:'#000'}}>Create Your Pizza</motion.span>
        </button>
      </Link>
    </motion.div>
  )
}

export default Home;