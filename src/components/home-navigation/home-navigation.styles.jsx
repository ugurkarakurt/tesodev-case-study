import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeNavigationContainer = styled.div`
  padding-top: 183px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(240, 230, 210, 0.1);
  position: relative;
  @media (max-width: 1280px) {
   padding-top: 100px;
  }
`;

export const HomeAddButtonContainer = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  @media (max-width: 1280px) {
    top: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 278px;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
