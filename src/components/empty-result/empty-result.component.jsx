import React, { useContext } from 'react';
import { EmptyResultContainer } from './empty-result.styles';
import { RecordsContext } from '../../contexts/records.context';

const EmptyResult = () => {
  const { isContentLoaded, filteredRecords } = useContext(RecordsContext);
  return (
    <>
      {isContentLoaded && filteredRecords && !filteredRecords.length && <EmptyResultContainer>The record you are looking for is not found.</EmptyResultContainer>}
    </>
  )
}

export default EmptyResult;