import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <div className="h-full py-32 md:pt-40 md:pb-20">
        <div className="text-center">
          <h1 className="leading-tighter mb-4 text-7xl font-extrabold tracking-tighter md:text-8xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              CopyKitt
            </span>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xl">Your AI branding assistant</p>
            <div className="flexjustify-center">
              <div className="mt-3">
                <Link href="#">
                  <a className=" text-xl group inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 font-medium text-gray-900 hover:text-white focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
                    <span className="rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      Getting started
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
