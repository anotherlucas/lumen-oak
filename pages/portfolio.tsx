import Head from 'next/head';
import Project from 'components/Project';

import FlexconomyLogo from 'svgs/FlexconomyLogo';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>LL | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>

      <>
        <Project
          Logo={<img src="/images/BestApps.png" />}
          images={['BestAppsA.png', 'BestAppsC.png', 'BestAppsC.png', 'BestAppsB.png', 'BestAppsC.png']}
        />
        <Project Logo={<FlexconomyLogo />} images={['FlexconomyA.png', 'FlexconomyB.png']} />
      </>
    </>
  );
}
