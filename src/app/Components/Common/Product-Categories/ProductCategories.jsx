import React from "react";

export default function ProductCategories() {
  return (
    <>
      <section className=" text-zinc-600 p-5 font-poppins text-[16px] hidden lg:block">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-5">
          Categories
        </h1>

        <div className="h-100 overflow-y-auto border-b pb-5 border-gray-300 ">
          <p className="text-xl font-semibold my-5  ">Tables</p>
          <div className="grid gap-5">
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Side and End Tables</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Nest Of Tables</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Coffee Table Sets</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Coffee Tables</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Dining Tables</li>
            </ul>
          </div>

          <p className="text-xl font-semibold my-5  ">Mirror</p>
          <div className="grid gap-5">
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Fancy Mirror</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Wooden Mirrors</li>
            </ul>
          </div>

          <p className="text-lg font-semibold  my-5">
            Living Storage/collections
          </p>
          <div className="grid gap-5">
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Prayer Units</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Display Unit</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Prayer Units</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Display Unit</li>
            </ul>
          </div>
        </div>
        <p className="text-xl font-semibold my-5  ">Material</p>
        <div className="grid gap-5">
          <ul className="flex gap-3 font-outfit">
            <input type="checkbox" className="w-4 cursor-pointer" />
            <li>Rose Wood</li>
          </ul>
          <ul className="flex gap-3 font-outfit">
            <input type="checkbox" className="w-4 cursor-pointer" />
            <li> Teak Wood</li>
          </ul>
          <ul className="flex gap-3 font-outfit">
            <input type="checkbox" className="w-4 cursor-pointer" />
            <li>Satin Wood</li>
          </ul>
          <ul className="flex gap-3 font-outfit">
            <input type="checkbox" className="w-4 cursor-pointer" />
            <li>Sal Wood</li>
          </ul>

          <p className="text-xl font-semibold my-5  ">Color</p>
          <div className="grid gap-5">
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Burnt Amber</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li> Golden Teak</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Carbon Black</li>
            </ul>
            <ul className="flex gap-3 font-outfit">
              <input type="checkbox" className="w-4 cursor-pointer" />
              <li>Weathered French Grey</li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-900 mb-5">Filter by price</h1>
          <p  className="text-sm text-zinc-900 font-semibold"> Rs.0 - Rs.200000</p>
          <button className="bg-zinc-900 text-white text-sm w-fit py-1 px-5 rounded-sm">Filter</button>
        </div>
      </section>
    </>
  );
}
