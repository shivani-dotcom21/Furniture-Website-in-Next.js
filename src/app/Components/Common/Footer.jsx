import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className=" font-outfit text-gray-600  ">
        <hr className="text-gray-300 my-10" />
        <div className="lg:grid grid-cols-3 lg:mx-30 mx-5 my-15">
          <div>
            <h2 className=" text-xl  text-gray-800 font-bold font-poppins pb-5">
              Contract Us
            </h2>
            <ul className="grid gap-2 text-[15px]">
              <li>Address: Claritas est etiam processus dynamicus</li>
              <li>Phone: 98745612330</li>
              <li>Email: furniture@gmail.com</li>
            </ul>
            <div className="flex gap-3 pt-4">
              <div className="border p-2 rounded-full border-gray-300">
                <FaFacebookF className="text-xl " />
              </div>
              <div className="border p-2 rounded-full border-gray-300">
                {" "}
                <FaInstagram className="text-lg" />{" "}
              </div>
              <div className="border p-2 rounded-full border-gray-300">
                {" "}
                <FaTwitter className="text-lg" />{" "}
              </div>
              <div className="border p-2 rounded-full border-gray-300">
                {" "}
                <FaYoutube className="text-lg" />{" "}
              </div>
              <div className="border p-2 rounded-full border-gray-300">
                {" "}
                <BsTelegram className="text-lg" />{" "}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-5 ">
            <div>
              <h2 className=" text-xl  text-gray-700 font-bold font-poppins pb-5">
                Information
              </h2>
              <ul className="grid gap-2 text-[15px]">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Frequently Questions</li>
              </ul>
            </div>
            <div>
              <h2 className=" text-xl  text-gray-700 font-bold font-poppins pb-5">
                {" "}
                My Account
              </h2>
              <ul className="grid gap-2 text-[15px]">
                <li> My Dashboard</li>
                <li>Wishlist</li>
                <li>Cart</li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className=" text-xl  text-gray-700 font-bold font-poppins pb-5">
              Top Rated Products
            </h2>
            <div className="grid gap-5">
              <div className="flex gap-3">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/66ed867c-3f0b-4b29-82b7-4246a035a39e-1782986536.webp"
                    alt=""
                    className="w-25 h-fit"
                  />
                </figure>
                <div className="grid gap-2">
                  <p className="text-sm">Dinning Tables</p>
                  <h1 className="font-poppins text-lg">
                    Carved Sheesham Wood Ladder Bookshelf
                  </h1>
                  <p className="text-[15px] font-semibold">
                    {" "}
                    <span className="line-through mr-3">Rs. 20</span>{" "}
                    <span className="text-amber ">Rs. 20</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <figure>
                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg"
                    alt=""
                    className="w-[80px] h-fit"
                  />
                </figure>
                <div className="grid gap-2">
                  <p className="text-sm">Wooden Sofa Cum Bed</p>
                  <h1 className="font-poppins text-lg">Sapien Sofa Cum Bed</h1>
                  <p className="text-[15px] font-semibold">
                    {" "}
                    <span className="line-through mr-3">Rs. 64,000</span>{" "}
                    <span className="text-amber ">Rs. 54,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y py-4 border-gray-200 my-10">
          <ul className="flex gap-10 justify-center items-center">
            <li> Home</li>
            <li> Online Store</li>
            <li> Privacy Policy</li>
            <li> Terms Of Use</li>
          </ul>
        </div>
        <div className="text-center">
          All Rights Reserved By Furniture | © 2026
        </div>
        <div className="mt-5 mb-10">
          <figure>
            <img
              src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
              alt=""
              className="mx-auto"
            />
          </figure>
        </div>
      </footer>
    </>
  );
}
