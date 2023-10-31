import { setOrderedItems } from "../pagination/pagination";

export const filterWithSearchValue = (recordsMap, searchValue, sortingKey) => {
  const newFilteredRecords = recordsMap.filter((record) => {
    const valuesString = Object.values(record)
      .join(" ")
      .replace(/\s/g, "")
      .toLowerCase();
    const searchValueFormatted = searchValue.replace(/\s/g, "").toLowerCase();
    return valuesString.includes(searchValueFormatted);
  });

  if (searchValue.length > 2) {
    const filteredSearchValue = newFilteredRecords;
    if (sortingKey) {
      const sortedRecords = setOrderedItems(
        [...filteredSearchValue],
        sortingKey
      );
      return sortedRecords;
    }
    return filteredSearchValue;
  }

  if (sortingKey) {
    const sortedRecords = setOrderedItems([...recordsMap], sortingKey);

    return sortedRecords;
  }

  return recordsMap;
};
