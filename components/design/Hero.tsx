import { DesignOverview } from 'styles/DesignOverview';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';


export default function DesignHeroComponent() {
  return (
    <DesignOverview>
      <SectionTitle>
        <DividerTop />
        BEAUTIFULLY DIRECT
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>CLEAR COMMUNICATION BY DESIGN</SectionHeader>
      <SectionCopy>
        Great design reduces complexity<br />
        And leads to exceptional software
      </SectionCopy>
    </DesignOverview>
  );
}
