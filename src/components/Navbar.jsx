import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "./layout/Image";
import logo from "../assets/logoblack.png";
import profile from "../assets/profile.png";
import { useDispatch } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { navvalue } from "../../features/navSlice";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    let dispatch = useDispatch();
    let location = useLocation();

    let [show, setShow] = useState(true);
    useEffect(() => {
        function scrollWidth() {
            if (window.innerWidth < 1280) {
                setShow(false);
            } else {
                setShow(true);
            }
        }
        scrollWidth();
        window.addEventListener("resize", scrollWidth);
    }, []);

    useEffect(() => {
        dispatch(navvalue(show));
    }, [show]);
    return (
        <nav className="fixed  flex w-full  z-[51] h-16 justify-between bg-white shadow-md">
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
                {location.pathname == "/user/iqtest" ? (
                    <h3 className=" lg:text-[32px] smalldevice:max-lg:text-xl smalldevice:max-lg:font-semibold smalldevice:max-xl:ml-3 font-rb lg:font-bold text-tbcolor">
                        Test
                    </h3>
                ) : (
                    <h3 className=" lg:text-[32px] smalldevice:max-lg:text-xl smalldevice:max-lg:font-semibold smalldevice:max-xl:ml-3 font-rb lg:font-bold text-tbcolor">
                        Dashboard
                    </h3>
                )}
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
        </nav>
    );
};

export default Navbar;
