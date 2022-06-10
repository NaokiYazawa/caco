import React from 'react';
import Layout from '../components/Layout';

export const Price = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Price - Caco',
      }}
    >
      <div className='text-center my-12'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl'>
          Buy once, use it forever.
        </h1>
        <p className='mx-auto mb-8 max-w-xl text-lg'>
          Get lifetime access to 500+ components today, plus any updates we
          release in the future for a simple one-time price.
        </p>
      </div>

      <div className='container mx-auto'>
        <div className='mt-6 space-y-8 xl:mt-12'>
          <div className='flex items-center justify-between max-w-2xl px-4 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-gray-400 sm:h-9 sm:w-9'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>

              <div className='flex flex-col items-center mx-5 space-y-1'>
                <h2 className='text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200'>
                  Basic
                </h2>
                <div className='px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                  Save 20%
                </div>
              </div>
            </div>

            <h2 className='text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300'>
              $5 <span className='text-base font-medium'>/Month</span>
            </h2>
          </div>

          <div className='flex items-center justify-between max-w-2xl px-4 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-blue-600 sm:h-9 sm:w-9'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>

              <div className='flex flex-col items-center mx-5 space-y-1'>
                <h2 className='text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200'>
                  Popular
                </h2>
                <div className='px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                  Save 20%
                </div>
              </div>
            </div>

            <h2 className='text-2xl font-semibold text-blue-600 sm:text-4xl'>
              $8 <span className='text-base font-medium'>/Month</span>
            </h2>
          </div>

          <div className='flex justify-center'>
            <button className='px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Price;
