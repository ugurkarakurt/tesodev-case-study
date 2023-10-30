export const filterWithSearchValue = (recordsMap, searchValue) => {
  const newFilteredRecords = recordsMap.filter((record) => {
    const valuesString = Object.values(record).join(" ").replace(/\s/g, '').toLowerCase();
    const searchValueFormatted = searchValue.replace(/\s/g, '').toLowerCase();
    return valuesString.includes(searchValueFormatted);
  });

  return newFilteredRecords;
}

export const removeRecord = (filteredRecords, recordToClear) =>
  filteredRecords.filter((record) => record.id !== recordToClear.id);