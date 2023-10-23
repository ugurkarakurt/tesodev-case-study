import styled from "styled-components";

export const ListContainer = styled.div`
  width: 870px;
  min-height: 100vh;
  margin-top: 30px;
  display: flex;
`;
export const ListActionsContainer = styled.div`

`;

export const ListItemsContainer = styled.div`
  flex:  1 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 50px;
`;

export const ListItemsWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: calc(100% - 25px);
  margin: 12px auto;
  border-bottom: 1px solid #7E7E7E;
  &:last-child{
    display: none;
  }
`;

