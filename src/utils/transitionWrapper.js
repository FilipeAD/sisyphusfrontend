// TransitionWrapper.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: "-100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100%" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const TransitionWrapper = ({ children }) => {
  const isContentAnimated = !children.props.noAnimation; // Check for a prop to determine if animation is needed

  return (
    <AnimatePresence exitBeforeEnter={false} mode="wait">
      {isContentAnimated ? (
        <motion.div
          key={window.location.pathname}
          variants={pageVariants}
          transition={pageTransition}
          initial="initial"
          animate="in"
          exit="out"
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
};

export default TransitionWrapper;

