import React, { useState } from "react";
import MyDashboard from "../MyDashboard/MyDashboard";
import Order from "../MyDashboard/Order";
import MyProfile from "../MyDashboard/MyProfile";
import ChangePassword from "../MyDashboard/ChangePassword";
import Addresses from "../MyDashboard/Addresses";
import Link from "next/link";

export default function MyDashbaordWork() {
  let [menu, setMenu] = useState(false);
  return (
    <>
      <section className=" w-full h-screen  overflow-auto">

        <div className="w-[1320px] h-[550px] flex justify-center gap-10 p-10  mx-auto">
          <div className="  w-[20%] h-[400px]  ">
            <ul className="text-[15px]  grid gap-2 font-outfit">
              <li
                onClick={() => setMenu(menu == 1 ? null : 1)}
                className="border rounded-full py-2 pl-8 bg-amber text-white cursor-pointer hover:scale-105"
              >
                My Dashboard
              </li>
              <li
                onClick={() => setMenu(menu == 2 ? null : 2)}
                className="border rounded-full py-2 pl-8 bg-zinc-900 text-white hover:bg-amber cursor-pointer hover:scale-105"
              >
                Orders
              </li>
              <li
                onClick={() => setMenu(menu == 3 ? null : 3)}
                className="border rounded-full py-2 pl-8 bg-zinc-900 text-white hover:bg-amber cursor-pointer hover:scale-105"
              >
                Addresses
              </li>
              <li
                onClick={() => setMenu(menu == 4 ? null : 4)}
                className="border rounded-full py-2 pl-8 bg-zinc-900 text-white hover:bg-amber cursor-pointer hover:scale-105"
              >
                My Profile
              </li>
              <li
                onClick={() => setMenu(menu == 5 ? null : 5)}
                className="border rounded-full py-2 pl-8 bg-zinc-900 text-white hover:bg-amber cursor-pointer hover:scale-105"
              >
                Change Password
              </li>
              <li
                
                className="border rounded-full py-2 pl-8 bg-zinc-900 text-white hover:bg-amber cursor-pointer hover:scale-105"
              >
                <Link href='/'>Logout</Link>
              </li>
            </ul>
          </div>
          <div className="w-[60%] h-fit ">
            {menu == 1 && <MyDashboard />}

            {menu == 2 && <Order />}

            {menu == 3 && <Addresses />}

            {menu == 4 && <MyProfile />}

            {menu == 5 && <ChangePassword />}
          </div>
        </div>
      </section>
    </>
  );
}
