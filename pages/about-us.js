import Layout from 'components/Layout';
import React from 'react';

const meta = {
  title: 'About Us',
};

const AboutUsPage = () => {
  return (
    <Layout meta={meta}>
      <div className='container mx-auto px-6 flex flex-col lg:flex-row flex-wrap mb-24 lg:mb-32'>
        <h1 className='flex-2 font-medium text-3xl mb-3'>About</h1>
        <div className='flex-2 mb-12 lg:mb-24'>
          We are both student from Telkom University, Bandung. We are interested
          in the field of computer science and likes challenges and
          competitions. We are a group of 2 people
        </div>
        <h1 className='flex-2 font-medium text-3xl mb-3'>Achievement</h1>
        <div className='flex-2'>
          <p>
            <strong>First Place</strong> DEVDAY Hackathon RPLGDC: Telkom
            University
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
