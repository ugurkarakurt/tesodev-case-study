import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const disabled = css`
  background-color: #b3b3b3;
  cursor: default;
  position: static;
  pointer-events: none;
`;

export const BaseButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #204080;
  color: #ffffff;
  transition: background 0.1s ease-in-out;
  border-radius: 8px;
  padding: 0 42px;
  @media (max-width: 1280px) {
    font-size: 14px;
    height: 36px;
  }

  &:hover {
    background-color: #4f75c2;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  ${({ $disabled }) => $disabled && disabled};
`;
export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #204080;
  color: #ffffff;
  transition: background 0.1s ease-in-out;
  border-radius: 8px;
  padding: 0 42px;

  &:hover {
    background-color: #4f75c2;
  }
  &:active {
    position: relative;
    top: 1px;
  }
  ${({ $disabled }) => $disabled && disabled};
`;


