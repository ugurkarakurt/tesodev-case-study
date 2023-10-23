import { createContext, useState, useEffect } from 'react';
import { get } from '../utils/request/request.utils';
import { filterWithSearchValue } from '../utils/filter/filter.utils';


const generatePageNumbers = (currentPage, totalPages) => {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage > 2 && currentPage <= totalPages - 2) {
    return [1, '• • •', currentPage - 1, currentPage, currentPage + 1, '• • •', totalPages];
  }

  return [1, 2, 3, '• • •', totalPages - 2, totalPages - 1, totalPages];
};

export const RecordsContext = createContext({
  recordsMap: null,
  setRecordsMap: () => { },
  searchValue: '',
  setSearchValue: () => { },
  filteredRecords: null,
  setFilteredRecords: () => { },
  currentPage: 1,
  setCurrentPage: () => { },
  itemsPerPage: 5,
  setItemsPerPage: () => { },
  totalPages: '',
  setTotalPages: () => { },
  pageNumbers: [],
  setPageNumbers: () => { },
  isContentLoaded: false,
  setIsContentLoaded: () => { },
});

export const RecordsProvider = ({ children }) => {
  const [recordsMap, setRecordsMap] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filteredRecords, setFilteredRecords] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState('');
  const [pageNumbers, setPageNumbers] = useState([]);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const getRecordsMap = async () => {
      await get('http://localhost:3000/results')
        .then((RecordsData) => {
          setRecordsMap(RecordsData);
        })
        .then(() => {
          setIsContentLoaded(true);
        })
    };
    getRecordsMap();
  }, []);

  useEffect(() => {
    if (searchValue < 2) {
      setFilteredRecords(recordsMap && recordsMap);
      return;
    }
    setFilteredRecords(recordsMap && filterWithSearchValue(recordsMap, searchValue));
  }, [recordsMap, searchValue]);

  useEffect(() => {
    setTotalPages(filteredRecords && Math.ceil(filteredRecords.length / itemsPerPage));
  }, [filteredRecords, itemsPerPage]);

  useEffect(() => {
    setPageNumbers(generatePageNumbers(currentPage, totalPages))
  }, [currentPage, totalPages]);


  const value = {
    recordsMap,
    setRecordsMap,
    searchValue,
    setSearchValue,
    filteredRecords,
    setFilteredRecords,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    pageNumbers,
    setPageNumbers,
    isContentLoaded,
    setIsContentLoaded
  };

  return (
    <RecordsContext.Provider value={value}>
      {children}
    </RecordsContext.Provider>
  );
};