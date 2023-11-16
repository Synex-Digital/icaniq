import React from "react";
import Image from "../layout/Image";
import profile from "../../assets/profile.png";

const UserDashboard = () => {
    return (
        <div className="flex justify-between mt-16 p-4 w-full">
            <div className="w-[75%] flex gap-x-6 h-36 smalldevice:max-md:flex-wrap">
                <div className="lg:p-5 p-3 rounded-lg border border-[#32B548] lg:w-[32%] smalldevice:max-md:max-w-[48%]">
                    <p className="font-rb font-bold text-2xl text-[#32B548] bg-[#F1FCF2] w-14 h-14 rounded-full flex items-center justify-center mb-8">5</p>
                    <p className="font-rb font-semibold lg:text-xl text-lg">Total Test Given</p>
                </div>
                <div className="lg:p-5 p-3 border rounded-lg border-[#8478DA] lg:w-[32%] smalldevice:max-md:max-w-[48%]">
                    <p className="font-rb font-bold text-2xl text-[#8478DA] bg-[#F5F5FD] w-14 h-14 rounded-full flex items-center justify-center mb-8">5</p>
                    <p className="font-rb font-semibold lg:text-xl text-lg ">AVG Score Point</p>
                </div>
                <div className="lg:p-5 p-3 border rounded-lg border-[#3888F9] lg:w-[32%] smalldevice:max-md:max-w-[48%]">
                    <p className="font-rb font-bold text-2xl text-[#3888F9] bg-[#EFF7FF] w-14 h-14 rounded-full flex items-center justify-center mb-8">5</p>
                    <p className="font-rb font-semibold lg:text-xl text-lg ">AVG Time Taken</p>
                </div>
            </div>
            <div className="w-[25%] ml-4 ">
                <div className=" bg-[#162655] p-5 rounded-2xl text-center">
                    <Image className="w-24 h-24 mx-auto" imgsrc={profile} />
                    <h2 className=" font-rb font-bold text-2xl mt-5 text-white">
                        Welcome Abrar
                    </h2>
                    <p className=" font-rb font-light mt-2 mb-7 text-white">
                        ID: 1216319561998
                    </p>
                    <p className="bg-[#FFCC00] px-3 py-2 rounded font-rb">
                        Validity Till 30 December, 2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
