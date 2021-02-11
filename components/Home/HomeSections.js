import React from 'react';

const HomeSections = ({ title, outlineTitle, children }) => {
  return (
    <div className='max-w-6xl mx-auto w-full relative mb-16 lg:mb-32 px-6'>
      <h5 className='text-center block font-bold text-4xl z-10 relative mb-12'>
        {title}
      </h5>
      <span className='hidden lg:inline text-outline absolute lg:-top-10 right-6 lg:-right-20 font-bold z-0 text-5xl lg:text-9xl text-transparent select-none overflow-hidden overflow-clip'>
        {outlineTitle}
      </span>
      {children}
    </div>
  );
};

export default HomeSections;
