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
        <div className="sm:flex justify-between mt-16 p-4 w-full  ">
            <div
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "contain",
                    objectFit: "cover",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: "10%",
                }}
                className=""
            >
                
            </div>
            <div className="flex flex-col gap-4 md:w-[30%] md:ml-4 smalldevice:max-md:mt-4">
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
