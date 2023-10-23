import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingSpinnerIcon = styled.img`
  width: 40px;
  height: 40px;
  animation: ${loadingAnimation} 2s cubic-bezier(0.4, 2.8, 0.2, 1.2) infinite;
` 