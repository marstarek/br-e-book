import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../core/api/axiosClient";
import Loading from "../../core/utilities/Loading";
import Book from "../book/Book";
import { Link } from "react-router-dom";

const BooksList = ({ }) => {
  
  
  const fetchBooks = async () => {
    const res = await axiosInstance.get(
      `/products?filter[product_type]=digital&filter[sub_product_type]=book`
    );
    console.log(res.data);
    return res.data;
  };
  const { isLoading, isPending, isError, error, data, isFetching, refetch } =
    useQuery({
      queryKey: [`booksKey-`],
      queryFn: () => fetchBooks(),
      retry: false,
      onSettled: (res) => {
        return res;
      },
    });
  return (
    <>
      <div>
        <div
          className={`w-fit container mx-auto grid 
            grid-cols-1 lg:grid-cols-3 md:grid-cols-2
            justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 px-4`}
        >
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((book) => <Book book={book} key={book?.id}></Book>)
          )}
        </div>
      </div>
    </>
  );
};

export default BooksList;
