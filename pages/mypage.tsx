import React from 'react';
import Layout from '../components/Layout';
import CopyKitt from '../components/copykitt';

export const MyPage = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'MyPage - CopyKitt',
      }}
    >
      <CopyKitt />
    </Layout>
  );
};

export default MyPage;
