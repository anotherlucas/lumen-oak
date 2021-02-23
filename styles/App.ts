import styled from 'styled-components';

export const Main = styled.main`
  background:${props => props.theme.background };
  color:${props => props.theme.primaryColor };
  transition: 
    color ${props => props.theme.transitionSpeed } linear, 
    background ${props => props.theme.transitionSpeed } linear;

  .fill-primary, .fill-secondary, .fill-tertiary, .fill-background {
    transition: fill ${props => props.theme.transitionSpeed } linear !important;
  }
  .stroke-primary, .stroke-secondary, .stroke-tertiary {
    transition: stroke ${props => props.theme.transitionSpeed } linear !important;
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