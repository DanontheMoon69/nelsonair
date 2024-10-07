import React, { useState, useEffect } from "react";
import nelsonLogo from "./Images/Nelson_Logo.png";
import {
  AiOutlineShopping,
  AiOutlineCalendar,
  AiOutlineEnvironment,
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillPhone,
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#0C4A6E");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor("#0C4A6E");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#0C4A6E");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full left-0 top-0  z-10 ease-in duration-300 "
    >
      <div className=" m-auto flex justify-between items-center p-4">
        <Link href="/">
          {color == "transparent" ? (
            <Image src={nelsonLogo} width={250} />
          ) : (
            <Image src={nelsonLogo} width={250} />
          )}
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden lg:flex text-sm tracking-widest items-center"
        >
          <li className=" p-2 hover:ease-in transform  hover:scale-105 hover:transition hover:duration-100 ">
            <Link href="/">HOME</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 text-center ">
            <Link href="/Calendar">RESIDENTIAL HVAC</Link>
          </li>

          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 text-center ">
            <Link href="/Pricing">COMMERCIAL HVAC</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 text-center ">
            <Link href="/VirtualYoga">PRODUCTS & SERVICES</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 ">
            <Link href="/Apparel">COMPANY</Link>
          </li>
        </ul>
        <div className="flex-col justify-center items-center text-center">
          <div className="hidden sm:flex text-xs font-bold text-sky-900 text-center justify-center  mb-1">
            Call for a FREE ESTIMATE
          </div>
          <div className="text-center ">
            {/* PHONE NUMBER  */}
            <a href="tel:+19492751615">
              <AiFillPhone
                size={40}
                className=" sm:hidden "
                style={{ color: `${textColor}` }}
              />
            </a>

            <a href="tel:+19492751615">
              <div className="hidden sm:flex items-center  justify-center text-white font-bold text-lg bg-sky-900 px-2 py-1 rounded-xl min-w-40">
                <div>(949) 275-1615</div>
              </div>
            </a>
          </div>
        </div>

        {/*  */}

        {/* Mobile Button */}

        <div
          onClick={handleNav}
          className="block lg:hidden z-10 cursor-pointer hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}

        <div
          className={
            nav
              ? " lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-sky-900 text-center ease-in duration-300"
              : " lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-sky-900 text-center ease-in duration-300"
          }
        >
          <ul className="font-thin ">
            <li
              className="p-4  text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className="p-4 text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/residential">RESIDENTIAL HVAC</Link>
            </li>

            <li
              className="p-4 text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/commercial">COMMERCIAL HVAC</Link>
            </li>
            <li
              className="p-4 text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/services">PRODUCTS & SERVICES</Link>
            </li>
            <li
              className="p-4 text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    //
    // OLD NAVBAR
    //

    // <div className="navbar  items-center shadow-md fixed  ">
    //   <div className="navbar-start items-center">
    //     <div className="dropdown items-center">
    //       <button className="transform hover:scale-105 transition ease-in duration-200 bg-gray-100 p-2 rounded-lg cursor-pointer lg:hidden">
    //         <label tabIndex={0} className=" lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5 cursor-pointer"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </label>
    //       </button>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-56"
    //       >
    //         <li className=" text-teal-400 font-semibold ">
    //           <Link href="/Calendar">Schedule</Link>
    //         </li>
    //         <li className=" text-teal-400 font-semibold">
    //           <Link href="/Pricing">Pricing</Link>
    //         </li>
    //         <li className=" text-teal-400 font-semibold">
    //           <Link href="/Contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <Link href="/">
    //       <Image
    //         src={ybLogo}
    //         alt="Yoga Barn"
    //         className=" w-1/2 ml-4 transform hover:scale-105 transition ease-in duration-200"
    //       />
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex tracking-widest">
    //     <ul className="flex gap-2 px-1 text-gray-400 font-semibold text-sm items-center">
    //       <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
    //         <Link href="/Calendar">SCHEDULE</Link>
    //       </li>
    //       <li className="text-gray-400">|</li>
    //       <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
    //         <Link href="/Pricing">PRICING</Link>
    //       </li>
    //       <li className="text-gray-400">|</li>
    //       <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
    //         <Link href="/Contact">CONTACT</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    // {!user && (
    //   <>
    //     <Link href="/signUpPage">
    //       <button className=" transform hover:scale-105  text-xs flex visible  py-2 px-4  bg-gray-200 hover:bg-gray-300   text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  lg:px-6  rounded-lg">
    //         Join
    //       </button>
    //     </Link>
    //     <Link href="/Login">
    //       <button className=" transform hover:scale-105  flex text-xs py-2 px-4  bg-white hover:bg-gray-200  text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  lg:px-6  rounded-lg ml-2">
    //         Sign-In
    //       </button>
    //     </Link>
    //   </>
    // )}
    // {user && (
    //   <>
    //     <div className=" text-white">
    //       {" "}
    //       <span className="flex justify-center text-xs font-semibold text-gray-100">
    //         Welcome
    //       </span>
    //       {user.displayName}
    //     </div>
    //     <button
    //       type="submit"
    //       className="text-xs sm:text-sm py-2 px-4   bg-white  text-emerald-600 mr-2 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 lg:text-lg lg:px-6 rounded-lg ml-2"
    //       onClick={() => auth.signOut()}
    //     >
    //       Logout
    //     </button>
    //   </>
    // )}
    //   </div>
    // </div>
  );
};

export default Navbar;
