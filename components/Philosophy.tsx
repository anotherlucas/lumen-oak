import { Philosophy, WithPlanWrap, WithoutPlanWrap } from 'styles/Philosophy';
import { SectionTitle, SectionHeader, SectionSubheader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';

import WithPlan from 'svgs/WithPlan';
import WithoutPlan from 'svgs/WithoutPlan';

export default function PhilosophyComponent() {
  return (
    <Philosophy>
      <SectionTitle>
        <DividerTop />
        MY DEVELOPMENT PHILOSOPHY
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>BETTER PLAN, BETTER SOFTWARE</SectionHeader>
      <SectionCopy>
        An expertly prepared technology plan prevents costly mistakes, and ensures you get the most of your development
        dollar
      </SectionCopy>
      <SectionSubheader>
        WITH A TECHNOLOGY PLAN
        <DividerBottom />
      </SectionSubheader>
      <WithPlanWrap>
        <WithPlan />
      </WithPlanWrap>
      <SectionSubheader>
        WITHOUT A TECHNOLOGY PLAN
        <DividerBottom />
      </SectionSubheader>
      <WithoutPlanWrap>
        <WithoutPlan />
      </WithoutPlanWrap>
    </Philosophy>
  );
}
