import React from "react";
import BreadCrums from "../Components/Common/BreadCrums/BreadCrums";
import { FaFax } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export const metadata = {}

export default function ContactUs() {
    metadata.title='Contact Us'
  return (
    <>

      <BreadCrums title="Contact Us" />
      <div className=" w-full lg:w-[1320px] h-fit lg:mx-30 p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1001334.6396397547!2d72.66378802393243!3d25.973682913379065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1786258254260!5m2!1sen!2sin"
          className="w-full h-[400px] lg:w-[1100px] lg:h-[500px]"
        ></iframe>
      </div>
      <div className=" grid-cols-1 lg:grid grid-cols-2 justify-center gap-5 lg:mx-30 my-20 p-5">
        <div className="w-full h-fit " >
          <div>
             <h2 className=" text-2xl  text-black font-bold font-poppins pb-5">
              Contract Us
            </h2>
            <ul className="grid  text-[15px] text-gray-600">
              <li className="flex gap-3 text-sm text-gray-600 border border-gray-200 py-4 px-3 "> < FaFax/> Claritas est etiam processus dynamicus</li>
              <li className="flex gap-3 text-sm text-gray-600 border border-gray-200 py-4 px-3 "><FaPhoneAlt /> 98745612330</li>
              <li className="flex gap-3 text-sm text-gray-600 border border-gray-200 py-4 px-3 "><MdOutlineMail className="w-[20px] h-fit"/> furniture@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-fit mt-5">
          <form className="grid">
            <h2 className=" text-2xl  text-black font-bold font-poppins pb-5">
              Tell us your question
            </h2>
            <label className="text-[15px] font-semibold text-black font-outfit">
              Your Name (required)
            </label>
            <input type="text" placeholder="Name *"  className="text-sm placeholder:text-gray-500 border border-gray-200 py-3 px-3 mt-2 mb-4 focus:outline-none" />

            <label className="text-[15px] font-semibold text-black font-outfit">Your Email (required)</label>
            <input type="text" placeholder="Email *" className="text-sm placeholder:text-gray-500 border border-gray-200 py-3 px-3  mt-2 mb-4 focus:outline-none"/>

            <label className="text-[15px] font-semibold text-black font-outfit">Your Mobile Number</label>
            <input type="number" placeholder="Mobile Number *" className="text-sm placeholder:text-gray-500 border border-gray-200 py-3 px-3  mt-2 mb-4 focus:outline-none"/>

            <label className="text-[15px] font-semibold text-black font-outfit">Subject</label>
            <input type="text" placeholder="Subject *" className="text-sm placeholder:text-gray-500 border border-gray-200 py-3 px-3  mt-2 mb-4 focus:outline-none"/>

            <label className="text-[15px] font-semibold text-black font-outfit">Your Message</label>
            <input type="text" placeholder="Message *" className="text-sm placeholder:text-gray-500 border border-gray-200 pt-3 pb-35 px-3  mt-2 mb-4 focus:outline-none"/>

            <button className="w-fit py-3 px-7 bg-black text-white text-sm hover:bg-amber rounded-lg">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
