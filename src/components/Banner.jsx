import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-5 mt-2">
      <div className="col-span-3">
        <Link to="/" className="bg-white h-full"></Link>
      </div>
    </div>
  );
};

export default Banner;
