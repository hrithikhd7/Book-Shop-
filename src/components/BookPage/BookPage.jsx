import { Link } from "react-router-dom";

const BookPage = ({ books }) => {
  const { bookId, image, author, bookName, category, rating, tags } = books;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card w-full bg-base-100 shadow-xl items-center py-6 ">
        <img src={image} className="rounded-xl w-[250px] h-[300px]" />
        <div className="flex gap-4 my-4">
          {tags.map((tags, index) => (
            <div className="px-4 py-[7px] bg-green-600 bg-opacity-5 rounded-[30px] justify-center items-center gap-2.5">
              {tags}
            </div>
          ))}
        </div>
        <div className=" mx-4 mb-4">
          <div className="text-neutral-900 text-2xl font-bold font-secondary ">
            {bookName}
          </div>
          <div className="text-center text-neutral-900 text-opacity-80 text-base font-medium ">
            By : {author}
          </div>
        </div>
        <hr />
        <div className="flex gap-28">
          <div className="text-center text-neutral-900 text-opacity-80 text-base font-medium ">
            {category}
          </div>
          <div className="flex gap-3">
            <div className="text-center text-neutral-900 text-opacity-80 text-base font-medium ">
              {rating}
            </div>
            <img src="/star.png" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookPage;
