import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
export const metadata = {}

export default function page() {
  metadata.title = "Reset Your Password"
  metadata.description = "Enter your registered email address below, and we will send you a link to reset your password."
  return (
    <>
      <div className="w-[500px]  mx-auto font-outfit my-10 ">
        <h1 className="text-4xl  my-10 font-poppins text-center font-poppins">
          Reset Password
        </h1>
        <div className="grid gap-8  border border-gray-300 p-5 ">
          <p>Reset your password</p>
          <p className="text-zinc-500 mb-5 text-[15px]">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <form className="grid gap-2">
            <label className="hover:text-amber cursor-pointer">Email *</label>
            <input
              type="text"
              placeholder="Email Address"
              className=" border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
          </form>
          <button className="w-full py-2 px-5 my-3 bg-black text-sm font-semibold  text-white rounded-full hover:bg-amber">
            Reset Your Password
          </button>
          <p className=" flex items-center gap-2 mb-5 text-[15px] font-semibold   cursor-pointer mr-2">
            <span className="text-zinc-500 font-normal cursor-text ">
              {" "}
              Don't have an account?
            </span>
            <span>Get access </span>
            <IoArrowForwardOutline />
          </p>
        </div>
      </div>
    </>
  );
}
