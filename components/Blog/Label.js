import React from 'react';
import { motion } from 'framer-motion';

const Label = ({ text, ...rest }) => {
  return (
    <motion.span
      className='bg-black px-4 py-2 text-white rounded mr-2'
      {...rest}
    >
      {text}
    </motion.span>
  );
};

export default Label;
