import React from "react";
import BooksList from "../../components/booksList/BooksList";
import { Link } from "react-router-dom";

const Books = () => {
  return (
       <div>
            <div className="flex justify-center  items-center w-full flex-col gap-2  mx-auto container ">
        <h1 className="text-3xl text-white">E-BOOKS</h1>
       
      </div>
      <BooksList></BooksList>
    </div>
  );
};

export default Books;
