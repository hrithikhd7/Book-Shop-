import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredReadBooks,
  getStoredWishListBooks,
} from "../Utility/localstorage";
import StoredBooks from "../StoredBooks/StoredBooks";

const Lists = () => {
  const books = useLoaderData();

  const [booksRead, setBooksRead] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedReadBookIds = getStoredReadBooks();
    const readBooks = books.filter((book) =>
      storedReadBookIds.includes(book.bookId)
    );
    setBooksRead(readBooks);
    const storedWishListBookIds = getStoredWishListBooks();
    const wishListBooks = books.filter((book) =>
      storedWishListBookIds.includes(book.bookId)
    );
    setWishList(wishListBooks);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <div className="w-full h-[100px] bg-neutral-900 bg-opacity-5 rounded-2xl text-center flex justify-center items-center">
          <h1 className="text-neutral-900 text-[28px] font-bold">Books</h1>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 w-[185px] h-[52px] bg-green-600 text-white"
          >
            Sort By:
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publisher Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Lists"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {booksRead.map((books) => (
              <div className="my-4" key={books.bookId}>
                <StoredBooks books={books}></StoredBooks>
              </div>
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlists"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {wishList.map((books) => (
              <div className="my-4" key={books.bookId}>
                <StoredBooks books={books}></StoredBooks>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
