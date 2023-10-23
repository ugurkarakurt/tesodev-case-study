import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListNavgationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px 0;
  width: 1174px;
  gap: 35px;
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
  padding-right: 65px;

  img {
    display: none;
  }

  input {
    padding-left: 20px;
  }
  a {
    position: static;
    transform: none;
  }
`;

export const ListAddButtonContainer = styled.div``;

export const SearchButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
