"use client";
import Link from "next/link";
import {
  FaBars,
  FaFlag,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import SearchForm from "../searchForm/page";
import styles from "./../navbar.module.css";
import HamBurgerMenu from "../hamburgerMenu/page";

export default function Navbar() {
  return (
    <>
      <header className="relative  bg-gray-900 text-white">
        {/* navbar start  */}
        <nav className="  flex items-center justify-between h-16 px-5 py-5 ">

          {/* website title starts  */}
          <div className="  flex m-0 mr-5 items-center ">
            <HamBurgerMenu />
            <div className="relative hover:ring-[1px] hover:ring-white pb-5 h-full px-3">
              <Link href="/store" className="flex items-end">
                <p className="text-white font-bold text-3xl ">amazon</p>
                <span>.com.au</span>
              </Link>
              <div className="absolute top-8 left-3  w-20 p-0">
                <img src="/amazonLogo.png" alt="" className="w-3/4 " />
              </div>
            </div>
          </div>
           {/* website title ends  */}

          {/* location div starts*/}
          <div className={`h-14 items-center  hover:ring-[1px]  hover:ring-white ${styles.locationDiv}`}>
            <div className="flex justify-center items-center pb-2 mr-1">
              <FaMapMarkerAlt />
            </div>

            <Link href="/" className="text-sm w-full">
              <small className="text-xm text-gray-200 w-full">
                Delivery to Brisbane 4000
              </small>
              <p className="text-sm">Signin to update</p>
            </Link>
          </div>
          {/* location div end */}

          {/* Search div starts  */}
          <div
            className={` h-15 ml-5 mr-5 flex-grow    ${styles.searchFormDiv}`}
          >
            <SearchForm />
          </div>
  {/* Search div ends  */}

          <div className="flex items-end  ">
            <div className={`${styles.country} h-14 items-center  hover:ring-[1px] hover:ring-white px-3`}>
              <FaFlag className="text-white" />
              <Link
                href="/"
                className="flex text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium "
              >
                AU
              </Link>
            </div>
            <div className={`${styles.signIn} h-14 items-center  hover:ring-[1px] hover:ring-white px-3`}>
              <Link href="/account" className="text-sm ">
                <small className="text-xm text-gray-200">Hello, Sign in</small>
                <p className="text-sm">Accounts & Lists</p>
              </Link>
            </div>
            <div className={`${styles.useIcon} h-14 items-center  hover:ring-[1px] hover:ring-white px-3`}>
              <FaUser />
            </div>
            <div className={`${styles.orders} flex-shrink-0 h-14 items-center  hover:ring-[1px] hover:ring-white`}>
              <Link
                href="/about"
                className="text-gray-300  px-3  text-sm "
              >
                <small className="text-gray-200">Returns</small>
                <p className="text-sm">& Orders</p>
              </Link>
            </div>
            <div className="flex flex-row h-14 hover:ring-[1px] hover:ring-white items-center flex-shrink-0">
              <Link
                href="/signup"
                className="flex flex-row items-end text-gray-300 hover:text-white px-3  rounded-md text-sm font-medium"
              >
                <FaShoppingCart className="inline-block mr-1 text-3xl" />
                <p className="text-sm">Carts</p>
              </Link>
            </div>
          </div>
        </nav>
        {/* narbar ends  */}
      </header>
    </>
  );
}
