"use client";
import React from "react";
import MyDashboard from "../Components/MyDashboard/MyDashboard";
import Menu from "../Components/MyDashboard/Menu";
import ChangePassword from "../Components/MyDashboard/ChangePassword";
import MyProfile from "../Components/MyDashboard/MyProfile";
import BreadCrums from "../Components/Common/BreadCrums/BreadCrums";
import Order from "../Components/MyDashboard/Order";
import MyDashbaordWork from "../Components/my-dashboard-work/MyDashbaordWork";

export default function page() {
  return (
    <>
      {/* <BreadCrums title='My Dashboard'/>
      <div className="w-[1320px] h-[550px] flex justify-center gap-10 p-10  mx-auto">
        <div className="  w-[20%] h-[400px]  "> */}
          {/* <Menu /> */}
          <MyDashbaordWork/>
        {/* </div>
        <div className="w-[60%] ">
          
        </div>
      </div> */}

      

    </>
  );
}
