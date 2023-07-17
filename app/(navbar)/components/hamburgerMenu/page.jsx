"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import hamburgerMenu from "./hamburgerMenu.module.css";
import HamburgerButton from "./hamburgerButton/page";
import MenuList from "./menuList/page";

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
     
      <HamburgerButton onClick={handleToggle}/>
    <MenuList onClick={handleToggle} lists={lists}/>
    {toggle &&(

    <div className="bg-gray-800 bg-opacity-75  w-screen h-screen fixed top-0 left-0 z-[999]  pointer-events-none overflow-hidden transition-all duration-75"></div>
    )}
    </div>
  );
};
export default HamBurgerMenu;
