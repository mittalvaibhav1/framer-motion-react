import React from 'react';
import { Link } from 'react-router-dom';
import { motion }  from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1 , //[1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1] //Keyframes
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity, //10 // 10 Keyframes
      duration: 0.6
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1.5 }} // Duration only with tween type
      exit = {{ x: '-100vw', transition: { ease: "easeInOut" } }}
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button 
          animate = "visible"
          variants = { buttonVariants }
          whileHover = "hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;