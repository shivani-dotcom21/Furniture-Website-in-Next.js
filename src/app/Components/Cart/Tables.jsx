import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Tables() {
  return (
    <section className="p-6 mx-20 my-10 font-outfit">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b border-gray-200 text-lg">Delete</th>
              <th className="p-3 border-b border-gray-200 text-lg">Image</th>
              <th className="p-3 border-b border-gray-200 text-lg">Product</th>
              <th className="p-3 border-b border-gray-200 text-lg">Price</th>
              <th className="p-3 border-b border-gray-200 text-lg">Quantity</th>
              <th className="p-3 border-b border-gray-200 text-lg">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 text-center">
              <td className="p-3 border border-gray-200 text-center">
                <RiDeleteBin6Line className="text-amber text-xl mx-auto cursor-pointer" />
              </td>
              <td className="p-3 border border-gray-300 w-[200px] h-[100px]">
                <img
                  src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg"
                  alt=""
                  className="w-full h-fit cursor-pointer"
                />
              </td>

              <td className="p-3 border border-gray-200 text-[15px]">
                Gloria Shoe Racks
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                Rs. 2,900
              </td>

              <td className="p-3 border border-gray-200 font-semibold ">
                {" "}
                Quantity{" "}
                <input
                  type="number"
                  className="border border-gray-300 outline-none w-15 py-1 ml-3"
                />
              </td>
              <td className="p-3 border border-gray-200 font-semibold">
                Rs. 2,900
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end">
            <button className="py-2 px-5 mt-5 mx-end text-[13px] bg-zinc-800 text-white font-semibold rounded-lg hover:bg-amber">
          UPDATE CART
        </button>
        </div>
      </div>
    </section>
  );
}
