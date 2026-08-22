"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function SellingProduct() {
  return (
    <>
      <section className="w-full h-full lg:w-[1320px] lg:h-fit mx-auto lg:p-20  font-poppins border-b border-gray-300">
        <h1 className="text-2xl lg:text-3xl font-semibold lg:mx-22 my-5">
          Bestselling Products
        </h1>
        <div className="w-full bg-gray-100 p-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="w-full h-[330px]  shadow-lg shadow-gray-400 ">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg"
                    alt=""
                    className="w-full h-full"
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
                  <div className=" flex gap-3 ">
                    <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1.5 hover:bg-amber" />
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[330px] shadow-lg shadow-gray-400 ">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg"
                    alt=""
                    className="w-full h-full"
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
                    <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1.5 hover:bg-amber" />
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[330px] shadow-lg shadow-gray-400">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg"
                    alt=""
                    className="w-full h-full"
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
                    <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1.5 hover:bg-amber" />
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[330px] shadow-lg shadow-gray-400">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg"
                    alt=""
                    className="w-100 h-fit"
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
                    <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1.5 hover:bg-amber" />
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[330px] shadow-lg shadow-gray-400">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                    alt=""
                    className="w-100 h-fit"
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
                    <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1.5 hover:bg-amber" />
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[330px] shadow-lg shadow-gray-400">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                    alt=""
                    className="w-100 h-fit"
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
                    <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1.5 hover:bg-amber" />
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[330px] shadow-lg shadow-gray-400">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                    alt=""
                    className="w-100 h-fit"
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
                    <FaRegHeart className="text-xl font-bold text-black w-[30px] h-[30px] p-1.5 hover:bg-amber" />
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[350px] shadow-lg shadow-gray-400">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                    alt=""
                    className="w-100 h-fit"
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
                    <p className="px-4 bg-gray-200 hover:bg-amber"></p>
                    <p className="bg-gray-200 hover:bg-amber py-1 px-5 text-[12px] text-gray font-outfit">
                      Add To Cart
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
