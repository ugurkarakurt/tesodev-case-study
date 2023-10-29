import React, { useContext } from 'react';
import { EmptyResultContainer } from './empty-result.styles';
import { RecordsContext } from '../../contexts/records.context';

const EmptyResult = () => {
  const { filteredRecords } = useContext(RecordsContext);

  if (filteredRecords && !filteredRecords.length) {
    return <EmptyResultContainer>The record you are looking for is not found.</EmptyResultContainer>;
  }

  return null;
}

export default EmptyResult;
