import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  InformationCircleIcon,
  CurrencyDollarIcon,
  HomeIcon,
  LogoutIcon,
  LoginIcon,
  PlayIcon,
  UserIcon,
} from '@heroicons/react/outline';

const Navigation = (): JSX.Element => {
  const { data: session, status } = useSession();
  return (
    <nav className='flex flex-grow justify-evenly max-w-2xl'>
      <Link href='/'>
        <a className='text-gray-900 h-8 font-bold dark:text-white sm:px-4 py-4'>
          <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
            <HomeIcon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
              Top
            </p>
          </div>
        </a>
      </Link>
      <Link href='/about'>
        <a className='text-gray-900 font-bold dark:text-white sm:px-4 py-4'>
          <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
            <InformationCircleIcon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
              About
            </p>
          </div>
        </a>
      </Link>
      <Link href='/price'>
        <a className='text-gray-900 font-bold dark:text-white sm:px-4 py-4'>
          <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
            <CurrencyDollarIcon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
              Price
            </p>
          </div>
        </a>
      </Link>
      {status !== 'loading' && session && (
        <>
          <Link href='/app'>
            <a className='text-gray-900 font-bold dark:text-white sm:px-4 py-4'>
              <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
                <PlayIcon className='h-8 mb-1 group-hover:animate-bounce' />
                <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
                  App
                </p>
              </div>
            </a>
          </Link>
          <Link href='/mypage'>
            <a className='text-gray-900 font-bold dark:text-white sm:px-4 py-4'>
              <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
                <UserIcon className='h-8 mb-1 group-hover:animate-bounce' />
                <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
                  MyPage
                </p>
              </div>
            </a>
          </Link>
          <Link href=''>
            <a
              onClick={() =>
                signOut({
                  callbackUrl: '/',
                })
              }
              className='text-gray-900 font-bold dark:text-white sm:px-4 py-4'
            >
              <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
                <LogoutIcon className='h-8 mb-1 group-hover:animate-bounce' />
                <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
                  Logout
                </p>
              </div>
            </a>
          </Link>
        </>
      )}
      {status !== 'loading' && !session && (
        <Link href=''>
          <a
            onClick={() => signIn()}
            className='text-gray-900 font-bold dark:text-white sm:px-4 py-4'
          >
            <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20'>
              <LoginIcon className='h-8 mb-1 group-hover:animate-bounce' />
              <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
                Sign In
              </p>
            </div>
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
