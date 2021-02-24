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

      <div style={{ overflow:'hidden'}}>
        <Project
          Logo={<img src="/images/BA_Logo.png" />}
          images={['BA_Marley.png', 'BA_Rico.png', 'BA_Elf.png', 'BA_SA2.png', 'BA_SWU.png', 'BA_MDEN.png', 'BA_Grad2020.png']}
        />
        <Project Logo={<FlexconomyLogo />} images={['FLEX_Presentation.png', 'FLEX_Overview.png', 'FLEX_Operations.png', 'FLEX_Sell.png', 'FLEX_Interface.png', 'FLEX_Cards.png']} />
        <Project Logo={<FlexconomyLogo />} images={['FLEX_Presentation.png', 'FLEX_Overview.png', 'FLEX_Operations.png', 'FLEX_Sell.png', 'FLEX_Interface.png', 'FLEX_Cards.png']} />
      </div>
    </>
  );
}
