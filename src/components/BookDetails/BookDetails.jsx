import { useLoaderData, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import {
  getStoredReadBooks,
  saveReadBooks,
  getStoredWishListBooks,
  saveWishListBooks,
} from "../Utility/localstorage";
import { useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const book = books.find((book) => book.bookId === idInt);
  console.log(book);

  const [addedBooks, setAddedBooks] = useState(getStoredReadBooks());
  const [wishList, setWishList] = useState(getStoredWishListBooks());

  const handleReadList = () => {
    if (addedBooks.includes(idInt)) {
      toast.error("Book is already added to the Read list!");
    } else {
      saveReadBooks(idInt);
      setAddedBooks([addedBooks, idInt]);
      toast.success("Book is added to the Read List");
    }
  };

  const handleWishList = () => {
    if (addedBooks.includes(idInt)) {
      toast.error("Book is already added to the Read list");
    } else if (wishList.includes(idInt)) {
      toast.error("Book is already in the Wish List!");
    } else {
      saveWishListBooks(idInt);
      setWishList([wishList, idInt]);
      toast.success("Book is added to the Wish List!");
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-full p-4 bg-neutral-900 bg-opacity-5">
        <img className="md:h-[600px] w-auto" src={book.image} />
      </figure>
      <div className="card-body w-full">
        <h1 className="card-title md:text-5xl text-4xl font-secondary">
          {book.bookName}
        </h1>
        <h1 className="card-title md:text-2xl">By: {book.author}</h1>
        <hr />
        <h1 className="card-title md:text-xl text-l">{book.category}</h1>
        <hr />
        <h1 className=" text-l">
          <span className="md:text-xl font-semibold">Review: </span>
          {book.review}
        </h1>
        <h1 className=" text-l">
          <span className="md:text-xl font-semibold">Tags: </span> {book.tags}
        </h1>
        <hr />
        <div>
          <ul className="">
            <li className="text-l ">
              Number of Pages:{" "}
              <span className="font-semibold">{book.totalPages}</span>{" "}
            </li>
            <li className="text-l ">
              Publisher: <span className="font-semibold">{book.publisher}</span>{" "}
            </li>
            <li className="text-l ">
              Year of Publishing:{" "}
              <span className="font-semibold">{book.yearOfPublishing}</span>
            </li>
            <li className="text-l ">
              Rating: <span className="font-semibold">{book.rating}</span>
            </li>
          </ul>
        </div>

        <div className="card-actions justify-start">
          <button
            onClick={handleReadList}
            className="btn bg-transparent border-1 border-neutral-300"
          >
            Read
          </button>
          <button
            onClick={handleWishList}
            className="btn  bg-teal-400 text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
