"use client";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "@/app/redux/authSlice";
import { redirect } from "next/navigation";

export default function Header() {
  let token = useSelector((allstore) => allstore.auth.token);
  console.log(token);

  let dispatch = useDispatch();
  let logOut = () => {
    dispatch(clearCredentials());
    redirect("/login");
  };

  let [halfCart, setHalfCart] = useState(false);
  let [menu, setMenu] = useState(false);
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        // 150px scroll hone ke baad header change hoga
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className=" hidden lg:block w-[1320px] lg:flex justify-between items-center py-3 text-[13px] px-30">
        <div className="w-full  text-end font-semibold">
          {token ? (
            <>
              <button
                onClick={logOut}
                className="mr-2 hover:text-amber cursor-pointer"
              >
                Logout
              </button>
              <button className="hover:text-amber cursor-pointer">
                MyProfile
              </button>
            </>
          ) : (
            <>
              <span className="hover:text-amber cursor-pointer">
                <Link href="/login">Login / </Link>
              </span>
              <span className="hover:text-amber cursor-pointer">
                <Link href="/register">Register</Link>
              </span>
            </>
          )}
        </div>
      </div>

      <hr className="text-gray-300" />
      <div className=" flex justify-between items-center py-5 lg:px-30 px-15">
        <figure>
          <img
            src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
            className="w-[130px] cursor-pointer"
          />
        </figure>
        <div className="flex gap-5">
          <form className="hidden lg:block  lg:flex items-center gap-5 border border-gray-300 py-2 px-5 ">
            <input
              placeholder="Search product"
              className="placeholder:text-sm focus:outline-none"
            />
            <IoSearchOutline className="text-lg hover:text-amber cursor-pointer" />
          </form>
          <div className="border px-3 flex items-center border-gray-200 py-2 lg:py-0 hover:text-amber">
            <Link href="/wishlist">
              <FaHeart className="text-xl cursor-pointer hover:scale-120 duration-500 ease-inout" />
            </Link>
          </div>

          <div
            onClick={() => setHalfCart(!halfCart)}
            className="flex items-center gap-2 border border-gray-300 px-4 hover:text-amber cursor-pointer  "
          >
            <p className="absolute lg:right-63 right-52  text-sm px-1.5 bg-amber text-white rounded-full ">
              0
            </p>
            <IoMdCart className=" text-xl" />
            <button className="hidden lg:block lg:flex items-center gap-2 text-sm font-semibold hover:cursor-pointer">
              Rs. 0.00 <MdExpandMore className="text-xl" />
            </button>
          </div>
        </div>
        {/* {` fixed right-0 top-0 ${halfCart ? "right-0" : "righ-"} duration-900 ease-in-out  z-999 border w-[350] h-screen bg-white  p-5 font-outfit text-zinc-700`} */}
        <div
          className={`hidden lg:block p-5 fixed top-0 right-0 h-screen w-[27%] bg-white z-50 border transition-transform   duration-500 ease-in-out ${
            halfCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <h2 className="flex justify-between items-center text-xl font-semibold border-b pb-3 border-gray-300">
              {" "}
              Cart
              <IoMdClose
                onClick={() => setHalfCart(halfCart == "true" ? null : "true")}
                className="text-2xl hover:text-amber hover:cursor-pointer"
              />
            </h2>
            <div className="flex items-center gap-3 my-5 border-b pb-3 border-gray-300 ">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg"
                alt=""
                className="w-25 hover:cursor-pointer "
              />
              <div>
                <p className="flex justify-between items-center font-poppins hover:cursor-pointer">
                  Caroline Study Tables <IoMdClose className="text-lg ml-10" />
                </p>
                <p className="font-poppins">Qty:1</p>
                <p className="text-amber font-outfit">Rs. 0000</p>
              </div>
            </div>

            <p className="flex justify-between items-center text-sm">
              {" "}
              Subtotle: <span>Rs. 0000</span>
            </p>
            <div className="grid justify-center items-center gap-5 p-5 bg-black my-5">
              <button className="px-24 py-3  bg-zinc-800 text-white font-semibold text-sm rounded-lg hover:bg-amber">
                <Link href="/cart" onClick={() => setHalfCart(false)}>
                  VIEW CART
                </Link>
              </button>
              <button className="px-24 py-3 bg-amber text-white font-semibold text-sm rounded-lg">
                <Link href="/checkout" onClick={() => setHalfCart(false)}>
                  CHECKOUT
                </Link>
              </button>
            </div>
          </div>
          {/* <div>
            <h2 className="flex justify-between items-center text-xl font-semibold border-b pb-3 border-gray-300">
              Cart
              <IoMdClose
                onClick={() => setHalfCart(halfCart == "true" ? null : "true")}
                className="text-2xl hover:text-amber hover:cursor-pointer"
              />
            </h2>
            <figure>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-11349358.png"
                alt=""
                className="w-fit h-fit"
              />
            </figure>
            <div className="text-center grid gap-8">
              <h1 className="text-2xl font-bold font-upright">
                Your Shopping Cart is Empty
              </h1>
              <button className="w-fit mx-auto text-lg font-semibold font-outfit border rounded-lg py-2 px-5 bg-zinc-900 text-white hover:bg-amber shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 transition-shadow">
                Shop Now
              </button>
            </div>
          </div> */}
        </div>
        <button
          onClick={() => setMenu(!menu)}
          className="lg:hidden sm:block border rounded-sm p-1 border-gray-600"
        >
          <IoIosMenu className="text-xl  font-bold" />
        </button>
        <div
          className={`lg:hidden sm:block fixed top-0 ${menu ? "left-0" : "left-[-80%]"} duration-1000 ease-in-out w-75 h-screen z-999  bg-white p-5 font-outfit`}
        >
          <button onClick={() => setMenu(!menu)} className="lg:hidden sm:block">
            <MdOutlineClose className="text-xl  font-bold mb-3 ml-60" />
          </button>

          <div className="text-[13px] text-gray-600 grid justify-center text-center gap-5">
            <p>Contact us 24/7 : +91-98745612330</p>
            <p>furniture@gmail.com</p>
          </div>
          <div>
            <ul className="grid gap-8 uppercase font-outfit text-[13px] py-5 text-gray-600 font-semibold cursor-pointer">
              <li className="border-b border-gray-200 pb-2">
                <Link href="/"> Home</Link>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2 ">
                Living <MdExpandMore className="text-lg" />
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                Sofa <MdExpandMore className="text-lg" />
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                Pages
                <MdExpandMore className="text-lg" />
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2 ">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="text-gray-300" />

      <div>
        <ul className="flex justify-center items-center gap-10 uppercase font-outfit text-[13px] py-5 text-gray-600 font-semibold cursor-pointer">
          <li className="text-[#C09578] hover:text-[#C09578]">
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-end hover:text-amber">
            <Link href=""> Living</Link> <MdExpandMore className="text-lg" />
          </li>
          <li className="flex items-end hover:text-amber">
            Sofa <MdExpandMore className="text-lg" />
          </li>
          <li className="flex items-end hover:text-amber">
            Pages
            <MdExpandMore className="text-lg" />
          </li>

          <li className="flex items-end hover:text-amber">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {isScrolled && (
        <div className="fixed top-0 w-full z-999 bg-white/80 flex justify-center items-center gap-10">
          <figure>
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
              className="w-[130px]"
            />
          </figure>
          <ul className="flex justify-center items-center gap-10 uppercase font-outfit text-[13px] py-5 text-gray-600 font-semibold cursor-pointer">
            <li className="text-[#C09578] hover:text-[#C09578]">
              {" "}
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-end hover:text-[#C09578]">
              {" "}
              Living <MdExpandMore className="text-lg" />
            </li>
            <li className="flex items-end hover:text-[#C09578]">
              {" "}
              Sofa <MdExpandMore className="text-lg" />
            </li>
            <li className="flex items-end hover:text-[#C09578]">
              {" "}
              Pages
              <MdExpandMore className="text-lg" />
            </li>
            <li className="flex items-end hover:text-[#C09578]">
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
