import React from "react";
import MyNavbar from "../components/MyNavbar";
import MySideBar from "../components/MySideBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="">
      <MyNavbar />
      <div className="container flex">
        <MySideBar />
        <div className=" dark:bg-gray-700 p-4 h-[calc(100vh-60px)] w-full overflow-x-hidden overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
