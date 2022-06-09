import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 font-bold dark:text-white px-1.5 sm:px-5 py-4">
          Top
        </a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 font-bold dark:text-white px-1.5 sm:px-5 py-4">
          About
        </a>
      </Link>
      <Link href="/price">
        <a className="text-gray-900 font-bold dark:text-white px-1.5 sm:px-5 py-4">
          Price
        </a>
      </Link>
      <Link href="/mypage">
        <a className="text-gray-900 font-bold dark:text-white px-1.5 sm:px-5 py-4">
          App
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
