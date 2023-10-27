import styled from "styled-components";

export const AddFormContainer = styled.div`
  width: 100%;
  padding: 65px 37px 65px 216px;
  @media (max-width: 1280px) {
    padding: 0;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 37px;
  input {
    width: 590px;
    padding: 10px 17px;
    @media (max-width: 1280px) {
    width: 100%;
  }
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 11px;
  width: 590px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1280px) {
    width: 100%;
  }

  button {
    width: 138px;
  }
`;
