import styled, { keyframes, css } from "styled-components";

const navbarAnimation = keyframes`
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

const isActive = css`
    border-radius: 8px;
    background: #b3b3b3;
`;

export const DropDownHeader = styled.div`
  padding: 5px;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  user-select: none;
  color: #484848;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const DropDownBody = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #8f8f8f;
  background: #fff;
  box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 15px);
  left: 0;
  animation: ${navbarAnimation} 1000ms linear both;
  gap: 2px;
`;

export const DropDownListItem = styled.li`
  text-align: center;
  list-style: none;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-radius: 8px;
    background: #b3b3b3;
  }
  ${({ $isActive }) => $isActive && isActive};

`;

export const BaseDropdown = styled.div`
  min-width: 75px;
  border-radius: 8px;
  border: 1px solid #414141;
  background: #f3f2f2;
  position: relative;
  cursor: pointer;
  img{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 18px;
  }
`;
export const OrderDropdown = styled(BaseDropdown)`
  width: 130px;

  ${DropDownHeader} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 40px;
  }
  ${DropDownBody} {
    width: fit-content;
  }
  ${DropDownListItem} {
    text-align: start;
    white-space: nowrap;
  }
`;
