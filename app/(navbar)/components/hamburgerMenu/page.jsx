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
      
    </div>
  );
};
export default HamBurgerMenu;
