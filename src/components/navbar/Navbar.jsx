import { Link } from "react-router-dom";
import { BsFillPeopleFill, BsPeopleFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import main_logo from "../../assets/images/main_logo.svg";
const Navbar = ({ children }) => {
  return (
    <div className="  bg-base-200 w-full mx-auto">
      <div className="w-full    border-b-2 border-gray-500">
        <div className="container mx-auto px-0 py-3 flex justify-end">
          العربية
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto px-0 py-3 flex justify-between">
                  <img src={main_logo} alt="" className="max-h-12 " />
                  <p className="text-white">Sign In or Sign Up</p>
        </div>
      </div>
      <div className="navbar bg-[#1e1e1e] w-full  mx-auto px-0 py-0">
              <div className="container mx-auto ">
                  
              <div className="navbar-center container text-white ">
                      <div className="flex gap-6">

            <Link
              to={"/"}
              className=" text-white btn bg-transparent  hover:bg-base-200   border-0 flex items-center text-sm font-semibold"
            >
          Home
            </Link>
            <Link
              to={"courses"}
              className=" text-white btn bg-transparent  hover:bg-base-200   border-0 flex items-center text-sm font-semibold"
            >
          Courses
            </Link>
            <Link
              to={"e-books"}
              className=" text-white btn bg-transparent  hover:bg-base-200   border-0 flex items-center text-sm font-semibold"
            >
          E-books
            </Link>
            <Link
              to={"contact-us"}
              className=" text-white btn bg-transparent  hover:bg-base-200   border-0 flex items-center text-sm font-semibold"
            >
          Contact Us

            </Link>
          </div>
        </div>

        <div className="navbar-end text-white">
          <div className="flex justify-center items-center">
          <FaCartShopping></FaCartShopping>

          </div>

        
        </div>
       </div>
        
      </div>
    </div>
  );
};

export default Navbar;
