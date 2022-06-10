import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import CopyKitt from '../components/copykitt';

const ENDPOINT: string = process.env.NEXT_PUBLIC_ENDPOINT;

export const App = (): JSX.Element => {
  useEffect(() => {
    fetch(`${ENDPOINT}?prompt=coffee`)
      .then()
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout
      customMeta={{
        title: 'App - Caco',
      }}
    >
      <CopyKitt />
    </Layout>
  );
};

export default App;
