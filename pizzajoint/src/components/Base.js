import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    scale: 0.2
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition:  {
      type: 'spring',
      delay: 0.5,
      stiffness: 120
    }
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw',

  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants = { containerVariants }
      initial = "hidden"
      animate = "visible" // THESE PROPERIES WILL PROPOGATE DOWN TO CHILDREN
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li 
              key={base} 
              onClick={() => addBase(base)}
              whileHover={{
                color: "#FEFD75",
                textShadow: "0px 0px 8px #FEFD75",
                scale: 1.3,
                originX: 0
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants = { nextVariants } // Stiffness only with Spring type.
          //initial = "hidden"
          //animate = "visible" // IF I DONT SPECIFY THIS STILL IT WILL WORK BECAUSE
          // PARENT animate and inital are propogated to children and  the variant defined here
          // Implements the properties passed by the parent so yeah it will work.
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                textShadow: "0px 0px 8px rgb(255,255,255)"
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;