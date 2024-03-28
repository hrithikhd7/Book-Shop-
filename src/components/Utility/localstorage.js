const getStoredReadBooks = () => {
  const StoredReadBooks = localStorage.getItem("Read-Books");
  if (StoredReadBooks) {
    return JSON.parse(StoredReadBooks);
  }
  return [];
};

const saveReadBooks = (id) => {
  const StoredReadBooks = getStoredReadBooks();
  const exists = StoredReadBooks.find((bookId) => bookId === id);
  if (!exists) {
    StoredReadBooks.push(id);
    localStorage.setItem("Read-Books", JSON.stringify(StoredReadBooks));
  }
};

export { getStoredReadBooks, saveReadBooks };
