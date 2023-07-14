"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

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
    // Perform search or other action here
    console.log("Selected Option:", selectedOption);
    console.log("Search Value:", searchValue);
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
  return (
    <form className="flex items-center w-full h-15 " onSubmit={handleSubmit}>
      <div className="relative inline-flex w-full focus:outline-yellow-800">
        <Select
          className="text-gray-900 rounded-r-0 "
          options={[
            { value: "all", label: "All Departments" },
            { value: "alexa skill", label: "Alexa Skills" },
            { value: "amazon devices", label: "Amazon Devices" },
            { value: "amazon global store", label: "Amazon Global Store" },
            { value: "amazon warehouse", label: "Amazon Warehouse" },
            { value: "apps & games", label: "Apps & Games" },
            { value: "Audible Audiobooks", label: "Audible Audiobooks" },
            { value: "Automotives", label: "Automotives" },
            { value: "Baby", label: "Baby" },
            { value: "Beauty", label: "Beauty" },
            { value: "CDs & Vinyl", label: "CDs & Vinyl" },
            {
              value: "Clothes, Shoes & Accessories",
              label: "Clothes, Shoes & Accessories",
            },
            { value: "Women", label: "Women" },
            { value: "Men", label: "Men" },
            { value: "Boys", label: "Boys" },
            { value: "Girls", label: "Girls" },
            {
              value: "Computers & Accessories",
              label: "Computers & Accessories",
            },
          ]}
          onChange={handleOptionChange}
          placeholder="All"
          isSearchable={false}
          styles={customStyles}
        />
        <input
          className="flex-1 text-gray-700 bg-gray-200 border border-gray-300 py-2 px-3 focus:outline-none bg-white"
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
