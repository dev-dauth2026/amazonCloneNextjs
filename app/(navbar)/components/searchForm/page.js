"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductList from "../productList/page";
import Select from "react-select";

const SearchForm = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const handleOptionChange = (selected) => {
    setSelectedOption(selected.value);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      // Set the initial width to auto
      minWidth: "60px", // Set a minimum width to avoid it being too small
      //   maxWidth: "160px",
      height: "100%",
      fontSize: "12px",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      index: "1000",
    }),
    menu: (values) => ({
      ...values,
      width: "250px",
      backgroundColor: "white",
      fontSize: "12px",
      height: "auto",
      maxHeight: "100vh",
    }),
  };
  const categories = ProductList.map(product => product.category);

  const uniqueCategories = Array.from(new Set(categories)).map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <form className="flex items-center w-full h-15 rounded hover:ring-yellow-200 hover:ring-[1px]" onSubmit={handleSubmit}>
      <div className="relative inline-flex w-full ">
         
        <Select
      className="text-gray-900 rounded-r-0 z-[100]"
      onChange={handleOptionChange}
      options={uniqueCategories}
      placeholder="All"
      isSearchable={false}
      styles={customStyles}
    />
      

        <input
          className="flex-1 text-gray-700  border border-gray-300 py-2 px-3 focus:outline-none bg-white"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="flex-shrink-0 bg-yellow-600 text-white rounded-r-md py-2 px-4 h-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchForm;
