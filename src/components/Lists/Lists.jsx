import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../Utility/localstorage";
import StoredBooks from "../StoredBooks/StoredBooks";

const Lists = () => {
  const books = useLoaderData();

  const [booksRead, setbooksRead] = useState([]);

  useEffect(() => {
    const storedBookId = getStoredReadBooks();
    if (books.length > 0) {
      const NewBook = books.filter((book) =>
        storedBookId.includes(book.bookId)
      );
      console.log(NewBook);
      setbooksRead(NewBook);
      console.log(booksRead);
    }
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
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 flex flex-col gap-6"
        >
          {booksRead.map((books) => (
            <StoredBooks key={books.bookId} books={books}></StoredBooks>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 flex flex-col gap-4"
        >
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default Lists;
