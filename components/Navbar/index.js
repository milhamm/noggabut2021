import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  return (
    <div className='py-8 lg:py-24 container px-6 mx-auto flex justify-between'>
      <Link href='/'>
        <a>
          <img
            title='Yes, this is our logo :p'
            src='/images/logo.jpg'
            className='w-12 h-12 rounded-full cursor-pointer'
          />
        </a>
      </Link>
      <motion.div
        className='flex items-center'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.span className='cursor-pointer' variants={listItem}>
          <Link href='/stories'>
            <a>Stories</a>
          </Link>
        </motion.span>

        <motion.span className='cursor-pointer mx-8' variants={listItem}>
          <Link href='/about-us'>
            <a>About Us</a>
          </Link>
        </motion.span>
        <motion.span className='cursor-pointer' variants={listItem}>
          <Link href='/contact-us'>
            <a>👋</a>
          </Link>
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Navbar;
