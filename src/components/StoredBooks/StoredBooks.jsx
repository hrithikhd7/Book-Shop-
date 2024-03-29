import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { CiFileOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const StoredBooks = ({ books }) => {
  const {
    bookName,
    author,
    image,
    rating,
    publisher,
    yearOfPublishing,
    totalPages,
    tags,
    category,
    bookId,
  } = books;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl md:flex flex-col md:flex-row items-center md:items-start">
        <img className="w-[200px] h-[300px] m-5 rounded-md" src={image} />

        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <div className="flex flex-col gap-3">
            <p1>Author: {author}</p1>
            <div className="flex gap-4">
              {tags.map((tags, index) => (
                <div className="px-4 py-[7px] bg-green-600 bg-opacity-5 rounded-[30px] justify-center items-center gap-2.5 text-green-500 font-semibold">
                  #{tags}
                </div>
              ))}
            </div>

            <div className="flex gap-3 items-center">
              <CiLocationOn />
              <p1 className="">Year of Publishing: {yearOfPublishing}</p1>
            </div>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="flex gap-3 items-center">
                <GoPeople />
                <p1>Publisher: {publisher}</p1>
              </div>
              <div className="flex gap-3 items-center">
                <CiFileOn />
                <p1>Page: {totalPages}</p1>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-8 md:flex-row flex-col">
            <div className=" p-3 bg-blue-500 bg-opacity-20 rounded-[30px] justify-center items-center  inline-flex">
              <div className="text-center text-blue-500 text-base font-semibold">
                Category: {category}
              </div>
            </div>
            <div className=" p-3 bg-amber-400 bg-opacity-20 rounded-[30px] justify-center items-center  inline-flex">
              <div className="text-center text-amber-400 text-base font-semibold">
                Rating: {rating}
              </div>
            </div>
            <Link
              to={`/books/${bookId}`}
              className="btn p-3 bg-green-600  rounded-[30px] justify-center items-center  inline-flex"
            >
              <div className="text-center text-white text-base font-semibold">
                View Details
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoredBooks;
