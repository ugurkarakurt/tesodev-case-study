import styled from 'styled-components';

export const BaseButton = styled.button`
  height: 46px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline:none;
  background-color: #204080;
  color: #ffffff;
  transition: background .1s ease-in-out;
  border-radius: 8px; 
  padding:  0 42px;

  &:hover {
    background-color: #4F75C2;
  }
  &:active{
    position: relative;
    top: 1px;
  }
  &:disabled{
    background-color: #B3B3B3;
    cursor: default;
    position: static;
    &:active{
      position: static;
    }
  }
`;
