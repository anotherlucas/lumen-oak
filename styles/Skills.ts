import styled from 'styled-components';

export const Skills = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:58rem;
  max-width:calc(100% - 4rem);
  margin: 0 auto;
`;

export const Content = styled.div`
  display:flex;
  width:100%;
  height:42rem;
`

export const Points = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  padding: 0 1.875rem 0;
`

export const Point = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:11rem;
  margin-bottom:.875rem;
`

export const PointLabel = styled.h6`
  margin: 0 0 .4375rem;
  line-height:2.25rem;
  font-size:1.4375rem;
  font-weight:600;
  letter-spacing:.0625rem;
`
export const PointCopy = styled.p`
  font-size:1.1875rem;
  line-height:2rem;
  letter-spacing:.0625rem;
`

export const FlagWrap = styled.div`
  position:relative;
  min-width:15rem;
  svg {
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`