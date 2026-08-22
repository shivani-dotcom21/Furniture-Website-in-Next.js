"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

export default function BannerSlider() {
  return (
    <>
      <Swiper className="w-full h-fit"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <figure>
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg"
              className="w-full h-full lg:h-[500px]"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg"
              className="w-full h-full lg:h-[500px]"
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg"
              className="w-full h-full lg:h-[500px]"
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function BannerSlider() {
//   return (
//     <div className="w-full h-[450px]">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 2000 }}
//         loop={true}
//         className="w-full h-full"
//       >
//         <SwiperSlide>
//           <figure className="w-full h-full">
//             <img
//               src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg"
//               className="w-full h-full object-cover"

//             />
//           </figure>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
