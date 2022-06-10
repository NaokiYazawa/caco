import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navigation = (): JSX.Element => {
  const { data: session, status } = useSession();
  return (
    <nav>
      <Link href='/'>
        <a className='text-gray-900 font-bold dark:text-white px-1 sm:px-4 py-4'>
          Top
        </a>
      </Link>
      <Link href='/about'>
        <a className='text-gray-900 font-bold dark:text-white px-1 sm:px-4 py-4'>
          About
        </a>
      </Link>
      <Link href='/price'>
        <a className='text-gray-900 font-bold dark:text-white px-1 sm:px-4 py-4'>
          Price
        </a>
      </Link>
      {status !== 'loading' && session && (
        <>
          <Link href='/app'>
            <a className='text-gray-900 font-bold dark:text-white px-1 sm:px-4 py-4'>
              App
            </a>
          </Link>
          <Link href=''>
            <a
              onClick={() =>
                signOut({
                  callbackUrl: '/',
                })
              }
              className='text-gray-900 font-bold dark:text-white px-1 sm:px-4 py-4'
            >
              Logout
            </a>
          </Link>
        </>
      )}
      {status !== 'loading' && !session && (
        <Link href=''>
          <a
            onClick={() => signIn()}
            className='text-gray-900 font-bold dark:text-white px-1 sm:px-4 py-4'
          >
            Sign In
          </a>
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
