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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
      className="toppings container"
      variants = { containerVariants }
      initial = "hidden"
      animate = "visible"
      exit = {{ x: '-100vw', transition: { ease: "easeInOut" } }}
    >  
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li 
              key={topping} 
              onClick={() => addTopping(topping)}
              whileHover={{
                color: '#FEFD75',
                textShadow: "0px 0px 8px #FEFD75",
                scale: 1.3,
                originX: 0
              }}
              transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button 
          whileHover = {{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            textShadow: "0px 0px 8px rgb(255,255,255)"
          }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;