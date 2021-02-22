import Head from 'next/head';
import Header from 'components/Header';

import { Main } from 'styles/Page';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>LL | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
      </Main>
    </>
  );
}
