import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <img
        className="w-full h-48 object-cover mb-4"
        src={product.image}
        alt={product.title}
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex justify-between mt-4">
        <span className="text-gray-800 font-bold">${product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
