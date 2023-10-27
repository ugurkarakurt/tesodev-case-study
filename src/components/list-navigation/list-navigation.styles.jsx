import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px 0;
  width: 1174px;
  gap: 35px;

  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 63px;
  position: relative;
  span{
    display: none;
  }
`;

export const ListPreviewSearchContainer = styled.div`
  flex: 1 1;
  color: #090a0a;
  font-size: 32px;
  font-weight: 700;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding-right: 60px;
  @media (max-width: 1280px) {
    padding: 0;
  }

  @media (max-width: 991px) {
    flex:  1 1 100%;
    order: 2;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }


  img {
    display: none;
  }

  input {
    padding-left: 20px;
  }
  div {
    position: static;
    transform: none;
  }
`;

export const ListAddButtonContainer = styled.div`
  width: fit-content;
  @media (max-width: 410px) {
    flex: 1 1 100%;
  }
`;

export const SearchButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
