import React from "react";

export default function NewTrending() {
  return (
    <>
      {/* <section className='max-w-[1320px] mt-20 mb-35'>
        <figure className=' relative w-full h-fit lg:scale-150 scale-250 lg:w-full lg:h-full font-poppins overflow-hidden '>
            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg" alt="" className=' w-full h-full '/>

            <div className=' w-fit lg:w-[700px] h-fit absolute lg:top-20 lg:left-70 z-999 lg:scale-70 hover:scale-75 duration-300 ease-in-out absolute top-[-30] left-2 scale-30 '>
                <h1 className='text-6xl font-bold font-style'>New Trending Collection</h1>
                <p className='font-bold text-lg font-upright mt-2 mb-15'>We Believe That Good Design is Always in Season</p>
                <button className='border-2 border-amber py-3 px-10 text-[13px] font-bold text-amber font-outfit'>SHOPPING NOW</button>
            </div>
        </figure>
      </section> */}

      <section className="max-w-[1320px] mx-auto mt-20 mb-20 px-4 font-poppins">
        <figure className="relative w-full h-auto overflow-hidden rounded-lg font-poppins" >
          {/* Banner Image */}
          <img
            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg"
            alt="New Trending Collection"
            className="w-full lg:h-[300px] h-[400px] lg:h-[450px] object-cover"
          />

          {/* Text Overlay (Absolute Center/Left) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12  lg:left-50 max-w-[90%] md:max-w-[500px] lg:max-w-[600px] z-10 hover:scale-110 duration-400 ease-in-out ">
            <h1 className="text-2xl text-4xl lg:text-6xl font-bold lg:mb-2 mb-4 font-style text-slate-900">
              New Trending Collection
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6">
              We Believe That Good Design is Always in Season
            </p>

            <button className="border-2 border-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 py-2 md:py-3 px-6 md:px-8 text-xs md:text-sm font-bold text-amber-600 font-outfit uppercase tracking-wider">
              SHOPPING NOW
            </button>
          </div>
        </figure>
      </section>
    </>
  );
}
