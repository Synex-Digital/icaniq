import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Image from "./Image";
import logo from "../../assets/logoblack.png";
import profile from "../../assets/profile.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { navvalue } from "../../../features/navSlice";

const Rotlayout = () => {
    let dispatch = useDispatch()
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
    useEffect(() => {
        dispatch(navvalue(show))
    }, [show]);

    return (
        <>
            <div className="fixed  flex w-full  z-[51] h-16 justify-between bg-white">
                <div className="flex lg:w-[15%] items-center gap-x-3">
                    {show ? (
                        <>
                            <FaBars
                                className="ml-3 cursor-pointer text-lg smalldevice:max-xl:hidden"
                                onClick={() => setShow(!show)}
                            />
                            <ImCross
                                onClick={() => setShow(!show)}
                                className="ml-3 cursor-pointer font-bold text-lg xl:hidden"
                            />
                        </>
                    ) : (
                        <FaBars
                            className="ml-3 cursor-pointer text-lg"
                            onClick={() => setShow(!show)}
                        />
                    )}

                    <Image className="w-[90px] hidden lg:block" imgsrc={logo} />
                </div>
                <div className="flex w-[30%] items-center gap-x-3 relative">
                    <h3 className=" lg:text-[32px] smalldevice:max-lg:text-xl smalldevice:max-lg:font-semibold smalldevice:max-xl:ml-3 font-rb lg:font-bold text-tbcolor">
                        Dashboard
                    </h3>
                    <input
                        className="w-full border border-bcolor py-1 pl-3 pr-10 rounded smalldevice:max-xl:hidden"
                        placeholder="search your module"
                    />
                    <IoSearchOutline className=" absolute font-semibold text-xl right-5 smalldevice:max-xl:hidden" />
                </div>
                <div className="flex w-[55%] items-center gap-x-3 relative justify-end mr-6">
                    <IoSearchOutline className="  font-semibold text-xl " />
                    <MdOutlineNotificationsActive className=" font-semibold text-xl" />
                    <Image className=" w-12 h-12" imgsrc={profile} />
                </div>
            </div>
            <div className="flex ">
                {show ? (
                    <div className="xl:w-[15%] md:w-[25%] smalldevice:max-xl:fixed sm:max-md:w-[30%] smalldevice:w-1/2 pt-20 px-2 shadow-xl h-[100vh] fixed  z-50 bg-white ">
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
                            <Link to="/" className="flex items-center gap-x-2">
                                <RiLogoutCircleRLine className="text-3xl font-medium text-cdrop" />
                                <p className=" font-rb font-medium text-lg text-cdrop">
                                    Log out
                                </p>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="xl:w-[4%] bg-white fixed z-50 pt-20 smalldevice:max-xl:hidden px-2 shadow-xl h-[100vh] ">
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
                            <RiLogoutCircleRLine className="text-3xl font-medium text-cdrop" />
                        </div>
                    </div>
                )}
                <Outlet />
            </div>
        </>
    );
};

export default Rotlayout;
