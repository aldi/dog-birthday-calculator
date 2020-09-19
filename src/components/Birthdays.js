import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 100,
    y: '-2rem',
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 120,
      ease: 'easeInOut',
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
      <p className="title is-4" id="modaltitle">
        Upcoming birthdays for {name}:
      </p>
      <motion.div className="dates" variants={containerVariants} initial="hidden" animate="visible">
        {datesArr.map((date, index) => (
          <motion.p key={index} className="subtitle is-4 dates" variants={childrenVariants}>
            {date}
          </motion.p>
        ))}
      </motion.div>
    </>
  );
}
