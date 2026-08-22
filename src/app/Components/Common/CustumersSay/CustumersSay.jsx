"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

export default function CustumersSay() {
  return (
    <>
      <section className="max-w-[1320px] mx-auto w-full  font-poppins lg:my-10  mb-20  py-5 ">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="lg:w-full lg:h-[400px] w-[490px] h-[420px] pb-15 relative "
          style={{
            "--swiper-pagination-color": "#C09578 ",
            "--swiper-pagination-bullet-inactive-opacity": "0.6",
            "--swiper-pagination-bottom": "0px",
          }}
        >
          <SwiperSlide>
            <div className="lg:w-[800px] w-full mx-auto grid justify-center items-center lg:gap-5 gap-5">
              <h1 className="text-2xl lg:text-3xl font-bold text-center">
                What Our Custumers Say ?
              </h1>
              <p className="font-outfit text-[15px] lg:text-[17px] text-gray-500 text-center">
                These guys have been absolutely outstanding. Perfect Themes and
                the best of all that you have many options to choose! Best
                Support team ever! Very fast responding! Thank you very much! I
                highly recommend this theme and these people!
              </p>
              <div className="mx-auto">
                <img
                  src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg"
                  alt=""
                />
                <div className="grid gap-3">
                  <p className="font-bold"> Kathy Young</p>
                  <h2 className="text-sm text-gray-600">CEO Of SunPark</h2>
                  <div className="flex gap-1">
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[800px] w-full mx-auto grid justify-center items-center lg:gap-5 gap-5 ">
              <h1 className="text-2xl lg:text-3xl font-bold text-center">
                What Our Custumers Say ?
              </h1>
              <p className="font-outfit text-[15px] lg:text-[17px] text-gray-500 text-center">
                These guys have been absolutely outstanding. Perfect Themes and
                the best of all that you have many options to choose! Best
                Support team ever! Very fast responding! Thank you very much! I
                highly recommend this theme and these people!
              </p>
              <div className="mx-auto">
                <img
                  src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg"
                  alt=""
                />
                <div className="grid gap-3">
                  <p className="font-bold"> Kathy Young</p>
                  <h2 className="text-sm text-gray-600">CEO Of SunPark</h2>
                  <div className="flex gap-1">
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[800px] w-full mx-auto grid justify-center items-center lg:gap-5 gap-5">
              <h1 className="text-2xl lg:text-3xl font-bold text-center">
                What Our Custumers Say ?
              </h1>
              <p className="font-outfit text-[15px] lg:text-[17px] text-gray-500 text-center">
                These guys have been absolutely outstanding. Perfect Themes and
                the best of all that you have many options to choose! Best
                Support team ever! Very fast responding! Thank you very much! I
                highly recommend this theme and these people!
              </p>
              <div className="mx-auto">
                <img
                  src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png"
                  alt=""
                />
                <div className="grid gap-3">
                  <p className="font-bold"> Kathy Young</p>
                  <h2 className="text-sm text-gray-600">CEO Of SunPark</h2>
                  <div className="flex gap-1">
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                    <FaStar className="text-amber" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
