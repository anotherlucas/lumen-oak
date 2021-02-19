import { Skills } from 'styles/Skills';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';

export default function SkillsComponent() {
  return (
    <Skills>
      <SectionTitle>
        <DividerTop />
          WHY I DO IT BETTER
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>
        THE RIGHT TALENT STACK
      </SectionHeader>
      <SectionCopy>
        My education, skills and career experiences make me uniquely suited 
        to deliver clear and precise technology direction
      </SectionCopy>
    </Skills>
  );
}
