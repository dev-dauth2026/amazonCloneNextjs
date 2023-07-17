import Link from 'next/link'
import {FaArrowLeft} from 'react-icons/fa'
const SubMenuList=({title, subMenu, setSubMenu})=>{
    return(
        <>
        {
                                    title && title.map((t,index)=>{
                                        const{id,name,subtitle}=t
                                        return(
                                            <div className={` absolute ${subMenu?'translate-x-0':'-translate-x-100'} top-0 left-[350px] flex flex-col min-w-full border-2 border-yellow-300`}>
                                                <h1 className='text-[12px] uppercase p-5'><FaArrowLeft onClick={()=>setSubMenu(!subMenu)} className='inline-block text-lg'/> Main Menu</h1>
                                                <hr />
                                                <li key={index} className='text-[15px] p-5'>
                                                    {name}
                                                </li>
                                                {
                                                    subtitle && subtitle.map((sb,index)=>{
                                                        return(
                                                            <li key={index} className="p-5 hover:bg-blue-200">

                                                            <Link href={sb.link}>{sb.subtitleName}</Link>
                                                            </li>  
                                                        )
                                                    })
                                                }
                                             
                                            </div>
                                            
                                        )
                                    })
                                 }
        </>
    )
}
export default SubMenuList;