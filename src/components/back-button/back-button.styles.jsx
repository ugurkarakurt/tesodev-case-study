import styled from "styled-components";

export const BackButtonContainer = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  button {
    background-color: transparent;
    padding: 0;
    outline: none;
    border: none;
    width: 26px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1280px) {
      width: 20px;
    }
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  color: #484848;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 1280px) {
      font-size: 18px;
  }
`;
