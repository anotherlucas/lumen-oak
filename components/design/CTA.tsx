import Link from 'next/link';
import { CTA } from 'styles/CTA';
import { SectionTitle, SectionHeader, SectionSubheader, SectionButton, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';

export default function CTAComponent() {
  return (
    <CTA>
      <SectionTitle>
        <DividerTop />
        LET'S WORK TOGETHER
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>FRONTEND EXPERT FOR HIRE</SectionHeader>
      <SectionCopy>
        Need an expert design eye for a short-term project?<br />
        Let me design and develop your next piece of software
      </SectionCopy>
      <SectionSubheader>
        FREE CONSULTATION
        <DividerBottom />
      </SectionSubheader>
      <Link href="https://calendly.com/ll-consulting/30min">
        <SectionButton>
          SCHEDULE TODAY
        </SectionButton>
      </Link>
    </CTA>
  );
}
