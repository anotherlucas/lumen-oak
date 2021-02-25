import Head from 'next/head';
import Mission from 'components/Consulting/Mission';
import Philosophy from 'components/Consulting/Philosophy';
import Skills from 'components/Consulting/Skills';
import Serving from 'components/Consulting/Serving';
import Start from 'components/Consulting/Start';

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
