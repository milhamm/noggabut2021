import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='container px-6 mx-auto flex justify-center flex-col h-96 mb-32'>
      <motion.h1
        className='font-bold text-5xl leading-loose'
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Hello, We are DoubleEng
      </motion.h1>
      <motion.h4 className='text-2xl'>A group that needs money</motion.h4>
    </div>
  );
};

export default Hero;
