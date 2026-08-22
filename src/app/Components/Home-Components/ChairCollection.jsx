import Link from "next/link";
import React from "react";

export default function ChairCollection() {
  return (
    <>
      <section className=" max-w-[1320px] font-poppins">
        <div className="grid grid-cols-1 lg:flex justify-center items-center gap-5 my-10 lg:p-0 p-5">
          <Link href="/page">
          <div>
            <figure className=" relative overflow-hidden ">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp"
                alt=""
                className="w-full lg:w-[360px] h-fit hover:scale-110 duration-200  ease-in-out "
              />
              <div className="absolute top-5 left-5">
                <p className="text-sm font-semibold">Design Creative</p>
                <p className="text-2xl font-semibold">Chair Collection</p>
              </div>
            </figure>
          </div>
          </Link>

          <div>
            <figure className=" relative overflow-hidden">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp"
                alt=""
                className=" w-full lg:w-[360px] h-fit hover:scale-110 duration-200  ease-in-out "
              />
              <div className="absolute top-5 left-5">
                <p className="text-sm font-semibold">Bestselling Products</p>
                <p className="text-2xl font-semibold">Chair Collection</p>
              </div>
            </figure>
          </div>
          <div>
            <figure className=" relative overflow-hidden">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp"
                alt=""
                className="w-full lg:w-[360px] h-fit hover:scale-110 duration-200  ease-in-out "
              />
              <div className="absolute top-5 left-5">
                <p className="text-sm font-semibold">Onsale Products</p>
                <p className="text-2xl font-semibold">Chair Collection</p>
              </div>
            </figure>
          </div>
        </div>
        <hr className="text-gray-300" />
      </section>
    </>
  );
}
