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

const Stories = ({ category = '', posts = [] }) => {
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
        {posts.data &&
          posts.data.map(({ slug, title, thumbnail, author, Tags }) => (
            <motion.div variants={listItem}>
              <BlogItems
                id={slug}
                title={title}
                category={Tags}
                image={thumbnail}
                author={author.name}
              />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Stories;
