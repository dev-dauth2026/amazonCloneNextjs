'use client'
import hamburgerMenu from "../hamburgerMenu.module.css";
import Link from 'next/link';
import { FaBars, FaTimes,FaChevronRight } from "react-icons/fa";
import MenuListArray from "../menuListArray/page";
import SubMenuList from "./subMenuList/page";
import { useState } from "react";
const MenuList=({onClick,lists})=>{
    const[subMenu, setSubMenu] =useState(false)
    let menuPosition;
    let subMenuPosition;

    // subMenu ?(
    //     menuPosition='-(translate-x-full)',
    //     subMenuPosition='translate-x-full'
    // ):(
    //     menuPosition='translate-x-full',
    //     subMenuPosition='-(translate-x-full)'
    // )
    console.log('subMenu :',subMenu)
    return(
        <div className={`${hamburgerMenu.hamburgerMenuLists} ${lists}`}>
        <div className=" bg-gray-700 text-white p-5 sticky top-0">
          <span className="text-xl text-yellow-500">amazon</span>
          <span className="text-sm">.com.au</span>
        <h1 className="py-5 text-[20px] bold">Hello! Sign In</h1>
        </div>
        <hr />
        <ul className={` min-w-full  relative overflow-hidden ${subMenu?`-(translate-x-full)`:`translate-x-0`}`}>
          {/* <li >
            <h1 >Trending</h1>
          </li>
          <li className="">
          <Link href="/" >
              New Releases
            </Link>
          </li>
          <li>
          <Link href="/" >
              Movers and Shakers
            </Link>
          </li>
          <li>
          <Link href="/"  >
              Best Sellars
            </Link>
          </li>
          <li >
          <h1 > Digital Content and Devices</h1>
           
          </li>
          <li >
            <Link href="/" >Eco & Alexa</Link>
          </li>
          <li >
            <Link href="/">Kindle E-readers and Books</Link>
          </li>
          <li >
            <Link href="/" >Amazon Fire TV</Link>
          </li>
          <li >
            <Link href="/">Amazon Prime Video</Link>
          </li>
          <li >
            <Link href="/">Amazon Music</Link>
          </li>
          <li > 
            <Link href="/">Amazon AudioBooks</Link>
          </li>
          <hr />
          <li>
            <h1>Shop By Departments</h1>
          </li>
          <li >
            <Link href="/">Books</Link>
          </li>
          <li >
            <Link href="/">Kindle Books</Link>
          </li>
          <li >
            <Link href="/">Music, Movies & TV Shows</Link>
          </li>
          <li >
            <Link href="/">Computer</Link>
          </li>
          <hr />
          <li >
            <Link href="/">Electronics</Link>
          </li>
          <li >
            <Link href="/">Aubgmotives</Link>
          </li>
          <li >
            <Link href="/">
                Baby & Kids
            </Link>
          </li>
          <li >
            <Link href="/">Health, Households & Personal Care</Link>
          </li>
          <li >
            <Link href="/">Home</Link>
          </li>
          <li >
            <Link href="/">Home Improvement</Link>
          </li>
          <li >
            <Link href="/">Kitchen & Dinning</Link>
          </li>
          <li >
            <Link href="/">Luggage & Travel Gear</Link>
          </li>
          <li >
            <Link href="/">Pantry Food & Drinks</Link>
          </li>
          <li >
            <Link href="/">Pet Supplies</Link>
          </li>
          <li >
            <Link href="/">Shoes</Link>
          </li> */}
          {
            MenuListArray.map((item,index)=>{
                return(item.id===1 ?
                    (
                    <div className= {hamburgerMenu.MenuLists}  key={item.id}>
                        <li >
                    
                                <h1>{item.categoryTitle}</h1>
                    
                        </li>
                    {
                        item.menu && item.menu.map((menuItem,index)=>{
                            return (
                                 <>
                             <li className="hover:bg-blue-200" key={index}>
                            <Link href="/">{menuItem}</Link>
                             </li>   
                            </>)

                        })
                    }
                   
                    </div>
                    ):(
                        <div className= {hamburgerMenu.MenuLists} key={item.id}>
                        <li  >
                    
                                <h1>{item.categoryTitle}</h1>
                        
                        </li>
                    {
                        item.subCategory && item.subCategory.map((menuItem,index)=>{
                            const{id,subCategorytitle,title,link}= menuItem
                            return (
                                 <div className="flex flex-row  ">
                                 <li key={id} className="flex justify-between min-w-full p-3 shrink-0 hover:bg-blue-200" onClick={()=>setSubMenu(!subMenu)}>
                                
                                 <Link href={link}>{subCategorytitle} </Link>
                                 <FaChevronRight className="text-xl " />
        
                                 </li>
                                 <SubMenuList title={title} subMenu={subMenu} setSubMenu={setSubMenu}/>
                                
                                </div>
                            )

                        })
                    }
                   
                    </div>

                    )
                )
            })
          }
          
        </ul>
        
        <button className={hamburgerMenu.Close} onClick={onClick}>
          <FaTimes />
        </button>
      </div>
    )
}
export default MenuList;