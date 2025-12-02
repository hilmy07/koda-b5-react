import React from "react";

function ProductForm({
  productName,
  price,
  quantity,
  status,
  setProductName,
  setPrice,
  setQuantity,
  setStatus,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/3 p-6 bg-white shadow-md rounded-xl border"
    >
      <h1 className="font-bold text-xl mb-4 text-center">Form Product</h1>

      <div className="mb-3">
        <label className="font-medium">Nama Barang:</label>
        <input
          type="text"
          className="w-full border border-gray-400 rounded px-2 py-1 mt-1"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="font-medium">Quantity:</label>
        <input
          type="text"
          className="w-full border border-gray-400 rounded px-2 py-1 mt-1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="font-medium">Harga:</label>
        <input
          type="text"
          className="w-full border border-gray-400 rounded px-2 py-1 mt-1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="font-medium">Status:</label>
        <input
          type="text"
          className="w-full border border-gray-400 rounded px-2 py-1 mt-1"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
