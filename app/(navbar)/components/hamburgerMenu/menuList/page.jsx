'use client'
import hamburgerMenu from "../hamburgerMenu.module.css";
import Link from 'next/link';
import { FaBars, FaTimes,FaChevronRight,FaUserCircle } from "react-icons/fa";
import MenuListArray from "../menuListArray/page";
import SubMenuList from "./subMenuList/page";
import { useState } from "react";
const MenuList=({toggle,setToggle,lists})=>{
    const[subMenu, setSubMenu] =useState(false)
    const[subMenuID,setSubMenuID] =useState()
    const[categoryIndexID, setCategoryIndexID] = useState()

    const subMenuHandler=(id,CategoryIndex)=>{
        setSubMenu(!subMenu);
        setSubMenuID(id);
        setCategoryIndexID(CategoryIndex)

    }
    console.log('subMenu :',subMenu)
    return(
        <>
        <div className={`${hamburgerMenu.hamburgerMenuLists} ${lists} ${toggle && 'pointer-events-auto'}`}>
        <div className=" bg-gray-700 text-white p-5 sticky top-0 flex flex-row items-center">
          <FaUserCircle className="text-[40px] mr-5"/>
        <h1 className="text-[20px] bold inline-block "> Hello! Sign In</h1>
        </div>
        <hr />
        <ul className="min-w-full  relative overflow-x-hidden h-screen ">
        
          <div className= {`${hamburgerMenu.MenuLists} ${subMenu?`-translate-x-full`:`translate-x-0`} transition-all ease-linear `} >

              {
            MenuListArray.map((item,CategoryIndex)=>{
                return(item.menu ?
                    (
                    <div className= {hamburgerMenu.MenuLists}  key={item.id}>
                        <li ><h1>{item.categoryTitle}</h1>  </li> 
                    {
                         item.menu.map((menuItem,index)=>{
                            return (
                                 <>
                             <li className="hover:bg-blue-200" key={index}>
                            <Link href="/">{menuItem.menuTitle}</Link>
                             </li>   
                            </>)

                        })
                    }
                    <hr />
                   
                    </div>
                    ):(
                        <div className= {hamburgerMenu.MenuLists} key={item.id}>
                        <li  ><h1>{item.categoryTitle}</h1>   </li>
                    {
                        item.subCategory && item.subCategory.map((menuItem,index)=>{
                            const{id,subCategorytitle,title,link}= menuItem
                            return (
                                 <div className={`flex flex-row  ${hamburgerMenu.subCategory}`}>
                                 <li key={id} className="flex justify-between min-w-full p-3 shrink-0 hover:bg-blue-200" onClick={()=>subMenuHandler(index,CategoryIndex)}>
                                
                                 <Link href={link}>{subCategorytitle} </Link>
                                 <FaChevronRight className="text-xl " />
        
                                 </li>
                                 {
                                   categoryIndexID===CategoryIndex && subMenuID===index&&(

                                        <SubMenuList subMenuID={subMenuID} title={title} subMenu={subMenu} setSubMenu={setSubMenu}/>
                                    )
                                 }
                                 
                                
                                </div>
                            )

                        })
                    }
                    <hr />
                   
                    </div>

                    )
                )
            })
          }
          </div>
        
          
        </ul>
        
        <button className={hamburgerMenu.Close} onClick={()=>setToggle(!toggle)}>
          <FaTimes />
        </button>
      </div>

      
      </>
    )
}
export default MenuList;