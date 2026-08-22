import React from "react";

export default function OurNewsLetter() {
  return (
    <>
      <section className="font-outfit grid justify-center gap-3 text-center my-10">
        <h1 className="text-2xl font-bold font-poppins">Our Newsletter</h1>
        <p className="text-[15px]  text-gray-700">
          Get E-mail updates about our latest shop and special offers.
        </p>
        <div className="flex my-5">
          <form className=" w-full border border-gray-300 p-2 px-5 shadow-sm  ">
            <input
              type="text"
              placeholder="Email address"
              className="focus:outline-none lg:pe-60"
            />
          </form>
          <button className="w-fit h-fit bg-amber text-white p-0 p-5 lg:px-15 py-2 font-bold text-lg rounded-sm hover:bg-black duration-300">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}
