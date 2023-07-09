"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import HomeDealCategoryCard from "./(navbar)/components/homeDealCategoryCard/page";
import HomeServiceCategoryCard from "./(navbar)/components/homeServiceCategoryCard/page";
import Footer from "./(navbar)/components/footer/page";
import ProductList from "./(navbar)/components/productList/page";
import HomeSignInCard from './(navbar)/components/homeSignInCard/page'
import homePrimeDealList from './(navbar)/components/homePrimeDealList/page'
import Image from 'next/image'
// import FreeDelivery from './products/freeDelivery.jpeg'
import HomeServiceCategoryList from "./(navbar)/components/homeServiceCategoryCard/homeCategoryList";
import joinPrime from '../public/homeProductCategory/joinPrime.jpeg'
import HomePrimeDealList from "./(navbar)/components/homePrimeDealList/page";
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
        <HomeDealCategoryCard title="Top Deal" product={...highestDiscountedProduct} />
      )}
     {/* Product deal starts */}
      {
        ProductList.map((product,index)=>{
          
          return(
              product.trendingDeal && (
              <HomeDealCategoryCard title="Trending Deal" product={...product} key={product.id}/>

              )
            )
        })
      }
      {HomeServiceCategoryList.map(item => {
      if (item.id === 1) {
        return <HomeServiceCategoryCard {...item} key={item.id} />;
      } else {
        return null;
      }
    })}
    {/* Products deal ends  */}
      {/* sign in starts  */}
      <HomeSignInCard/>
      {/* sign in end  */}

      {/* HomePage Services items starts  */}

      {HomeServiceCategoryList.map(item => {
      if (item.id === 2) {
        return <HomeServiceCategoryCard {...item} key={item.id} />;
      } else {
        return null;
      }
    })}
    {/* HomePage Services items starts  */}

    {/* Home Prime Deal List Starts   */}

    <HomePrimeDealList title="Prime Deal"/>
    <HomePrimeDealList title="Try Prime Free for 30 days"/>
    
    

      </div>

      <Footer />
    </main>
  );
};

export default Home;
