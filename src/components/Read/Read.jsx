import { useState, useEffect } from "react";
import { getStoredReadBooks } from "../Utility/localstorage";
import { useLoaderData } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Read;
