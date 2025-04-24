"use client";

import ProductCard from "@/components/ProductCard";
import { useProduct } from "@/components/ProductContext";

export default function ProductPage() {
  const { products } = useProduct();
  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
