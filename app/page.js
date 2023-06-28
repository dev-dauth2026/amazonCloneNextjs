"use client";
import { useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleAnimation = () => {
    setShowIcons(true);
  };

  return (
    <main className="bg-white">
      <div
        className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center relative"
        onMouseEnter={handleAnimation}
      >
        <div className="text-black text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to our E-commerce Store
          </h1>
          <p className="text-xl">Discover amazing products at great prices.</p>
        </div>
        <CSSTransition
          in={showIcons}
          timeout={500}
          classNames="icon-animation"
          unmountOnExit
        >
          <div className="absolute bottom-10 flex items-center justify-center space-x-4">
            <FaShoppingCart className="text-4xl text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-300" />
            <FaHeart className="text-4xl text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-300" />
            <FaSearch className="text-4xl text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-300" />
          </div>
        </CSSTransition>
      </div>
    </main>
  );
};

export default Home;
