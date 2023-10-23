import styled from "styled-components";

export const SiteLogo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  span {
    position: absolute;
    left: calc(100% - 46px);
    top: calc(100% + 10px);
    white-space: nowrap;
    color: #484848;
    font-size: 14px;
    font-weight: 700;
  }
`;