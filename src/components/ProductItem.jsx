import React, { useState } from "react";
import ProductCardButtons from "./ProductCardButtons";
import { Link } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  }
  // console.log("cart item", cartItems);
  return (
    <div>
      <div
        key={productItem.id}
        className="col-span-1 border border-customProduct hover:shadow-lg transition-all bg-white relative mt-3"
      >
        <ProductCardButtons onClick={() => addToCart(productItem)} />
        <Link to={`/product/${productItem.id}`}>
          <img
            src={productItem.image}
            alt={productItem.title}
            className="w-full h-[100px] md:h-[200px] object-contain"
          />
        </Link>

        <div className="text-center text-xs md::text-sm p-2 md:p-5 bg-customProduct">
          <p className="h-[40px] truncate text-xs md:text-base font-medium !leading-[16px]">
            {productItem.title}
          </p>
          <p className="text-productSize text-sm md:text-base">
            {productItem.subtitle}
          </p>
          <p className="text-customBlue font-medium text-sm md:text-base">
            {productItem.price} <span className="font-normal">TL</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
