import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height:54rem;
`;

export const Title = styled.h1`
  position:relative;
  margin: 4rem auto .5rem;
  padding: 1rem 1rem;
  text-align:center;
  font-weight:500;
  font-size:6rem;
  letter-spacing:.25rem;
`

export const Subtitle = styled.h4`
  display:flex;
  align-items:center;
  height:6.25rem;
  margin: 0 auto;
  text-align:center;
  font-weight:300;
  font-size:1.875rem;
  letter-spacing:.5rem;
`

export const Navigation = styled.div`
  display:none;
  justify-content:center;
  align-items:center;
  padding: 2rem 0 0;
`

export const NavItem = styled.a`
  position:relative;
  margin: 0 .75rem;
  padding: 1.75rem 0;
  font-size:1.125rem;
  font-weight:300;
  letter-spacing:.25rem;
  cursor:pointer;
  &[data-active="true"]{
    font-style:italic;
    cursor:default;
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