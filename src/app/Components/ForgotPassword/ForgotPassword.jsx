"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import axios from "axios";
import { useState } from "react";
// import iziToast from "izitoast";

export default function ForgotPassword() {
  let apiBaseApi = process.env.NEXT_PUBLIC_APIBASEURL;
  let [isSubmitting, setIsSubmitting] = useState(false);

  let handleForgotPassword = async (e) => {
    let iziToast = (await import("izitoast")).default;
    setIsSubmitting(true);
    e.preventDefault();
    let obj = {
      email: e.target.email.value,
    };
    axios
      .post(`${apiBaseApi}auth/forgot-password`, obj)
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
        setIsSubmitting(false);
      });
  };

  return (
    <main className="relative isolate flex flex-1 items-center overflow-hidden bg-[#f7f4ef] px-4 py-12 font-outfit sm:px-6 sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full border border-[#e8dfd4] sm:h-[32rem] sm:w-[32rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-[#e8dfd4] sm:h-[26rem] sm:w-[26rem]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="max-w-lg">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#a87958]">
            A little help
          </p>
          <h1 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-[#302720] sm:text-5xl">
            Find your way
            <span className="block font-upright text-5xl font-medium italic text-[#a87958] sm:text-6xl">
              back home.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-[#756a60]">
            It happens. Share the email address connected to your account and
            we&apos;ll help you get back to the pieces you love.
          </p>

          <div className="mt-9 border-t border-[#e5ddd3] pt-6">
            <p className="text-sm leading-6 text-[#756a60]">
              Thoughtful furniture.
              <span className="block font-medium text-[#302720]">
                A little more comfort, every day.
              </span>
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-2xl border border-[#eee8e0] bg-white p-6 shadow-[0_24px_70px_-35px_rgba(64,44,29,0.3)] sm:p-9 lg:p-10">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a87958]">
              Account assistance
            </p>
            <h2 className="mt-2 font-poppins text-2xl font-semibold text-[#302720] sm:text-3xl">
              Forgot your password?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#82776d]">
              Enter your email address and we&apos;ll send instructions to reset
              your password.
            </p>
          </div>

          <form onSubmit={handleForgotPassword} className="grid gap-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#40362e]"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[#a89787]"
                  strokeWidth={1.7}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full rounded-lg border border-[#e9e2da] bg-[#fdfcfb] pl-11 pr-4 text-sm text-[#302720] outline-none transition placeholder:text-[#b6aaa0] focus:border-[#b78967] focus:ring-2 focus:ring-[#b78967]/15"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#a87958] px-5 text-sm font-semibold text-white transition hover:bg-[#8f6346] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87958]"
            >
              {isSubmitting ? "Sending reset link" : "Send reset link"}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          <div className="mt-6 border-t border-[#eee8e0] pt-5 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9a6b4c] underline-offset-4 hover:underline"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
