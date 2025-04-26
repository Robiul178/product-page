import ProductPage from "@/app/products/page";
import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";

export default function HomePage() {
  return (
    <div className="text-gray-800">
      {" "}
      <Banner />
      <div className="  max-sm:px-4">
        <div className="max-w-6xl mx-auto">
          <Feature />
        </div>
        {/* Product Section */}
        <section className="max-w-6xl mx-auto max-sm:px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
          <div>
            <ProductPage />
          </div>
        </section>
        {/* Banner */}
        <section className="relative bg-slate-200 h-auto text-center pt-10 md:py-0">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col justify-center text-start px-4 md:px-0 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">
                Summer Sale - Up to 50% Off <br className="hidden md:block" />{" "}
                All Products!
              </h2>
              <button className="w-full md:w-[200px] mt-4 bg-white border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
                Shop Now →
              </button>
            </div>
            <div className="w-full md:w-auto">
              <img
                src="/assets/mmmmmm.png"
                alt=""
                className="w-full md:h-[280px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-6xl mx-auto py-10">
          <div className="md:flex  gap-6 py-12">
            <div className="md:flex w-full overflow-hidden border max-sm:mb-4">
              <div className="md:w-1/2 md:relative md:right-[74px]">
                <img
                  src="/assets/ccc.webp"
                  alt="Fashion"
                  className="h-[300px] w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-4 text-end">
                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  FASHION
                </span>
                <h2 className="text-md font-semibold mt-2">
                  13 Plus-Size Pieces That Make It Easy to Go Minimal
                </h2>
                <p className="text-gray-400 text-xs mt-2">
                  Posted on 13th Jan, 2019
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  magni et amet repellendus illo? Quaerat dolorum perspiciatis,
                  incidunt doloremque, animi assumenda exercitationem impedit
                </p>
              </div>
            </div>

            <div className="md:flex w-full overflow-hidden border">
              <div className="md:w-1/2 p-4">
                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  LIFESTYLE
                </span>
                <h2 className="text-md font-semibold mt-2">
                  Summer PJs So Cute You’ll Want to Wear Them Out
                </h2>
                <p className="text-gray-400 text-xs mt-2">
                  Posted on 13th Jan, 2019
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  magni et amet repellendus illo? Quaerat dolorum perspiciatis,
                  incidunt doloremque, animi assumenda exercitationem impedit
                </p>
              </div>{" "}
              <div className="md:w-1/2 md:relative left-[74px]">
                <img
                  src="/assets/bbb.webp"
                  alt="Lifestyle"
                  className="h-[300px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold  text-gray-800">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-7">
              Get the latest updates, articles, and resources, sent to your
              inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row items-center ">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-sm:w-auto flex-1 px-4 py-[7px] outline-none  border border-gray-300 "
              />
              <button
                type="submit"
                className="bg-slate-700 text-white px-6 py-2  hover:bg-slate-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
