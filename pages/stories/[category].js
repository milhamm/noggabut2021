import Layout from 'components/Layout';
import Stories from 'components/StoriesPage/Stories';
import React from 'react';
import { useRouter } from 'next/router';
import fetcher from 'lib/fetcher';
import { capitalize } from 'utils/capitalize';

const StoriesCategoryPage = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;

  const meta = {
    title: `${capitalize(category)} Stories`,
    description: `See all of our ${capitalize(category)} stories `,
  };

  return (
    <Layout meta={meta}>
      <Stories category={category} posts={posts} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetcher('/stories/');
  const posts = res.data;

  const paths = posts.map((post) => ({
    params: { category: post.Tags[0] },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const posts = await fetcher(`/stories/${params.category}`);

  return {
    props: {
      posts: posts,
      initialZustandState: {
        category: params.category,
      },
    },
    revalidate: 1,
  };
}

export default StoriesCategoryPage;
