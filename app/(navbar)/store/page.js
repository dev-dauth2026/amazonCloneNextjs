"use client";
import React, { useState } from "react";
import ProductCard from "./components/productCard.js/page";

const products = [
  // Array of product objects
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet.",
    price: 19.99,
    image: "./products/camemraStand.jpeg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Awesome shoes.",
    price: 29.99,
    image: "product1.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Awesome shoes.",
    price: 29.99,
    image: "product1.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Awesome shoes.",
    price: 29.99,
    image: "product1.jpg",
  },
  // Add more product objects here
];
const Store = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Store;
