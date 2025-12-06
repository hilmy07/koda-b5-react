import React from "react";
import { Routes, Route } from "react-router";
import App from "./App";
import About from "./pages/About";
import Login from "./pages/Login";
import Review from "./pages/Review";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Card from "./pages/Card";
import Detail from "./pages/Detail";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/characters" element={<Card />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/review" element={<Review />} />
      <Route path="/login" element={<Login />} />
      <Route path="/characters/:id/:slug" element={<Detail />} />
    </Routes>
  );
}

export default Router;
