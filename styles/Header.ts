import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height:42rem;
`;

export const Title = styled.h1`
  position:relative;
  margin: 4rem auto .5rem;
  padding: 1.25rem 2rem;
  text-align:center;
  font-weight:500;
  font-size:6rem;
  letter-spacing:.25rem;
`

export const Subtitle = styled.h4`
  display:flex;
  align-items:center;
  height:6.25rem;
  margin: 0 auto 1rem;
  text-align:center;
  font-weight:300;
  font-size:1.875rem;
  letter-spacing:.5rem;
`

export const Navigation = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 1rem 0 0;
`

export const NavItem = styled.a`
  position:relative;
  margin: 0 .875rem;
  padding: 1.75rem 0;
  text-decoration:none;
  color:#FF6B00;
  font-size:1.25rem;
  font-weight:300;
  letter-spacing:.3125rem;
  cursor:pointer;
  opacity:.5;
  &[data-active="true"]{
    font-style:italic;
    cursor:default;
    opacity:1;
    letter-spacing:.375rem;
    &:before {
      content:'>';
      position:absolute;
      bottom:0;
      width:100%;
      text-align:center;
      font-style:normal;
      transform:rotate(90deg);
    }
  }
`