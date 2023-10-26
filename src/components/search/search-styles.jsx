import styled from "styled-components";

export const SearchButtonContainer = styled.div`
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