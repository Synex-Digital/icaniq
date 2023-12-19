import React, { useState,useEffect } from "react";
import Image from "../layout/Image";
import signinframe from "../../assets/signinframe.webp";
import cover from "../../assets/cover.png";
import icanIQ from "../../assets/IcanIQ.png";
import layoutimg from "../../assets/layoutimg.png";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../../features/userSlice";
import { userToken } from "../../../features/tokenSlice";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-toastify";

let initialValue = {
    email: "",
    password: "",
    error: "",
};

const notify = (mas) =>
    toast.success(mas, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

const Signin = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let [show, setShow] = useState(false);
    let [values, setValues] = useState(initialValue);
    let loginUser = useSelector((state) => state.loggedUser.loginUser);

    useEffect(() => {
        if (loginUser != null) {
            navigate("/user/deshboard");
        }
    }, []);

    let handlevalues = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
            error: "",
        });
    };

    let handlelogin = async () => {
        let { email, password } = values;

        if (!email) {
            setValues({
                ...values,
                error: "Enter_your_email",
            });
            return;
        }
        if (!password) {
            setValues({
                ...values,
                error: "Enter_your_password",
            });
            return;
        }

        try {
            let data = new FormData();
            data.append("email", values.email);
            data.append("password", values.password);

            const response = await fetch(
                "http://icaniq.synexdigital.com/api/login",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: data,
                }
            );

            const responseData = await response.json();

            if (responseData.status == 1) {
                dispatch(userData(responseData.user));
                dispatch(userToken(responseData.token));
                localStorage.setItem(
                    "token",
                    JSON.stringify(responseData.token)
                );
                localStorage.setItem("user", JSON.stringify(responseData.user));
                notify("Login Successful");
                navigate("/user/deshboard");
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    return (
        <div className="  flex ">
            <div className=" hidden xl:block xl:w-1/2 relative">
                <Image
                    className="absolute top-8 left-8 md:w-[120px]"
                    imgsrc={icanIQ}
                />
                <Image
                    imgsrc={cover}
                    className="h-[100vh] w-full object-cover"
                />
            </div>
            <div className=" xl:w-1/2 w-full sm:flex relative">
                <div className=" sm:max-xl:w-1/2">
                    <Image
                        className="absolute block xl:hidden md:top-10 smalldevice:max-sm:left-[37%] md:left-10 top-4 left-4 w-[100px]"
                        imgsrc={icanIQ}
                    />
                    <Image
                        imgsrc={signinframe}
                        className="h-[100vh] w-full object-cover hidden smalldevice:max-sm:block"
                    />
                    <Image
                        imgsrc={cover}
                        className="h-[100vh] w-full object-cover hidden sm:max-xl:block"
                    />
                </div>
                <div className="smalldevice:max-sm:absolute smalldevice:max-sm:w-full sm:max-xl:w-1/2 sm:w-[430px] top-28 xl:mx-auto xl:my-auto  smalldevice:max-xl:my-auto px-5">
                    <h2 className=" text-center font-rb font-bold sm:max-md:text-xl md:text-3xl lg:text-5xl smalldevice:max-sm:text-xl mb-2 md:mb-5 text-tbcolor smalldevice:max-sm:text-white">
                        Welcome Back
                    </h2>
                    <div className=" md:p-5 px-2 md:border rounded-lg border-tgcolor">
                        <h3 className="smalldevice:max-sm:text-white font-rb md:font-semibold font-medium md:text-lg text-tbcolor smalldevice:max-sm:mt-3">
                            Email
                        </h3>
                        <input
                            type="email"
                            className="p-3 mt-2 mb-2 md:mt-4 w-full border rounded border-bcolor border-solid"
                            placeholder="your email here"
                            onChange={handlevalues}
                            name="email"
                        />
                        {values.error &&
                            values.error?.includes("Enter_your_email") && (
                                <p className="font-rb bg-[#FDEDED] text-[#692B20] p-2 w-full my-2 md:my-4 flex gap-x-2 items-center">
                                    <MdErrorOutline />
                                    Please Enter your Email
                                </p>
                            )}
                        <h3 className="smalldevice:max-sm:text-white font-rb md:font-semibold font-medium md:text-lg text-tbcolor smalldevice:max-sm:mt-3">
                            Password
                        </h3>

                        <div className=" relative">
                            <input
                                type={show ? "text" : "password"}
                                className="p-3 w-full mt-2 md:mt-4 border rounded border-bcolor border-solid"
                                placeholder="password"
                                name="password"
                                onChange={handlevalues}
                            />
                            {values.error &&
                                values.error?.includes(
                                    "Enter_your_password"
                                ) && (
                                    <p className="font-rb bg-[#FDEDED] text-[#692B20] p-2 w-full my-2 md:my-4 flex gap-x-2 items-center">
                                        <MdErrorOutline />
                                        Please Enter your Password
                                    </p>
                                )}
                            {show ? (
                                <IoEye
                                    className=" cursor-pointer absolute top-7 md:top-[34px] right-4 text-[#adadad]"
                                    onClick={() => setShow(!show)}
                                />
                            ) : (
                                <IoEyeOff
                                    className=" cursor-pointer absolute top-7 md:top-[34px] right-4 text-[#adadad]"
                                    onClick={() => setShow(!show)}
                                />
                            )}
                        </div>
                        <Link className="smalldevice:max-sm:text-white  font-rb text-tbcolor ">
                            Forgot Password?
                        </Link>
                        <button
                            className=" bg-btncolor w-full p-1 md:p-3 mt-2 text-white md:mt-7 text-xl font-medium md:font-bold rounded smalldevice:max-sm:my-5 smalldevice:max-sm:p-3"
                            onClick={handlelogin}
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
