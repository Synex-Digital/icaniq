import React,{useState} from "react";
import Image from "../layout/Image";
import profile from "../../assets/profile.png";
import PassGraphs from "../layout/PassGraphs";
import { useSelector } from "react-redux";

const UserDashboard = (props) => {
    let show = useSelector((state) => state.counter.value);

    return (
        <div className={`sm:flex justify-between mt-16 p-4 w-full ${show ? "xl:ml-[200px]" : "xl:ml-[50px]"} `}>
            <div className="md:w-[75%] flex  gap-x-3 gap-y-3 flex-wrap">
            <div className="md:w-full flex md:gap-x-6 md:gap-y-6 gap-x-3 gap-y-3 md:h-36 smalldevice:max-md:flex-wrap">
                <div className="lg:p-5 p-3 rounded-lg border bg-white border-[#32B548] lg:w-[32%] smalldevice:max-md:max-w-[48%]">
                    <p className="font-rb font-bold text-2xl text-[#32B548] bg-[#F1FCF2] w-14 h-14 rounded-full flex items-center justify-center mb-5">
                        5
                    </p>
                    <p className="font-rb font-semibold lg:text-xl text-lg">
                        Total Test Given
                    </p>
                </div>
                <div className="lg:p-5 p-3 border rounded-lg bg-white border-[#8478DA] lg:w-[32%] smalldevice:max-md:max-w-[48%]">
                    <p className="font-rb font-bold text-2xl text-[#8478DA] bg-[#F5F5FD] w-14 h-14 rounded-full flex items-center justify-center mb-5">
                        5
                    </p>
                    <p className="font-rb font-semibold lg:text-xl text-lg ">
                        AVG Score Point
                    </p>
                </div>
                <div className="lg:p-5 p-3 border rounded-lg bg-white border-[#3888F9] lg:w-[32%] smalldevice:max-md:max-w-[48%]">
                    <p className="font-rb font-bold text-2xl text-[#3888F9] bg-[#EFF7FF] w-14 h-14 rounded-full flex items-center justify-center mb-5">
                        5
                    </p>
                    <p className="font-rb font-semibold lg:text-xl text-lg ">
                        AVG Time Taken
                    </p>
                </div>
            </div>
            
            <PassGraphs bgcolor={"#63B967"} ratetilte="Pass Rate"/>
            <PassGraphs bgcolor={"#FFCC00"} ratetilte="Fail Rate"/>
            <PassGraphs bgcolor={"#8478DA"} ratetilte="AVG Time"/>
            <PassGraphs bgcolor={"#3888F9"} ratetilte="AVG Score"/>
           
            </div>
            <div className="md:w-[25%] md:ml-4 smalldevice:max-md:mt-4">
                <div className=" bg-[#162655] p-5 rounded-2xl text-center">
                    <Image className="w-24 h-24 mx-auto" imgsrc={profile} />
                    <h2 className=" font-rb font-bold text-2xl mt-5 text-white">
                        Welcome Abrar
                    </h2>
                    <p className=" font-rb font-light mt-2 mb-7 text-white">
                        ID: 1216319561998
                    </p>
                    <p className="bg-[#FFCC00] px-2 py-2 rounded font-rb">
                        Validity Till 30 December, 2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
