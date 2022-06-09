import React from 'react';
import Layout from '../components/Layout';

export const MyPage = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'MyPage - CopyKitt',
      }}
    >
      <p>mypage</p>
    </Layout>
  );
};

export default MyPage;
