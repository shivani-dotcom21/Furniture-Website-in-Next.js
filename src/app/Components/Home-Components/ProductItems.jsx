import React from "react";
import { FaRegHeart } from "react-icons/fa";

export default function ProductItems() {
  return (
    <>
      <section className="max-w-[1320px]   font-poppins">
        <ul className=" lg:flex justify-center items-center mt-18  text-2xl font-semibold grid grid-cols-1 w-fit mx-auto gap-3">
          <li className="border py-2 px-7 border-amber text-amber hover:text-amber">
            Featured
          </li>
          <li className="border py-2 px-7 border-gray-300  hover:text-amber">
            New Arrivals
          </li>
          <li className="border py-2 px-7 border-gray-300 hover:text-amber">
            Onsale
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-8 my-10 lg:p-0 p-5">
          <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
            <figure>
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                alt=""
                className="w-full lg:w-100 h-fit"
              />
            </figure>
            <div className="grid justify-center gap-5 text-gray-700">
              <p className="text-[13px] font-outfit">Nest Of Tables</p>
              <p className="font-semibold text-gray-900 hover:text-amber cursor-pointer">
                Caroline Study Tables
              </p>
              <p className="font-outfit ">
                <span className="line-through text-sm mr-2">Rs.3,000</span>
                <span className="text-[17px] font-bold text-amber">
                  Rs. 2,500
                </span>
              </p>
              <div className="flex gap-3">
                <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
                <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
            <figure>
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg"
                alt=""
                className="w-full lg:w-100 h-fit"
              />
            </figure>
            <div className="grid justify-center gap-5 text-gray-700">
              <p className="text-[13px] font-outfit">Nest Of Tables</p>
              <p className="font-semibold text-gray-900 hover:text-amber cursor-pointer">
                Caroline Study Tables
              </p>
              <p className="font-outfit ">
                {" "}
                <span className="line-through text-sm mr-2">
                  {" "}
                  Rs.3,000
                </span>{" "}
                <span className="text-[17px] font-bold text-amber">
                  {" "}
                  Rs. 2,500
                </span>{" "}
              </p>
              <div className="flex gap-3">
                <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
                <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
            <figure>
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg"
                alt=""
                className="w-full lg:w-100 h-fit"
              />
            </figure>
            <div className="grid justify-center gap-5 text-gray-700">
              <p className="text-[13px] font-outfit">Nest Of Tables</p>
              <p className="font-semibold text-gray-900 hover:text-amber cursor-pointer">
                Caroline Study Tables
              </p>
              <p className="font-outfit ">
                <span className="line-through text-sm mr-2">Rs.3,000</span>
                <span className="text-[17px] font-bold text-amber">
                  Rs. 2,500
                </span>
              </p>
              <div className="flex gap-3">
                <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
                <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
            <figure>
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg"
                alt=""
                className="w-full lg:w-100 h-fit"
              />
            </figure>
            <div className="grid justify-center gap-5 text-gray-700">
              <p className="text-[13px] font-outfit">Nest Of Tables</p>
              <p className="font-semibold text-gray-900 hover:text-amber cursor-pointer">
                Caroline Study Tables
              </p>
              <p className="font-outfit ">
                {" "}
                <span className="line-through text-sm mr-2">
                  {" "}
                  Rs.3,000
                </span>{" "}
                <span className="text-[17px] font-bold text-amber">
                  {" "}
                  Rs. 2,500
                </span>{" "}
              </p>
              <div className="flex gap-3">
                <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
                <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
            <figure>
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg"
                alt=""
                className="w-full lg:w-100 h-fit"
              />
            </figure>
            <div className="grid justify-center gap-5 text-gray-700">
              <p className="text-[13px] font-outfit">Nest Of Tables</p>
              <p className="font-semibold text-gray-900 hover:text-amber cursor-pointer">
                Caroline Study Tables
              </p>
              <p className="font-outfit ">
                {" "}
                <span className="line-through text-sm mr-2">
                  {" "}
                  Rs.3,000
                </span>{" "}
                <span className="text-[17px] font-bold text-amber">
                  {" "}
                  Rs. 2,500
                </span>{" "}
              </p>
              <div className="flex gap-3">
                <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
                <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
            <figure>
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg"
                alt=""
                className="w-full lg:w-100 h-fit"
              />
            </figure>
            <div className="grid justify-center gap-5 text-gray-700">
              <p className="text-[13px] font-outfit">Nest Of Tables</p>
              <p className="font-semibold text-gray-900 hover:text-amber cursor-pointer">
                Caroline Study Tables
              </p>
              <p className="font-outfit ">
                {" "}
                <span className="line-through text-sm mr-2">
                  {" "}
                  Rs.3,000
                </span>{" "}
                <span className="text-[17px] font-bold text-amber">
                  {" "}
                  Rs. 2,500
                </span>{" "}
              </p>
              <div className="flex gap-3">
                <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
                <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[260px] lg:h-[370px] shadow-lg shadow-gray-400 lg:py-0 w-full h-fit  py-5">
            <figure>
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg"
                alt=""
                className="w-full lg:w-100 h-fit"
              />
            </figure>
            <div className="grid justify-center gap-5 text-gray-700">
              <p className="text-[13px] font-outfit">Nest Of Tables</p>
              <p className="font-semibold text-gray-900">
                Caroline Study Tables
              </p>
              <p className="font-outfit ">
                {" "}
                <span className="line-through text-sm mr-2">
                  {" "}
                  Rs.3,000
                </span>{" "}
                <span className="text-[17px] font-bold text-amber">
                  {" "}
                  Rs. 2,500
                </span>{" "}
              </p>
              <div className="flex gap-3">
                <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1 hover:bg-amber" />
                <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
