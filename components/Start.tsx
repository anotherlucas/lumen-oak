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
        BUILD WITH CONFIDENCE
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>
        THE ARCHITECT IS <InCard>IN</InCard>
      </SectionHeader>
      <SectionCopy>
        I am currently taking on new clients
        <br />
        Let’s build something amazing together
      </SectionCopy>
      <SectionSubheader style={{ marginTop: `-1.5rem` }}>
        FREE CONSULTATION
        <DividerBottom />
      </SectionSubheader>
      <SectionButton style={{ marginTop: `-.5rem` }}>SCHEDULE NOW</SectionButton>
    </Start>
  );
}
