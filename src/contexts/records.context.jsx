import { createContext, useState, useEffect, useContext } from 'react';
import { get, post, remove } from '../utils/request/request.utils';
import { filterWithSearchValue } from '../utils/filter/filter.utils';
import { generatePageNumbers, setOrderedItems } from '../utils/pagination/pagination';
import config from '../config/config';

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
  const [previousPage, setPreviousPage] = useState('');
  const apiUrl = config.apiUrl;

  useEffect(() => {
    if (!recordsMap) {
      const getRecordsMap = async () => {
        const RecordsData = await get(apiUrl);
        setRecordsMap(RecordsData.results);
      };
      getRecordsMap();
    }

    if (!previousPage) {
      setPreviousPage(localStorage.getItem("previousPage"))
    }

  }, []);

  useEffect(() => {
    if (previousPage) {
      localStorage.setItem("previousPage", previousPage)
    }
  }, [previousPage]);

  useEffect(() => {
    if (searchValue.length < 2) {
      setFilteredRecords(recordsMap);
    } else {
      const filteredSearchValue = filterWithSearchValue(recordsMap, searchValue)
      if (sortingKey && filteredSearchValue) {
        const sortedRecords = setOrderedItems([...filteredSearchValue], sortingKey);
        setFilteredRecords(sortedRecords);
        return
      }
      setFilteredRecords(filteredSearchValue);
    }
  }, [recordsMap, searchValue, sortingKey]);

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
    }
  }, [sortingKey]);

  const addRecordToList = async (recordToAdd) => {
    const response = await post(apiUrl, recordToAdd);
    return response;
  }

  const removeRecordFromList = async (recordToRemove) => {
    const { id } = recordToRemove;
    const response = await remove(`${apiUrl}/${id}`);
    return response;
  };


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
    sortingKey,
    setSortingKey,
    previousPage,
    setPreviousPage,
    addRecordToList,
    removeRecordFromList
  };

  return (
    <RecordsContext.Provider value={value}>
      {children}
    </RecordsContext.Provider>
  );
};
