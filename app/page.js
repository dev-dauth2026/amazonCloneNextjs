"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import HomeDealCategoryCard from "./(navbar)/components/(homeCategoryFolder)/homeDealCategoryCard/page";
import HomeServiceCategoryCard from "./(navbar)/components/(homeCategoryFolder)/homeServiceCategoryCard/page";
import Footer from "./(navbar)/components/footer/page";
import ProductList from "./(navbar)/components/productList/page";
import HomeSignInCard from "./(navbar)/components/(homeCategoryFolder)/homeSignInCard/page";
import Image from "next/image";
import HomePrimeDealList from "./(navbar)/components/(homeCategoryFolder)/HomePrimeDealList/page";
import "./globals.css";
import HomeEarlyPrimeDealSlider from "./(navbar)/components/(homeCategoryFolder)/homeEarlyPrimeDealSlider/page";
import HomeFreePrimeDealSlider from "./(navbar)/components/(homeCategoryFolder)/homeFreePrimeDealSlider/page";
import Navbar from "./(navbar)/components/navbar/page";
import SearchForm from "./(navbar)/components/searchForm/page";
import styles from "./(navbar)/components/navbar.module.css";
import NavMenu from "./(navbar)/components/navMenu/page";
import Slider from "./(navbar)/components/slider/page";




const Home = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [toggle, setToggle] = useState(false);
  

  return (
    <div className={`bg-gray-200 relative ${toggle && 'pointer-events-none overflow-hidden'}`}>
     <Navbar />
        <NavMenu toggle={toggle} setToggle={setToggle}/>
        <div className={styles.secondSearchForm}>
          <SearchForm />
        </div>
        <Slider />
        <main className="cardSection w-screen h-auto   absolute md:top-[400px] top-[350px] z-50">
          <div className="categorySection p-5">
            <div className="homeCards mb-5">
              {/* Product deal starts */}
              <HomeDealCategoryCard />
    
              {/* sign in starts  */}
              <HomeSignInCard />
              {/* HomePage Services items starts  */}
              <HomeServiceCategoryCard />
              {/* Home Prime Deal List Starts   */}
              <HomePrimeDealList />
            </div>
           <HomeEarlyPrimeDealSlider/>
           <HomeFreePrimeDealSlider/>
            
          </div>
    
          <Footer />
        </main>
    </div>
      );
};

export default Home;
