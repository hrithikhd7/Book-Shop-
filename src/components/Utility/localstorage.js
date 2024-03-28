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
const getStoredWishListBooks = () => {
  const storedWishListBooks = localStorage.getItem("WishList-Books");
  if (storedWishListBooks) {
    return JSON.parse(storedWishListBooks);
  }
  return [];
};

const saveWishListBooks = (id) => {
  const storedWishListBooks = getStoredWishListBooks();
  const exists = storedWishListBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedWishListBooks.push(id);
    localStorage.setItem("WishList-Books", JSON.stringify(storedWishListBooks));
  }
};

export {
  getStoredReadBooks,
  saveReadBooks,
  getStoredWishListBooks,
  saveWishListBooks,
};
