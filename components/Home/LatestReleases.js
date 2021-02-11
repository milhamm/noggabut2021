import BlogItems from 'components/Blog/BlogItems';
import Link from 'next/link';
import React from 'react';
import HomeSections from './HomeSections';

const LatestReleases = () => {
  return (
    <HomeSections title='New Releases' outlineTitle='New Releases'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24'>
        <BlogItems
          id='1-home'
          title='Designing Data Science Tools at Spotify'
          category='Backend'
          image='/images/tes1.jpg'
          author='Muhammad Avtara Khrisna'
        />
        <BlogItems
          id='2-home'
          title='Proclub Experience'
          category='Backend'
          image='/images/tes1.jpg'
          author='Muhammad Avtara Khrisna'
        />
      </div>

      <Link href='/stories'>
        <a>
          <div className='mx-auto static text-center mt-16 underline cursor-pointer'>
            View All
          </div>
        </a>
      </Link>
    </HomeSections>
  );
};

export default LatestReleases;
