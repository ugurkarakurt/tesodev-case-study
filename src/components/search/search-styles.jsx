import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchButtonContainer = styled(Link)`
  width: fit-content;
  position: absolute;
  left: calc(100% - 23px);
  top: 50%;
  transform: translateY(-50%);
  button {
    width: fit-content;
    &:active {
      position: relative;
      top: 1px;
    }
  }
`;