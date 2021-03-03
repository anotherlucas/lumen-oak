import { useEffect, useState } from 'react';
import { DesignOverview } from 'styles/DesignOverview';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';


export default function DesignOverviewComponent() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <DesignOverview>
      <SectionTitle style={{ opacity: fadeIn ? '1': '0' }}>
        <DividerTop />
        BEAUTIFULLY DIRECT
        <DividerBottom />
      </SectionTitle>
      <SectionHeader style={{ opacity: fadeIn ? '1': '0' }}>CLEAR COMMUNICATION BY DESIGN</SectionHeader>
      <SectionCopy style={{ opacity: fadeIn ? '1': '0' }}>
        Exceptional software requires exceptional design <br />
        Below is a small sample of work I've done
      </SectionCopy>
    </DesignOverview>
  );
}
