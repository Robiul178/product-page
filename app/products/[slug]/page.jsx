"use client";

import { useProduct } from "@/components/ProductContext";
import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";

export default function page({ params }) {
  // const { slug } =  params;
  const { slug } = useParams();
  const { products } = useProduct();

  const product = products.find((product) => product.id === Number(slug));
  if (!product) {
    return <div className="text-center text-2xl">Product not found</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
