import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function Product() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("ada");
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      productName,
      price,
      quantity,
      status,
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setPrice("");
    setQuantity("");
    setStatus("ada");
  };

  return (
    <main className="flex justify-between mx-20 mt-10 gap-10">
      <ProductForm
        productName={productName}
        price={price}
        quantity={quantity}
        status={status}
        setProductName={setProductName}
        setPrice={setPrice}
        setQuantity={setQuantity}
        setStatus={setStatus}
        handleSubmit={handleSubmit}
      />

      <ProductTable products={products} />
    </main>
  );
}

export default Product;
