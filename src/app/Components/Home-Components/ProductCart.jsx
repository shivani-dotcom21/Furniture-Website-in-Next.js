"use client";
import React, { useState } from "react";
import ProductsItems from "../Common/ProductsCardItems/ProductsItems";
import BreadCrums from "../Common/BreadCrums/BreadCrums";
import ProductCategories from "../Common/Product-Categories/ProductCategories";


export default function ProductCart({ productData }) {
  
  let [sort, setSort] = useState(false);
  return (
    <>
      <section className="w-full  font-outfit my-20 p-5">
        <BreadCrums title="Trending Collection" />

        <div className=" flex justify-center gap-5">
          <div className=" w-[20%] ">
            <ProductCategories />
          </div>

          <div className=" w-[70%]  p-3">
            {/* <div className="border border-gray-300 py-3 mb-7 mt-3">
              <div className="relative flex justify-end items-center gap-5 px-5">
                <p>Sort By :</p>
                <button
                  onClick={() => setSort(sort == "true" ? null : "true")}
                  className=" flex justify-center items-center gap-3 border py-1 px-3 border-gray-200 cursor-pointer"
                >
                  {" "}
                  Sort By
                  {sort == "true" ? <MdExpandLess /> : <MdExpandMore />}
                </button>
                {sort == "true" && (
                  <ul className="absolute top-10 right-30 bg-white z-99 px-5 py-3 grid gap-5 text-[15px]">
                    <li className="font-semibold">Sort By</li>
                    <li> Featured Products </li>
                    <li> New Arrivals </li>
                    <li> On Sales </li>
                    <li> Best Selling </li>
                    <li>Sort by Price: low to high</li>
                    <li>Sort by Price: high to low</li>
                    <li>Product Name: A to Z</li>
                    <li>Product Name: Z to A</li>
                  </ul>
                )}
                <p>Showing 1-12 of 18 results </p>
              </div>
            </div> */}
            
            <div className="grid grid-cols-3 gap-5 justify-center gap-10">
              {productData.map((obj, index) => (
                <ProductsItems key={index} data={obj} />
              ))}
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}
