import React from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<SearchBar />} />

      <Route path="/product/:userId" element={<ProductDetail />} />
      <Route path="/category/:category_id" element={<Category />} />
    </Routes>
  );
};

export default App;
