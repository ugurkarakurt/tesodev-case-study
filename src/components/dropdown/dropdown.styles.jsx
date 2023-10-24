import styled from 'styled-components';

export const DropDownContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 14px;
  color: #3faffa;
  background: #ffffff;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 14px;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const DropDownListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
