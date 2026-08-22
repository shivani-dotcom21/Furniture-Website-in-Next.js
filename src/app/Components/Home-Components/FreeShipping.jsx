import React from 'react'
import { BsFillGlobeEuropeAfricaFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoStopwatchOutline } from "react-icons/io5";

export default function FreeShipping() {
  return (
    <>
    <section className='font-poppins'>
        <div className='max-w-[1320px] grid grid-cols-1 lg:flex justify-center gap-30 border border-gray-200 py-15 my-10'>
            <div className='grid gap-3'>
                <div className='w-fit h-fit border-2 rounded-full border-gray-600 p-6 mx-auto'><BsFillGlobeEuropeAfricaFill className='text-xl text-gray-600'/></div>
                <p className='text-center text-xl font-semibold text-center'>Free Shipping</p>
                <p className='text-center text-[17px] text-[#5A5A5A] font-semibold font-outfit'>Free shipping on all order</p>
            </div>
            <div className='grid gap-3'>
                <div className='w-fit h-fit border-2 rounded-full border-gray-600  p-6 mx-auto'><IoIosCheckmarkCircleOutline  className='text-2xl font-bold text-gray-600'/></div>
                <p className='text-center text-xl font-semibold'>Money Return</p>
                <p className='text-center text-[17px] text-[#5A5A5A] font-semibold font-outfit'>Back guarantee under 7 days</p>
            </div>
            <div className='grid gap-3'>
                <div className='w-fit h-fit border-2 rounded-full border-gray-600 p-6 mx-auto'>< IoStopwatchOutline  className='text-2xl text-bold text-gray-600'/></div>
                <p className='text-center text-xl font-semibold'>Online Support</p>
                <p className='text-center text-[17px] text-[#5A5A5A] font-semibold font-outfit'>Support online 24 hours a day</p>
            </div>
        </div>
    </section>
    </>
  )
}
