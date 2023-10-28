
import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(calc(0%));
  }
`;

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  gap: 14px;
`;
export const AlertTitle = styled.h3`
  color: #090a0a;
  font-size: 14px;
  font-weight: 700;
`;
export const AlertDescription = styled.p`
  color: #090a0a;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  b{
    font-weight: bold;
    text-transform: capitalize;
    margin-right: 2px;
  }
`;

export const AlertButton = styled.div`
  margin-top: 10px;
  height: fit-content;
  border-radius: 48px;
  background: #34a853;
  border: none;
  outline: none;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Success = styled.div`
  width: 375px;
  min-height: 123px;
  padding: 34px 24px 14px 24px;
  background: #c4c4c4;
  color: #090a0a;
  border-radius: 10px;
  position: fixed;
  right: 17px;
  bottom: 24px;
  z-index: 999;
  animation: ${slideAnimation} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
  display: flex;
  gap: 15px;
`;

export const Danger = styled(Success)`
  ${AlertButton} {
    background-color: #ea4335;
  }
`;

export const Warning = styled(Success)`
  ${AlertButton} {
    background-color: #FBBC04;
    color: #090a0a;
  }
`;

export const Info = styled(Success)`
  ${AlertButton} {
    background-color: #4285F4;
  }
`;
