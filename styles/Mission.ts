import styled from 'styled-components';

export const Mission = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:58rem;
  max-width:calc(100% - 4rem);
  margin: 0 auto;
`;

export const SoftwareVisionWrap = styled.div`
  position:relative;
  display:flex;
  width:22rem;
  min-height:12rem;
  height:12rem;
  margin:0 auto 3.5rem;
  svg {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`

export const TechnologyPlan = styled.div`
  position:relative;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:flex-start;
  justify-content:space-between;
  width:100%;
  max-width:48rem;
  padding: 4rem 2.75rem;
  margin: 0 auto;
  border:.1875rem solid #FF6B00;
  border-radius:10px;
  box-shadow: 0px .25rem .3125rem rgba(255, 107, 0, 0.25);
`

export const TechnologyPlanHeaderWrap = styled.div`
  position:absolute;
  top:-2.75rem;
  left:0;
  display:flex;
  width:100%;
  min-height:5.125rem;
  margin:0 auto 3.5rem;
  svg {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`

export const PlanItem = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:47%;
  margin: 1rem 0;
`
export const PlanImage = styled.div`
  position:relative;
  width:100%;
  height:12rem;
  svg {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`
export const PlanLabel = styled.h4`
  margin: 0 0 .875rem;
  text-align:center;
  font-weight:600;
  font-size:1.375rem;
  line-height:1.875rem;
  letter-spacing:.1875rem;
`
export const PlanCopy = styled.p`
  text-align:center;
  font-size:1.0625rem;
  line-height:1.625rem;
  letter-spacing:.0625rem;
`

export const AndDivider = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  width:100%;
  height:1px;
  margin: 4rem 0 1rem;
  &:before {
    content:'&';
    position:absolute;
    top:-1.875rem;
    display:block;
    width:6rem;
    background:#FFF;
    text-align:center;
    font-size:3rem;
    font-weight:300;
    z-index:10;
  }
`

export const OfficeWrap = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  min-height:40rem;
  width:100%;
  margin-bottom:4rem;
  svg {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`