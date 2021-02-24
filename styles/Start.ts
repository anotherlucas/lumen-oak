import styled from 'styled-components';

export const Start = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:58rem;
  min-height:42rem;
  max-width:calc(100% - 4rem);
  margin: 0 auto;
`;

export const InCard = styled.span`
  display:block;
  margin-left:.75rem;
  padding: .5rem .875rem;
  background:${props => props.theme.primaryColor};
  transition: background ${props => props.theme.transitionSpeed} linear;
  color:white;
  border-radius:.1875rem;
`