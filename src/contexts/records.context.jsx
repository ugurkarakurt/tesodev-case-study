import { createContext, useState, useEffect, useContext } from 'react';
import { get } from '../utils/request/request.utils';
import { filterWithSearchValue } from '../utils/filter/filter.utils';
import { generatePageNumbers, setOrderedItems } from '../utils/pagination/pagination';

export const RecordsContext = createContext();

export const useRecords = () => {
  return useContext(RecordsContext);
};

export const RecordsProvider = ({ children }) => {
  const [recordsMap, setRecordsMap] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filteredRecords, setFilteredRecords] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortingKey, setSortingKey] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!recordsMap) {
      const getRecordsMap = async () => {
        const RecordsData = await get('http://localhost:3000/results');
        setRecordsMap(RecordsData);
      };
      getRecordsMap();
    }
  }, []);


  useEffect(() => {
    if (searchValue.length < 2) {
      setFilteredRecords(recordsMap);
    } else {
      setFilteredRecords(filterWithSearchValue(recordsMap, searchValue));
    }
  }, [recordsMap, searchValue]);

  useEffect(() => {
    if (filteredRecords && itemsPerPage) {
      setTotalPages(Math.ceil(filteredRecords.length / itemsPerPage));
    } else {
      setTotalPages(0);
    }
  }, [filteredRecords, itemsPerPage]);

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  useEffect(() => {
    if (sortingKey && filteredRecords) {
      const sortedRecords = setOrderedItems([...filteredRecords], sortingKey);
      setFilteredRecords(sortedRecords);
      console.log(sortedRecords[0]);
    }
  }, [sortingKey]);



  const value = {
    recordsMap,
    setRecordsMap,
    searchValue,
    setSearchValue,
    filteredRecords,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    pageNumbers,
    sortingKey,
    setSortingKey,
  };

  return (
    <RecordsContext.Provider value={value}>
      {children}
    </RecordsContext.Provider>
  );
};
