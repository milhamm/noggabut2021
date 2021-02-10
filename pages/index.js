import BlogItems from 'components/Blog/BlogItems';
import Hero from 'components/Home/Hero';
import HomeSections from 'components/Home/HomeSections';
import OurPeople from 'components/Home/OurPeople';
import Layout from 'components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurPeople />
      <HomeSections title='Our Works' outlineTitle='Our Works'>
        <div className='w-full bg-blue-500 flex pt-12 px-24 rounded text-white'>
          <div className='flex-1 relative'>
            <img
              src='/images/works/tescov/tescov.png'
              alt=''
              className='w-64 h-64 bottom-0 absolute'
            />
          </div>
          <div className='flex-1'>
            <div className='italic text-lg'>Testcov.id</div>
            <h5 className='font-bold text-2xl mt-3'>
              Application to help find test spots and order
            </h5>
            <p className='text-white mt-6'>
              Assisting people in finding and ordering covid tests in Indonesia
              and get 1st place in the hackathon competition Devday RPLGDC
              Telkom University
            </p>
            <div className='grid grid-cols-2 mt-6 mb-12'>
              <div>
                <div className='text-sm'>Scope: Hackathon, Health</div>
              </div>
              <div>
                <div className='text-sm mb-4'>Other Creators</div>
                <img
                  src='/images/logo.jpg'
                  alt=''
                  className='w-10 h-10 rounded-full'
                />
              </div>
            </div>
          </div>
        </div>
      </HomeSections>
      <HomeSections title='New Releases' outlineTitle='New Releases'>
        <div className='grid grid-cols-2 gap-24'>
          <BlogItems
            title='Designing Data Science Tools at Spotify'
            category='Backend'
            image='/images/tes1.jpg'
            author='Muhammad Avtara Khrisna'
          />
          <BlogItems
            title='Designing Data Science Tools at Spotify'
            category='Backend'
            image='/images/tes1.jpg'
            author='Muhammad Avtara Khrisna'
          />
        </div>
        <div className='mx-auto static text-center mt-16 hover:underline cursor-pointer'>
          View All
        </div>
      </HomeSections>
    </Layout>
  );
}
