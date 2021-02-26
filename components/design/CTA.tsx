import { CTA } from 'styles/CTA';
import { SectionTitle, SectionHeader, SectionSubheader, SectionButton, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';


export default function CTAComponent() {
  return (
    <CTA>
      <SectionTitle>
        <DividerTop />
        THE TIP OF THE ICEBERG
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>CLEAR COMMUNICATION BY DESIGN</SectionHeader>
      <SectionCopy>
        This is just a small sample of what I'm able to show<br />
        Let me design your next software project
      </SectionCopy>
      <SectionSubheader>
        FREE CONSULTATION
        <DividerBottom />
      </SectionSubheader>
      <SectionButton>
        SCHEDULE TODAY
      </SectionButton>
    </CTA>
  );
}
