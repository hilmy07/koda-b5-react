import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router";
import Router from "./Router.jsx";
// import Product from "./pages/Product.jsx";
// import Card from "./pages/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    {/* <App /> */}
    {/* <Product /> */}
    {/* <Card /> */}
  </StrictMode>
);
