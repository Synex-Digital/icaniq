import React from "react";
import { Outlet } from "react-router-dom";
import Image from "./Image";
import logo from "../../assets/logoblack.png";
import { FaBars } from "react-icons/fa";

const Rotlayout = () => {
    return (
        <>
            <div className="flex w-full bg-red-500 h-16">
                <div className="flex w-[15%] items-center gap-x-3">
                    <FaBars className="ml-4" />
                    <Image className="w-[100px]" imgsrc={logo} />
                </div>
                <div className="flex w-[10%] items-center gap-x-3">
                    <h3 className=" text-[32px] font-rb font-bold text-tbcolor">Dashboard</h3>
                    <input className="w-[430px]" placeholder="search your module" />
                </div>
            </div>
            <div className="flex">
            <div className="w-[15%] bg-red-600 h-[90vh]">sadsad</div>
            <Outlet />
            </div>
        </>
    );
};

export default Rotlayout;
