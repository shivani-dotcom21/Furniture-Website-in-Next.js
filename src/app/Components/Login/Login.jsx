"use client";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation";
import { setCredentials } from "@/app/redux/authSlice";
// import { Router, useRouter } from "next/router";

export default function Login() {
  // const router = useRouter();
  let dispatch = useDispatch();

  let apiBaseApi = process.env.NEXT_PUBLIC_APIBASEURL;
  // console.log("===========");
  // console.log(apiBaseApi);
  // console.log("===========");
  let [error, setError] = useState("");
  let [isSubmitting, setIsSubmitting] = useState(false);

  let handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    let obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    // console.log(obj);
    axios
      .post(`${apiBaseApi}auth/login`, obj)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setError("");
          console.log(finalRes);
          // localStorage.setItem("token", finalRes.token);
          dispatch(setCredentials({ token: finalRes.token }));
          redirect("/dashboard");
          // router.push("/my-dashboard");
        } else {
          setError(finalRes.message);
        }

        setIsSubmitting(false);
      });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f4ef] px-4 py-12 font-outfit sm:px-6 sm:py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full border border-[#e8dfd4] sm:h-[32rem] sm:w-[32rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-[#e8dfd4] sm:h-[26rem] sm:w-[26rem]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="max-w-lg">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#a87958]">
            Welcome back
          </p>
          <h1 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-[#302720] sm:text-5xl">
            Good spaces
            <span className="block font-upright text-5xl font-medium italic text-[#a87958] sm:text-6xl">
              start with you.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-[#756a60]">
            Sign in to revisit your favorites and find something special for
            your home.
          </p>

          <div className="mt-9 border-t border-[#e5ddd3] pt-6">
            <p className="text-sm leading-6 text-[#756a60]">
              Timeless furniture.
              <span className="block font-medium text-[#302720]">
                A home that feels like yours.
              </span>
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-[#eee8e0] bg-white p-6 shadow-[0_24px_70px_-35px_rgba(64,44,29,0.3)] sm:p-9 lg:p-10">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a87958]">
              Your account
            </p>
            <h2 className="mt-2 font-poppins text-2xl font-semibold text-[#302720] sm:text-3xl">
              Login
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#82776d]">
              Enter your email and password to continue.
            </p>
          </div>

          <form onSubmit={handleLogin} className="grid gap-5">
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}
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
                  className="h-12 w-full rounded-lg border border-[#e9e2da] bg-[#fdfcfb] pl-11 pr-4 text-sm text-[#302720] outline-none transition placeholder:text-[#b6aaa0] focus:border-[#b78967] focus:ring-2 focus:ring-[#b78967]/15"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#40362e]"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-[#9a6b4c] underline-offset-4 hover:underline sm:text-sm"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <LockKeyhole
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-[#a89787]"
                  strokeWidth={1.7}
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-lg border border-[#e9e2da] bg-[#fdfcfb] pl-11 pr-4 text-sm text-[#302720] outline-none transition placeholder:text-[#b6aaa0] focus:border-[#b78967] focus:ring-2 focus:ring-[#b78967]/15"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#a87958] px-5 text-sm font-semibold text-white transition hover:bg-[#8f6346] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87958]"
            >
              {isSubmitting ? "Signing in" : "Sign In"}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#82776d]">
            New to our store?{" "}
            <Link
              href="/register"
              className="font-semibold text-[#9a6b4c] underline-offset-4 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
