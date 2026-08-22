import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
      <section className=" font-outfit mb-15">
        <div>
          <h1 className="text-center text-4xl my-5 font-poppins">Login</h1>
          <form className="w-[550px] grid gap-2 p-5 border border-gray-300 rounded-sm mx-auto">
            <label className="hover:text-amber cursor-pointer">Email *</label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">
              Password *
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <div className="flex justify-between items-center p-3">
              <p className="text-amber text-sm cursor-pointer hover:underline">
                <Link href="ResetPassword">Lost your password?</Link>
              </p>
              <button className="py-2 px-5 text-[13px] bg-amber text-white font-semibold rounded-full hover:bg-zinc-800 cursor-pointer">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

