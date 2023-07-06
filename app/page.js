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
    <main className="cardSection w-screen h-auto   absolute md:top-[400px] top-[350px] z-50">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 p-4">
        <HomeCategoryCard />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
