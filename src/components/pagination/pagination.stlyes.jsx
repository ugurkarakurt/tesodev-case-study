import styled, { css, keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 50, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 50, 0, 1)
  }

  4.3% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 24.286, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 24.286, 0, 1)
  }

  8.61% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 6.071, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 6.071, 0, 1)
  }

  12.91% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -2.614, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -2.614, 0, 1)
  }

  17.22% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -4.667, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -4.667, 0, 1)
  }

  28.33% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.031, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.031, 0, 1)
  }

  39.44% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, .312, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, .312, 0, 1)
  }

  61.66% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.021, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.021, 0, 1)
  }

  83.98% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, .001, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, .001, 0, 1)
  }

  100% {
    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
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
  animation: ${slideAnimation} 1000ms linear both;
`;

export const PaginationContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CurrentPageContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: calc(100% + 10px);
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: bold;
`;

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
  @media (max-width: 991px) {
    display: none;
    &:first-child, &:last-child{
      display: block;
    }
  }
`;
