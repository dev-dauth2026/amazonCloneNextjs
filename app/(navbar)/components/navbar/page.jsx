"use client";
import Link from "next/link";
import { FaFlag, FaMapMarkerAlt, FaShoppingCart, FaUser } from "react-icons/fa";
import SearchForm from "../searchForm/page";
import styles from "./../navbar.module.css";

export default function Navbar() {
  return (
    <>
      <header className="bg-gray-900 text-white">
        <nav className="flex items-center justify-between h-16 px-5 py-5 ">
          <div className="flex m-0 mr-5">
            <div className="relative focus:outline pb-5">
              <Link href="/store" className="flex items-end">
                <p className="text-white font-bold text-3xl ">amazon</p>
                <span>.com.au</span>
              </Link>
              <div className="absolute top-8 left-3  w-20 p-0">
                <img src="/amazonLogo.png" alt="" className="w-3/4 " />
              </div>
            </div>
          </div>

          {/* location */}
          <div className={styles.navbar}>
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

          <div
            className={` h-15 ml-5 mr-5 flex-grow  ${styles.noSearchSmallerDevice}`}
          >
            <SearchForm />
          </div>

          <div className="flex items-end space-x-4 ">
            <div className={styles.navbar}>
              <FaFlag className="text-white" />
              <Link
                href="/"
                className="flex text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium "
              >
                AU
              </Link>
            </div>
            <div className={styles.navbar}>
              <Link href="/account" className="text-sm ">
                <small className="text-xm text-gray-200">Hello, Sign in</small>
                <p className="text-sm">Accounts & Lists</p>
              </Link>
            </div>
            <div className={styles.smallerDevice}>
              <FaUser />
            </div>
            <div className={styles.navbar}>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 rounded-md text-sm "
              >
                <small className="text-gray-200">Returns</small>
                <p className="text-sm">& Orders</p>
              </Link>
            </div>
            <div className="flex flex-row hover:border-2 items-end">
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
      </header>
    </>
  );
}
