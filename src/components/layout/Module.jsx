import React from "react";
import { BsCalendar2Check } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { PiClockClockwiseFill } from "react-icons/pi";

const Module = (props) => {
    return (
        <div>
            <time className="flex items-center gap-x-1 justify-end font-rb text-sm text-[#6D6D6D]">
                <span>
                    <BsCalendar2Check />
                </span>
                {props.updatetime}
            </time>
            <h2 className="font-rb text-2xl font-semibold text-tbcolor mt-2 mb-4">
                {props.modulename}
            </h2>
            <p className="font-rb text-sm text-[#6D6D6D] ">
                {props.moduletext}
            </p>
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
                    Duration {props.durationtime}m
                </h4>
            </div>
        </div>
    );
};

export default Module;
