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
      <SectionHeader>CLEAR TECHNOLOGY DIRECTION</SectionHeader>
      <SectionCopy>
        I translate your software ideas into <br />
        the plans that make them possible
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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </PlanCopy>
        </PlanItem>
        <PlanItem>
          <PlanImage>
            <OrgChart />
          </PlanImage>
          <PlanLabel>
            TEAM <br /> STRUCTURE
          </PlanLabel>
          <PlanCopy>How many people you will need How to structure the team What skills are needed</PlanCopy>
        </PlanItem>
        <PlanItem>
          <PlanImage>
            <Infrastructure />
          </PlanImage>
          <PlanLabel>
            TECHNOLOGY <br /> GUIDANCE
          </PlanLabel>
          <PlanCopy>
            What languages & frameworks to use How to structure your infrastructure What security precautions are needed
          </PlanCopy>
        </PlanItem>
      </TechnologyPlan>
      <AndDivider>
        <DividerTop />
      </AndDivider>
      <SectionHeader>ENGINEERING OVERSIGHT</SectionHeader>
      <SectionCopy>
        I mobilize and supervise the engineering teams <br />
        that bring your software ideas to life
      </SectionCopy>
      <OfficeWrap>
        <Office />
      </OfficeWrap>
    </Mission>
  );
}
