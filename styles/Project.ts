import styled from 'styled-components';

export const Project = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:58rem;
  max-width:calc(100% - 2.5rem);
  margin: 0 auto 5.5rem;
  padding: 2rem 0 0;
`;

export const ProjectTitle = styled.h2`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  min-height:5.25rem;
  background:#FFF;
  text-align:center;
  font-weight:300;
  font-size:2.125rem;
  letter-spacing:.25rem;
  z-index:10;
`

export const LogoWrap = styled.div`
  position:relative;
  height:6rem;
  margin: -3rem auto 0rem;
  padding: 0 2.125rem;
  background: ${props => props.theme.background};
  border-left: 1px solid ${props => props.theme.primaryColor};
  border-right: 1px solid ${props => props.theme.primaryColor};
  user-select:none;
  svg {
    position:relative;
    height:100%;
    width:auto;
  }
  img {
    position:relative;
    height:110%;
    width:auto;
    margin: -10% 0 0;
  }
`
export const Content = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  width:100%;
  margin: 2.25rem auto 0;
`
export const ImageCarousel = styled.div`
  display:flex;
`
export const Images = styled.div`
  position:relative;
  flex:1;
  margin: 0;
  overflow:visible;
`

export const ImageWrap = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  pointer-events:none;
`

export const Image = styled.img`
  position:absolute;
  max-height:60%;
  max-width:100%;
  transition: all 100ms ease-out;
  opacity:0;
  user-select:none;
  pointer-events:all;
  cursor:pointer;
  &:hover {
    opacity:1 !important;
  }
  &[data-position="0"]{
    max-height:100%;
    opacity:1;
    z-index:10;
  }
  &[data-position="-1"],
  &[data-position="1"]{
    opacity:.85;
    max-height:90%;
    margin: 1% auto;
    z-index:5;
  }
  &[data-position="-2"],
  &[data-position="2"]{
    max-height:80%;
    margin: 3% auto;
    opacity:.65;
  }
  &[data-position="-3"],
  &[data-position="3"]{
    max-height:70%;
    margin: 5% auto;
    opacity:.35;
  }
  &[data-position="-4"],
  &[data-position="4"]{
    max-height:60%;
    margin: 8% auto;
    opacity:.1;
  }
`

export const FullScreenModal = styled.div`
  position:fixed;
  height:100%;
  width:100%;
  top:0;
  left:0;
  padding: 2.25rem;
  background:rgba(0,0,0,.8);
  z-index:10000;
`

export const Modal = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  max-width:140rem;
  width:100%;
  height:100%;
  pointer-events:none;
  img {
    position:relative;
    margin: 0 auto;
    max-height:100%;
    max-width:100%;
  }
`

export const FullScreenBtn = styled.button`
  position:absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  bottom:2.5rem;
  right:2.5rem;
  width:4.125rem;
  height:4.125rem;
  background:${props => props.theme.primaryColor };
  border:1px solid ${props => props.theme.primaryColor };
  border-radius:.3125rem;
  opacity:.15;
  cursor:pointer;
  outline:none;
  z-index:10;
  transition: opacity 150ms ease-out;
  &:hover {
    opacity:1;
  }
  svg {
    position:absolute;
    width:70%;
    height:70%;
  }
`

export const ImageSwitcher = styled.div`
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  height:6rem;
  margin: .25rem 0;
`
export const ImageSwitch = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:6.75rem;
  padding: 0 2.25rem;
  cursor:pointer;
  outline:none;
  &[data-direction="right"]{
    transform:rotate(180deg);
  }
  svg {
    position:relative;
    width:50%;
  }
`

export const ImageList = styled.div`
  flex;1;
  display:flex;
  margin: 0;
  align-items:center;
`
export const ImageListItem = styled.div`
  width:2rem;
  height:2rem;
  margin: 0 .25rem;
  border-radius:100%;
  background: ${props => props.theme.tertiaryColor};
  border: .25rem solid ${props => props.theme.tertiaryColor};
  cursor:pointer;
  &:hover {
    background: ${props => props.theme.secondaryColor};
  }
  &[data-active="true"]{
    background: ${props => props.theme.primaryColor};
    cursor:default;
  }
`

export const ProjectCopy = styled.p`
  display:flex;
  align-items:center;
  margin: 0 auto 2.25rem;
  text-align:center;
  font-weight:400;
  font-size:1.625rem;
  line-height:2.75rem;
  letter-spacing:.0625rem;
`