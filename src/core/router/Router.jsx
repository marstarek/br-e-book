import { createBrowserRouter } from "react-router-dom";
import Layout from "../utilities/Layout";
import ErrorBoundary from "../utilities/ErrorBoundary";
import Home from "../../pages/home/Home";
import Books from "../../pages/Books/Books";
import BookDetails from "../../components/bookDetails/BookDetails";
import BooksList from "../../components/booksList/BooksList";
const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
      children: [
    
      { index:true, element: <Home /> },
      { path: "books", element: <Books /> },
      { path: "book/:id", element: <BookDetails /> },

    ],
  },
];
const Router = createBrowserRouter(routes);

export default Router;
