import Head from 'next/head';
import Header from 'components/Header';

import { Main } from 'styles/Page';

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>LL | Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
      </Main>
    </>
  );
}
