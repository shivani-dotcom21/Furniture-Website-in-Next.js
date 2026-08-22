import React from "react";

export default function Coupon() {
  return (
    <>
      <section className="max-w-[1320px] mx-auto flex justify-center items-start gap-5 my-10">
        <div className="w-[550px] mx-auto border border-gray-300 font-outfit  grid gap-5">
          <h1 className="text-2xl bg-zinc-800 p-2 text-white font-poppins">
            Coupon
          </h1>
          <div className="p-5">
            <p className="text-[15px]">
              Enter your coupon code if you have one.
            </p>
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-fit py-2 border border-gray-300 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <button className="py-2 px-5 mt-5 text-[13px] ml-5 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-amber cursor-pointer">
              APPLY COUPON
            </button>
          </div>
        </div>

        <div className="w-[550px] mx-auto border  border-gray-300 font-outfit  grid gap-5">
          <h1 className="text-2xl bg-zinc-800 p-2 text-white font-poppins">
            Cart Totals
          </h1>
          <div className=" grid gap-3 p-5 font-semibold ">
            <p className="flex justify-between align-items-center">
              {" "}
              Subtotal <span className="text-lg">Rs. 5,200</span>
            </p>
            <p className="flex justify-between align-items-center">
              {" "}
              Discount (-) <span className="text-lg">Rs. 0</span>
            </p>
            <p className="flex justify-between align-items-center">
              {" "}
              Total <span className="text-lg">Rs. Rs. 5,200</span>
            </p>
            <div className="grid justify-end">
              <button className="  py-2 px-5 mt-5 text-[16px] ml-5 bg-amber  text-white font-semibold rounded-lg hover:bg-zinc-800 cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
