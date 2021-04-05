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
        <title>Lumen Oak</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:image" content="https://www.lucaslemos.io/images/share.png" />
        <meta property='og:description' 
          content="Wharton-educated Software Architect with 20,000+ hours of development experience, and your new technology ally - let's build something together."
        />
      </Head>
      <>
      </>
    </>
  );
}
