import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 120,
      ease: 'easeOut',
      damping: 20,
    },
  },
  whileHover: {
    scale: 1.5,
  },
};

export default function Birthdays({ name, datesArr }) {
  return (
    <>
      <p className="title is-3 mt-4 mb-2">Upcoming birthdays for {name}:</p>
      <motion.div className="dates" variants={containerVariants} initial="hidden" animate="visible">
        {datesArr.map((date, index) => (
          <motion.p key={index} className="subtitle is-4 mb-2" variants={childrenVariants}>
            {date}
          </motion.p>
        ))}
      </motion.div>
    </>
  );
}
