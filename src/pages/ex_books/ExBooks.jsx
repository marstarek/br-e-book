import React from 'react'
import BooksList from '../../components/booksList/BooksList'
import { Link } from 'react-router-dom'

const ExBooks = () => {
  return (
       <div>
           <div className="flex justify-center  items-center w-full flex-col gap-2  mx-auto container ">
        <h1 className="text-3xl text-white">EXPLORE OUR E-BOOKS</h1>
        <Link
          to={"books"}
          className=" rounded-none  text-white btn bg-primary  hover:bg-primary   border-0 flex items-center text-sm font-semibold"
        >
          See All
        </Link>
      </div> 
      <BooksList></BooksList>
    </div>
  )
}

export default ExBooks
