"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import axios from "axios";
// import iziToast from "izitoast";

export default function Register() {
  let apiBaseApi = process.env.NEXT_PUBLIC_APIBASEURL;
  // console.log(apiBaseApi);

  let handleRegister = async (e) => {
    let iziToast = (await import("izitoast")).default;
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      address: e.target.address.value,
    };
    // console.log(obj);

    axios
      .post(`${apiBaseApi}auth/register`, obj)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          iziToast.success({
            title: "Success",
            message: finalRes.message,
            position: "topRight",
          });
          e.target.reset();
        } else {
          iziToast.error({
            title: "Error",
            message: finalRes.message,
            position: "topRight",
          });
        }
      });
  };
  return (
    <>
      <section className="p-5 lg:p-0 font-outfit mb-10 ">
        <h1 className="text-4xl my-5 font-poppins text-center">Register</h1>
        <form
          onSubmit={handleRegister}
          className="w-full lg:w-[550px] grid gap-2 p-5 border border-gray-300 rounded-sm mx-auto "
        >
          <label className="hover:text-amber cursor-pointer mt-5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />

          <label className="hover:text-amber cursor-pointer mt-5 ">
            Email *
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />
          <label className="hover:text-amber cursor-pointer mt-5">
            Phone Number *
          </label>
          <input
            type="Number"
            name="phone"
            placeholder="Phone Number"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />

          <label className="hover:text-amber cursor-pointer mt-5">
            Password *
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />

          <label className="hover:text-amber cursor-pointer mt-5">
            Address *
          </label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full pb-10 border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
          />
          <div className="flex justify-end items-center p-3">
            {/* <button className="py-2 px-5 text-sm bg-amber text-[13px]  text-white font-semibold rounded-full hover:bg-zinc-800">
              <Link href="/my-dashboard">REGISTER</Link>
            </button> */}
            <button
              type="submit"
              className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#a87958] px-5 text-sm font-semibold text-white transition hover:bg-[#8f6346] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87958] sm:col-span-2"
            >
              Create Account
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-[#82776d]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#9a6b4c] underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </section>
      ;
    </>
  );
}

// import Link from "next/link";
// import {
//   ArrowRight,
//   LockKeyhole,
//   Mail,
//   MapPin,
//   Phone,
//   UserRound,
// } from "lucide-react";

// const fields = [
//   {
//     id: "full-name",
//     label: "Full Name",
//     placeholder: "e.g. Alex Morgan",
//     type: "text",
//     autoComplete: "name",
//     icon: UserRound,
//   },
//   {
//     id: "email",
//     label: "Email Address",
//     placeholder: "you@example.com",
//     type: "email",
//     autoComplete: "email",
//     icon: Mail,
//   },
//   {
//     id: "phone",
//     label: "Phone Number",
//     placeholder: "+91 98765 43210",
//     type: "tel",
//     autoComplete: "tel",
//     icon: Phone,
//   },
//   {
//     id: "password",
//     label: "Password",
//     placeholder: "Create a password",
//     type: "password",
//     autoComplete: "new-password",
//     icon: LockKeyhole,
//   },
// ];

