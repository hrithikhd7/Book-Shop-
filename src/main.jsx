import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Lists from "./components/Lists/Lists";
import Read from "./components/Read/Read";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import BookDetails from "./components/BookDetails/BookDetails";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/lists",
        element: <Lists></Lists>,
        loader: () => fetch("/bookcards.json"),
      },
      {
        path: "/read",
        element: <Read></Read>,
        loader: () => fetch("/bookcards.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/books/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/bookcards.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster richColors position="top-right" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
