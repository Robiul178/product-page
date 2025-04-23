"use client";

import { useProduct } from "@/app/components/ProductContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page({ params }) {
  const { slug } = params;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.refabry.com/api/all/product/get")
      .then((res) => {
        setProducts(res.data?.data?.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  const product = products.find((product) => product.id === Number(slug));
  if (!product) {
    return <div className="text-center text-2xl">Product not found</div>;
  }

  console.log(product);

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
                className={`px-3 py-0.5 border rounded ${
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
          <button className="bg-slate-800 text-white px-6 py-2 rounded">
            Add to Cart
          </button>
          <button className="border border-slate-800 text-black px-6 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
