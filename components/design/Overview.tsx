import { DesignOverview } from 'styles/DesignOverview';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';


export default function DesignOverviewComponent() {
  return (
    <DesignOverview>
      <SectionTitle>
        <DividerTop />
        BEAUTIFULLY DIRECT
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>CLEAR COMMUNICATION BY DESIGN</SectionHeader>
      <SectionCopy>
        The mark of exceptional software <br />
        is a well-designed interface
      </SectionCopy>
    </DesignOverview>
  );
}
