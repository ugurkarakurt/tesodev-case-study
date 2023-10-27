import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  @media (max-width: 1280px) { 
    width: 100%;
    padding: 0 20px 50px 20px;
  }
`;
