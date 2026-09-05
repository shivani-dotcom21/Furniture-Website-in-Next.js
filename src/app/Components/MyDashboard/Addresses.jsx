import React from "react";

export default function Addresses() {
  return (
    <>
      <section>
        <h1 className="text-[16px] font-outfit mb-6 mt-2">
          The following addresses will be used on the checkout page by default.
        </h1>
        <div className=" flex justify-between gap-5 font-outfit">
          <div className="w-full h-auto">
            <h1 className=" text-2xl mb-3 font-poppins">Billing address</h1>
            <form className=" grid gap-2 p-5 border border-gray-300 rounded-sm ">
              <label className="hover:text-amber cursor-pointer">
                Billing Name *
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                {" "}
                Billing Email *
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                Billing Mobile Number *
              </label>
              <input
                type="number"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                Billing Address *
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                Country Name *
              </label>
              <select className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none">
                <option className="text-">Select Country</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
              </select>
              <label className="hover:text-amber cursor-pointer">State *</label>
              <input
                type="number"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">City *</label>
              <input
                type="number"
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
          <div className="w-full h-auto">
            <h1 className=" text-2xl mb-3 font-poppins">Shipping address</h1>
            <form className=" grid gap-2 p-5 border border-gray-300 rounded-sm ">
              <label className="hover:text-amber cursor-pointer">
                Shipping Name *
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                {" "}
                Shipping Email *
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                Shipping Mobile Number *
              </label>
              <input
                type="number"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                Shipping Address *
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">
                Country Name *
              </label>
              <select className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none">
                <option className="text-">Select Country</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
                <option> India</option>
              </select>
              <label className="hover:text-amber cursor-pointer">State *</label>
              <input
                type="number"
                placeholder=""
                className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
              />
              <label className="hover:text-amber cursor-pointer">City *</label>
              <input
                type="number"
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
        </div>
      </section>
    </>
  );
}
