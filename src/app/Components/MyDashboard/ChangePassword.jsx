"use client";
import { clearCredentials } from "@/app/redux/authSlice";
import axios from "axios";
import iziToast from "izitoast";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChangePassword() {
  let apiBaseApi = process.env.NEXT_PUBLIC_APIBASEURL;
  let [isSubmitting, setIsSubmitting] = useState(false);

  let token = useSelector((allStore) => allStore.auth.token);
  let dispatch = useDispatch();
  let handleChangePassword = async (e) => {
    e.preventDefault();
    // let iziToast = (await import("izitoast")).default;
    setIsSubmitting(true);
    let obj = {
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.newPassword.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    axios
      .post(`${apiBaseApi}auth/change-password`, obj, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          iziToast.success({
            title: "Success",
            message: finalRes.message,
            position: "topRight",
          });
          e.target.reset();
          dispatch(clearCredentials());
          redirect("/login");
        } else {
          iziToast.error({
            title: "Error",
            message: finalRes.message,
            position: "topRight",
          });
        }
        setIsSubmitting(false);
      });
    // .catch((err) => {
    //   console.log(err);
    // })
    // .finally(() => {
    //   setIsSubmitting(false); // Yeh ensure karega ki success ho ya error, button normal ho jaye
    // });
  };

  return (
    <>
      <section className="font-outfit">
        <div>
          <h1 className=" text-3xl font-semibold  mb-3 font-poppins">
            Change Password
          </h1>
          <form
            onSubmit={handleChangePassword}
            className=" grid gap-2 p-5 border border-gray-300 rounded-sm "
          >
            <label className="hover:text-amber cursor-pointer">
              Current Password
            </label>
            <input
              type="password"
              name="oldPassword"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <label className="hover:text-amber cursor-pointer">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder=""
              className="w-full border border-gray-200 py-2 pl-5 placeholder:text-[15px] placeholder:text-zinc-600 outline-none"
            />
            <div className="flex justify-end mt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-fit  py-2 px-5 text-[13px] bg-amber text-white font-semibold     rounded-full hover:bg-zinc-800 cursor-pointer"
              >
                {isSubmitting ? "CHANGING.." : "CHANGE PASSWORD"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
