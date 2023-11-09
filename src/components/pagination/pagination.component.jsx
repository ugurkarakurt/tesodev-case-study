import React, { useContext, useEffect, useState } from 'react';
import { RecordsContext } from '../../contexts/records.context';
import { PaginationContainer, PaginationButton, PaginationButtonContainer, CurrentPageContainer } from "./pagination.stlyes";
import { generatePageNumbers } from '../../utils/pagination/pagination.utils';

function Pagination() {
  const { filteredRecords, currentPage, setCurrentPage, totalPages, itemsPerPage } = useContext(RecordsContext);
  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  const [isClicked, setIsClicked] = useState(false);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    if (page !== currentPage) {
      setIsClicked(true);
    }
  };

  useEffect(() => {
    setIsClicked(false);
  }, [currentPage, filteredRecords]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredRecords]);

  return (
    <>
      {filteredRecords && (filteredRecords.length > itemsPerPage) && (
        <PaginationContainer>
          <PaginationButtonContainer>
            <PaginationButton disabled={currentPage < 2} $isdirection={true} onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </PaginationButton>
            {pageNumbers.map((page, index) => (
              <PaginationButton
                key={index}
                $isClicked={isClicked}
                onClick={(e) => { handlePageChange(page, e.target); }}
                $istactive={currentPage === page && true}
                $isdot={typeof page !== "number" && true}
              >
                {page}
              </PaginationButton>
            ))}
            <PaginationButton disabled={currentPage === totalPages} $isdirection={'true'} onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </PaginationButton>
          </PaginationButtonContainer>
          <CurrentPageContainer>
            {currentPage}. of {totalPages}
          </CurrentPageContainer>
        </PaginationContainer>
      )}
    </>

  );
}

export default Pagination;
