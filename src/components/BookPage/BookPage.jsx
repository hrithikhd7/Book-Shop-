import { Link } from "react-router-dom";

const BookPage = ({ books }) => {
  const { id, image, author, bookName, category, rating, tags } = books;

  return (
    <Link to={`/books/${id}`}>
      <div className="card w-full bg-base-100 shadow-xl items-center py-6 ">
        <img src={image} className="rounded-xl w-[250px] h-[300px]" />
        <div className="flex gap-4 my-4">
          <div className="w-[125px] h-[33px] px-4 py-[7px] bg-green-600 bg-opacity-5 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-green-600 text-base font-medium "></div>
          </div>
          <div className="w-[93px] h-[33px] px-4 py-[7px] bg-green-600 bg-opacity-5 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-green-600 text-base font-medium "></div>
          </div>
        </div>
        <div className=" mx-4 mb-4">
          <div className="text-neutral-900 text-2xl font-bold ">{bookName}</div>
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
            <img src="/public/star.png" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookPage;
