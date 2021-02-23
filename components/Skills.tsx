import { Skills, Content, Points, Point, PointLabel, PointCopy, FlagWrap } from 'styles/Skills';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';

import TopFlag from 'svgs/TopFlag';
import MiddleFlag from 'svgs/MiddleFlag';
import BottomFlag from 'svgs/BottomFlag';

export default function SkillsComponent() {
  return (
    <Skills>
      <SectionTitle>
        <DividerTop />
        THE LUCAS LEMOS ADVANTAGE
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>THE RIGHT TALENT STACK</SectionHeader>
      <SectionCopy>
        My education, skills and career experiences make me uniquely suited to deliver clear and precise technology
        direction
      </SectionCopy>
      <Content>
        <FlagWrap>
          <TopFlag />
          <MiddleFlag />
          <BottomFlag />
        </FlagWrap>
        <Points>
          <Point>
            <PointLabel>WORLD-CLASS BUSINESS EDUCATION</PointLabel>
            <PointCopy>Graduate of the Wharton School of Business where I studied finance and management</PointCopy>
          </Point>
          <Point>
            <PointLabel>A DECADE OF SOFTWARE EXPERIENCE</PointLabel>
            <PointCopy>
              20,000+ hours developing software at every level from full-stack dev to senior management
            </PointCopy>
          </Point>
          <Point>
            <PointLabel>CLEAR COMMUNICATION SKILLS</PointLabel>
            <PointCopy>
              A proven ability to make complex technology concepts easy to understand for engineers and laymen alike
            </PointCopy>
          </Point>
        </Points>
      </Content>
    </Skills>
  );
}
