import Head from 'next/head';
import Project from 'components/design/Project';
import DesignOverview from 'components/design/Hero';

import FlexconomyLogo from 'svgs/FlexconomyLogo';
import AutokalLogo from 'svgs/AutokalLogo';
import TWILogo from 'svgs/TWILogo';

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
          defaultImage={2}
          images={[            
            'BA_Elf.png',
            'BA_SA2.png',
            'BA_SWU.png',
            'BA_Marley.png',
            'BA_Rico.png',
          ]}
        />
        <Project
          Logo={<AutokalLogo />}
          defaultImage={2}
          images={[
            'AK_Event.png',
            'AK_Participants.png',
            'AK_Events.png',
            'AK_VODs.png',
            'AK_Replays.png',
          ]}
        />
        {/* <Project
          Logo={<FlexconomyLogo />}
          defaultImage={0}
          images={[
            'FLEX_Overview.png',
            'FLEX_Future.png',
            'FLEX_Sell.png',
            'FLEX_Operations.png',
          ]}
        /> */}
        <Project
          Logo={<TWILogo />}
          defaultImage={1}
          images={[
            'TWI_Starcraft.png',
            'TWI_S4-2.png',
            'TWI_CSGO3.png',
          ]}
        />
        <DesignOverview />
      </div>
    </>
  );
}
