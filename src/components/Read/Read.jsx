import { useState, useEffect } from "react";
import { getStoredReadBooks } from "../Utility/localstorage";
import { useLoaderData } from "react-router-dom";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Read = () => {
  const books = useLoaderData();
  const [booksRead, setBooksRead] = useState([]);

  useEffect(() => {
    const storedReadBookIds = getStoredReadBooks();
    const readBooks = books.filter((book) =>
      storedReadBookIds.includes(book.bookId)
    );
    setBooksRead(readBooks);
    console.log(booksRead);
  }, []);

  const chartData = booksRead.map((book) => ({
    bookName: book.bookName,
    totalPages: book.totalPages,
  }));

  return (
    <div className="flex flex-col items-center gap-20 text-center">
      <h1 className="text-4xl font-bold">Total Pages to Read</h1>
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis className="" dataKey="bookName" />
            <YAxis />
            <Bar
              className="font-bold text-2xl"
              dataKey="totalPages"
              fill="orange"
              shape={<TriangleBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Read;
