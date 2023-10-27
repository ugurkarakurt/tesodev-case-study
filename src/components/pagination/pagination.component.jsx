import React, { useContext, useEffect, useState } from 'react';
import { RecordsContext } from '../../contexts/records.context';
import { PaginstionContainer, PaginationButton, PaginationButtonContainer } from "./pagination.stlyes";

function Pagination() {
  const { filteredRecords, currentPage, setCurrentPage, totalPages, pageNumbers, itemsPerPage } = useContext(RecordsContext);
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
        <PaginstionContainer>
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
        </PaginstionContainer>
      )}
    </>

  );
}

export default Pagination;
