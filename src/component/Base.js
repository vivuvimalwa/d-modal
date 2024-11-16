import React from 'react';
import { Link } from 'react-router-dom';
import { delay, motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
    initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{delay:0.2,type:'spring',stiffness:120}}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next " initial={{x:'-100vh'}} animate={{x:0}} 
        transition={{type:'spring' ,stiffness:120}}
        >
          <Link to="/toppings">
            <motion.button
             whileHover={{scale:1.1,boxShadow: "0px 0px 8px #ffffff" }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;