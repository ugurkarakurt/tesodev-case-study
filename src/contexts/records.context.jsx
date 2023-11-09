import { createContext, useState, useEffect, useContext } from 'react';
import { get, post, remove, patch } from '../utils/request/request.utils';
import { filterWithSearchValue } from '../utils/filter/filter.utils';
import { setOrderedItems } from '../utils/pagination/pagination.utils';
import config from '../config/config';

export const RecordsContext = createContext();

export const useRecords = () => {
  return useContext(RecordsContext);
};

export const RecordsProvider = ({ children }) => {
  const [recordsMap, setRecordsMap] = useState(null);
  const [filteredRecords, setFilteredRecords] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortingKey, setSortingKey] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [previousPage, setPreviousPage] = useState('');
  const [itemToUpdate, setItemToUpdate] = useState({});
  const apiUrl = config.apiUrl;

  useEffect(() => {
    getRecordList();

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
    setFilteredRecords(recordsMap);
  }, [recordsMap]);

  useEffect(() => {
    if (recordsMap) {
      setTotalPages(Math.ceil(filteredRecords.length / itemsPerPage));
    } else {
      setTotalPages(0);
    }
  }, [filteredRecords, itemsPerPage]);

  useEffect(() => {
    if (recordsMap) {
      const sortedRecords = setOrderedItems([...filteredRecords], sortingKey);
      setFilteredRecords(sortedRecords);
    }
  }, [sortingKey]);

  const searchRecord = (searchValue) => {
    recordsMap && setFilteredRecords(filterWithSearchValue(recordsMap, searchValue, sortingKey));
  }

  const getRecordList = async () => {
    const RecordsData = await get(apiUrl);
    setRecordsMap(RecordsData.results);
  }

  const addRecordToList = async (recordToAdd) => {
    const response = await post(apiUrl, recordToAdd);
    getRecordList()
    return response;
  }

  const editRecordToList = async (recordToEdit) => {
    const { id } = itemToUpdate;
    const response = await patch(`${apiUrl}/${id}`, recordToEdit);
    getRecordList()
    return response;
  };

  const removeRecordFromList = async (recordToRemove) => {
    const { id } = recordToRemove;
    const response = await remove(`${apiUrl}/${id}`);
    getRecordList()
    return response;
  };


  const value = {
    recordsMap,
    setRecordsMap,
    filteredRecords,
    setFilteredRecords,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    sortingKey,
    setSortingKey,
    previousPage,
    setPreviousPage,
    addRecordToList,
    removeRecordFromList,
    itemToUpdate,
    setItemToUpdate,
    editRecordToList,
    searchRecord
  };

  return (
    <RecordsContext.Provider value={value}>
      {children}
    </RecordsContext.Provider>
  );
};
