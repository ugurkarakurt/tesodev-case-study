export const filterWithSearchValue = function (recordsMap, searchValue) {
  const newFilteredRecords = recordsMap.filter((record) => {
    const valuesString = Object.values(record).join(" ").replace(/\s/g, '').toLowerCase();
    const searchValueFormatted = searchValue.replace(/\s/g, '').toLowerCase();
    return valuesString.includes(searchValueFormatted);
  });

  return newFilteredRecords;
}