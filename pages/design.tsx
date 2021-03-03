import Head from 'next/head';
import Project from 'components/design/Project';
import Overview from 'components/design/Overview';
import CTA from 'components/design/CTA';

import AutokalLogo from 'svgs/AutokalLogo';
import TWILogo from 'svgs/TWILogo';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:image" content="https://www.lucaslemos.io/images/share.png" />
        <meta property='og:description' 
          content="Wharton-educated Software Architect with 20,000+ hours of development experience, and your new technology ally - let's build something together."
        />
      </Head>

      <div style={{ overflow: 'hidden' }}>
        <Overview />
        <Project
          Logo={<img src="/images/BA_Logo.png" />}
          defaultImage={2}
          order={1}
          imageDimensions={[
            { width: 600, height: 1340, xyRatio:0.44776119402985076 },
            { width: 317, height: 678, xyRatio:0.46755162241887904 },
            { width: 636, height: 1356, xyRatio:0.4690265486725664 },
            { width: 616, height: 1356, xyRatio:0.45427728613569324 },
            { width: 600, height: 1340, xyRatio:0.44776119402985076 }
          ]}
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
          order={2}
          imageDimensions={[
            { width: 1068, height: 1884, xyRatio:0.5668789808917197 },
            { width: 1068, height: 1884, xyRatio:0.5668789808917197 },
            { width: 1070, height: 1884, xyRatio:0.5679405520169851 },
            { width: 770, height: 1356, xyRatio:0.5678466076696165 },
            { width: 766, height: 1354, xyRatio:0.5657311669128509 }
          ]}
          images={[
            'AK_Event.png',
            'AK_Participants.png',
            'AK_Events.png',
            'AK_VODs.png',
            'AK_Replays.png',
          ]}
        />
        <Project
          Logo={<TWILogo />}
          defaultImage={1}
          order={3}
          imageDimensions={[
            { width:926, height: 1093, xyRatio:0.8472095150960659 },
            { width: 678, height: 983, xyRatio:0.6897253306205493 },
            { width: 994, height: 1197, xyRatio:1.167763157894737 }
          ]}
          images={[
            'TWI_Starcraft.png',
            'TWI_S4-2.png',
            'TWI_CSGO3.png',
          ]}
        />
        <CTA />
      </div>
    </>
  );
}
