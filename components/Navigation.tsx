import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 font-bold dark:text-white px-1.5 sm:px-5 py-4">
          Home
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
          MyPage
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
