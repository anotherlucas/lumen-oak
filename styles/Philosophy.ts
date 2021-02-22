import styled from 'styled-components';

export const Philosophy = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:58rem;
  max-width:calc(100% - 4rem);
  margin: 0 auto;
`;

export const WithPlanWrap = styled.div`
  position:relative;
  display:flex;
  width:100%;
  min-height:3rem;
  margin:0 auto 5rem;
  svg {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`

export const WithoutPlanWrap = styled.div`
  position:relative;
  display:flex;
  align-items:flex-start;
  width:100%;
  min-height:26rem;
  margin:0 auto 6rem;
  svg {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`