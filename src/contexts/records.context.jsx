import { createContext, useState, useEffect } from 'react';
import { get } from '../utils/request/request.utils';
import { filterWithSearchValue } from '../utils/filter/filter.utils';
import { generatePageNumbers, setOrderedItems } from '../utils/pagination/pagination';

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
  sortingKey: 'default',
  setSortingKey: () => { },
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
  const [sortingKey, setSortingKey] = useState('default');

  useEffect(() => {
    const getRecordsMap = async () => {
      if (!recordsMap) {
        const RecordsData = await get('http://localhost:3000/results');
        setRecordsMap(RecordsData);
        setIsContentLoaded(true);
      }
    };
    getRecordsMap();
  }, [recordsMap]);


  useEffect(() => {
    searchValue < 2
      ? setFilteredRecords(recordsMap && recordsMap)
      : setFilteredRecords(recordsMap && filterWithSearchValue(recordsMap, searchValue));

  }, [recordsMap, searchValue]);

  useEffect(() => {
    filteredRecords && itemsPerPage && setTotalPages(Math.ceil(filteredRecords.length / itemsPerPage));

  }, [filteredRecords, itemsPerPage]);

  useEffect(() => {
    setPageNumbers(generatePageNumbers(currentPage, totalPages));
  }, [currentPage, totalPages]);

  useEffect(() => {
    setFilteredRecords(setOrderedItems(filteredRecords, sortingKey));
  }, [sortingKey, filteredRecords]);

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
    setIsContentLoaded,
    sortingKey,
    setSortingKey,
  };

  return (
    <RecordsContext.Provider value={value}>
      {children}
    </RecordsContext.Provider>
  );
};
