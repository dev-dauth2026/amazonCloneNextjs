import { FaBars } from "react-icons/fa";

const HamburgerButton=({onClick})=>{
    return(
       
        <FaBars className="text-sm  hover:text-gray-300 mr-0" onClick={onClick}/>

    )
}
export default HamburgerButton;