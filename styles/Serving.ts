import styled from 'styled-components';

export const Serving = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:54rem;
  max-width:calc(100% - 5.25rem);
  margin: -1rem auto 0;
`;

export const CompassWrap = styled.div`
  position:relative;
  width:24rem;
  height:24rem;
  margin: 0 auto 6rem;
  svg {
    position:absolute;
    width:100%;
    height:100%;
  }
`

export const NeedleSpinner = styled.div`
  width:92%;
  height:105%;
  animation-name:spin;
  animation-iteration-count: infinite;
  animation-duration: 8000ms;
  animation-timing-function: linear;
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    5% {
      transform: rotate(-3deg);
    }
    10% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(4deg);
    }
    30% {
      transform: rotate(0);
    }
    40% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(0);
    }
    60% {
      transform: rotate(3deg);
    }
    70% {
      transform: rotate(0);
    }
    70% {
      transform: rotate(-1deg);
    }
    80% {
      transform: rotate(0);
    }
    90% {
      transform: rotate(3deg);
    }

    100% { transform: rotate(0)}
  }
`