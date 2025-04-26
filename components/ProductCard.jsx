import Link from "next/link";

const ProductCard = ({ product }) => {
  const imgUrl = `https://admin.refabry.com/storage/product/${product.image}`;
  console.log(product);
  return (
    <Link href={`/products/${product.id}`}>
      <div className=" p-4 shadow-md hover:shadow-none  transition duration-300">
        <img
          src={imgUrl}
          alt={product.name}
          className="w-full h-[250px] bg-cover object-center mb-2 rounded-t-md hover:scale-105 transition duration-300 ease-in-out"
        />
        <p className="text-sm font-semibold text-gray-700 px-2">
          {product.name}
        </p>
        <p className="text-red-500 font-semibold text-lg px-2">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
