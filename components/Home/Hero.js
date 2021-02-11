import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='container px-6 mx-auto flex justify-center flex-col h-32 lg:h-96 mb-32'>
      <motion.h1
        className='font-bold text-4xl lg:text-5xl leading-loose'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Hello, We are DoubleEng
      </motion.h1>
      <motion.h4
        className='text-lg lg:text-2xl'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        A group that needs money
      </motion.h4>
    </div>
  );
};

export default Hero;
