import React, { useContext } from 'react';
import { LoadingSpinnerContainer, LoadingSpinnerIcon } from './loading-spinner.styles';
import LoadingIcon from './loading-spinner.svg';
import { RecordsContext } from '../../contexts/records.context';

const LoadingSpinner = () => {
  const { recordsMap } = useContext(RecordsContext);

  return !recordsMap ? (
    <LoadingSpinnerContainer>
      <LoadingSpinnerIcon src={LoadingIcon} alt="loading_icon" />
    </LoadingSpinnerContainer>
  ) : null;
}

export default LoadingSpinner;
