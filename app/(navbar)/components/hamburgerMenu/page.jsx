"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import hamburgerMenu from "./hamburgerMenu.module.css";

const HamBurgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const lists = toggle ? `${hamburgerMenu.hamburgerMenuListsOn} ` : null;
  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <div className={` ${hamburgerMenu.hamIcon} `}>
      <button className="z-50 h-full" onClick={handleToggle}>
        <FaBars className="text-2xl mr-5  hover:text-gray-300" />
      </button>

      <div className={`${hamburgerMenu.hamburgerMenuLists} ${lists}`}>
        <div className=" bg-gray-700 text-white p-5">
          <span className="text-xl text-yellow-500">amazon</span>
          <span className="text-sm">.com.au</span>
        </div>
        <hr />
        <ul className={`sideMenuLists w-full   ${hamburgerMenu.menulists}`}>
          <li>
            <Link href="/" className="flex flex-row  gap-x-3">
              All
            </Link>
          </li>
          <li>
            <Link href="/">Sell</Link>
          </li>
          <li>
            <Link href="/">Best Sellars</Link>
          </li>
          <li>
            <Link href="/">Today's Deal</Link>
          </li>
          <li>
            <Link href="/">Prime</Link>
          </li>
          <li>
            <Link href="/">New Releases</Link>
          </li>
          <li>
            <Link href="/">Music</Link>
          </li>
          <li>
            <Link href="/">Books</Link>
          </li>
          <li>
            <Link href="/">Kindle Books</Link>
          </li>
          <li>
            <Link href="/">Customer Service</Link>
          </li>
          <li>
            <Link href="/">Fashion</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
        </ul>
        <div className="streamMovie p-5">
          <h2>Stream Movies and Show with Prime</h2>
        </div>
        <button className={hamburgerMenu.Close} onClick={handleToggle}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default HamBurgerMenu;
