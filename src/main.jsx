import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CartProvider>
  </BrowserRouter>
);
