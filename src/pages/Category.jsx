import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductItem from "../components/ProductItem";

const Category = () => {
  let { category_id } = useParams();
  console.log("categoryid", category_id);
  const [categoryData, setCategoryData] = useState([]);
  const categoryId = {
    category_id: category_id,
  };
  useEffect(() => {
    axios
      .post(
        `https://shop.orient.at/sermobileboss/get_products/search`,
        categoryId,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((response) => {
        const data = response.data.data;
        setCategoryData(data);
        console.log("categoryData", categoryData);
      })
      .catch((error) => {
        console.log("Error fatching data", error);
      });
  }, [category_id]);

  console.log(categoryData);
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mx-4 md:mx-0">
          {categoryData.map((data) => (
            <ProductItem productItem={data} key={data.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
