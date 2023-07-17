import Link from 'next/link'
import {FaArrowLeft} from 'react-icons/fa'
import hamburgerMenu from "../../hamburgerMenu.module.css";
const SubMenuList=({title, subMenu, setSubMenu,subMenuID})=>{
    return(
        <div className={` absolute ${subMenu?'translate-x-0':'translate-x-full'} transition-all ease-linear top-0 left-[350px] flex flex-col min-w-full h-[100vh]`}>
            <h1 className='text-[12px] uppercase p-5 hover:bg-blue-200' onClick={()=>setSubMenu(!subMenu)}><FaArrowLeft  className='inline-block text-lg'/> Main Menu</h1>
                                                <hr />
        {
                                    title.map((t,index)=>{
                                        const{id,name,subtitle}=t
                                        return(
                                            <div className={` flex flex-col min-w-full ${hamburgerMenu.titleDiv}`} key={id}>
                                                
                                                <li key={index} className='text-[15px] font-bold '>
                                                    {name}
                                                </li>
                                                {
                                                    subtitle && subtitle.map((sb,index)=>{
                                                        return(
                                                            <li key={index} className=" hover:bg-blue-200">

                                                            <Link href={sb.link}>{sb.subtitleName}</Link>
                                                            </li>  
                                                        )
                                                    })
                                                }
                                             
                                            </div>
                                            
                                        )
                                    })
                                 }
        </div>
    )
}
export default SubMenuList;