'use server'
import Navbar from "../components/navbar/page";
// import Footer from "./(navbar)/components/footer/page";
import SearchForm from "../components/searchForm/page";
import styles from "../components/navbar.module.css";
import NavMenu from "../components/navMenu/page";
import Slider from "../components/slider/page";
import Home from "@/app/page";
const NavDiv=()=>{
    const handleSendDataToBody=(data)=>{
       console.log('data',data)
    }
    return(
        <div className='relative'>
            <Navbar />
        <NavMenu sendDataToBody={handleSendDataToBody}/>
        <div className={styles.secondSearchForm}>
          <SearchForm />
        </div>
        <Slider />
        {/* <Home/> */}
        </div>
    )
}
export default NavDiv;