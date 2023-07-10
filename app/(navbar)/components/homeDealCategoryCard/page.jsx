import Link from "next/link";
import homeCategoryList from "../homeServiceCategoryCard/homeCategoryList";
import Footer from "../footer/page";
import ProductList from "../productList/page";
import { current } from "@reduxjs/toolkit";

const HomeDealCategoryCard = () => {
  const highestPurchaseTrendingProduct = ProductList.reduce(
    (highPurchaseProduct, currentProduct) => {
      if (
        currentProduct.totalPurchase > highPurchaseProduct.totalPurchase &&
        currentProduct.trending &&
        currentProduct.highDiscountedProduct
      ) {
        return currentProduct;
      } else {
        return highPurchaseProduct;
      }
    }
  );

  console.log(
    `highest trending Purchase Product: ${highestPurchaseTrendingProduct.id} `
  );
  const highestDiscountedProduct = ProductList.reduce(
    (highDiscountedProduct, currentDiscountedProduct) => {
      if (
        currentDiscountedProduct.discountedPrice >
          highDiscountedProduct.discountedPrice &&
        currentDiscountedProduct.id !== highestPurchaseTrendingProduct.id
      ) {
        return currentDiscountedProduct;
      } else {
        return highDiscountedProduct;
      }
    }
  );
  console.log(`highest Discounted Product: ${highestDiscountedProduct.name} `);
  return (
    <>
      {ProductList.map((item, index) => {
        const {
          id,
          name,
          image,
          discountedPrice,
          price,
          description,
          primeDeal,
          trending,
          totalPurchase,
        } = item;
        const discountedAmount = ((discountedPrice / 100) * price).toFixed(2);
        const truncateDescription = (description, maxLength) => {
          if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
          }
          return description;
        };

        return (
          <>
            {highestPurchaseTrendingProduct.id === id ||
            highestDiscountedProduct.id === id ? (
              <div
                className="card  bg-white p-4 flex flex-col justify-between gap-2 h-[400px]"
                key={id}
              >
                {highestPurchaseTrendingProduct.id === id ? (
                  // product with highest price and trending start
                  <>
                    <h3 className="text-xl font-bold">Trending Product</h3>
                    <img
                      src={image}
                      alt="Trending Products"
                      className="  h-[200px] object-contain "
                    />
                  </>
                ) : // product with highest price and trending ends
                highestDiscountedProduct.id === id ? (
                  // product with highest discount price start
                  <>
                    <h3 className="text-xl font-bold">Top Deal</h3>
                    <img
                      src={image}
                      alt="top deals product"
                      className=" h-[200px] object-contain  "
                    />
                  </>
                ) : // product with highest discount price ends
                null}

                <div>
                  <span className="bg-red-600 p-2 rounded text-white w-fit text-[11px] font-bold mr-2">
                    {discountedPrice} % off
                  </span>
                  {highestDiscountedProduct.id === id && (
                    <small className="text-[11px] text-red-600 font-bold">
                      Top deal
                    </small>
                  )}
                </div>
                <p>
                  ${discountedAmount}
                  <small>
                    <strike>${price}</strike>
                  </small>
                </p>
                <p className="text-[12px]">
                  {name}. {truncateDescription(description, 20)}
                </p>
                <Link href="/" className="text-xs text-blue-400 ">
                  See all deals
                </Link>
              </div>
            ) : null}
          </>
        );
      })}
    </>
  );
};
export default HomeDealCategoryCard;
