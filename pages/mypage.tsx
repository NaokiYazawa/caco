import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import Layout from '../components/Layout';
import prisma from '../lib/prisma';

export const MyPage = (props): JSX.Element => {
  return (
    <Layout>
      {props.results.map((result) => (
        <article key={result.id} className='mt-12'>
          <section className='body-font w-11/12 overflow-hidden'>
            <div className='p-1'>
              <div className='divide-gray-100'>
                <div className='py-5'>
                  <div className='md:w-56 md:mb-0 mb-4 flex-shrink-0 flex flex-col'>
                    <span className='mt-1 text-sm'>{result.createdAt}</span>
                  </div>
                  <div className='md:flex-grow'>
                    <h2 className='text-2xl font-medium title-font mb-2'>
                      {result.prompt}
                    </h2>
                    <p className='leading-relaxed'>{result.snippet}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      ))}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 401;
    return { props: { articles: null } };
  }

  const data = await prisma.result.findMany({
    where: {
      user: { email: session.user.email },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const results = JSON.parse(JSON.stringify(data));

  return {
    props: { results },
  };
};

export default MyPage;
