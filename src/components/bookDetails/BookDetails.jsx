import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../core/api/axiosClient";
import { useQuery } from "@tanstack/react-query";

const BookDetails = () => {
  let { id } = useParams();
  const fetchBooks = async () => {
    const res = await axiosInstance.get(`/products/${id}`);
    console.log(res.data);
    return res.data;
  };
  const {
    isLoading,
    isPending,
    isError,
    error,
    data: book,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [`booksKey-`],
    queryFn: () => fetchBooks(),
    retry: false,
    onSettled: (res) => {
      return res;
    },
  });
  useEffect(() => {
    console.log(book);
  }, [id]);
  return (
    <div className="flex justify-center  items-center w-full flex-col  mx-auto container ">
      <h1 className="text-3xl text-white">{book?.attributes?.name}</h1>
      <div className="flex justify-center py-6  items-center w-full min-h-[40rem]   mx-auto ">
        <div className="flex justify-center bg-[#1e1e1e]  h-full items-center w-[30%] flex-col  mx-auto "></div>
        <div className="flex justify-center  bg-[#1e1e1e] h-full items-center w-[60%] flex-col  mx-auto "></div>
      </div>
    </div>
  );
};

export default BookDetails;
