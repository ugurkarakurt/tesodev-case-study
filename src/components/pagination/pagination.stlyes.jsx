import styled, { css, keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const isClicked = css`
  background-color: #ffffff !important;
  color: #ffffff !important;
`;

export const directionButton = css`
  width: 85px;
`;

export const dotButton = css`
  user-select: none;
  pointer-events: none;
  width: 50px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const activeButton = css`
  background: #204080;
  color: #fff;
  animation: ${slideAnimation}  0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;

export const PaginstionContainer = styled.div``;
export const PaginationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  border: 1px solid #484848;
  background: #fff;
  color: #484848;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s ease-in-out;
  ${({ $isClicked }) => $isClicked && isClicked};
  ${({ $isdirection }) => $isdirection && directionButton};
  ${({ $istactive }) => $istactive && activeButton};
  ${({ $isdot }) => $isdot && dotButton};
  &:disabled{
    background-color: #B3B3B3;
    cursor: default;
    color: #ffffff;
  }
`;
