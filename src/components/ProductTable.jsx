import React from "react";

function ProductTable({ products }) {
  return (
    <div className="w-2/3">
      <table className="w-full border border-gray-300 shadow-md rounded-xl overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border p-2">No</th>
            <th className="border p-2">Nama barang</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, i) => (
            <tr key={item.id} className="text-center">
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{item.productName}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.price}</td>
              <td className="border p-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
