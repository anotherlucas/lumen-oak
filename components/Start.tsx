import { Start, InCard } from 'styles/Start';
import {
  SectionTitle,
  SectionHeader,
  SectionCopy,
  SectionSubheader,
  SectionButton,
  DividerTop,
  DividerBottom,
} from 'styles/Shared';
export default function StartComponent() {
  return (
    <Start>
      <SectionTitle>
        <DividerTop />
        GETTING STARTED
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>
        THE DOCTOR IS <InCard>IN</InCard>
      </SectionHeader>
      <SectionCopy>
        I am currently taking on new clients
        <br />
        Let’s build something amazing together
      </SectionCopy>
      <SectionSubheader>
        FREE CONSULTATION
        <DividerBottom />
      </SectionSubheader>
      <SectionButton>SCHEDULE NOW</SectionButton>
    </Start>
  );
}
