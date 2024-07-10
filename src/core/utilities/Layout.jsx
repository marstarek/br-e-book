import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonFillCheck, BsPeopleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Footer from "../../components/footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-base-200 overflow-auto w-full">
      <div className="drawer  bg-base-200 h-full">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-base-200 h-full justify-between">
          <Navbar />
          <div className="w-full mx-auto px-0  flex-grow flex  lg:px-3">
            
            <Outlet />
          </div>
          <Footer ></Footer>
        </div>
      </div>{" "}
    </div>
  );
};

export default Layout;
