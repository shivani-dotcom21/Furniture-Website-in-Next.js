import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

export default function ProductsItems({data}) {
let { id, title, thumbnail, price, description } = data 
  return (
    <>
      <div className="group relative bg-white hidden lg:block">
        <img
          src={thumbnail}
          alt=""
          className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={`/product/${id}`}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$ {price}</p>
        </div>
      </div>

      
        {/* <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
          <figure>
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
              alt=""
              className="w-full lg:w-100 h-fit"
            />
          </figure>
          <div className="grid justify-center gap-5 text-gray-700">
            <p className="text-[13px] font-outfit cursor-pointer">Nest Of Tables</p>
            <p className="font-semibold text-gray-900 hover:text-amber cursor-pointer">
              Caroline Study Tables
            </p>
            <p className="font-outfit ">
              <span className="line-through text-sm mr-2">Rs.3,000</span>
              <span className="text-[17px] font-bold text-amber">
                Rs. 2,500
              </span>
            </p>
            <div className="flex gap-3 cursor-pointer">
              <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
              <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                Add To Cart
              </p>
            </div>
          </div>
        </div> */}
     
    </>
  );
}
