import React from 'react';
import BlogItems from 'components/Blog/BlogItems';
import { motion } from 'framer-motion';
import CategorySlider from './CategorySlider';

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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Stories = ({ category = '' }) => {
  return (
    <div className='container mx-auto mb-32 px-6'>
      <div className='text-center font-bold text-3xl lg:text-5xl'>Stories</div>
      <div className='mt-8'>
        <CategorySlider category={category} />
      </div>
      <motion.div
        className='grid grid-cols-1 lg:grid-cols-3 gap-14 mt-12'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.div variants={listItem}>
          <BlogItems
            id='1'
            title='Proclub Experience'
            category='Backend'
            image='/images/tes1.jpg'
            author='Muhammad Avtara Khrisna'
          />
        </motion.div>
        <motion.div variants={listItem}>
          <BlogItems
            id='2'
            title='Designing Data Science Tools at Spotify'
            category='Backend'
            image='/images/tes1.jpg'
            author='Muhammad Avtara Khrisna'
          />
        </motion.div>
        <motion.div variants={listItem}>
          <BlogItems
            id='3'
            title='Designing Data Science Tools at Spotify'
            category='Backend'
            image='/images/tes1.jpg'
            author='Muhammad Avtara Khrisna'
          />
        </motion.div>
        <motion.div variants={listItem}>
          <BlogItems
            id='4'
            title='Designing Data Science Tools at Spotify'
            category='Backend'
            image='/images/tes1.jpg'
            author='Muhammad Avtara Khrisna'
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Stories;
