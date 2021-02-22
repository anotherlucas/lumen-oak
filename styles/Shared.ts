import styled from 'styled-components';

export const Divider = styled.span`
  height:1px;
  width:100%;
  background:linear-gradient(to right, #FFF, #FF6B00, #FFF);
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
  min-height:5rem;
  background:#FFF;
  text-align:center;
  font-weight:300;
  font-size:2rem;
  letter-spacing:.25rem;
  z-index:10;
`

export const SectionHeader = styled.h4`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:3rem;
  margin: 3.375rem auto 0;
  text-align:center;
  font-weight:600;
  font-size:2.0625rem;
  letter-spacing:.25rem;
`

export const SectionCopy = styled.p`
  display:flex;
  align-items:center;
  min-height: 8rem;
  margin: 0rem auto 1.75rem;
  text-align:center;
  font-weight:400;
  font-size:1.375rem;
  line-height:2.5rem;
  letter-spacing:.125rem;
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
  height:4.25rem;
  padding: 0 4.75rem;
  margin:0 auto;
  background:#FFF;
  color:#FF6B00;
  border: 2px solid #FF6B00;
  border-radius:.625rem;
  box-shadow: 0px .25rem .3125rem rgba(255, 107, 0, 0.25);
  font-family: 'Lato', sans-serif;
  font-size:1.25rem;
  font-weight:600;
  letter-spacing:.1875rem;
  outline:none;
  &:hover {
    background:#FF6B00;
    color:#FFF;
    cursor:pointer;
  }
`