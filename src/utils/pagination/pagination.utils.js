export const generatePageNumbers = (currentPage, totalPages) => {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage > 2 && currentPage <= totalPages - 2) {
    return [1, '• • •', currentPage - 1, currentPage, currentPage + 1, '• • •', totalPages];
  }

  return [1, 2, 3, '• • •', totalPages - 2, totalPages - 1, totalPages];
};

export const setOrderedItems = (filteredRecords, orderValue) => {
  const sortingKey = letterEditor(orderValue);

  switch (sortingKey) {
    case "nameascending":
      return filteredRecords.sort((a, b) => letterEditor(a.nameSurname).localeCompare(letterEditor(b.nameSurname)));
    case "namedescending":
      return filteredRecords.sort((a, b) => letterEditor(b.nameSurname).localeCompare(letterEditor(a.nameSurname)));
    case "dateascending":
      return filteredRecords.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "datedescending":
      return filteredRecords.sort((a, b) => new Date(b.date) - new Date(a.date));
    default:
      return filteredRecords;
  }
}

const letterEditor = (word) => word.replace(/[-\s]/g, "").toLowerCase();
