import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Sidebar = () => {
    let show = useSelector((state) => state.counter.value);
    return (
        <aside className="flex">
            {show ? (
                <div className="xl:w-[15%] md:w-[25%] smalldevice:max-xl:fixed sm:max-md:w-[30%] smalldevice:w-1/2 pt-20 px-2 shadow-xl h-[100vh] fixed z-50 bg-[#162655] ">
                    <div className="h-[90%]">
                        <Link
                            to="deshboard"
                            className="flex items-center gap-x-2 mb-4"
                        >
                            <MdOutlineStickyNote2 className="text-3xl font-medium text-white" />
                            <p className=" font-rb font-medium text-lg text-white">
                                Dashboard
                            </p>
                        </Link>
                        <Link to="iqtest" className="flex items-center gap-x-2">
                            <RxDashboard className="  font-medium text-3xl text-white" />
                            <p className=" font-rb font-medium text-lg text-white">
                                Test
                            </p>
                        </Link>
                    </div>
                    <div className="h-[10%]">
                        <Link to="/" className="flex items-center gap-x-2">
                            <RiLogoutCircleRLine className="text-3xl font-medium text-white" />
                            <p className=" font-rb font-medium text-lg text-white">
                                Log out
                            </p>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="xl:w-[4%] bg-[#162655] fixed z-50 pt-20 smalldevice:max-xl:hidden px-2 shadow-xl h-[100vh] ">
                    <div className="h-[90%]">
                        <Link
                            to="deshboard"
                            className="flex items-center gap-x-2 mb-4"
                        >
                            <MdOutlineStickyNote2 className="text-3xl font-medium text-white" />
                        </Link>
                        <Link to="iqtest" className="flex items-center gap-x-2">
                            <RxDashboard className="  font-medium text-3xl text-white" />
                        </Link>
                    </div>
                    <div className="h-[10%]">
                        <RiLogoutCircleRLine className="text-3xl font-medium text-white" />
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
