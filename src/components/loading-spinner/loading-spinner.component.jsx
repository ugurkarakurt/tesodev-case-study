import React, { useContext } from 'react';
import { LoadingSpinnerContainer, LoadingSpinnerIcon } from './loading-spinner.styles';
import LoadingIcon from "./loading-svgrepo-com.svg";
import { RecordsContext } from '../../contexts/records.context';

export default function LoadingSpinner() {
  const { recordsMap } = useContext(RecordsContext);

  return (
    <>
      {!recordsMap && (
        <LoadingSpinnerContainer>
          <LoadingSpinnerIcon src={LoadingIcon} alt="location_icon" />
        </LoadingSpinnerContainer>
      )}
    </>

  )
}
