import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordsContext } from '../../contexts/records.context';
import BackButtonIcon from "./back-arrow.svg";
import { BackButtonContainer, Title } from "./back-button.styles";

const BackButton = () => {
  const { previousPage } = useContext(RecordsContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonContainer onClick={goBack}>
      <button>
        <img src={BackButtonIcon} alt="back_button_arrow" />
      </button>
      <Title>Return to {previousPage}</Title>
    </BackButtonContainer>
  );
}

export default BackButton;
