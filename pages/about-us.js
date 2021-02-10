import Layout from 'components/Layout';
import React from 'react';

const AboutUsPage = () => {
  return (
    <Layout>
      <div className='container mx-auto px-6 flex flex-wrap mb-32'>
        <h1 className='flex-2 font-medium text-3xl'>About</h1>
        <div className='flex-2 mb-24'>
          We both are students at one of the universities in the Bandung area,
          namely Telkom University, who is interested in the field of computer
          science and likes challenges and competitions, which consists of 2
          core players
        </div>
        <h1 className='flex-2 font-medium text-3xl'>Achievement</h1>
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
