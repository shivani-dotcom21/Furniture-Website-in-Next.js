import React from "react";
import { TbMathGreater } from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa";


export default function BreadCrums({title}) {
  return (
    <>
      <section>
        <div className="grid justify-center gap-2 border border-gray-300 py-15 ">
          <h1 className="lg:text-5xl font-poppins font-bold text-3xl">{title}</h1>
          <div className=" flex gap-2  justify-center items-center text-sm font-outfit cursor-pointer">
            <p className="hover:text-amber">Home </p>
            <FaGreaterThan className="text-[10px] text-amber"/>
            <p className=" text-amber">{title}</p>
          </div>
        </div>
      </section>
    </>
  );
}
