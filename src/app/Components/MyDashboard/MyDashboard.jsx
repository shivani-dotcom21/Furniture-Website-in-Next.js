import React from "react";

export default function MyDashboard() {
  return (
    <>
      <section className="font-poppins text-zinc-700">
        <h1 className="text-2xl font-semibold "> My Dashboard</h1>
        <p className="text-sm font-outfit my-5">
          From your account dashboard. you can easily check & view your
          <span className="font-bold cursor-pointer"> recent orders </span>, manage your
          <span className="font-bold cursor-pointer"> shipping and billing addresses</span> and
          <span className="font-bold cursor-pointer"> Edit your password and account details.</span>
        </p>
      </section>
    </>
  );
}
