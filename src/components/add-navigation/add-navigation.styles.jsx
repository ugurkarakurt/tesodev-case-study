import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 27px 37px;
  @media (max-width: 1280px) {
    padding:27px 0;

  }
  @media (max-width: 678px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 63px;
  position: relative;
  @media (max-width: 678px) {
     width: 100%;
     img{
      object-fit: contain;
     }
  }
  span{
    display: none;
  }
`;



