import Label from 'components/Blog/Label';
import Layout from 'components/Layout';
import React from 'react';
import { motion } from 'framer-motion';

const ArticlePage = () => {
  return (
    <Layout>
      <div className='container mx-auto px-6 mb-32'>
        <motion.div
          className='relative w-full overflow-hidden h-52 lg:h-96 mb-8 lg:mb-20 rounded'
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          layoutId='image-1'
        >
          <img
            src='/images/tes1.jpg'
            alt=''
            className='absolute min-w-full min-h-full object-cover lg:-top-1/2'
          />
        </motion.div>
        <article className='max-w-3xl mx-auto'>
          <motion.h4
            className='font-bold text-3xl lg:text-6xl mb-8'
            layoutId='title-1'
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
          >
            Proclub Experience
          </motion.h4>
          <Label
            text='Backend'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          <motion.div
            className='main-article mt-8 lg:mt-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <p>
              At the beginning of 2021, we can definitely state that SaaS is
              literally everywhere. From large organizations like Google,
              Microsoft, or Adobe Systems, to small apps that offer data cleanup
              or financial calculations, almost every type of software we use
              daily is SaaS. So, what is SaaS and why is the SaaS business
              market growing so rapidly?
            </p>
            <h4>Some Bold Text</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae reprehenderit, officia reiciendis harum quisquam esse
              doloremque impedit repellendus? Iusto illo eligendi nisi sapiente
              illum porro magni? Dolores dicta maiores eligendi!
            </p>

            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              delectus accusamus inventore excepturi quasi laudantium debitis,
              quia repellendus porro non aspernatur enim voluptates blanditiis
              saepe provident fugit. Excepturi, numquam obcaecati.
            </blockquote>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae reprehenderit, officia reiciendis harum quisquam esse
              doloremque impedit repellendus? Iusto illo eligendi nisi sapiente
              illum porro magni? Dolores dicta maiores eligendi!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae reprehenderit, officia reiciendis harum quisquam esse
              doloremque impedit repellendus? Iusto illo eligendi nisi sapiente
              illum porro magni? Dolores dicta maiores eligendi!
            </p>
          </motion.div>
        </article>
      </div>
    </Layout>
  );
};

export default ArticlePage;
