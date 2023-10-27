import styled from "styled-components";

export const ListContainer = styled.div`
  width: 870px;
  margin-top: 30px;
  display: flex;
  padding-bottom: 100px;
  gap: 15px;
  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
export const ListActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  height: fit-content;
  @media (max-width: 991px) {
    justify-content: flex-end;
  }
`;

export const ListItemsContainer = styled.div`
  flex:  1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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

