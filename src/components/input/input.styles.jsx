import styled, { css } from "styled-components";

export const errorInput = css`
 background-color: #ffffff;
    border-color: #f00;
    color: #f00;
`

export const BaseInputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 7px;
  position: relative;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  color: #484848;
  transition: 0.1s ease-in-out;
  border-radius: 8px;
  border: 2px solid #204080;
  font-weight: bold;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    background-color: #ffffff;
    color: #090a0a;
  }

  &::placeholder {
    color: rgba(100, 100, 100, 0.5);
  }
  ${({ $error }) => $error && errorInput};

  @media (max-width: 1280px) {
    font-size: 14px;
    height: 40px;
  }

`;

export const InputGroupLabel = styled.label`
  color: #686868;
  font-size: 18px;
  font-weight: 700;
`;

export const InputGroupError = styled.span`
  color: rgba(255, 0, 0, 0.5);
  font-size: 18px;
  font-weight: 700;
  padding-left: 8px;
  margin-top: 10px;
`;
