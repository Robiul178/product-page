import ProductPage from "@/app/products/page";
import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      <Banner />
      <div className="max-w-6xl mx-auto">
        <Feature />
      </div>

      {/* Product Section */}
      <section className="px-4 md:px-20 py-12">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <div>
          <ProductPage />
        </div>
      </section>

      {/* Banner */}
      <section className="bg-blue-100 py-10 text-center">
        <h2 className="text-xl md:text-3xl font-bold">
          Summer Sale - Up to 50% Off All Products!
        </h2>
        <button className="mt-4 bg-white border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
          Shop Now →
        </button>
      </section>

      {/* Blog Section */}
      <section className="px-4 md:px-20 py-12">
        <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border p-4">
              <img
                src="/your-blog-image.jpg"
                alt="blog"
                className="w-full mb-2"
              />
              <p className="text-xs text-red-500">Fashion</p>
              <p className="font-semibold">Blog Title Here</p>
              <p className="text-sm text-gray-500">Posted on 10th Jan, 2019</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="text-center px-4 md:px-20 py-10">
        <h2 className="text-xl font-bold mb-4">Follow Us On Instagram</h2>
        <p className="text-sm mb-4">@Caipe_Shop</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src="/your-instagram-image.jpg"
              alt="Instagram"
              className="w-full"
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 px-4 md:px-20 py-12 text-center">
        <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-sm mb-6">
          Subscribe and get 20% off your first purchase
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="border px-4 py-2 w-full md:w-96"
          />
          <button className="bg-black text-white px-6 py-2">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
