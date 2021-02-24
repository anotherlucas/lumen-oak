import Head from 'next/head';
import Project from 'components/Project';
import DesignOverview from 'components/DesignOverview';

import FlexconomyLogo from 'svgs/FlexconomyLogo';
import AutokalLogo from 'svgs/AutokalLogo';
import KiiyoLogo from 'svgs/KiiyoLogo';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>LL | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>

      <div style={{ overflow: 'hidden' }}>
        <DesignOverview />
        <Project
          Logo={<img src="/images/BA_Logo.png" />}
          defaultImage={3}
          images={[
            'BA_MDEN.png',            
            'BA_Elf.png',
            'BA_SA2.png',
            'BA_SWU.png',
            'BA_Marley.png',
            'BA_Rico.png',
            'BA_Grad2020.png',
          ]}
        />
        <Project
          Logo={<FlexconomyLogo />}
          defaultImage={2}
          images={[
            'FLEX_Sell.png',
            'FLEX_Operations.png',
            'FLEX_Presentation.png',
            'FLEX_Overview.png',
            'FLEX_Interface.png',
            'FLEX_Cards.png',
          ]}
        />
        <Project
          Logo={<AutokalLogo />}
          images={[
            'FLEX_Presentation.png',
            'FLEX_Overview.png',
            'FLEX_Operations.png',
            'FLEX_Sell.png',
            'FLEX_Interface.png',
            'FLEX_Cards.png',
          ]}
        />
        <Project
          Logo={<KiiyoLogo />}
          images={[
            'FLEX_Presentation.png',
            'FLEX_Overview.png',
            'FLEX_Operations.png',
            'FLEX_Sell.png',
            'FLEX_Interface.png',
            'FLEX_Cards.png',
          ]}
        />
      </div>
    </>
  );
}
