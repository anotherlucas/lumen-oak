import styled from 'styled-components';

export const Main = styled.main`
  min-height:100%;
  background:${props => props.theme.background };
  color:${props => props.theme.primaryColor };
  overflow:auto;
  transition: 
    color ${props => props.theme.transitionSpeed } linear, 
    background ${props => props.theme.transitionSpeed } linear,
    opacity 300ms ease-out;

  .fill-primary, .fill-secondary, .fill-tertiary, .fill-background,
  .stroke-primary, .stroke-secondary, .stroke-tertiary {
    transition: 
      fill ${props => props.theme.transitionSpeed } linear, 
      stroke ${props => props.theme.transitionSpeed } linear;
  }
  .fill-primary {
    fill:${props => props.theme.primaryColor };
  }
  .fill-secondary {
    fill:${props => props.theme.secondaryColor };
  }
  .fill-tertiary {
    fill:${props => props.theme.tertiaryColor };
  }
  .fill-background {
    fill:${props => props.theme.background };
  }
  .stroke-primary {
    stroke:${props => props.theme.primaryColor };
  }
  .stroke-secondary {
    stroke:${props => props.theme.secondaryColor };
  }
  .stroke-tertiary {
    stroke:${props => props.theme.tertiaryColor };
  }
`;