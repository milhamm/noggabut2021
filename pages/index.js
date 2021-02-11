import BlogItems from 'components/Blog/BlogItems';
import Hero from 'components/Home/Hero';
import HomeSections from 'components/Home/HomeSections';
import LatestReleases from 'components/Home/LatestReleases';
import OurPeople from 'components/Home/OurPeople';
import OurWorks from 'components/Home/OurWorks';
import Layout from 'components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurPeople />
      <OurWorks />
      <LatestReleases />
    </Layout>
  );
}
