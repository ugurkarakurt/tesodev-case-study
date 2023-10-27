import styled, { css } from "styled-components";

export const hoverEffect = css`
  padding: 19px 24px;
  height: 80px;
  transition: background .2s ease-in-out;
  &:hover {
    background: rgba(79, 117, 194, 0.21);
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  min-height: 66px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  ${({ $ispath }) => $ispath && hoverEffect};
`;

export const ListItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItemLocation = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const ListItemCompany = styled.div`
  color: #090a0a;
  font-size: 16px;
`;

export const ListItemAdress = styled.div`
  color: #72777a;
  font-size: 14px;
`;

export const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
`;

export const ListItemName = styled.div`
  color: #484848;
  font-size: 16px;
`;

export const ListItemNumber = styled.div`
  color: #484848;
  font-size: 16px;
  font-weight: 500;
`;
