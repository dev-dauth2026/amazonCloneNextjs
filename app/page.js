"use client";
import { useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import HomeCategoryCard from "./(navbar)/components/homeCategoryCard/page";
import Footer from "./(navbar)/components/footer/page";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleAnimation = () => {
    setShowIcons(true);
  };

  return (
    <main className="cardSection w-screen h-auto   absolute top-[400px] z-50">
      <div className="flex flex-wrap flex-col-3 justify-evenly">
        <HomeCategoryCard />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
