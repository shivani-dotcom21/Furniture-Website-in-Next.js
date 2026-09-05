import React from "react";

export default function ChangePassword() {
  return (
    <>
      <section className="font-outfit">
        <div>
          <h1 className=" text-3xl font-semibold  mb-3 font-poppins">
            Change Password
          </h1>
          <form className=" grid gap-2 p-5 border border-gray-300 rounded-sm ">
            <label className="hover:text-amber cursor-pointer">
              Current Password
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">
              New Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <div className="flex justify-end mt-5">
              <button className="w-fit  py-2 px-5 text-[13px] bg-amber text-white font-semibold     rounded-full hover:bg-zinc-800 cursor-pointer">
                CHANGE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
