import styled from 'styled-components';

export const Divider = styled.span`
  height:1px;
  width:100%;
  background: ${props => props.theme.primaryColor };
  transition: background ${props => props.theme.transitionSpeed } linear;
  &:before {
    content:'';
    position:absolute;
    left:0;
    width:100%;
    height:1px;
    background:linear-gradient(to right, ${props => props.theme.background }, ${props => props.theme.primaryColor }00, ${props => props.theme.background });
  }
`

export const DividerTop = styled(Divider)`
  position:absolute;
  top:0;
  left:0;
`

export const DividerBottom = styled(Divider)`
  position:absolute;
  bottom:0;
  left:0;
`

export const SectionTitle = styled.h2`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  min-height:5.25rem;
  background:${props => props.theme.background };
  text-align:center;
  font-weight:300;
  font-size:2rem;
  letter-spacing:.25rem;
  z-index:10;
  transition: background ${props => props.theme.transitionSpeed } linear;
`

export const SectionHeader = styled.h4`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:3rem;
  margin: 3.375rem auto 0;
  text-align:center;
  font-weight:600;
  font-size:2.25rem;
  line-height:3.25rem;
  letter-spacing:.25rem;
`

export const SectionCopy = styled.p`
  display:flex;
  align-items:center;
  margin: 1.75rem auto 2.5rem;
  text-align:center;
  font-weight:400;
  font-size:1.625rem;
  line-height:2.75rem;
  letter-spacing:.0625rem;
`

export const SectionSubheader = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:4rem;
  margin: 0 auto 3rem;
  padding: 0 3rem;
  text-align:center;
  font-style:italic;
  font-weight:300;
  font-size:1.25rem;
  letter-spacing:.375rem;
`

export const SectionButton = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  height:4.875rem;
  padding: 0 4.75rem;
  margin:0 auto;
  background:${props => props.theme.background};
  color:${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius:.625rem;
  box-shadow: 0px .25rem .3125rem ${props => props.theme.primaryColor}44;
  font-family: 'Lato', sans-serif;
  font-size:1.5rem;
  font-weight:600;
  letter-spacing:.1875rem;
  outline:none;
  transition:
    box-shadow ${props => props.theme.transitionSpeed} linear,
    background ${props => props.theme.transitionSpeed} linear,
    border-color ${props => props.theme.transitionSpeed} linear,
    color ${props => props.theme.transitionSpeed} linear;
  &:hover {
    cursor:pointer;
  }
`