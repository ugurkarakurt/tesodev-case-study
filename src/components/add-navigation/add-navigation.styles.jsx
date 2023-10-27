import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 27px 37px;
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



