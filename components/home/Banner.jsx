import React from "react";

export default function Banner() {
  return (
    <section className="bg-gray-300 px-4 md:h-[600px] md:px-20 text-center md:text-left ">
      <div className="max-w-6xl mx-auto max-sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="uppercase tracking-widest text-sm">
              Spring/Summer 2019
            </p>
            <h1 className="text-4xl md:text-6xl font-bold my-4">
              Sale <span className="text-red-500">30%</span> <br /> Off
              Everything
            </h1>
            <button className="mt-4 bg-white border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
              Shop Now →
            </button>
          </div>
          <div>
            <img
              src="/assets/bbb.webp"
              alt="Model"
              className="w-72 md:w-96 mt-10 md:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
