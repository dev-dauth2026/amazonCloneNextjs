"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import HomeDealCategoryCard from "./(navbar)/components/homeDealCategoryCard/page";
import HomeServiceCategoryCard from "./(navbar)/components/homeServiceCategoryCard/page";
import Footer from "./(navbar)/components/footer/page";
import ProductList from "./(navbar)/components/productList/page";
import HomeSignInCard from "./(navbar)/components/homeSignInCard/page";
import homePrimeDealList from "./(navbar)/components/homePrimeDealList/page";
import Image from "next/image";
// import FreeDelivery from './products/freeDelivery.jpeg'
import HomeServiceCategoryList from "./(navbar)/components/homeServiceCategoryCard/homeCategoryList";
import joinPrime from "../public/homeProductCategory/joinPrime.jpeg";
import HomePrimeDealList from "./(navbar)/components/homePrimeDealList/page";
import "./globals.css";
const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <main className="cardSection w-screen h-auto   absolute md:top-[400px] top-[350px] z-50">
      <div className="homeCards">
        {/* Product deal starts */}
        <HomeDealCategoryCard />
        {/* sign in starts  */}
        <HomeSignInCard />
        {/* HomePage Services items starts  */}
        <HomeServiceCategoryCard />
        {/* Home Prime Deal List Starts   */}
        <HomePrimeDealList />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
