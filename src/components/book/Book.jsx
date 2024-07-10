import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Book = ({ book }) => {
  const nav = useNavigate();
  function goTo(id) {
    nav(`/book/${id}`)
  }

  return (
    <div className="h-96 card bg-base-100 shadow-2xl" key={book.id}>
      <figure className="h-50 py-2" onClick={() => goTo(book.id)}>
        <img
          src={`${book?.attributes?.book?.image_url}`}
          alt="book"
          className=" rounded-t-xl h-full"
        />
      </figure>
      <div
        className="card-body p-2 justify-center  "
        onClick={() => goTo(book.id)}
      >
        <h2 className="card-title ">{book?.attributes?.name}</h2>

        <div className="card-actions   items-center">
          <p className=" text-2xl font-bold">{book?.attributes?.currency}{book?.attributes?.price}$</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <button
        className="btn w-[70%]  text-white border-0 hover:bg-[#53e746]  rounded-none bg-[#53e746]  m-4 "
        onClick={() => {
         goTo(book.id)
        }}
      >
        
        Pay 
        
      </button>
      <MdAddShoppingCart className="text-lg" />

          </div>
      
    </div>
  );
};

export default Book;
