import Head from 'next/head';
import Header from 'components/Header';
import Mission from 'components/Mission';
import Philosophy from 'components/Philosophy';
import Skills from 'components/Skills';
import Serving from 'components/Serving';
import Start from 'components/Start';

import { Main } from 'styles/Page';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lucas Lemos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <Mission />
        <Philosophy />
        <Skills />
        <Serving />
        <Start />
      </Main>
    </>
  );
}
