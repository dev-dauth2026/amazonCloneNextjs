"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import hamburgerMenu from "./hamburgerMenu.module.css";
import MenuList from "./menuList/page";

const HamBurgerMenu = ({toggle, setToggle}) => {
 
 
  const lists = toggle ? `${hamburgerMenu.hamburgerMenuListsOn} ` : null;
  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <div className={` ${hamburgerMenu.hamIcon} `}>
       <div  className="flex flex-row items-center " onClick={()=>setToggle(!toggle)}>
      <FaBars className="text-sm  hover:text-gray-300 mr-0" />
      <span>All</span> 
          
       </div>
 
    <MenuList toggle={toggle} setToggle={setToggle} lists={lists}/>
    {toggle &&(

    <div className="bg-gray-800 bg-opacity-75  w-screen h-screen fixed top-0 left-0 z-[999]  pointer-events-none overflow-hidden transition-all duration-75 pointer-events-auto" onClick={()=>setToggle(!toggle)} />
    )}
    </div>
  );
};
export default HamBurgerMenu;
