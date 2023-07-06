"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import HomeCategoryCard from "./(navbar)/components/homeCategoryCard/page";
import Footer from "./(navbar)/components/footer/page";
import ProductList from "./(navbar)/components/productList/page";
const Home = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [highestDiscountedProduct, setHighestDiscountedProduct] =
    useState(null);

  // Find the product with the highest discounted price
  useEffect(() => {
    const highestProduct = ProductList.reduce((prevProduct, currentProduct) => {
      return currentProduct.discountedPrice > prevProduct.discountedPrice
        ? currentProduct
        : prevProduct;
    });

    setHighestDiscountedProduct(highestProduct);
  }, []);

  return (
    <main className="cardSection w-screen h-auto   absolute md:top-[400px] top-[350px] z-50">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 p-4">
       
        {highestDiscountedProduct && (
        // Render your component for the product with the highest discountedPrice
        <HomeCategoryCard title="Top Deal" product={...highestDiscountedProduct} />
      )}
      </div>

      <Footer />
    </main>
  );
};

export default Home;
