import React, { useState } from "react";
import MyDashboard from "../MyDashboard/MyDashboard";
import Orders from "../orders/Orders";
import MyProfile from "../MyDashboard/MyProfile";
import ChangePassword from "../MyDashboard/ChangePassword";
import Addresses from "../MyDashboard/Addresses";
import Link from "next/link";

export default function MyDashbaordWork() {
  let [menu, setMenu] = useState(1);
  return (
    <>
      <section className=" w-full h-screen  overflow-auto">
        <div className="mx-auto flex min-h-[550px] w-full max-w-7xl flex-col justify-center gap-8 px-4 py-10 md:flex-row md:gap-10 md:px-8">
          <div className="w-full md:w-[20%] md:min-w-52">
            <ul className="text-[15px]  grid gap-2 font-outfit">
              <li
                onClick={() => setMenu(1)}
                className={`border rounded-full py-2 pl-8 ${menu === 1 ? "bg-amber" : "bg-zinc-900"} text-white hover:bg-amber cursor-pointer hover:scale-105`}
              >
                My Dashboard
              </li>
              <li
                onClick={() => setMenu(2)}
                className={`border rounded-full py-2 pl-8 ${menu === 2 ? "bg-amber" : "bg-zinc-900"} text-white hover:bg-amber cursor-pointer hover:scale-105`}
              >
                Orders
              </li>

              <li
                onClick={() => setMenu(3)}
                className={`border rounded-full py-2 pl-8 ${menu === 3 ? "bg-amber" : "bg-zinc-900"} text-white hover:bg-amber cursor-pointer hover:scale-105`}
              >
                Addresses
              </li>
              <li
                onClick={() => setMenu(4)}
                className={`border rounded-full py-2 pl-8 ${menu === 4 ? "bg-amber" : "bg-zinc-900"} text-white hover:bg-amber cursor-pointer hover:scale-105`}
              >
                My Profile
              </li>

              <li
                onClick={() => setMenu(5)}
                className={`border rounded-full py-2 pl-8 ${menu === 5 ? "bg-amber" : "bg-zinc-900"} text-white hover:bg-amber cursor-pointer hover:scale-105`}
              >
                Change Password
              </li>
              <li className="border rounded-full py-2 pl-8 bg-zinc-900 text-white hover:bg-amber cursor-pointer hover:scale-105">
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </div>
          <div className="h-fit w-full md:w-[60%]">
            {menu == 1 && <MyDashboard />}

            {menu == 2 && <Orders />}

            {menu == 3 && <Addresses />}

            {menu == 4 && <MyProfile />}

            {menu == 5 && <ChangePassword />}
          </div>
        </div>
      </section>
    </>
  );
}
