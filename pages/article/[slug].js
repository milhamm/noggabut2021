import Label from 'components/Blog/Label';
import Layout from 'components/Layout';
import React from 'react';
import { motion } from 'framer-motion';
import fetcher from 'lib/fetcher';
import { useStore } from 'lib/zustandProvider';
import { useRouter } from 'next/router';

const ArticlePage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading . . .</div>;
  }

  const { category } = useStore((store) => ({
    category: store.category,
  }));

  const meta = {
    title: post.title,
    description: `A story by ${post.author.name}`,
    image: post.thumbnail,
  };

  return (
    <Layout meta={meta}>
      <div className='container mx-auto px-6 mb-32'>
        <motion.div
          className='relative w-full overflow-hidden h-52 lg:h-96 mb-8 lg:mb-20 rounded'
          layoutId={`image-${post.slug}-${category}`}
        >
          <img
            src={post.thumbnail}
            alt={post.title}
            className='absolute min-w-full min-h-full object-cover lg:-top-1/2'
          />
        </motion.div>
        <article className='max-w-3xl mx-auto'>
          <motion.h4
            className='font-bold text-3xl lg:text-6xl mb-8'
            layoutId={`title-${post.slug}`}
          >
            {post.title}
          </motion.h4>
          {post.Tags.map((tag) => (
            <Label
              key={tag}
              text={tag}
              link={tag}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
          ))}
          <motion.div
            className='main-article mt-8 lg:mt-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetcher('/stories/');
  const posts = res.data;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetcher(`/article/${params.slug}`);
  const post = res.data;
  return { props: { post }, revalidate: 1 };
}

export default ArticlePage;
