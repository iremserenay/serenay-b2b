import React from "react";
import axios from "redaxios";
import { useEffect, useState } from "react";
import ProductCardButtons from "./ProductCardButtons";
import ProductItem from "./ProductItem";

const Products = () => {
  const [productData, setProductData] = useState([]);
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
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mx-4 md:mx-0">
        {productData.map((product) => (
          <ProductItem productItem={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
