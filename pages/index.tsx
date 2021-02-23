import Head from 'next/head';
import Mission from 'components/Mission';
import Philosophy from 'components/Philosophy';
import Skills from 'components/Skills';
import Serving from 'components/Serving';
import Start from 'components/Start';

import { Main } from 'styles/App';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>LL | Consulting</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>

      <Main>
        <Mission />
        <Philosophy />
        <Skills />
        <Serving />
        <Start />
      </Main>
    </>
  );
}
