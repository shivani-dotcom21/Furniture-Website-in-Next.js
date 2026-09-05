import React from "react";

export default function MyProfile() {
  return (
    <>
      <section className=" font-outfit">
        <div>
          <h1 className=" text-2xl font-semibold  mb-3 font-poppins">
            My Profile
          </h1>
          <form className=" grid gap-2 p-5 border border-gray-300 rounded-sm ">
            <div className="flex gap-2 font-semibold text-sm mb-3 ">
              <input type="radio" name="gender" value="mr" className=" cursor-pointer"/> Mr.
              <input type="radio" name="gender" value="mrs" className=" cursor-pointer"/> Mrs.
            </div>
            <label className="hover:text-amber cursor-pointer">Name *</label>
            <input
              type="text"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">Email *</label>
            <input
              type="email"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">
              Mobile Number *
            </label>
            <input
              type="number"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">Address *</label>
            <input
              type="text"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <div className="flex justify-end mt-3">
              <button className="w-fit  py-2 px-5 text-[13px] bg-amber text-white font-semibold     rounded-full hover:bg-zinc-800 cursor-pointer">
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </section>
      
    </>
  );
}
