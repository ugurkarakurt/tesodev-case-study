import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const borderBottom = css`
 border-color: transparent;
`;

export const ListPreviewContainer = styled.div`
  width: 717px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`;
export const ListPreviewTitle = styled.h2`
  color: #090a0a;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 18px;
  padding: 0 24px;
`;

export const ListPreviewSearchContainer = styled.div`
  color: #090a0a;
  font-size: 32px;
  font-weight: 700;
  position: relative;
  padding: 0 35px;

  img {
    position: absolute;
    left: 47px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  input {
    padding-left: 48px;
    font-weight: normal;
    font-size: 16px;
  }
`;

export const ListPreviewWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  border-radius: 24px;
  border: 1px solid #484848;
  background: #fff;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
`;

export const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
`;

export const ShowMoreLink = styled(Link)`
  color: #090a0a;
  font-size: 16px;
  font-weight: 700;
`;

export const Divider = styled.div`
  width: 90%;
  margin-left: auto;
  border-bottom: 1px solid #eee;
  ${({ $index }) => $index === 0 && borderBottom};
`;