// export default function Register() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#f7f4ef] px-4 py-12 font-outfit sm:px-6 sm:py-16 lg:py-20">
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full border border-[#e8dfd4] sm:h-[32rem] sm:w-[32rem]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-[#e8dfd4] sm:h-[26rem] sm:w-[26rem]"
//       />

//       <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
//         <div className="max-w-lg">
//           <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#a87958]">
//             Make yourself at home
//           </p>
//           <h2 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-[#302720] sm:text-5xl">
//             A little more
//             <span className="block font-upright text-5xl font-medium italic text-[#a87958] sm:text-6xl">
//               room for you.
//             </span>
//           </h2>
//           <p className="mt-5 max-w-md text-base leading-7 text-[#756a60]">
//             Create an account for a smoother way to find furniture that feels
//             right at home.
//           </p>

//           <div className="mt-9 flex items-center gap-4 border-t border-[#e5ddd3] pt-6">
//             <div className="flex -space-x-2" aria-hidden="true">
//               <span className="h-9 w-9 rounded-full border-2 border-[#f7f4ef] bg-[#c69c7b]" />
//               <span className="h-9 w-9 rounded-full border-2 border-[#f7f4ef] bg-[#8e7561]" />
//               <span className="h-9 w-9 rounded-full border-2 border-[#f7f4ef] bg-[#d7c7b5]" />
//             </div>
//             <p className="text-sm leading-5 text-[#756a60]">
//               Thoughtful pieces,
//               <span className="block font-medium text-[#302720]">
//                 made for everyday living.
//               </span>
//             </p>
//           </div>
//         </div>

//         <div className="rounded-2xl border border-[#eee8e0] bg-white p-6 shadow-[0_24px_70px_-35px_rgba(64,44,29,0.3)] sm:p-9 lg:p-10">
//           <div className="mb-7">
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a87958]">
//               Join our community
//             </p>
//             <h2 className="mt-2 font-poppins text-2xl font-semibold text-[#302720] sm:text-3xl">
//               Create your account
//             </h2>
//             <p className="mt-2 text-sm leading-6 text-[#82776d]">
//               Enter your details below to get started.
//             </p>
//           </div>

//           <form className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
//             {fields.map(
//               ({ id, label, placeholder, type, autoComplete, icon: Icon }) => (
//                 <div key={id}>
//                   <label
//                     htmlFor={id}
//                     className="mb-2 block text-sm font-medium text-[#40362e]"
//                   >
//                     {label}
//                   </label>
//                   <div className="relative">
//                     <Icon
//                       aria-hidden="true"
//                       className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[#a89787]"
//                       strokeWidth={1.7}
//                     />
//                     <input
//                       id={id}
//                       name={id}
//                       type={type}
//                       placeholder={placeholder}
//                       autoComplete={autoComplete}
//                       className="h-12 w-full rounded-lg border border-[#e9e2da] bg-[#fdfcfb] pl-11 pr-4 text-sm text-[#302720] outline-none transition placeholder:text-[#b6aaa0] focus:border-[#b78967] focus:ring-2 focus:ring-[#b78967]/15"
//                     />
//                   </div>
//                 </div>
//               ),
//             )}

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="delivery-address"
//                 className="mb-2 block text-sm font-medium text-[#40362e]"
//               >
//                 Delivery Address
//               </label>
//               <div className="relative">
//                 <MapPin
//                   aria-hidden="true"
//                   className="absolute left-4 top-4 h-[17px] w-[17px] text-[#a89787]"
//                   strokeWidth={1.7}
//                 />
//                 <textarea
//                   id="delivery-address"
//                   name="delivery-address"
//                   autoComplete="street-address"
//                   placeholder="House number, street, city, postal code"
//                   rows={3}
//                   className="w-full resize-y rounded-lg border border-[#e9e2da] bg-[#fdfcfb] py-3 pl-11 pr-4 text-sm text-[#302720] outline-none transition placeholder:text-[#b6aaa0] focus:border-[#b78967] focus:ring-2 focus:ring-[#b78967]/15"
//                 />
//               </div>
//     </div>

//     <button
//       type="submit"
//       className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#a87958] px-5 text-sm font-semibold text-white transition hover:bg-[#8f6346] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87958] sm:col-span-2"
//     >
//       Create Account
//       <ArrowRight
//         aria-hidden="true"
//         className="h-4 w-4 transition-transform group-hover:translate-x-1"
//       />
//     </button>
//   </form>

//   <p className="mt-6 text-center text-sm text-[#82776d]">
//     Already have an account?{" "}
//     <Link
//       href="/login"
//       className="font-semibold text-[#9a6b4c] underline-offset-4 hover:underline"
//     >
//       Sign in
//     </Link>
//   </p>
// </div>
//       </div>
//     </section>
//   );
// }
