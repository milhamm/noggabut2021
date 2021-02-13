import React from 'react';
import HomeSections from './HomeSections';

const OurWorks = () => {
  return (
    <HomeSections title='Our Works' outlineTitle='Our Works'>
      <div className='w-full bg-blue-500 flex flex-col lg:flex-row px-6 pt-10 lg:pt-12 lg:px-24 rounded text-white'>
        <div className='flex-1 relative h-64 lg:h-auto'>
          <img
            src='/images/works/tescov/tescov.png'
            alt=''
            className='w-52 h-52 lg:w-64 lg:h-64 -top-16 bottom-none lg:top-auto lg:bottom-0 absolute'
          />
        </div>
        <div className='flex-1 mt-48 lg:mt-0'>
          <div className='italic text-lg'>Testcov.id</div>
          <h5 className='font-bold text-2xl mt-3'>
            Application to help find test spots and order
          </h5>
          <p className='text-white mt-6'>
            Assisting people in finding and ordering covid tests in Indonesia
            and get 1st place in the hackathon competition Devday RPLGDC Telkom
            University
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 mb-12 gap-1'>
            <div className='mb-8'>
              <div className='text-sm'>Scope: Hackathon, Health</div>
            </div>
            <div>
              <div className='text-sm mb-4'>Other Creators</div>
              <div className='flex items-center'>
                <img
                  src='/images/logo.jpg'
                  alt=''
                  className='w-10 h-10 rounded-full mr-4'
                />
                <p>Ditya Athallah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeSections>
  );
};

export default OurWorks;
