import styled from 'styled-components';

export const Project = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:80rem;
  max-width:calc(100% - 4rem);
  margin: 2rem auto 0;
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
    height:130%;
    width:auto;
    margin: -10% 0 0;
  }
`
export const ImageCarousel = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  width:100%;
  margin: 4rem auto 5rem;
  overflow:hidden;
`
export const ImageSwitcher = styled.div`
  display:flex;
`
export const ImageSwitch = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:4rem;
  padding: 0;
  opacity:.3;
  cursor:pointer;
  &:hover {
    opacity:1;
  }
  &[data-direction="right"]{
    transform:rotate(180deg);
  }
  svg {
    position:relative;
    width:50%;
  }
`
export const Images = styled.div`
  position:relative;
  flex:1;
  margin: 0 1.25rem;
  height:44rem;
`
export const Image = styled.div`
  position:absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
  margin: 0 auto;
  top:0;
  transition: all 200ms ease-out;
  opacity:0;
  &[data-active="true"]{
    opacity:1;
  }
  img {
    position:relative;
    max-width:100%;
    max-height:100%;
    user-select:none;
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

export const ImageList = styled.div``
export const ImageListItem = styled.div``