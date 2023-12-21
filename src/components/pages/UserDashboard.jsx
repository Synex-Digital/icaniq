import React, { useState } from "react";
import Image from "../layout/Image";
import profile from "../../assets/profile.png";
import PassGraphs from "../layout/PassGraphs";
import { useSelector } from "react-redux";
import logo from "../../assets/logo_hd.webp";
import Background from "../../assets/logo.png";

const UserDashboard = (props) => {
    let show = useSelector((state) => state.counter.value);
    let loginUser = useSelector((state) => state.loggedUser.loginUser);

    return (
        <div className="flex flex-col md:flex-row gap-4  justify-between mt-16 p-4 w-full  ">
            <div className="grid gap-4 h-fit w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                <div className="rounded-xl border border-gray-300 px-2 py-4 shadow-sm flex flex-col">
                    <span>Name</span>
                    <span>Description</span>
                </div>
                <div className="rounded-xl border border-gray-300 px-2 py-4 shadow-sm flex flex-col">
                    <span>Name</span>
                    <span>Description</span>
                </div>
                <div className="rounded-xl border border-gray-300 px-2 py-4 shadow-sm flex flex-col">
                    <span>Name</span>
                    <span>Description</span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className=" bg-[#162655] h-fit p-5 rounded-2xl text-center">
                    <Image className="w-24 h-24 mx-auto" imgsrc={profile} />
                    <h2 className=" font-rb font-bold text-2xl mt-5 text-white">
                        Welcome {loginUser.name}
                    </h2>
                    <p className=" font-rb font-bold mt-2 mb-7 text-white">
                        ID: {loginUser.student_id}
                    </p>
                    <p className="bg-[#FFCC00] px-2 py-2 rounded font-rb">
                        Validity Till {loginUser.date}
                    </p>
                </div>

                <div className="flex justify-center bg-[#162655] p-5 rounded-2xl">
                    <img src={logo} className="w-[70%]" />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
