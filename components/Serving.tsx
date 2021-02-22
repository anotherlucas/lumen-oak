import { Serving, CompassWrap, NeedleSpinner } from 'styles/Serving';
import { SectionTitle, SectionHeader, SectionCopy, DividerTop, DividerBottom } from 'styles/Shared';

import Compass from 'svgs/Compass';
import CompassNeedle from 'svgs/CompassNeedle';

export default function ServingComponent() {
  return (
    <Serving>
      <SectionTitle>
        <DividerTop />
        NOW SERVING
        <DividerBottom />
      </SectionTitle>
      <SectionHeader>NON-TECHNICAL FOUNDERS & EXECUTIVES</SectionHeader>
      <SectionCopy>
        Who are looking for an experienced ally to help navigate <br /> the complicated world of software development
      </SectionCopy>
      <CompassWrap>
        <Compass />
        <NeedleSpinner style={{ transform: 'rotate(90deg)' }}>
          <CompassNeedle />
        </NeedleSpinner>
      </CompassWrap>
    </Serving>
  );
}
