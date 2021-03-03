import {
  Mission,
  SoftwareVisionWrap,
  TechnologyPlan,
  TechnologyPlanHeaderWrap,
  PlanItem,
  PlanImage,
  PlanLabel,
  PlanCopy,
  AndDivider,
  OfficeWrap,
} from 'styles/Mission';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';

import SoftwareVision from 'svgs/SoftwareVision';
import TechnologyPlanHeader from 'svgs/TechnologyPlanHeader';
import Roadmap from 'svgs/Roadmap';
import UXUI from 'svgs/UXUI';
import OrgChart from 'svgs/OrgChart';
import Infrastructure from 'svgs/Infrastructure';
import Office from 'svgs/Office';

export default function MissionComponent() {
  return (
    <Mission>
      <SectionTitle>
        <DividerTop />
        THE LUCAS LEMOS ADVANTAGE
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>EXPERT TECHNOLOGY DIRECTION</SectionHeader>
      <SectionCopy>
        Translate your software vision into <br />
        actionable and effective technology plans
      </SectionCopy>
      <SoftwareVisionWrap>
        <SoftwareVision />
      </SoftwareVisionWrap>
      <TechnologyPlan>
        <TechnologyPlanHeaderWrap>
          <TechnologyPlanHeader />
        </TechnologyPlanHeaderWrap>
        <PlanItem>
          <PlanImage>
            <Roadmap />
          </PlanImage>
          <PlanLabel>
            DEVELOPMENT <br /> ROADMAP
          </PlanLabel>
          <PlanCopy>
            A prioritized breakdown of the engineering work necessary to complete the project
          </PlanCopy>
        </PlanItem>
        <PlanItem>
          <PlanImage>
            <UXUI />
          </PlanImage>
          <PlanLabel>
            UX/UI <br /> DESIGN
          </PlanLabel>
          <PlanCopy>
            Beautifully functional interface designs that provide clear direction for the frontend team
          </PlanCopy>
        </PlanItem>
        <PlanItem>
          <PlanImage>
            <OrgChart />
          </PlanImage>
          <PlanLabel>
            TEAM <br /> STRUCTURE
          </PlanLabel>
          <PlanCopy>
            A map of the necessary talent to effectively execute the project on-time and on-budget
          </PlanCopy>
        </PlanItem>
        <PlanItem>
          <PlanImage>
            <Infrastructure />
          </PlanImage>
          <PlanLabel>
            TECHNOLOGY <br /> GUIDANCE
          </PlanLabel>
          <PlanCopy>
            Guidance on selecting project programming languages, frameworks and infrastructure
          </PlanCopy>
        </PlanItem>
      </TechnologyPlan>
      <AndDivider>
        <DividerTop />
      </AndDivider>
      <SectionHeader>INSPIRING ENGINEERING LEADERSHIP</SectionHeader>
      <SectionCopy>
        Mobilize, motivate and supervise the engineering teams <br />
        that bring your software projects to life
      </SectionCopy>
      <OfficeWrap>
        <Office />
      </OfficeWrap>
    </Mission>
  );
}
