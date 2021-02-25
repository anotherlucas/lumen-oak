import Head from 'next/head';
import Mission from 'components/consulting/Mission';
import Philosophy from 'components/consulting/Philosophy';
import Skills from 'components/consulting/Skills';
import Serving from 'components/consulting/Serving';
import Start from 'components/consulting/Start';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>LL | Consulting</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>

      <>
        <Mission />
        <Philosophy />
        <Skills />
        <Serving />
        <Start />
      </>
    </>
  );
}
