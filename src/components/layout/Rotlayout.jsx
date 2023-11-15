import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Image from "./Image";
import logo from "../../assets/logoblack.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Rotlayout = () => {
    let [show, setShow] = useState(true);
    useEffect(() => {
        function scrollWidth() {
            if (window.innerWidth < 1024) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        scrollWidth();
        window.addEventListener("resize", scrollWidth);
    }, []);
    return (
        <>
            <div className=" absolute flex w-full bg-red-200 h-16">
                <div className="flex w-[15%] items-center gap-x-3">
                    <FaBars className="ml-4" onClick={() => setShow(!show)} />
                    <Image className="w-[90px]" imgsrc={logo} />
                </div>
                <div className="flex w-[10%] items-center gap-x-3">
                    <h3 className=" lg:text-[32px] font-rb lg:font-bold text-tbcolor">
                        Dashboard
                    </h3>
                    <input
                        className="w-[430px]"
                        placeholder="search your module"
                    />
                </div>
            </div>
            <div className="flex">
                {show ? (
                    <div className="lg:w-[15%] bg-red-300 pt-20 px-2 shadow-md h-[100vh]">
                        <div className="h-[90%] ">
                            <Link
                                to="deshboard"
                                className="flex items-center gap-x-2 mb-4"
                            >
                                <MdOutlineStickyNote2 className="text-3xl font-medium text-cdrop" />
                                <p className=" font-rb font-medium text-lg text-cdrop">
                                    Dashboard
                                </p>
                            </Link>
                            <Link
                                to="iqtest"
                                className="flex items-center gap-x-2"
                            >
                                <RxDashboard className="  font-medium text-3xl text-cdrop" />
                                <p className=" font-rb font-medium text-lg text-cdrop">
                                    Test
                                </p>
                            </Link>
                        </div>
                        <div className="h-[10%]">
                            <Link className="flex items-center gap-x-2">
                                <RiLogoutCircleRLine className="  font-medium text-lg text-cdrop" />
                                <p className=" font-rb font-medium text-lg text-cdrop">
                                    Log out
                                </p>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="w-[4%] bg-red-400 pt-20 px-2 shadow-md h-[100vh]">
                        <div className="h-[90%]">
                            <Link
                                to="deshboard"
                                className="flex items-center gap-x-2 mb-4"
                            >
                                <MdOutlineStickyNote2 className="text-3xl font-medium text-cdrop" />
                            </Link>
                            <Link
                                to="iqtest"
                                className="flex items-center gap-x-2"
                            >
                                <RxDashboard className="  font-medium text-3xl text-cdrop" />
                            </Link>
                        </div>
                        <div className="h-[10%]">
                            <RiLogoutCircleRLine />
                        </div>
                    </div>
                )}
                <Outlet />
            </div>
        </>
    );
};

export default Rotlayout;
