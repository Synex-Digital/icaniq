import React from "react";
import { BsCalendar2Check } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { PiClockClockwiseFill } from "react-icons/pi";

const Module = (props) => {
    return (
        <div className="border p-5 rounded-2xl xl:w-[32%] sm:w-[48%] smalldevice:w-full shadow-md">
            <time className="flex items-center gap-x-1 justify-end font-rb text-sm text-[#6D6D6D]">
                <span>
                    <BsCalendar2Check />
                </span>
                {props.updatetime}
            </time>
            <h2 className="font-rb text-2xl font-semibold text-tbcolor mt-2 mb-4">
                {props.modulename}
            </h2>
            <p className="font-rb text-sm text-[#6D6D6D]">{props.moduletext}</p>
            <div className="flex justify-between mt-5 mb-8">
                <h4 className="flex items-center gap-x-2 font-rb text-[#3D3D3D]">
                    <span className=" text-2xl text-[#705BCC]">
                        <GiNotebook />
                    </span>
                    {props.questionnumber} Question
                </h4>
                <h4 className="flex items-center gap-x-2 font-rb text-[#3D3D3D]">
                    <span className=" text-2xl text-[#32B548]">
                        <PiClockClockwiseFill />
                    </span>
                    Duration {props.durationtime}h
                </h4>
            </div>
            <button onClick={props.onclick} className="group font-rb font-bold text-lg text-center border py-[10px] w-full text-[#3888F9] rounded-lg border-[#3888F9] transition duration-300 ease-in-out hover:text-white hover:bg-[#3888F9]">
                Take the test
            </button>
        </div>
    );
};

export default Module;
