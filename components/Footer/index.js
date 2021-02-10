import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='h-full max-w-6xl mx-auto relative'>
        <span className='text-outline absolute -top-10 -right-20 font-bold z-0 text-9xl text-transparent select-none'>
          Contact Us
        </span>
        <div className='w-2/3 text-4xl font-bold z-10 relative leading-snug'>
          If you're looking for someone that does amazing work and has relevant
          experience, we are a perfect match.
        </div>
        <strong className='text-4xl font-bold underline cursor-pointer mt-6 block text-blue-500'>
          Let’s make your dream app
        </strong>
      </div>
      <div className='bg-black mt-24'>
        <div className='container mx-auto px-6 flex justify-between text-white py-12'>
          <p>© 2021 DoubleEng</p>
          <p>
            Follow us for more thoughts and updates on{' '}
            <span className='underline cursor-pointer'>Github</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
