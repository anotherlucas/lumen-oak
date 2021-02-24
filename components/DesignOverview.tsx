import { DesignOverview } from 'styles/DesignOverview';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';


export default function DesignOverviewComponent() {
  return (
    <DesignOverview>
      <SectionTitle>
        <DividerTop />
        A PASSION FOR AESTHETICS
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>CLARITY BY DESIGN</SectionHeader>
      <SectionCopy>
        Strong design fundamentals keep complex concepts simple<br />
        fueling the engine of exceptional software projects
      </SectionCopy>
    </DesignOverview>
  );
}
