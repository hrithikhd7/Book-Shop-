import { useState } from "react";
import { useEffect } from "react";
import BookPage from "../BookPage/BookPage";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("bookcards.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);

  return (
    <div className="text-center ">
      <div className="w-full h-full bg-neutral-900 bg-opacity-5 rounded-3xl md:flex justify-between items-center md:px-32 p-4 ">
        <div className="flex flex-col gap-y-4 items-center mb-6 md:mb-0">
          <div className=" text-neutral-900 md:text-6xl font-bold text-4xl font-secondary">
            Books to freshen <br /> up your bookshelf
          </div>
          <div className="btn md:w-48 md:h-16 md:px-7 md:py-5 bg-green-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-xl font-bold font-primary">
              View The List
            </div>
          </div>
        </div>
        <img className="" src="/public/playboibook.png" />
      </div>
      <div className="text-neutral-900 text-[40px] font-bold font-secondary my-24">
        <h1>Books</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-16">
        {books.map((books) => (
          <BookPage key={books.BookId} books={books}></BookPage>
        ))}
      </div>
    </div>
  );
};

export default Home;
