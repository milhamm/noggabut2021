import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import BlogItems from 'components/Blog/BlogItems';
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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const settings = {
  centerMode: true,
  slidesToShow: 3,
  infinite: true,
  focusOnSelect: true,
  speed: 0,
  swipe: false,
  centerPadding: '128px',
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        infinite: true,
        focusOnSelect: true,
        speed: 0,
        swipe: false,
        centerPadding: '52px',
        arrows: false,
        dots: false,
      },
    },
  ],
};

const categories = [
  { title: 'All Stories', url: '' },
  { title: 'Backend', url: 'backend' },
  { title: 'Experiences', url: 'experiences' },
  { title: 'Personal', url: 'personal' },
];

const StoriesSection = ({ category = '' }) => {
  const initialSlide = categories.map((val) => val.url).indexOf(category);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.slickGoTo(initialSlide, true);
  }, [category, sliderRef]);

  return (
    <div className='container mx-auto mb-32 px-6'>
      <div className='text-center font-bold text-3xl lg:text-5xl'>Stories</div>
      <div className='mt-8'>
        <Slider {...settings} initialSlide={initialSlide} ref={sliderRef}>
          {categories.map(({ title, url }) => (
            <span className='focus: outline-none py-3' key={title}>
              <Link href={`/stories/${url}`}>
                <a>
                  <h3 className='font-bold text-4xl lg:text-6xl text-center lg:mx-4 cursor-pointer focus:ring-0 focus:outline-none whitespace-nowrap'>
                    {title}
                  </h3>
                </a>
              </Link>
            </span>
          ))}
        </Slider>
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

export default StoriesSection;
