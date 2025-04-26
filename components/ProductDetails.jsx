"use client";

import { useProduct } from "@/components/ProductContext";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ProductDetails({ product }) {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleAddToCart = async () => {
    const orderData = {
      product_ids: `${product.id}`,
      s_product_qty: "1",
      c_phone: "01734252112",
      c_name: "test user",
      courier: "steadfast",
      address: "mirpur 12, ramzanessamarket",
      advance: null,
      cod_amount: `${product.price}`,
      discount_amount: null,
      delivery_charge: "80",
    };
    console.log(orderData, "orderData");
    const response = await axios.post(
      "https://admin.refabry.com/api/public/order/create",
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response, "response");
    if (response.status === 200) {
      toast.success("Product added to cart successfully!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
      <div className="relative">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="w-full h-[600px] object-cover"
        />
      </div>

      <div className="space-y-4  text-black flex flex-col items-start justify-center ">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="flex items-center gap-4 text-lg">
          <span className="line-through text-gray-400">
            ${(product.price * 1.3).toFixed(2)}
          </span>
          <span className="text-purple-600 font-semibold">
            ${product.price}
          </span>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Description:</h3>
          <p className="text-sm text-gray-600">
            {product.short_desc || "No description available."}
          </p>
        </div>

        <div className="pt-10">
          <h4 className="text-sm font-medium mb-1">Color: Black</h4>
          <div className="flex gap-2">
            <button className="w-6 h-6 border-2 border-black rounded-full bg-black"></button>
            <button className="w-6 h-6 border rounded-full bg-white"></button>
            <button className="w-6 h-6 border rounded-full bg-gray-300"></button>
            <button className="w-6 h-6 border rounded-full bg-purple-600"></button>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-sm font-medium mb-1">Size: M</h4>
          <div className="flex gap-2 flex-wrap">
            {["L", "M", "XL", "XXL", "3XL", "4XL"].map((size) => (
              <button
                key={size}
                className={`px-3  border rounded ${
                  size === "M" ? "bg-slate-700 text-white" : "bg-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button
            onClick={handleAddToCart}
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-1  rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
