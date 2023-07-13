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

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
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
  );
};

export default Home;
