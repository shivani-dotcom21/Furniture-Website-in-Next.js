import React from "react";
import BreadCrums from "../Common/BreadCrums/BreadCrums";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <section className="p-5 lg:p-0 font-outfit mb-10 ">
        <h1 className="text-4xl my-5 font-poppins text-center">Register</h1>
        <form className="w-full lg:w-[550px] grid gap-2 p-5 border border-gray-300 rounded-sm mx-auto ">
          <label className="hover:text-amber cursor-pointer mt-5">Name *</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />

          <label className="hover:text-amber cursor-pointer mt-5 ">
            Email *
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />

          <label className="hover:text-amber cursor-pointer mt-5">
            Password *
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />

          <label className="hover:text-amber cursor-pointer mt-5">
            Phone Number *
          </label>
          <input
            type="Number"
            placeholder="Phone Number"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />

          <label className="hover:text-amber cursor-pointer mt-5">
            Address *
          </label>
          <input
            type="text"
            placeholder="Address"
            className="w-full pb-10 border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />
          <div className="flex justify-end items-center p-3">
            <button className="py-2 px-5 text-sm bg-amber text-[13px]  text-white font-semibold rounded-full hover:bg-zinc-800">
              <Link href="/my-dashboard">REGISTER</Link>
            </button>
          </div>
        </form>
      </section>
      ;
    </>
  );
}
