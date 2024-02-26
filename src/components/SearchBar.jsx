import React from "react";
import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState("");
  console.log("searchData", searchData);
  useEffect(() => {
    axios
      .get("https://shop.orient.at/sermobileboss/get_products")
      .then((response) => {
        const data = response.data.data;
        setProductData(data);
        console.log("productData", productData);
      })
      .catch((error) => {
        console.log("Error fatching data", error);
      });
  }, []);
  return (
    <div className="bg-[#cce0ff]">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <form
          className="relative w-full md:w-auto px-3 md:px-0"
          onChange={(e) => setSearchData(e.target.value)}
        >
          <input
            type="text"
            className="w-full md:w-[500px] h-[40px] p-2 border-none"
            placeholder="Ara"
          />
          <Link to="/search" className="absolute right-4 md:left-[470px] top-2">
            <FiSearch size={22} color="blue" />
          </Link>
        </form>
        <div className="items-center gap-1 hidden md:flex">
          <SlLocationPin size={32} className="text-[#156bfa]" />
          <span className="text-[#002d72] font-medium">İstanbul - Güneşli</span>
        </div>
      </div>
      <div>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mx-4 md:mx-0">
            {productData
              .filter((item) => {
                return searchData.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(searchData);
              })
              .map((product) => (
                <ProductItem productItem={product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
