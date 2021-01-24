import React from 'react'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0},
    exit: { opacity: 0}
}

const modalVariants = {
    hidden: {
        y : '-100vh',
        opacity : 0,
        scale: 0.2
    },
    visible: {
        y: 200,
        opacity: 1,
        scale: 1,
        transition: { delay: 0.5 }
    },
    exit: {
        y: '100vh',
        opacity: 0,
        scale: 0.2,
        transition: {
            ease: "easeOut",
        }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    const handleClick = () => {
        setShowModal(false); // Doesn't work if we go back!!!
    }
    return (  
        <AnimatePresence exitBeforeEnter>
            { showModal &&
                <motion.div 
                    className = "backdrop"
                    variants= { backdropVariants }
                    animate = "visible"
                    initial = "hidden"
                    exit = "exit"
                >
                    <motion.div 
                        className = "modal"
                        variants = { modalVariants }
                    >
                        <p>Want to make another pizza?</p>
                        <Link to="/">
                            <button onClick = { handleClick }>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Modal;